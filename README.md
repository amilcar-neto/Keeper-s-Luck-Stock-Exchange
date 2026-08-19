# Keeper's Luck Stock Exchange

## English version:

Profit from the Luck your investigators burn, and fund your NPCs' rolls with it.

Implements **Pulp Cthulhu's** optional Alternative NPC Luck rule for NPCs. The Luck spent by players funds the NPCs Luck reserve, which they draw from when they spend Luck.

## How it works

There is one shared **Luck bank** for all NPCs, capped between 0 and 99.

- When a **player character** spends Luck, that amount is **added** to the bank.
- When an **NPC or creature** spends Luck, that amount is **subtracted** from the bank.
- Every NPC's and creature's Luck is kept **equal to the current bank balance** at all times.
- Each change sends a **receipt** whispered to the Keeper only.

It works both from character sheets and from chat rolls, whether triggered by players or by the Keeper. Due to FoundryVTT limitations, all changes made by a player are relayed to the Keeper's client (via socketlib), which performs the actual update. This means it only works with the Keeper active at the table.

## Compatibility

- **Foundry VTT:** v14
- **System:** Call of Cthulhu 7th Edition (CoC7)
- **Requires:** [socketlib](https://github.com/manuelVo/foundryvtt-socketlib)

## Installation

In Foundry's setup screen, go to **Add-on Modules → Install Module**, and paste this manifest URL:

https://github.com/amilcar-neto/Keeper-s-Luck-Stock-Exchange/releases/latest/download/module.json

You can also find the module on FoundryVTT’s official package list:

https://foundryvtt.com/packages/luck-stockExchange/

**socketlib** must be installed and enabled.

## Settings

- **Luck Bank** — the current balance. The Keeper can set it manually at any time; all NPCs re-sync to the new value.
- **Transaction Receipts** — turns the chat receipts on or off.

## Languages

English and Português (Brasil).

## Author

[amilcar-neto](https://github.com/amilcar-neto)

## Additional information

This is my first project. All the code was written entirely by me, with AI only assisting with research, my JavaScript learning, and translating text — such as this README — into English. 0% vibecoding.

---
## Versão em Português do Brasil:

Lucre com a sorte gasta pelos investigadores e financie rolagens para NPCs.

Implementa a regra opcional de Sorte Alternativa para PNJs do **Pulp Cthulhu**. A Sorte gasta pelos jogadores alimenta a reserva de Sorte dos PNJs, que sacam dela quando gastam Sorte.

## Como funciona

Existe um único **banco de Sorte** para todos os NPCs, limitado entre 0 e 99.

- Quando um **personagem de jogador** gasta Sorte, esse valor é **somado** ao banco;
- Quando um **PNJ ou criatura** gasta Sorte, esse valor é **subtraído** do banco;
- A Sorte de todo PNJ e criatura é mantida **igual ao saldo atual do banco** o tempo todo.
- Cada mudança envia um **recibo** sussurrado apenas pro Guardião.

Funciona tanto com alterações da ficha quanto por rolagens no chat, seja pela ação de jogadores ou do Guardião. Por limitações do FoundryVTT, todas mudanças feitas por um jogador são repassadas ao cliente do Guardião (via socketlib), que executa a atualização. Ou seja, só funciona com o Guardião ativo na mesa.

## Compatibilidade

- **Foundry VTT:** v14
- **Sistema:** Call of Cthulhu 7th Edition (CoC7)
- **Requer:** [socketlib](https://github.com/manuelVo/foundryvtt-socketlib)

## Instalação

Na tela de configuração do Foundry, vá em **Módulos Adicionais → Instalar Módulo**, e cole esta URL de manifesto:

https://github.com/amilcar-neto/Keeper-s-Luck-Stock-Exchange/releases/latest/download/module.json

Você também encontra o módulo na lista oficial do FoundryVTT:

https://foundryvtt.com/packages/luck-stockExchange/


O **socketlib** precisa estar instalado e ativado.

## Configurações

- **Banco de Sorte** — o saldo atual. O Guardião pode defini-lo manualmente a qualquer momento; todos os PNJs ressincronizam para o novo valor.
- **Recibos das Transações** — liga e desliga os recibos no chat.

## Idiomas

Inglês e Português (Brasil).

## Autor

[amilcar-neto](https://github.com/amilcar-neto)

## Informações adicionais
Esse é meu primeiro projeto. Todo o código foi escrito totalmente por mim, com IA apenas auxiliando em pesquisas, no meu aprendizado de JavaScript e para traduções de textos como deste README para o inglês. 0% de vibecoding.
