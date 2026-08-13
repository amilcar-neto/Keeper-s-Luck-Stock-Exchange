# Keeper's Luck Stock Exchange

Trade luck. Fund bad decisions.

A shared-Luck homebrew rule for **Pulp Cthulhu**. Players don't draw from the reserve — their spent Luck funds it. Every point a player character burns is added to a single shared pool that all NPCs draw from, and every NPC's Luck reflects that pool's balance.

## How it works

There is one shared **Luck reserve** for the world, capped between 0 and 99.

- When a **player character** spends Luck, that amount is **added** to the reserve.
- When an **NPC or creature** spends Luck, that amount is **subtracted** from the reserve.
- Every NPC's and creature's Luck is kept **equal to the current reserve balance** at all times.
- Each change sends a **receipt** whispered to the Keeper only.

Detection works both from the character sheet and from chat rolls, and for both players and the Keeper. Because players can't write to shared data directly, changes made by a player are relayed to the Keeper's client (via socketlib), which performs the actual update.

## Compatibility

- **Foundry VTT:** v14
- **System:** Call of Cthulhu 7th Edition (CoC7)
- **Requires:** [socketlib](https://github.com/manuelVo/foundryvtt-socketlib)

## Installation

In Foundry's setup screen, go to **Add-on Modules → Install Module**, and paste this manifest URL:

https://github.com/amilcar-neto/Keeper-s-Luck-Stock-Exchange/releases/latest/download/module.json


**socketlib** must be installed and enabled — it is required for the reserve to sync between the Keeper and the players.

## Settings

- **Luck Reserve** — the current shared balance. The Keeper can set it manually at any time; all NPCs re-sync to the new value.
- **Transaction Receipts** — turns the chat receipts on or off.

## Languages

English and Português (Brasil).

## Author

[amilcar-neto](https://github.com/amilcar-neto)

---

# Keeper's Luck Stock Exchange (Português)

Negocie sorte. Financie decisões ruins.

Uma regra da casa de Sorte compartilhada para **Cthulhu Pulp**. Os jogadores não sacam do banco — a Sorte que eles gastam o alimenta. Cada ponto que um personagem de jogador gasta é somado a um banco compartilhado do qual todos os NPCs sacam, e a Sorte de cada NPC reflete o saldo desse banco.

## Como funciona

Existe um único **banco de Sorte** para o mundo, limitado entre 0 e 99.

- Quando um **personagem de jogador** gasta Sorte, esse valor é **somado** ao banco.
- Quando um **PNJ ou criatura** gasta Sorte, esse valor é **subtraído** do banco.
- A Sorte de todo PNJ e criatura é mantida **igual ao saldo atual do banco** o tempo todo.
- Cada mudança envia um **recibo** sussurrado apenas ao Guardião.

A detecção funciona tanto pela ficha quanto por rolagens no chat, e tanto para jogadores quanto para o Guardião. Como os jogadores não podem escrever em dados compartilhados diretamente, mudanças feitas por um jogador são repassadas ao cliente do Guardião (via socketlib), que executa a atualização.

## Compatibilidade

- **Foundry VTT:** v14
- **Sistema:** Call of Cthulhu 7th Edition (CoC7)
- **Requer:** [socketlib](https://github.com/manuelVo/foundryvtt-socketlib)

## Instalação

Na tela de configuração do Foundry, vá em **Módulos Complementares → Instalar Módulo**, e cole esta URL de manifesto:

https://github.com/amilcar-neto/Keeper-s-Luck-Stock-Exchange/releases/latest/download/module.json


O **socketlib** precisa estar instalado e ativado — ele é necessário para o banco sincronizar entre o Guardião e os jogadores.

## Configurações

- **Banco de Sorte** — o saldo compartilhado atual. O Guardião pode defini-lo manualmente a qualquer momento; todos os PNJs ressincronizam para o novo valor.
- **Recibos das Transações** — liga ou desliga os recibos no chat.

## Idiomas

Inglês e Português (Brasil).

## Autor

[amilcar-neto](https://github.com/amilcar-neto)
