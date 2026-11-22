# Trečiųjų šalių priklausomybės ir resursai

Į žaidimą galima įtraukti tik su Business Source License 1.1 ir būsima Change License (GPL v2.0+)
suderinamas priklausomybes ir resursus: **MIT, BSD, Apache-2.0** bibliotekas ir **CC0 / CC BY** grafiką bei garsus.
Kiekvienas trečiųjų šalių resursas privalo būti įrašytas šioje lentelėje.

## Vykdymo metu naudojamos priklausomybės ir resursai

| Resursas | Kur naudojamas | Licencija | Šaltinis |
| --- | --- | --- | --- |
| – | – | – | – |

Šiuo metu žaidime **nėra nė vieno** trečiųjų šalių resurso:

- **Kodas** – gryni HTML5 / JavaScript (ES moduliai), be bibliotekų ir be build priklausomybių.
- **Grafika ir animacijos** – piešiamos kodu (Canvas 2D) ir aprašytos `assets/anim/poses.json`; piktogramos – `assets/icons/` (originalios).
- **Garsai** – sintezuojami kodu per Web Audio API (`src/core/audio.js`), garso failų nėra.
- **Šriftai** – tik įrenginio sisteminiai šriftai (į žaidimą neįtraukti).
- **Teisėjo balsas** – įrenginio Web Speech API (ja-JP balsas, jei yra); balsas yra naršyklės / OS funkcija ir su žaidimu neplatinamas.

Visa originali medžiaga (kodas, duomenys, grafika, animacijos, garsai) platinama pagal BSL 1.1 – žr. `LICENSE`.

## Kūrimo įrankiai (su žaidimu neplatinami)

| Įrankis | Paskirtis | Licencija |
| --- | --- | --- |
| Node.js (`node --test`, `tools/bundle.mjs`) | automatiniai testai, `dist/game.bundle.js` generavimas | MIT |
| Playwright + Chromium (neprivaloma, `tools/e2e.mjs`) | naršyklės testai | Apache-2.0 / BSD-3-Clause |

## Licencijos tekstas

`LICENSE` faile esantis Business Source License 1.1 tekstas: © 2017 MariaDB Corporation Ab. „Business Source License“ yra
MariaDB Corporation Ab prekių ženklas; tekstas naudojamas pagal jame pačiame suteiktą leidimą, nepakeistas (užpildyti tik parametrai).
`tests/fixtures/BUSL-1.1.spdx.txt` – kanoninis to paties licencijos teksto egzempliorius iš SPDX licencijų sąrašo; testas tikrina,
kad `LICENSE` sąlygos su juo sutampa simbolis į simbolį.
