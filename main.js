let socket;

async function espelharNPC(saldoNovo) {
    const promessa = [];
    for (const ator of game.actors) {
        if (ator.type === "npc" || ator.type === "creature") {
            promessa.push({ _id: ator.id, "system.attribs.lck.value": saldoNovo });
        }
    }
    await Actor.updateDocuments(promessa, {luckLoopDodge: true}); 
}

let foiGasto = false;
async function setBanco(saldoNovo) {
    foiGasto = true;
    await game.settings.set("luck-stockExchange", "luckBank", saldoNovo);
    foiGasto = false;
}

Hooks.once("init", function() {
    console.log("Luck Stock Exchange online... Trade Luck. Cheat Death.");
    game.settings.register("luck-stockExchange", "luckBank", {
        name: game.i18n.localize("lse.luckBank.name"),
        hint: game.i18n.localize("lse.luckBank.hint"),
        scope: "world",
        config: true,
        type: Number,
        default: 0,
        onChange: function (saldoNovo) {
            if (game.user !== game.users.activeGM) { return; }
            espelharNPC(saldoNovo);
            if (!foiGasto && game.settings.get("luck-stockExchange", "chatMessage")) {
                const titulo = game.i18n.localize("lse.chat.title");
                const unidade = saldoNovo === 1 ? game.i18n.localize("lse.unit.singular") : game.i18n.localize("lse.unit.plural");
                const fraseGuardiao = game.i18n.format("lse.chat.configSet", {saldoNovo: saldoNovo, unit: unidade});
                ChatMessage.create({content: `<b>${titulo}</b><br>${fraseGuardiao}`, whisper: ChatMessage.getWhisperRecipients("GM").map( u => u.id)})
            }
        }
    });
    game.settings.register("luck-stockExchange", "chatMessage", {
        name: game.i18n.localize("lse.chatMessage.name"),
        hint: game.i18n.localize("lse.chatMessage.hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true
    });
});

async function gasto(dados) {
    const saldoAnterior = game.settings.get("luck-stockExchange", "luckBank");
    let saldoNovo;

    if (dados.type === "character") {
        saldoNovo = Math.min(99, saldoAnterior + dados.delta);
        await setBanco(saldoNovo);
        if (game.settings.get("luck-stockExchange", "chatMessage")) {
            const titulo = game.i18n.localize("lse.chat.title");
            const unidade = dados.delta === 1 ? game.i18n.localize("lse.unit.singular") : game.i18n.localize("lse.unit.plural");
            const frasePC = game.i18n.format("lse.chat.character", {name: dados.nomeAtor, delta: dados.delta, unit: unidade});
            const saldos = game.i18n.format("lse.chat.balance", {anterior: saldoAnterior, atual: saldoNovo});
            ChatMessage.create({content: `<b>${titulo}</b><br>${frasePC}<br>${saldos}`, whisper: ChatMessage.getWhisperRecipients("GM").map(u => u.id)});
        }
    } else if (dados.type === "npc" || dados.type === "creature") {
        saldoNovo = Math.max(0, saldoAnterior - dados.delta);
        await setBanco(saldoNovo);
        if (game.settings.get("luck-stockExchange", "chatMessage")) {
            const titulo = game.i18n.localize("lse.chat.title");
            const unidade = dados.delta === 1 ? game.i18n.localize("lse.unit.singular") : game.i18n.localize("lse.unit.plural");
            const fraseNPC = game.i18n.format("lse.chat.npc", {name: dados.nomeAtor, delta: dados.delta, unit: unidade});
            const saldos = game.i18n.format("lse.chat.balance", {anterior: saldoAnterior, atual: saldoNovo});
            ChatMessage.create({content: `<b>${titulo}</b><br>${fraseNPC}<br>${saldos}`, whisper: ChatMessage.getWhisperRecipients("GM").map(u => u.id)});
        }
    }
}

Hooks.once("ready", function() {
    console.log("ready rodando")
    socket = socketlib.registerModule("luck-stockExchange");
    socket.register("gasto", gasto);

    Hooks.on("preUpdateActor", function (doc, changes, options) {
        if (options.luckLoopDodge) { return; }
        if (changes.system?.attribs?.lck?.value === undefined) { return; }
        const original = doc.system?.attribs?.lck?.value;
        const atualizado = changes.system.attribs.lck.value;
        const delta = original - atualizado;
        if (delta <= 0) { return; }
        if (doc.type !== "character" && doc.type !== "npc" && doc.type !== "creature") { return; }
        socket.executeAsGM("gasto", { type: doc.type, delta: delta, nomeAtor: doc.name });
    });
});