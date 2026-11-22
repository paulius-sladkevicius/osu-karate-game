# OSU! Karatės kelias

Pilno kontakto (knockdown) karatė kovos žaidimas telefonams ir planšetėms: HTML5 + vanilla JavaScript (ES moduliai),
Canvas 2D, visas ekranas, horizontali padėtis. Be serverio, be karkasų, be build žingsnio.

Dabartinė būsena – **MVP (3 etapas)**: baltas, oranžinis ir mėlynas diržai, dojo pamokos, Waza-chō, egzaminas
(kihon + kata + kumite), turnyrai, greita kova, 3 AI archetipai, 5 teisėjai su vėliavėlių signalais, LT / EN kalbos,
išsaugojimas ir PWA.

## Kaip paleisti

- **Tiesiog atidaryti `index.html`** (dukart spustelėti). Per `file://` naršyklės neleidžia krauti ES modulių ir JSON,
  todėl šiuo atveju automatiškai kraunamas iš tų pačių šaltinių sugeneruotas `dist/game.bundle.js`.
- **Telefone / planšetėje (PWA, veikia be interneto):** įkelti repozitorijos turinį į bet kokį statinį hostingą
  (pvz., GitHub Pages) arba lokaliai `python3 -m http.server 8080` ir atidaryti nuorodą. Android Chrome ir iPad – po
  pirmo bakstelėjimo žaidimas užima visą ekraną; iPhone – „Bendrinti“ → „Pridėti prie pradinio ekrano“.
  Service worker veikia tik per `https://` arba `localhost`.

Valdymas: kairėje plaukiojantis džoistikas, dešinėje **A** (ranka) / **K** (koja) / **G** (gynyba) ir **KIAI**;
kombinacijos – krypčių seka + mygtukas (→ visada reiškia „link varžovo“). Kompiuteryje: rodyklės + `J` / `K` / `L`,
`I` – KIAI, `Enter` – REI, `Esc` – pauzė. Derinimo ekranas: meniu mygtukas „Debug“ arba `index.html?debug`.

## Testai

```
npm test            # node --test: kombinacijų atpažinimas, kovos taisyklės, duomenų vientisumas (be priklausomybių)
node tools/e2e.mjs  # neprivaloma: naršyklės patikra (reikia Playwright): pilnas ekranas emuliuotuose Android / iPad /
                    # iPhone ekranuose, multi-touch, PWA be interneto, egzaminas; --full – visa kelionė iki mėlyno diržo
```

Pakeitus `src/` ar `data/`, atnaujinkite `file://` rinkinį: `npm run bundle` (testas patikrina, ar jis nepasenęs).
Prieš išleidžiant naują versiją padidinkite `VERSION` faile `sw.js`, kad įdiegtos PWA atsinaujintų talpyklą.

## Kaip pridėti techniką per JSON

Kodo keisti nereikia – užtenka duomenų:

1. **`data/techniques.json`** – naujas įrašas:
   ```json
   { "id": "gedan_mawashi_geri", "name": "Gedan mawashi geri",
     "nameLt": "Žemas šoninis spyris", "nameEn": "Low roundhouse kick", "descLt": "…", "descEn": "…",
     "belt": "orange", "type": "strike", "input": ["D", "K"], "level": "gedan",
     "legalInKumite": true, "range": "mid",
     "frames": { "startup": 200, "active": 80, "recovery": 300 },
     "damage": { "zone": "legs", "amount": 12 }, "balanceDamage": 12, "staminaCost": 8,
     "anim": "gedan_mawashi" }
   ```
   - `input`: krypčių kodai `F` (→ link varžovo), `B`, `U`, `D`, `DF`, `UF`, `DB`, `UB`, `CIRCLE` ir paskutinis – mygtukas
     `A`, `K`, `G` arba `KIAI`. Visada atpažįstama ilgiausia seka.
   - `type`: `strike` arba `guard`; `level`: `jodan` / `chudan` / `gedan`; `range`: `close` / `mid` / `midfar` / `far`.
   - `legalInKumite: false` + `foulChui` (1 arba 2) – technika lieka kihon ir kata, o kumite metu sukelia chui.
   - Neprivaloma: `advance` (žingsnis pirmyn, px), `knockback`, `lowKick`, `lesson.partner` (partnerio technika pamokoje).
2. **`assets/anim/poses.json`** – jei reikia naujo judesio: pozos (sąnarių kampai) ir raktiniai kadrai
   `anims.<pavadinimas>.keys` (fazė 0–1 startup, 1–2 active, 2–3 recovery). Galima naudoti ir esamą `anim`.
3. **`data/combos.json`** – tradicinė kombinacija: `sequence` (technikų id, `@block` = sėkminga gynyba) ir `bonus`.
4. Paleiskite `npm run bundle` ir `npm test` (testai patikrina nuorodas, vertimus ir įvesties vienareikšmiškumą).

Technika automatiškai atsiranda to diržo pamokose, Waza-chō, egzamino kihon dalyje, AI repertuare ir derinimo lentelėje.
Kiti duomenys: `belts.json` (diržai, egzaminai, turnyrai), `opponents.json` (AI archetipai, varžovai), `kata.json`,
`rules.json` (laikas, chui riba, 3 s skaičiavimas, laiko langai, balansas), `strings.lt.json` / `strings.en.json`.

## Licencija

**Business Source License 1.1** (`LICENSE`), Licensor – Paulius Sladkevičius. Licencija apima visą žaidimą: kodą,
duomenis, grafiką, animacijas ir garsus. Nekomercinis naudojimas (asmeninis, mokymo, dojo ir mokyklose) – nemokamas;
komerciniam talpinimui ar platinimui reikia atskiros licencijos. Praėjus 4 metams nuo kiekvienos versijos išleidimo ji
tampa GPL v2.0 arba vėlesne. Kiekvieno šaltinio failo viršuje – `SPDX-License-Identifier: BUSL-1.1`.
Trečiųjų šalių resursai – `THIRD_PARTY.md` (šiuo metu jų nėra: grafika piešiama kodu, garsai sintezuojami).
Prieš pirmą viešą išleidimą licencijos parametrus verta peržiūrėti su teisininku.

## Sąmoningi supaprastinimai (MVP)

- „Ne“ technika kumite metu sukelia chui visada, kai pasiekia varžovą (net blokuota); smūgis į orą – leidžiamas fintas.
- Skyriaus technikos kumite kovose prieinamos tik išmokus jas dojo pamokose; greitoje kovoje – visos pasirinkto diržo.
- Antras kyu (juostelė ant diržo) suteikiamas už laimėtą skyriaus turnyrą; turnyras progresui neprivalomas.
- KIAI režimas pagal technikų lentelę atrakinamas tik juodu diržu – MVP jį galima išbandyti derinimo ekrane.
- Teisėjo balsas – Web Speech API (ja-JP), garsai sintezuojami; subtitrai rodomi visada.

## Darbų sąrašas 4 etapui (pilna versija)

- [ ] Geltonas–juodas diržai: įjungti skyrius (`belts.json` → `available`), suderinti technikų balansą ir animacijas
      (aukšti, atgaliniai, sukamieji ir šuoliniai spyriai – dabar yra tik duomenys ir įvesties atpažinimas).
- [ ] Kombinacijų bonusai: `wazaAriIfLegDamageOver`, `autoWazaAri`, `guaranteedWazaAri`; ashi barai + gedan tsuki;
      mawashi uke kontratakos langas; signatūrinė „Osu no seishin“.
- [ ] Likusios pražangos: kin geri, zutsuki, puolimas į nugarą, 10 s pertrauka nukentėjusiam; „Jikan“ ir
      „Fukushin shūgō“ scenos.
- [ ] AI archetipai „Low kick specialistas“ ir „Technikas“ (prisitaiko prie žaidėjo šablonų); varžovų sąrašai 4–7 skyriams.
- [ ] Visos kata (Pinan, Sokugi, Gekisai, Tsuki no kata, Yantsu, Saiha, Kanku) ir tikslesnės formų judesių animacijos.
- [ ] Dojo: smūgių maišas ir makiwara su greičio matavimu, kombinacijų iššūkiai su žvaigždutėmis.
- [ ] Turnyrai 16 ir 32 dalyviams, arenos fonas, finalo scena su apdovanojimais; siužeto intarpai.
- [ ] Kosmetika: dogi siuvinėjimai, dojo dekoracijos; diržo užrišimo scena ant tatamio.
- [ ] Garsas: įrašyti teisėjo ir kiai šūksniai (garso sprite), taiko muzika prieš finalą.
- [ ] Kūno dalių sprite'ai vietoje kodu piešiamų figūrų; hantei ir encho balanso derinimas pagal testuotojų įrašus (5 etapas).
- [ ] Bandymai tikruose įrenginiuose: Android telefonas, iPad, iPhone (PWA), 60 fps vidutinėje planšetėje.
