// SPDX-License-Identifier: BUSL-1.1
// SUGENERUOTA – neredaguoti. Šaltinis: src/ ir data/. Generuoti: node tools/bundle.mjs
(function () {
'use strict';
var __mods = {}, __cache = {};
function __def(id, fn) { __mods[id] = fn; }
function __req(id) {
  if (__cache[id]) return __cache[id];
  var exp = __cache[id] = {};
  __mods[id](exp, __req);
  return exp;
}
globalThis.__OSU_DATA__ = {"techniques":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"input: krypciu kodai F B U D DF UF DB UB CIRCLE + paskutinis mygtukas A K G KIAI. frames ms. range: close|mid|midfar|far. level: jodan|chudan|gedan.","techniques":[{"id":"seiken_gyaku_tsuki","name":"Seiken gyaku tsuki","nameLt":"Tiesus kumštis priešinga ranka","nameEn":"Reverse straight punch","descLt":"Tiesus kumštis į liemenį priešinga ranka.","descEn":"Straight punch to the body with the rear hand.","belt":"white","type":"strike","input":["A"],"level":"chudan","legalInKumite":true,"range":"close","frames":{"startup":120,"active":60,"recovery":180},"damage":{"zone":"body","amount":6},"balanceDamage":4,"staminaCost":4,"anim":"gyaku_tsuki"},{"id":"seiken_oi_tsuki","name":"Seiken oi tsuki","nameLt":"Tiesus kumštis su žingsniu","nameEn":"Lunge punch","descLt":"Tiesus kumštis į liemenį žengiant pirmyn.","descEn":"Straight punch to the body while stepping forward.","belt":"white","type":"strike","input":["F","A"],"level":"chudan","legalInKumite":true,"range":"close","advance":60,"frames":{"startup":160,"active":60,"recovery":220},"damage":{"zone":"body","amount":7},"balanceDamage":5,"staminaCost":5,"anim":"oi_tsuki"},{"id":"seiken_jodan_tsuki","name":"Seiken jodan tsuki","nameLt":"Kumštis į galvą","nameEn":"Punch to the head","descLt":"Kumštis į galvą. Tik kihon ir kata – kumite metu draudžiama!","descEn":"Punch to the head. Kihon and kata only – forbidden in kumite!","belt":"white","type":"strike","input":["U","A"],"level":"jodan","legalInKumite":false,"foulChui":1,"range":"close","frames":{"startup":130,"active":60,"recovery":200},"damage":{"zone":"head","amount":8},"balanceDamage":5,"staminaCost":4,"anim":"jodan_tsuki"},{"id":"mae_geri_chudan","name":"Mae geri chudan","nameLt":"Tiesus spyris į pilvą","nameEn":"Front kick to the body","descLt":"Tiesus spyris padu į pilvą.","descEn":"Front kick with the ball of the foot to the stomach.","belt":"white","type":"strike","input":["K"],"level":"chudan","legalInKumite":true,"range":"mid","frames":{"startup":180,"active":80,"recovery":250},"damage":{"zone":"body","amount":9},"balanceDamage":10,"staminaCost":7,"anim":"mae_geri"},{"id":"chudan_uchi_uke","name":"Chudan uchi uke","nameLt":"Vidurinė gynyba","nameEn":"Middle block","descLt":"Vidurinė gynyba – stabdo smūgius į liemenį.","descEn":"Middle block – stops attacks to the body.","belt":"white","type":"guard","input":["G"],"level":"chudan","legalInKumite":true,"staminaCost":3,"anim":"guard_chudan"},{"id":"jodan_uke","name":"Jodan uke","nameLt":"Aukšta gynyba","nameEn":"High block","descLt":"Aukšta gynyba – stabdo spyrius į galvą.","descEn":"High block – stops kicks to the head.","belt":"white","type":"guard","input":["U","G"],"level":"jodan","legalInKumite":true,"staminaCost":3,"anim":"guard_jodan"},{"id":"gedan_barai","name":"Gedan barai","nameLt":"Žema gynyba","nameEn":"Low block","descLt":"Žema gynyba – stabdo žemus spyrius.","descEn":"Low sweeping block – stops low kicks.","belt":"white","type":"guard","input":["D","G"],"level":"gedan","legalInKumite":true,"staminaCost":3,"anim":"guard_gedan"},{"id":"seiken_shita_tsuki","name":"Seiken shita tsuki","nameLt":"Smūgis iš apačios","nameEn":"Uppercut to the body","descLt":"Smūgis iš apačios į pilvą ir šonkaulius.","descEn":"Rising punch to the stomach and ribs.","belt":"orange","type":"strike","input":["D","A"],"level":"chudan","legalInKumite":true,"range":"close","frames":{"startup":150,"active":60,"recovery":220},"damage":{"zone":"body","amount":8},"balanceDamage":4,"staminaCost":5,"anim":"shita_tsuki"},{"id":"seiken_kagi_tsuki","name":"Seiken kagi tsuki","nameLt":"Kabliukas į šoną","nameEn":"Hook punch","descLt":"Kabliukas į šoną (šonkaulius).","descEn":"Hook punch to the side of the body.","belt":"orange","type":"strike","input":["D","F","A"],"level":"chudan","legalInKumite":true,"range":"close","frames":{"startup":170,"active":60,"recovery":240},"damage":{"zone":"body","amount":9},"balanceDamage":6,"staminaCost":6,"anim":"kagi_tsuki"},{"id":"gedan_mawashi_geri","name":"Gedan mawashi geri","nameLt":"Žemas šoninis spyris","nameEn":"Low roundhouse kick","descLt":"Žemas spyris blauzda į šlaunies šoną („low kick“).","descEn":"Low kick with the shin to the side of the thigh.","belt":"orange","type":"strike","input":["D","K"],"level":"gedan","legalInKumite":true,"range":"mid","lowKick":true,"frames":{"startup":200,"active":80,"recovery":300},"damage":{"zone":"legs","amount":12},"balanceDamage":12,"staminaCost":8,"anim":"gedan_mawashi"},{"id":"hiza_geri","name":"Hiza geri","nameLt":"Kelio smūgis","nameEn":"Knee strike","descLt":"Kelio smūgis į liemenį iš arti.","descEn":"Knee strike to the body at close range.","belt":"orange","type":"strike","input":["F","K"],"level":"chudan","legalInKumite":true,"range":"close","advance":20,"frames":{"startup":170,"active":70,"recovery":260},"damage":{"zone":"body","amount":11},"balanceDamage":8,"staminaCost":8,"anim":"hiza_geri"},{"id":"sune_uke","name":"Sune uke","nameLt":"Blokas blauzda","nameEn":"Shin block","descLt":"Žemo spyrio blokavimas pakelta blauzda. Laikyk ↓G, kai skrenda žemas spyris.","descEn":"Low kick check with a raised shin. Hold ↓G when a low kick is coming.","belt":"orange","type":"guard","input":["D","G"],"level":"gedan","legalInKumite":true,"auto":true,"condition":"vsLowKick","staminaCost":3,"anim":"sune_uke","lesson":{"partner":"gedan_mawashi_geri"}},{"id":"chudan_mawashi_geri","name":"Chudan mawashi geri","nameLt":"Šoninis spyris į liemenį","nameEn":"Middle roundhouse kick","descLt":"Šoninis (lankinis) spyris į liemenį.","descEn":"Roundhouse kick to the body.","belt":"blue","type":"strike","input":["D","F","K"],"level":"chudan","legalInKumite":true,"range":"mid","frames":{"startup":260,"active":90,"recovery":360},"damage":{"zone":"body","amount":14},"balanceDamage":10,"staminaCost":10,"anim":"chudan_mawashi"},{"id":"yoko_geri_chudan","name":"Yoko geri chudan","nameLt":"Spyris šonu","nameEn":"Side kick","descLt":"Spyris šonu, kulnu į liemenį – atstumia varžovą.","descEn":"Side kick with the heel to the body – pushes the opponent back.","belt":"blue","type":"strike","input":["B","F","K"],"level":"chudan","legalInKumite":true,"range":"midfar","knockback":90,"frames":{"startup":240,"active":90,"recovery":340},"damage":{"zone":"body","amount":11},"balanceDamage":16,"staminaCost":10,"anim":"yoko_geri"},{"id":"hiji_chudan_uchi","name":"Hiji chudan uchi","nameLt":"Alkūnė į liemenį","nameEn":"Elbow strike to the body","descLt":"Alkūnės smūgis į liemenį iš arti (tik į liemenį!).","descEn":"Elbow strike to the body at close range (body only!).","belt":"blue","type":"strike","input":["F","F","A"],"level":"chudan","legalInKumite":true,"range":"close","advance":25,"frames":{"startup":150,"active":60,"recovery":230},"damage":{"zone":"body","amount":12},"balanceDamage":7,"staminaCost":7,"anim":"hiji_uchi"},{"id":"seiken_ago_uchi","name":"Seiken ago uchi","nameLt":"Kumštis į smakrą","nameEn":"Punch to the chin","descLt":"Kumštis iš apačios į smakrą. Tik kihon – kumite metu draudžiama!","descEn":"Rising punch to the chin. Kihon only – forbidden in kumite!","belt":"blue","type":"strike","input":["D","U","A"],"level":"jodan","legalInKumite":false,"foulChui":1,"range":"close","frames":{"startup":160,"active":60,"recovery":240},"damage":{"zone":"head","amount":10},"balanceDamage":6,"staminaCost":5,"anim":"ago_uchi"},{"id":"morote_uke","name":"Morote uke","nameLt":"Dviejų rankų gynyba","nameEn":"Two-handed block","descLt":"Dviejų rankų gynyba – stipresnė, bet lėtesnė. Laikyk G.","descEn":"Two-handed block – stronger but slower. Hold G.","belt":"blue","type":"guard","input":["G"],"level":"chudan","legalInKumite":true,"hold":true,"staminaCost":3,"anim":"morote_uke"},{"id":"jodan_mae_geri","name":"Jodan mae geri","nameLt":"Tiesus spyris į galvą","nameEn":"Front kick to the head","descLt":"Tiesus spyris į galvą.","descEn":"Front kick to the head.","belt":"yellow","type":"strike","input":["U","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":230,"active":80,"recovery":330},"damage":{"zone":"head","amount":22},"balanceDamage":12,"staminaCost":11,"anim":"jodan_mae_geri"},{"id":"jodan_mawashi_geri","name":"Jodan mawashi geri","nameLt":"Aukštas šoninis spyris","nameEn":"High roundhouse kick","descLt":"Aukštas šoninis spyris į galvą.","descEn":"High roundhouse kick to the head.","belt":"yellow","type":"strike","input":["D","F","U","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":320,"active":100,"recovery":450},"damage":{"zone":"head","amount":30},"balanceDamage":15,"staminaCost":14,"anim":"jodan_mawashi"},{"id":"ushiro_geri","name":"Ushiro geri","nameLt":"Atgalinis spyris","nameEn":"Back kick","descLt":"Atgalinis spyris apsisukant.","descEn":"Spinning back kick.","belt":"yellow","type":"strike","input":["F","D","B","K"],"level":"chudan","legalInKumite":true,"range":"midfar","knockback":80,"frames":{"startup":340,"active":90,"recovery":460},"damage":{"zone":"body","amount":20},"balanceDamage":18,"staminaCost":14,"anim":"yoko_geri"},{"id":"kansetsu_geri","name":"Kansetsu geri","nameLt":"Spyris į kelį","nameEn":"Joint kick","descLt":"Tiesus spyris į kelį. Tik kihon – kumite metu draudžiama!","descEn":"Straight kick to the knee. Kihon only – forbidden in kumite!","belt":"yellow","type":"strike","input":["B","D","K"],"level":"gedan","legalInKumite":false,"foulChui":2,"range":"mid","frames":{"startup":200,"active":80,"recovery":300},"damage":{"zone":"legs","amount":14},"balanceDamage":12,"staminaCost":8,"anim":"gedan_mawashi"},{"id":"mawashi_uke","name":"Mawashi uke","nameLt":"Apskritiminė gynyba","nameEn":"Circular block","descLt":"Apskritiminė gynyba; sėkminga atveria 400 ms kontratakos langą.","descEn":"Circular block; success opens a 400 ms counter window.","belt":"yellow","type":"guard","input":["F","G"],"level":"chudan","legalInKumite":true,"staminaCost":4,"anim":"morote_uke"},{"id":"kakato_otoshi","name":"Kakato otoshi","nameLt":"„Kirvio“ spyris","nameEn":"Axe kick","descLt":"„Kirvio“ spyris kulnu iš viršaus (oroshi kakato geri).","descEn":"Axe kick with the heel from above (oroshi kakato geri).","belt":"green","type":"strike","input":["U","D","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":380,"active":100,"recovery":500},"damage":{"zone":"head","amount":32},"balanceDamage":16,"staminaCost":16,"anim":"jodan_mae_geri"},{"id":"ushiro_mawashi_geri","name":"Ushiro mawashi geri","nameLt":"Sukamasis spyris kulnu","nameEn":"Spinning hook kick","descLt":"Sukamasis spyris kulnu į galvą.","descEn":"Spinning heel kick to the head.","belt":"green","type":"strike","input":["CIRCLE","K"],"level":"jodan","legalInKumite":true,"range":"midfar","frames":{"startup":450,"active":100,"recovery":600},"damage":{"zone":"head","amount":40},"balanceDamage":20,"staminaCost":20,"anim":"jodan_mawashi"},{"id":"uchi_mawashi_geri","name":"Uchi mawashi geri","nameLt":"Spyris iš vidaus į išorę","nameEn":"Inside crescent kick","descLt":"Aukštas spyris iš vidaus į išorę.","descEn":"High crescent kick from the inside out.","belt":"green","type":"strike","input":["U","B","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":300,"active":90,"recovery":420},"damage":{"zone":"head","amount":24},"balanceDamage":12,"staminaCost":13,"anim":"jodan_mawashi"},{"id":"ashi_barai","name":"Ashi barai","nameLt":"Pakirtimas","nameEn":"Foot sweep","descLt":"Kojos pakirtimas; iškart po jo galima smogti gedan tsuki (↓A).","descEn":"Foot sweep; follow immediately with gedan tsuki (↓A).","belt":"green","type":"strike","input":["D","B","K"],"level":"gedan","legalInKumite":true,"range":"mid","frames":{"startup":220,"active":80,"recovery":320},"damage":{"zone":"legs","amount":5},"balanceDamage":30,"staminaCost":9,"anim":"gedan_mawashi"},{"id":"gedan_tsuki_followup","name":"Gedan tsuki","nameLt":"Smūgis po pakirtimo","nameEn":"Follow-up punch after a sweep","descLt":"Kontroliuojamas smūgis į parkritusį iškart po pakirtimo.","descEn":"Controlled punch to the downed opponent right after a sweep.","belt":"green","type":"strike","input":["D","A"],"level":"gedan","legalInKumite":true,"auto":true,"condition":"afterSweep","range":"close","frames":{"startup":150,"active":60,"recovery":260},"damage":{"zone":"body","amount":6},"balanceDamage":0,"staminaCost":5,"anim":"shita_tsuki"},{"id":"tobi_mae_geri","name":"Tobi mae geri","nameLt":"Šuolinis tiesus spyris","nameEn":"Jumping front kick","descLt":"Šuolinis tiesus spyris.","descEn":"Jumping front kick.","belt":"brown","type":"strike","input":["U","U","K"],"level":"jodan","legalInKumite":true,"range":"midfar","advance":40,"frames":{"startup":300,"active":100,"recovery":480},"damage":{"zone":"head","amount":26},"balanceDamage":16,"staminaCost":15,"anim":"jodan_mae_geri"},{"id":"tobi_hiza_geri","name":"Tobi hiza geri","nameLt":"Šuolinis kelio smūgis","nameEn":"Jumping knee strike","descLt":"Šuolinis kelio smūgis.","descEn":"Jumping knee strike.","belt":"brown","type":"strike","input":["U","U","F","K"],"level":"jodan","legalInKumite":true,"range":"mid","advance":60,"frames":{"startup":280,"active":90,"recovery":460},"damage":{"zone":"head","amount":28},"balanceDamage":18,"staminaCost":15,"anim":"hiza_geri"},{"id":"tobi_nidan_geri","name":"Tobi nidan geri","nameLt":"Dvigubas šuolinis spyris","nameEn":"Jumping double kick","descLt":"Dvigubas šuolinis spyris.","descEn":"Jumping double front kick.","belt":"brown","type":"strike","input":["U","U","K","K"],"level":"jodan","legalInKumite":true,"range":"midfar","advance":50,"frames":{"startup":220,"active":120,"recovery":520},"damage":{"zone":"head","amount":30},"balanceDamage":18,"staminaCost":18,"anim":"jodan_mae_geri"},{"id":"tobi_ushiro_mawashi_geri","name":"Tobi ushiro mawashi geri","nameLt":"Šuolinis sukamasis spyris","nameEn":"Jumping spinning hook kick","descLt":"Šuolinis sukamasis spyris kulnu.","descEn":"Jumping spinning heel kick.","belt":"brown","type":"strike","input":["U","U","CIRCLE","K"],"level":"jodan","legalInKumite":true,"range":"midfar","frames":{"startup":480,"active":110,"recovery":650},"damage":{"zone":"head","amount":46},"balanceDamage":24,"staminaCost":24,"anim":"jodan_mawashi"},{"id":"kiai_mode","name":"Kiai","nameLt":"KIAI režimas","nameEn":"KIAI mode","descLt":"5 s: +25 % žala, ištvermė nesmunka. Reikia pilnos ki juostos.","descEn":"5 s: +25 % damage, no stamina drain. Needs a full ki bar.","belt":"black","type":"mode","input":["KIAI"],"legalInKumite":true}]},"combos":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"sequence: techniku id grandine (renzoku). '@block' = sekminga gynyba. bonus raktai: damageMult, legDamageMult, balanceBonus, unblockable (MVP); wazaAriIfLegDamageOver, autoWazaAri, guaranteedWazaAri (4 etapas).","combos":[{"id":"sanbon_tsuki","name":"Sanbon tsuki","nameLt":"Trys smūgiai iš eilės","nameEn":"Triple punch","belt":"white","sequence":["seiken_gyaku_tsuki","seiken_gyaku_tsuki","seiken_gyaku_tsuki"],"bonus":{"damageMult":1.15,"balanceBonus":10}},{"id":"mae_gyaku","name":"Mae geri – gyaku tsuki","nameLt":"Spyris ir kumštis","nameEn":"Front kick – reverse punch","belt":"white","sequence":["mae_geri_chudan","seiken_gyaku_tsuki"],"bonus":{"damageMult":1.15}},{"id":"shita_gedan","name":"Shita tsuki – gedan mawashi","nameLt":"Smūgis iš apačios ir žemas spyris","nameEn":"Uppercut – low kick","belt":"orange","sequence":["seiken_shita_tsuki","gedan_mawashi_geri"],"bonus":{"damageMult":1.2,"legDamageMult":1.5}},{"id":"kagi_kagi_gedan","name":"Kagi tsuki – kagi tsuki – gedan","nameLt":"Du kabliukai ir žemas spyris","nameEn":"Double hook – low kick","belt":"orange","sequence":["seiken_kagi_tsuki","seiken_kagi_tsuki","gedan_mawashi_geri"],"bonus":{"damageMult":1.2}},{"id":"gyaku_shita_chudan","name":"Gyaku tsuki – shita tsuki – chudan mawashi","nameLt":"Du kumščiai ir šoninis spyris","nameEn":"Two punches – middle roundhouse","belt":"blue","sequence":["seiken_gyaku_tsuki","seiken_shita_tsuki","chudan_mawashi_geri"],"bonus":{"damageMult":1.25}},{"id":"uke_hiza","name":"Uke – hiza geri","nameLt":"Gynyba ir kelio kontrataka","nameEn":"Block – knee counter","belt":"blue","sequence":["@block","hiza_geri"],"bonus":{"unblockable":true},"lesson":{"partner":"seiken_gyaku_tsuki"}},{"id":"gedan_jodan","name":"Gedan – jodan mawashi","nameLt":"Žemas ir aukštas spyris ta pačia koja","nameEn":"Low – high kick, same leg","belt":"yellow","sequence":["gedan_mawashi_geri","jodan_mawashi_geri"],"bonus":{"wazaAriIfLegDamageOver":50}},{"id":"mae_ushiro","name":"Mae geri – ushiro geri","nameLt":"Tiesus ir atgalinis spyris","nameEn":"Front kick – back kick","belt":"yellow","sequence":["mae_geri_chudan","ushiro_geri"],"bonus":{"damageMult":1.25}},{"id":"sanbon_kakato","name":"Sanbon tsuki – kakato otoshi","nameLt":"Trys smūgiai ir kirvio spyris","nameEn":"Triple punch – axe kick","belt":"green","sequence":["seiken_gyaku_tsuki","seiken_gyaku_tsuki","seiken_gyaku_tsuki","kakato_otoshi"],"bonus":{"unblockable":true}},{"id":"gedan_ushiro_mawashi","name":"Gedan – ushiro mawashi","nameLt":"Žemas ir sukamasis spyris","nameEn":"Low kick – spinning hook kick","belt":"green","sequence":["gedan_mawashi_geri","ushiro_mawashi_geri"],"bonus":{"damageMult":1.3}},{"id":"ashi_gedan_tsuki","name":"Ashi barai – gedan tsuki","nameLt":"Pakirtimas ir smūgis","nameEn":"Sweep – follow-up punch","belt":"brown","sequence":["ashi_barai","gedan_tsuki_followup"],"bonus":{"autoWazaAri":true}},{"id":"nidan_gyaku","name":"Tobi nidan – gyaku tsuki","nameLt":"Dvigubas šuolinis spyris ir kumštis","nameEn":"Jumping double kick – reverse punch","belt":"brown","sequence":["tobi_nidan_geri","seiken_gyaku_tsuki"],"bonus":{"damageMult":1.35}},{"id":"osu_no_seishin","name":"Osu no seishin","nameLt":"Signatūrinė kombinacija","nameEn":"Signature combination","belt":"black","sequence":["seiken_gyaku_tsuki","seiken_shita_tsuki","gedan_mawashi_geri","chudan_mawashi_geri","jodan_mawashi_geri"],"bonus":{"guaranteedWazaAri":true}}]},"belts":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"available=false skyriai laukia 4 etapo. exam.kumite = kovu skaicius is eiles. tournament.format: series (kovos is eiles) | bracket (eliminacija).","belts":[{"id":"white","nameLt":"Baltas","nameEn":"White","kyu":["mukyu"],"color":"#f4f1ea","available":true,"unlocksLt":"Bazė: stovos, tiesus smūgis, gynyba","unlocksEn":"Basics: stances, straight punch, blocks","matchTimeSec":60,"bg":"dojo","exam":null,"tournament":{"id":"dojo_sparring","nameLt":"Dojo sparingas su 3 mokiniais","nameEn":"Dojo sparring with 3 students","format":"series","size":4,"bg":"dojo"}},{"id":"orange","nameLt":"Oranžinis","nameEn":"Orange","kyu":[10,9],"color":"#f08a24","available":true,"unlocksLt":"Pirmieji smūgiai į liemenį, žemas spyris","unlocksEn":"First body punches, low kick","bg":"dojo","exam":{"kihonCount":12,"kata":"taikyoku_sono_ichi","kumite":1},"tournament":{"id":"city_cup","nameLt":"Miesto turnyras","nameEn":"City tournament","format":"bracket","size":4,"bg":"hall"}},{"id":"blue","nameLt":"Mėlynas","nameEn":"Blue","kyu":[8,7],"color":"#2f6fd6","available":true,"unlocksLt":"Vidurinis šoninis spyris, alkūnė","unlocksEn":"Middle roundhouse kick, elbow","bg":"dojo","exam":{"kihonCount":14,"kata":"taikyoku_sono_san","kumite":2},"tournament":{"id":"regional_cup","nameLt":"Regiono turnyras","nameEn":"Regional tournament","format":"bracket","size":8,"bg":"hall"}},{"id":"yellow","nameLt":"Geltonas","nameEn":"Yellow","kyu":[6,5],"color":"#f2cf2e","available":false,"unlocksLt":"Aukštas spyris, atgalinis spyris","unlocksEn":"High kick, back kick","bg":"dojo","exam":{"kihonCount":16,"kata":"taikyoku_sono_san","kumite":3},"tournament":{"id":"national_youth","nameLt":"Nacionalinis jaunimo turnyras","nameEn":"National youth tournament","format":"bracket","size":8,"bg":"hall"}},{"id":"green","nameLt":"Žalias","nameEn":"Green","kyu":[4,3],"color":"#2e9e4a","available":false,"unlocksLt":"Kirvio spyris, sukamasis spyris","unlocksEn":"Axe kick, spinning kick","bg":"dojo","exam":{"kihonCount":18,"kata":"taikyoku_sono_san","kumite":5},"tournament":{"id":"national_cup","nameLt":"Nacionalinis čempionatas","nameEn":"National championship","format":"bracket","size":16,"bg":"arena"}},{"id":"brown","nameLt":"Rudas","nameEn":"Brown","kyu":[2,1],"color":"#7a4a22","available":false,"unlocksLt":"Šuoliniai spyriai, ilgos kombinacijos","unlocksEn":"Jumping kicks, long combinations","bg":"dojo","exam":{"kihonCount":20,"kata":"taikyoku_sono_san","kumite":7},"tournament":{"id":"europe_cup","nameLt":"Europos turnyras","nameEn":"European tournament","format":"bracket","size":16,"bg":"arena"}},{"id":"black","nameLt":"Juodas","nameEn":"Black","kyu":["shodan"],"color":"#1b1b1f","available":false,"unlocksLt":"Visos technikos + signatūrinė kombinacija","unlocksEn":"All techniques + signature combination","bg":"dojo","exam":{"kihonCount":20,"kata":"taikyoku_sono_san","kumite":10},"tournament":{"id":"world_open","nameLt":"Atvirasis pasaulio turnyras","nameEn":"Open world tournament","format":"bracket","size":32,"bg":"arena"}}]},"opponents":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"Visi vardai isgalvoti. archetypes: AI elgsenos parametrai; weights: megstamu techniku svoriai (nenurodyta = 1). beltDefaults: reakcijos laikas ms ir prazangu tikimybe. difficulty daugina reakcija ir zala.","archetypes":{"tank":{"nameLt":"Tankas","nameEn":"Tank","descLt":"Spaudžia arti, daug smūgių į liemenį.","descEn":"Presses in close with lots of body punches.","prefDist":96,"aggression":0.78,"retreatChance":0.04,"guardIdle":0.08,"comboChance":0.4,"cooldownMs":[320,800],"block":{"jodan":0.3,"chudan":0.5,"gedan":0.3},"weights":{"seiken_gyaku_tsuki":3,"seiken_oi_tsuki":2,"seiken_shita_tsuki":3,"seiken_kagi_tsuki":3,"hiza_geri":2.5,"hiji_chudan_uchi":2.5,"mae_geri_chudan":0.6,"gedan_mawashi_geri":0.8}},"kicker":{"nameLt":"Spyrikas","nameEn":"Kicker","descLt":"Laiko atstumą ir spardo.","descEn":"Keeps distance and kicks.","prefDist":142,"aggression":0.58,"retreatChance":0.28,"guardIdle":0.12,"comboChance":0.2,"cooldownMs":[450,1000],"block":{"jodan":0.4,"chudan":0.45,"gedan":0.45},"weights":{"mae_geri_chudan":3,"gedan_mawashi_geri":3,"chudan_mawashi_geri":3.5,"yoko_geri_chudan":3,"seiken_gyaku_tsuki":0.6,"hiza_geri":0.8}},"counter":{"nameLt":"Kontratakuotojas","nameEn":"Counter-fighter","descLt":"Daug blokuoja ir atsako po gynybos.","descEn":"Blocks a lot and answers after defending.","prefDist":118,"aggression":0.34,"retreatChance":0.14,"guardIdle":0.4,"comboChance":0.25,"cooldownMs":[500,1100],"block":{"jodan":0.6,"chudan":0.78,"gedan":0.62},"weights":{"hiza_geri":2.5,"seiken_gyaku_tsuki":2,"seiken_shita_tsuki":2,"gedan_mawashi_geri":1.5,"chudan_mawashi_geri":1.5}}},"beltDefaults":{"white":{"reactionMs":600,"foulChance":0.012,"skill":0.6},"orange":{"reactionMs":520,"foulChance":0.008,"skill":0.75},"blue":{"reactionMs":440,"foulChance":0.005,"skill":0.9},"yellow":{"reactionMs":370,"foulChance":0.02,"skill":1},"green":{"reactionMs":300,"foulChance":0.015,"skill":1.1},"brown":{"reactionMs":240,"foulChance":0.01,"skill":1.2},"black":{"reactionMs":180,"foulChance":0.005,"skill":1.3}},"difficulty":{"easy":{"reaction":1.35,"damage":0.8,"aggression":0.8},"normal":{"reaction":1,"damage":1,"aggression":1},"hard":{"reaction":0.75,"damage":1.15,"aggression":1.15}},"roster":[{"id":"w_jonas","name":"Jonas","belt":"white","archetype":"tank"},{"id":"w_ugne","name":"Ugnė","belt":"white","archetype":"kicker"},{"id":"w_matas","name":"Matas","belt":"white","archetype":"counter"},{"id":"o_rokas","name":"Rokas Vėtra","belt":"orange","archetype":"tank"},{"id":"o_emilija","name":"Emilija Šilas","belt":"orange","archetype":"kicker"},{"id":"o_dovas","name":"Dovas Girėnas","belt":"orange","archetype":"counter"},{"id":"o_kenji","name":"Kenji Morita","belt":"orange","archetype":"tank"},{"id":"b_ainis","name":"Ainis Uosis","belt":"blue","archetype":"counter"},{"id":"b_lukne","name":"Luknė Beržė","belt":"blue","archetype":"kicker"},{"id":"b_tadas","name":"Tadas Kalnius","belt":"blue","archetype":"tank"},{"id":"b_hana","name":"Hana Sato","belt":"blue","archetype":"kicker"},{"id":"b_oskar","name":"Oskar Lind","belt":"blue","archetype":"tank"},{"id":"b_mila","name":"Mila Novak","belt":"blue","archetype":"counter"},{"id":"b_vytis","name":"Vytis Ąžuolas","belt":"blue","archetype":"tank"}]},"kata":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"Ritmo mini zaidimas. steps: technikos id; '*' priekyje = pries judesi apsisukama. Formos supaprastintos zaidimui (20 skaiciavimu).","kata":[{"id":"taikyoku_sono_ichi","name":"Taikyoku sono ichi","belt":"white","beatMs":1250,"steps":["*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","seiken_oi_tsuki","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","seiken_oi_tsuki","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki"]},{"id":"taikyoku_sono_ni","name":"Taikyoku sono ni","belt":"white","beatMs":1200,"steps":["*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki"]},{"id":"taikyoku_sono_san","name":"Taikyoku sono san","belt":"orange","beatMs":1150,"steps":["*chudan_uchi_uke","seiken_oi_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*chudan_uchi_uke","seiken_oi_tsuki"]}]},"rules":{"_license":"SPDX-License-Identifier: BUSL-1.1","match":{"mainTimeSec":90,"enchoTimeSec":90,"maxEncho":2,"knockdownCountSec":3,"chuiLimit":4,"passivitySec":10,"votesNeeded":3,"judgeNoise":0.05,"hikiwakeMargin":0.08,"fumeiChance":0.05,"flagDelayMs":[100,250],"holdFoulSec":1.5,"holdFoulDist":118,"jogaiChuiFrom":2,"bowWindowMs":2800,"chuiDecisiveDiff":2,"clearLeadMargin":0.3,"balanceBreakVoteChance":0.6,"haltWindowMs":1100,"yameGraceMs":400,"hantei":{"wazaAri":100,"damage":1,"effective":3,"techniques":0.5,"initiative":0.4,"chui":12}},"arena":{"xMin":230,"xMax":1050,"startAka":540,"startShiro":740,"groundY":540},"input":{"bufferMs":350,"buttonMs":200,"holdMs":300,"deadzone":0.2,"dashTapMs":250},"combat":{"ranges":{"close":105,"mid":150,"midfar":172,"far":195},"minSeparation":86,"inputBufferMs":120,"damageScale":0.45,"zoneAfterGetUp":62,"headAfterGetUp":60,"walkSpeed":150,"backSpeed":125,"dashDist":150,"dashMs":170,"backdashDist":140,"backdashMs":200,"backdashIframesMs":150,"dashStamina":6,"chainWindow":0.3,"chainGraceMs":160,"chainBonus":0.1,"chainBonusMax":0.4,"holdBonus":{"damage":1.3,"stamina":1.5,"slow":1.25},"block":{"factor":0.25,"moroteFactor":0.1,"suneFactor":0.1,"tiredFactor":0.4,"staminaCost":3,"perfectMs":120,"perfectKi":10,"openMs":300,"counterMs":400},"moroteHoldMs":300,"headKnockdown":70,"staggerMs":900,"hitStunMs":220,"blockStunMs":110,"hitStopMs":[60,100],"staminaRegen":28,"staminaRegenDelayMs":700,"balanceRegen":45,"balanceRegenDelayMs":1200,"tiredBelow":20,"tiredSlow":1.3,"legSlow":0.7,"legBalanceMax":75,"bodyRegenFactor":0.6,"guardStaminaDrain":4,"kiPerDamage":0.6,"kiBlock":3,"kiInitiative":1.5,"kiaiMs":5000,"kiaiDamage":1.25,"getUp":{"baseMs":1200,"perDamageMs":2400,"randMs":400,"headExtraMs":500,"mashStep":0.03,"mashMax":0.3,"riseMs":500}},"recovery":{"exam":0.3,"tournament":0.6},"lesson":{"reps":5,"comboReps":3},"exam":{"kihonCount":12,"kihonTimeMs":2000,"passScore":0.7,"kataPerfectMs":130,"kataGoodMs":320},"calls":{"aka_shiro":"Aka, Shiro","shomen_ni_rei":"Shomen ni rei","shushin_ni_rei":"Shushin ni rei","otagai_ni_rei":"Otagai ni rei","kamaete":"Kamaete","hajime":"Hajime!","yame":"Yame","zokko":"Zokko","jikan":"Jikan","fukushin_shugo":"Fukushin shūgō","shomen_muite":"Shomen muite","hantei_o_torimasu":"Hantei o torimasu","hantei":"Hantei!","hikiwake":"Hikiwake","encho":"Enchō","waza_ari":"Waza-ari","ippon":"Ippon","awasete_ippon":"Waza-ari awasete ippon","chui_1":"Chui ichi","chui_2":"Chui ni","chui_3":"Chui san","shikkaku":"Shikkaku","jogai":"Jogai","mitomezu":"Mitomezu","oshi":"Oshi","aka":"Aka","shiro":"Shiro","aka_no_kachi":"Aka no kachi","shiro_no_kachi":"Shiro no kachi","osu":"Osu!"}},"anim":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"2D skeleto pozos (laipsniai). Kampas matuojamas nuo 'zemyn', teigiamas = pirmyn. fs/fe priekine ranka (petys/alkune), bs/be galine; fh/fk priekine koja (klubas/kelis), bh/bk galine; torso = liemens palinkimas pirmyn; rot = viso kuno pasukimas; hipH = klubo aukstis (jei nenurodyta - skaiciuojamas pagal pedas); dx = poslinkis pirmyn. Nenurodytos reiksmes paimamos is 'kamae'. anims.keys: [faze, poza], faze 0-1 startup, 1-2 active, 2-3 recovery.","poses":{"kamae":{"torso":8,"head":0,"fs":35,"fe":100,"bs":10,"be":115,"fh":30,"fk":38,"bh":-22,"bk":4,"dx":0,"rot":0},"stand":{"torso":0,"fs":4,"fe":8,"bs":-4,"be":8,"fh":5,"fk":2,"bh":-5,"bk":2},"bow":{"torso":42,"head":12,"fs":6,"fe":4,"bs":0,"be":4,"fh":5,"fk":2,"bh":-5,"bk":2},"crouch":{"torso":14,"fh":48,"fk":75,"bh":-10,"bk":50},"walk_a":{"fh":38,"fk":34,"bh":-12,"bk":14},"walk_b":{"fh":20,"fk":36,"bh":-30,"bk":2},"dash":{"torso":20,"fh":46,"fk":40,"bh":-36,"bk":8,"fs":45,"fe":95},"backdash":{"torso":-8,"fh":18,"fk":8,"bh":-30,"bk":38},"guard_chudan":{"torso":4,"fs":58,"fe":72,"bs":25,"be":110},"guard_jodan":{"torso":2,"fs":118,"fe":62,"bs":20,"be":115},"guard_gedan":{"torso":12,"fs":30,"fe":8,"bs":5,"be":120},"sune_uke":{"torso":4,"fs":40,"fe":100,"fh":72,"fk":96,"bh":-4,"bk":4},"morote_uke":{"torso":6,"fs":62,"fe":84,"bs":56,"be":88},"hit_body":{"torso":28,"head":16,"fs":22,"fe":80,"bs":10,"be":90,"dx":-6},"hit_head":{"torso":-18,"head":-26,"fs":10,"fe":70,"bs":-10,"be":70,"dx":-8},"hit_legs":{"torso":16,"fh":42,"fk":70,"bh":-18,"bk":20,"dx":-4},"stagger":{"torso":-10,"head":-12,"fs":-10,"fe":30,"bs":-22,"be":30,"fh":16,"fk":30,"bh":-30,"bk":30},"fall":{"rot":-45,"torso":-6,"head":-15,"fs":30,"fe":30,"bs":-30,"be":30,"fh":40,"fk":50,"bh":10,"bk":40,"hipH":55},"down":{"rot":-88,"torso":0,"head":0,"fs":12,"fe":20,"bs":-20,"be":20,"fh":8,"fk":10,"bh":22,"bk":34,"hipH":16},"kneel":{"torso":24,"fs":20,"fe":40,"bs":0,"be":60,"fh":72,"fk":100,"bh":-8,"bk":92},"gyaku_chamber":{"torso":4,"bs":-28,"be":112,"fs":42,"fe":90},"gyaku_strike":{"torso":15,"bs":88,"be":4,"fs":-6,"fe":120,"fh":34,"fk":40,"bh":-28,"bk":0,"dx":10},"oi_chamber":{"torso":6,"fs":-22,"fe":112,"bs":30,"be":100,"fh":10,"fk":28,"bh":-20,"bk":20},"oi_strike":{"torso":13,"fs":88,"fe":4,"bs":-10,"be":116,"fh":40,"fk":46,"bh":-30,"bk":2,"dx":14},"jodan_strike":{"torso":10,"bs":114,"be":4,"fs":0,"fe":120,"dx":8},"shita_chamber":{"torso":17,"bs":-16,"be":96,"fh":38,"fk":60,"bh":-28,"bk":20},"shita_strike":{"torso":12,"bs":48,"be":86,"fs":0,"fe":118,"fh":34,"fk":48,"dx":10},"kagi_chamber":{"torso":6,"bs":-30,"be":100},"kagi_strike":{"torso":17,"bs":76,"be":80,"fs":0,"fe":118,"dx":8},"ago_strike":{"torso":6,"bs":70,"be":102,"fs":0,"fe":118,"dx":8},"hiji_chamber":{"torso":8,"fs":10,"fe":150},"hiji_strike":{"torso":19,"fs":82,"fe":150,"bs":-10,"be":110,"fh":40,"fk":46,"dx":16},"mae_chamber":{"torso":-4,"bh":85,"bk":100,"fh":6,"fk":8},"mae_strike":{"torso":-10,"bh":88,"bk":6,"fh":4,"fk":6,"dx":8},"gedan_chamber":{"torso":-4,"bh":40,"bk":70,"fh":4,"fk":8},"gedan_strike":{"torso":-8,"bh":54,"bk":8,"fh":0,"fk":6,"dx":6},"hiza_chamber":{"torso":6,"bh":30,"bk":60,"fh":8,"fk":10},"hiza_strike":{"torso":14,"bh":100,"bk":130,"fh":6,"fk":8,"fs":62,"fe":60,"bs":58,"be":60,"dx":14},"mawashi_chamber":{"torso":-8,"bh":60,"bk":110,"fh":2,"fk":6},"mawashi_strike":{"torso":-16,"bh":92,"bk":4,"fh":-4,"fk":4,"dx":6},"yoko_chamber":{"torso":-12,"bh":80,"bk":120,"fh":0,"fk":6},"yoko_strike":{"torso":-30,"bh":95,"bk":0,"fh":-6,"fk":4,"fs":30,"fe":60,"dx":10},"jodan_mae_strike":{"torso":-14,"bh":124,"bk":4,"fh":2,"fk":4,"dx":8},"jodan_mawashi_strike":{"torso":-24,"bh":128,"bk":2,"fh":-4,"fk":4,"dx":6}},"anims":{"gyaku_tsuki":{"keys":[[0,"kamae"],[0.7,"gyaku_chamber"],[1,"gyaku_strike"],[2,"gyaku_strike"],[3,"kamae"]]},"oi_tsuki":{"keys":[[0,"kamae"],[0.6,"oi_chamber"],[1,"oi_strike"],[2,"oi_strike"],[3,"kamae"]]},"jodan_tsuki":{"keys":[[0,"kamae"],[0.7,"gyaku_chamber"],[1,"jodan_strike"],[2,"jodan_strike"],[3,"kamae"]]},"shita_tsuki":{"keys":[[0,"kamae"],[0.7,"shita_chamber"],[1,"shita_strike"],[2,"shita_strike"],[3,"kamae"]]},"kagi_tsuki":{"keys":[[0,"kamae"],[0.7,"kagi_chamber"],[1,"kagi_strike"],[2,"kagi_strike"],[3,"kamae"]]},"ago_uchi":{"keys":[[0,"kamae"],[0.7,"shita_chamber"],[1,"ago_strike"],[2,"ago_strike"],[3,"kamae"]]},"hiji_uchi":{"keys":[[0,"kamae"],[0.6,"hiji_chamber"],[1,"hiji_strike"],[2,"hiji_strike"],[3,"kamae"]]},"mae_geri":{"keys":[[0,"kamae"],[0.7,"mae_chamber"],[1,"mae_strike"],[2,"mae_strike"],[2.5,"mae_chamber"],[3,"kamae"]]},"gedan_mawashi":{"keys":[[0,"kamae"],[0.7,"gedan_chamber"],[1,"gedan_strike"],[2,"gedan_strike"],[2.5,"gedan_chamber"],[3,"kamae"]]},"hiza_geri":{"keys":[[0,"kamae"],[0.6,"hiza_chamber"],[1,"hiza_strike"],[2,"hiza_strike"],[3,"kamae"]]},"chudan_mawashi":{"keys":[[0,"kamae"],[0.7,"mawashi_chamber"],[1,"mawashi_strike"],[2,"mawashi_strike"],[2.5,"mawashi_chamber"],[3,"kamae"]]},"yoko_geri":{"keys":[[0,"kamae"],[0.7,"yoko_chamber"],[1,"yoko_strike"],[2,"yoko_strike"],[2.5,"yoko_chamber"],[3,"kamae"]]},"jodan_mae_geri":{"keys":[[0,"kamae"],[0.7,"mae_chamber"],[1,"jodan_mae_strike"],[2,"jodan_mae_strike"],[2.5,"mae_chamber"],[3,"kamae"]]},"jodan_mawashi":{"keys":[[0,"kamae"],[0.7,"mawashi_chamber"],[1,"jodan_mawashi_strike"],[2,"jodan_mawashi_strike"],[2.5,"mawashi_chamber"],[3,"kamae"]]},"guard_chudan":{"keys":[[0,"guard_chudan"]]},"guard_jodan":{"keys":[[0,"guard_jodan"]]},"guard_gedan":{"keys":[[0,"guard_gedan"]]},"sune_uke":{"keys":[[0,"sune_uke"]]},"morote_uke":{"keys":[[0,"morote_uke"]]}}},"strings.lt":{"_license":"SPDX-License-Identifier: BUSL-1.1","app.subtitle":"Karatės kelias","app.tagline":"Pilno kontakto (knockdown) karatė kovos žaidimas","start.tap":"Bakstelėk, kad pradėtum","start.ios":"iPhone: bakstelėk „Bendrinti“ → „Pridėti prie pradinio ekrano“, kad žaidimas užimtų visą ekraną.","menu.begin":"Pradėti kelionę","menu.journey":"Tęsti kelionę","menu.quick":"Greita kova","menu.settings":"Nustatymai","ui.rotate":"Pasukite įrenginį horizontaliai","ui.paused":"Pauzė","ui.resume":"Tęsti","ui.quit":"Išeiti","ui.back":"Atgal","ui.next":"Toliau","ui.again":"Dar kartą","ui.yes":"taip","ui.no":"NE","ui.hold":"(laikyti)","hud.you":"TU","hud.player":"Žaidėjas","hud.locked":"neatrakinta","hud.mash":"Bakstelėk A / K / G – kelkis!","hud.perfect":"Tobulas blokas!","zone.legs":"kojos","zone.body":"liemuo","zone.head":"galva","result.win":"Pergalė!","result.lose":"Pralaimėjimas","result.ippon":"Ippon","result.awasete":"Awasete ippon","result.hantei":"Hantei","result.shikkaku":"Shikkaku","result.ippon.desc":"Pilnas taškas: varžovas neatsikėlė per 3 s","result.awasete.desc":"Du waza-ari sudaro ippon","result.hantei.desc":"Teisėjų sprendimas pasibaigus laikui","result.shikkaku.desc":"Diskvalifikacija: 4 įspėjimai (chui)","result.encho":"pratęsimų: {n}","result.yourDamage":"Tavo žala","result.oppDamage":"Varžovo žala","result.bowsMissed":"praleistų nusilenkimų: {n}","call.aka_shiro":"Dalyviai įžengia ant tatamio","call.shomen_ni_rei":"Nusilenkti teisėjų stalui – spausk REI","call.shushin_ni_rei":"Nusilenkti vyr. teisėjui – spausk REI","call.otagai_ni_rei":"Nusilenkti vienas kitam – spausk REI","call.kamaete":"Kovos stovos","call.hajime":"Pradėti!","call.yame":"Stop","call.zokko":"Tęsti","call.jikan":"Laikas sustabdytas","call.fukushin_shugo":"Pasitarimas su kampiniais teisėjais","call.shomen_muite":"Atsisukti į priekį","call.hantei_o_torimasu":"Priimamas sprendimas","call.hantei":"Sprendimas!","call.hikiwake":"Lygiosios","call.encho":"Pratęsimas","call.waza_ari":"Pusė taško","call.ippon":"Pilnas taškas","call.awasete_ippon":"Du waza-ari = ippon","call.chui_1":"Pirmas įspėjimas","call.chui_2":"Antras įspėjimas","call.chui_3":"Trečias įspėjimas","call.shikkaku":"Diskvalifikacija","call.jogai":"Už ribos","call.mitomezu":"Nepripažįstama","call.oshi":"Įspėjamasis gestas","call.aka":"Raudonas","call.shiro":"Baltas","call.aka_no_kachi":"Laimi raudonas","call.shiro_no_kachi":"Laimi baltas","call.osu":"Osu!","foul.illegal":"Draudžiama technika","foul.holding":"Laikymas / stūmimas","foul.passivity":"Pasyvumas","foul.jogai":"Bėgimas už ribos","foul.disrespect":"Nepagarba (nenusilenkta)","foul.afterYame":"Puolimas po „Yame“","foul.downed":"Puolimas į gulintį","dojo.lessons":"Pamokos","dojo.lessonsHelp":"Suvesk techniką {n} kartus iš eilės be klaidos – ji bus išmokta ir pateks į Waza-chō.","dojo.learn":"Mokytis","dojo.repeat":"Kartoti","dojo.practice":"Praktikuoti","dojo.free":"Laisva praktika","dojo.freeHelp":"Sparingo partneris. Rodoma padaryta žala. Išeiti – pauzės mygtuku.","dojo.partner":"Partneris","dojo.partnerPassive":"Partneris stovi","dojo.partnerBlock":"Partneris tik blokuoja","dojo.partnerAttack":"Partneris tik puola","lesson.learned":"Technika išmokta!","lesson.again":"Klaida – iš naujo","lesson.demo":"Sensei rodo","lesson.free":"Pakartota","lesson.chainTip":"Renzoku: kitą techniką suvesk ankstesnės pabaigoje (paskutiniame animacijos trečdalyje).","wazacho.sub":"technikų knygelė","wazacho.count":"Išmokta technikų: {n} iš {total}","wazacho.empty":"Dar nieko neišmokai – eik į dojo pamokas.","bonus.damage":"žala","bonus.leg":"žala kojoms","bonus.balance":"varžovo pusiausvyra","bonus.unblockable":"neblokuojama","bonus.later":"bonusas – vėlesniuose diržuose","journey.title":"Kelionės žemėlapis","journey.current":"Dabartinis diržas","journey.stage4":"Šis skyrius bus pridėtas pilnoje versijoje (4 etapas).","journey.locked":"Pirmiausia baik ankstesnio skyriaus pamokas ir išlaikyk egzaminą.","journey.exam":"Egzaminas","journey.examPassed":"Išlaikytas","journey.examReady":"Kihon + kata + kumite ({n} kov.)","journey.examNeedsLessons":"Pirmiausia išmok visas skyriaus pamokas","journey.noExam":"Baltam diržui egzamino nėra – tik treniruotė","journey.take":"Laikyti","journey.open":"Atidaryti","journey.enter":"Dalyvauti","journey.optional":"neprivaloma","journey.series":"{n} kovos iš eilės","journey.bracket":"{n} dalyviai, eliminacija","exam.intro":"Trys dalys. Reikia surinkti ≥ {pass} ir nepralaimėti kumite per ippon.","exam.kihonDesc":"{n} komandų. Sensei šaukia japonišką pavadinimą – suvesk techniką per 2 s. Be užuominų.","exam.kataDesc":"Ritmo užduotis: suvesk simbolius laiku.","exam.kumiteDesc":"Kovos iš eilės; tarp jų atsistato tik 30 % žalos. Vertinama ir pagarba (REI).","exam.kihonHelp":"Sensei šaukia – tu atlieki. Be užuominų.","exam.kataHelp":"Suvesk simbolį, kai jis pasiekia rėmelį","exam.kihonResult":"Teisingai: {n} iš {total}","exam.miss":"ne ta technika","exam.respect":"Pagarba","exam.failed":"Egzaminas neišlaikytas","exam.failedIppon":"Pralaimėta per ippon.","exam.failedScore":"Reikia surinkti ≥ {pass}.","exam.retry":"Gali kartoti po bet kurios treniruotės.","exam.passed":"Egzaminas išlaikytas!","exam.newBelt":"Sensei užriša tau naują diržą: {belt} ({kyu} kyu).","exam.unlocked":"Išmoktos šio diržo technikos","kata.perfect":"Puiku","kata.good":"Gerai","kata.miss":"Praleista","story.white":"Atėjai į miesto dojo. Sensei parodo, kur nusilenkti: „Osu!“","story.orange":"Pirmasis spalvotas diržas. Sensei linkteli: „Dabar prasideda tikras darbas. Miesto turnyras laukia.“","story.blue":"Mėlynas diržas – kaip dangus, į kurį auga medis. Sensei: „Regiono turnyre pamatysi, ko išmokai.“","tour.fight":"Kova {n} iš {total}","tour.fightBtn":"Į tatamį","tour.next":"Kitas varžovas","tour.quarter":"Ketvirtfinalis","tour.semi":"Pusfinalis","tour.final":"Finalas","tour.out":"Šį kartą iškritai.","tour.champion":"Čempionas","tour.won":"Turnyras laimėtas!","tour.stripe":"Gauni juostelę ant diržo: {kyu} kyu","arch.tank":"Tankas – spaudžia arti","arch.kicker":"Spyrikas – laiko atstumą","arch.counter":"Kontratakuotojas – blokuoja ir atsako","quick.belt":"Tavo diržas","quick.opponent":"Varžovas","diff.easy":"Lengvas","diff.normal":"Normalus","diff.hard":"Sunkus","set.lang":"Kalba","set.difficulty":"Sunkumas","set.sound":"Garsas","set.music":"Muzika","set.voice":"Teisėjo balsas (japoniškai)","set.vibrate":"Vibracija pataikius","set.btnScale":"Mygtukų dydis","set.btnOpacity":"Mygtukų ryškumas","set.leftHanded":"Kairiarankio režimas","set.assist":"Pagalbos režimas (užuominos ir įvesties pėdsakas)","set.termsTranslated":"Terminai su vertimu","set.reset":"Ištrinti progresą","set.resetBtn":"Ištrinti","set.resetAsk":"Tikrai ištrinti visą progresą?","set.install":"Kad žaidimas veiktų be interneto ir per visą ekraną, įdiek jį: naršyklės meniu → „Įdiegti programą“ arba „Pridėti prie pradinio ekrano“.","debug.table":"Technikų parametrai","debug.signals":"Vėliavėlių signalai","debug.partner":"Partneris","debug.unlockAll":"Atrakinti viską","debug.boxesInFights":"Hitbox'ai kovose","debug.tech":"Technika"},"strings.en":{"_license":"SPDX-License-Identifier: BUSL-1.1","app.subtitle":"The Way of Karate","app.tagline":"A full-contact (knockdown) karate fighting game","start.tap":"Tap to start","start.ios":"iPhone: tap Share → Add to Home Screen to play in full screen.","menu.begin":"Begin the journey","menu.journey":"Continue the journey","menu.quick":"Quick fight","menu.settings":"Settings","ui.rotate":"Rotate your device to landscape","ui.paused":"Paused","ui.resume":"Resume","ui.quit":"Quit","ui.back":"Back","ui.next":"Next","ui.again":"Again","ui.yes":"yes","ui.no":"NO","ui.hold":"(hold)","hud.you":"YOU","hud.player":"Player","hud.locked":"locked","hud.mash":"Tap A / K / G – get up!","hud.perfect":"Perfect block!","zone.legs":"legs","zone.body":"body","zone.head":"head","result.win":"Victory!","result.lose":"Defeat","result.ippon":"Ippon","result.awasete":"Awasete ippon","result.hantei":"Hantei","result.shikkaku":"Shikkaku","result.ippon.desc":"Full point: the opponent did not get up within 3 s","result.awasete.desc":"Two waza-ari make an ippon","result.hantei.desc":"Judges' decision at the end of time","result.shikkaku.desc":"Disqualification: 4 warnings (chui)","result.encho":"extensions: {n}","result.yourDamage":"Your damage","result.oppDamage":"Opponent's damage","result.bowsMissed":"bows missed: {n}","call.aka_shiro":"The fighters step onto the tatami","call.shomen_ni_rei":"Bow to the front – press REI","call.shushin_ni_rei":"Bow to the referee – press REI","call.otagai_ni_rei":"Bow to each other – press REI","call.kamaete":"Fighting stance","call.hajime":"Begin!","call.yame":"Stop","call.zokko":"Continue","call.jikan":"Time stopped","call.fukushin_shugo":"Conference with the corner judges","call.shomen_muite":"Face the front","call.hantei_o_torimasu":"Taking the decision","call.hantei":"Decision!","call.hikiwake":"Draw","call.encho":"Extension","call.waza_ari":"Half point","call.ippon":"Full point","call.awasete_ippon":"Two waza-ari = ippon","call.chui_1":"First warning","call.chui_2":"Second warning","call.chui_3":"Third warning","call.shikkaku":"Disqualification","call.jogai":"Out of bounds","call.mitomezu":"Not recognised","call.oshi":"Warning gesture","call.aka":"Red","call.shiro":"White","call.aka_no_kachi":"Red wins","call.shiro_no_kachi":"White wins","call.osu":"Osu!","foul.illegal":"Illegal technique","foul.holding":"Holding / pushing","foul.passivity":"Passivity","foul.jogai":"Running out of bounds","foul.disrespect":"Disrespect (no bow)","foul.afterYame":"Attack after “Yame”","foul.downed":"Attack on a downed opponent","dojo.lessons":"Lessons","dojo.lessonsHelp":"Perform the technique {n} times in a row without a mistake – it is learned and goes into your Waza-chō.","dojo.learn":"Learn","dojo.repeat":"Repeat","dojo.practice":"Practise","dojo.free":"Free practice","dojo.freeHelp":"A sparring partner. Damage dealt is shown. Leave with the pause button.","dojo.partner":"Partner","dojo.partnerPassive":"Partner stands still","dojo.partnerBlock":"Partner only blocks","dojo.partnerAttack":"Partner only attacks","lesson.learned":"Technique learned!","lesson.again":"Mistake – start over","lesson.demo":"Sensei shows","lesson.free":"Reps","lesson.chainTip":"Renzoku: enter the next technique at the end of the previous one (the last third of its animation).","wazacho.sub":"technique notebook","wazacho.count":"Techniques learned: {n} of {total}","wazacho.empty":"Nothing learned yet – go to the dojo lessons.","bonus.damage":"damage","bonus.leg":"leg damage","bonus.balance":"opponent's balance","bonus.unblockable":"unblockable","bonus.later":"bonus – in later belts","journey.title":"Journey map","journey.current":"Current belt","journey.stage4":"This chapter will be added in the full version (stage 4).","journey.locked":"First finish the previous chapter's lessons and pass the exam.","journey.exam":"Exam","journey.examPassed":"Passed","journey.examReady":"Kihon + kata + kumite ({n} fights)","journey.examNeedsLessons":"First learn all lessons of this chapter","journey.noExam":"No exam for the white belt – training only","journey.take":"Take","journey.open":"Open","journey.enter":"Enter","journey.optional":"optional","journey.series":"{n} fights in a row","journey.bracket":"{n} entrants, knockout","exam.intro":"Three parts. You need ≥ {pass} overall and must not lose a kumite bout by ippon.","exam.kihonDesc":"{n} commands. Sensei shouts the Japanese name – perform the technique within 2 s. No hints.","exam.kataDesc":"Rhythm task: enter the symbols on time.","exam.kumiteDesc":"Bouts in a row; only 30 % of damage recovers between them. Respect (REI) is graded too.","exam.kihonHelp":"Sensei shouts – you perform. No hints.","exam.kataHelp":"Enter the symbol when it reaches the frame","exam.kihonResult":"Correct: {n} of {total}","exam.miss":"wrong technique","exam.respect":"Respect","exam.failed":"Exam failed","exam.failedIppon":"Lost by ippon.","exam.failedScore":"You need ≥ {pass}.","exam.retry":"You can retry after any training session.","exam.passed":"Exam passed!","exam.newBelt":"Sensei ties your new belt: {belt} ({kyu} kyu).","exam.unlocked":"Techniques learned for this belt","kata.perfect":"Perfect","kata.good":"Good","kata.miss":"Missed","story.white":"You walk into the city dojo. Sensei shows you where to bow: “Osu!”","story.orange":"Your first coloured belt. Sensei nods: “Now the real work begins. The city tournament is waiting.”","story.blue":"The blue belt – like the sky a tree grows towards. Sensei: “At the regional tournament you will see what you have learned.”","tour.fight":"Fight {n} of {total}","tour.fightBtn":"To the tatami","tour.next":"Next opponent","tour.quarter":"Quarter-final","tour.semi":"Semi-final","tour.final":"Final","tour.out":"You are out this time.","tour.champion":"Champion","tour.won":"Tournament won!","tour.stripe":"You earn a stripe on your belt: {kyu} kyu","arch.tank":"Tank – presses in close","arch.kicker":"Kicker – keeps distance","arch.counter":"Counter-fighter – blocks and answers","quick.belt":"Your belt","quick.opponent":"Opponent","diff.easy":"Easy","diff.normal":"Normal","diff.hard":"Hard","set.lang":"Language","set.difficulty":"Difficulty","set.sound":"Sound","set.music":"Music","set.voice":"Referee voice (Japanese)","set.vibrate":"Vibration on hit","set.btnScale":"Button size","set.btnOpacity":"Button opacity","set.leftHanded":"Left-handed mode","set.assist":"Assist mode (hints and input trail)","set.termsTranslated":"Terms with translation","set.reset":"Erase progress","set.resetBtn":"Erase","set.resetAsk":"Really erase all progress?","set.install":"To play offline and in full screen, install the game: browser menu → Install app or Add to Home Screen.","debug.table":"Technique parameters","debug.signals":"Flag signals","debug.partner":"Partner","debug.unlockAll":"Unlock all","debug.boxesInFights":"Hitboxes in fights","debug.tech":"Technique"}};
__def('src/main.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Paleidimas ir scenų valdytojas.

const { loadData } = __req('src/core/data.js');
const { startLoop } = __req('src/core/loop.js');
const { Input } = __req('src/core/input.js');
const { AudioSys } = __req('src/core/audio.js');
const { Save } = __req('src/core/save.js');
const { setLang, detectLang, t } = __req('src/core/i18n.js');
const { TouchControls } = __req('src/ui/touchControls.js');
const { Ui } = __req('src/ui/ui.js');
const { mainMenu } = __req('src/ui/menus.js');
const { FightScene } = __req('src/fight/fightScene.js');
const { makeBackground, W, H } = __req('src/fight/render.js');
const $ = (id) => document.getElementById(id);

// Senesnėms naršyklėms (pvz., iPad su Safari < 16), kuriose nėra CanvasRenderingContext2D.roundRect.
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function roundRect(x, y, w, h, r = 0) {
    const k = Math.min(r, w / 2, h / 2);
    this.moveTo(x + k, y);
    this.arcTo(x + w, y, x + w, y + h, k);
    this.arcTo(x + w, y + h, x, y + h, k);
    this.arcTo(x, y + h, x, y, k);
    this.arcTo(x, y, x + w, y, k);
    this.closePath();
  };
}

class Game {
  constructor(db) {
    this.db = db;
    this.save = new Save();
    this.save.load();
    this.settings = this.save.data.settings;
    if (!this.settings.lang) { this.settings.lang = detectLang(); this.save.write(); }
    setLang(db, this.settings.lang);
    this.canvas = $('game');
    this.ctx = this.canvas.getContext('2d');
    this.input = new Input();
    this.input.attachKeyboard(window);
    this.input.onPause = () => this.pause();
    this.audio = new AudioSys(this.settings);
    this.touch = new TouchControls($('touch'), this.input, this.settings);
    this.ui = new Ui($('ui'), this.audio);
    this.scene = null;
    this.paused = false;
    this.debugBoxes = false;
    this.menuBg = makeBackground('dojo', db.rules.arena);
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.scene) this.pause(); });
    $('rotate').textContent = t('ui.rotate');
  }

  // Virtuali 1280×720 raiška, letterbox, canvas × devicePixelRatio (daugiausia 2).
  resize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / W, vh / H);
    const cw = Math.floor(W * scale);
    const ch = Math.floor(H * scale);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.canvas.style.width = `${cw}px`;
    this.canvas.style.height = `${ch}px`;
    this.canvas.style.left = `${Math.floor((vw - cw) / 2)}px`;
    this.canvas.style.top = `${Math.floor((vh - ch) / 2)}px`;
    this.canvas.width = Math.round(cw * dpr);
    this.canvas.height = Math.round(ch * dpr);
    this.viewScale = (cw * dpr) / W;
    this.touch.layout();
  }

  // Pirmas bakstelėjimas: pilnas ekranas, horizontali padėtis ir garso atrakinimas.
  enterFullscreen() {
    this.audio.unlock();
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!req || document.fullscreenElement) return;
    try {
      const p = req.call(el, { navigationUI: 'hide' });
      if (p && p.then) p.then(() => screen.orientation?.lock?.('landscape')?.catch?.(() => {})).catch(() => {});
    } catch (e) { /* iPhone Safari: naudojamas PWA režimas */ }
  }

  vibrate(ms) {
    if (this.settings.vibrate && navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) { /* nepalaikoma */ } }
  }

  applySettings() {
    setLang(this.db, this.settings.lang);
    this.touch.layout();
    $('rotate').textContent = t('ui.rotate');
    this.save.write();
  }

  runScene(scene) {
    return new Promise((resolve) => {
      this.ui.clear();
      this.scene = scene;
      scene.onDone = (result) => {
        scene.destroy();
        if (this.scene === scene) this.scene = null;
        resolve(result);
      };
    });
  }

  runFight(opts) {
    return this.runScene(new FightScene(this, opts));
  }

  pause() {
    if (!this.scene || this.paused) return;
    this.paused = true;
    this.input.clear();
    const el = $('pause');
    el.style.display = 'flex';
    el.innerHTML = `<div class="panel center"><h2>${t('ui.paused')}</h2>
      <button class="btn primary" data-p="resume">${t('ui.resume')}</button>
      <button class="btn" data-p="quit">${t('ui.quit')}</button></div>`;
    el.onclick = (e) => {
      const b = e.target.closest('[data-p]');
      if (!b) return;
      el.style.display = 'none';
      this.paused = false;
      this.input.clear();
      if (b.dataset.p === 'quit' && this.scene) this.scene.finish({ aborted: true });
    };
  }

  update(dt) {
    if (this.scene && !this.paused) this.scene.update(dt);
  }

  render(alpha) {
    const ctx = this.ctx;
    ctx.setTransform(this.viewScale, 0, 0, this.viewScale, 0, 0);
    if (this.scene) this.scene.render(ctx, this.paused ? 1 : alpha);
    else {
      ctx.drawImage(this.menuBg, 0, 0);
      ctx.fillStyle = 'rgba(12,14,22,0.55)';
      ctx.fillRect(0, 0, W, H);
    }
  }
}

async function boot() {
  let db;
  try {
    db = await loadData();
  } catch (e) {
    $('ui').className = 'ui-on';
    $('ui').innerHTML = `<div class="panel center"><h2>Nepavyko įkelti žaidimo duomenų</h2><p>${String(e.message || e)}</p></div>`;
    return;
  }
  const game = new Game(db);
  window.__game = game;
  startLoop((dt) => game.update(dt), (a) => game.render(a));
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  mainMenu(game);
}

boot();


});
__def('src/core/data.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Žaidimo duomenų (/data/*.json) įkėlimas ir indeksai.

const DATA_FILES = {
  techniques: 'data/techniques.json',
  combos: 'data/combos.json',
  belts: 'data/belts.json',
  opponents: 'data/opponents.json',
  kata: 'data/kata.json',
  rules: 'data/rules.json',
  anim: 'assets/anim/poses.json',
  'strings.lt': 'data/strings.lt.json',
  'strings.en': 'data/strings.en.json',
};

function buildDb(raw) {
  const db = {
    techniques: raw.techniques.techniques,
    combos: raw.combos.combos,
    belts: raw.belts.belts,
    opponents: raw.opponents,
    kata: raw.kata.kata,
    rules: raw.rules,
    anim: raw.anim,
    strings: { lt: raw['strings.lt'] || {}, en: raw['strings.en'] || {} },
  };
  db.tech = {};
  db.beltIdx = {};
  db.belts.forEach((b, i) => { db.beltIdx[b.id] = i; });
  for (const t of db.techniques) {
    t.button = t.input[t.input.length - 1];
    db.tech[t.id] = t;
  }
  db.combo = Object.fromEntries(db.combos.map((c) => [c.id, c]));
  db.guardByLevel = {};
  for (const t of db.techniques) {
    if (t.type === 'guard' && !t.auto && !t.hold && t.input.length <= 2 && !db.guardByLevel[t.level]) db.guardByLevel[t.level] = t;
  }
  return db;
}

// Technikų id rinkinys iki nurodyto diržo imtinai.
function techsUpTo(db, beltId) {
  const max = db.beltIdx[beltId];
  return new Set(db.techniques.filter((t) => db.beltIdx[t.belt] <= max).map((t) => t.id));
}

function combosUpTo(db, beltId) {
  const max = db.beltIdx[beltId];
  return new Set(db.combos.filter((c) => db.beltIdx[c.belt] <= max).map((c) => c.id));
}

async function loadData() {
  if (globalThis.__OSU_DATA__) return buildDb(globalThis.__OSU_DATA__);
  const raw = {};
  await Promise.all(Object.entries(DATA_FILES).map(async ([key, path]) => {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Nepavyko įkelti ${path}`);
    raw[key] = await res.json();
  }));
  return buildDb(raw);
}

__exp.DATA_FILES = DATA_FILES;
__exp.buildDb = buildDb;
__exp.techsUpTo = techsUpTo;
__exp.combosUpTo = combosUpTo;
__exp.loadData = loadData;
});
__def('src/core/loop.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Žaidimo ciklas: fiksuotas 60 Hz logikos žingsnis (akumuliatorius), piešimas per requestAnimationFrame su interpoliacija.

const STEP = 1000 / 60;

function startLoop(update, render) {
  let last = performance.now();
  let acc = 0;
  function frame(now) {
    requestAnimationFrame(frame);   // pirmiausia – kad klaida viename kadre nesustabdytų ciklo
    acc += Math.min(100, now - last);
    last = now;
    let n = 0;
    while (acc >= STEP && n < 6) {
      update(STEP);
      acc -= STEP;
      n++;
    }
    if (n === 6) acc = 0;
    render(acc / STEP);
  }
  requestAnimationFrame(frame);
}

__exp.STEP = STEP;
__exp.startLoop = startLoop;
});
__def('src/core/input.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Įvesties eilė: lietimo valdikliai ir klaviatūra rašo įvykius su laiko žymomis, kovos logika juos nuskaito
// fiksuotu žingsniu – taip nė vienas paspaudimas neprarandamas net jei jis trumpesnis už kadrą.

const { dirFromVector } = __req('src/core/combo.js');
const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

class Input {
  constructor() {
    this.q = [];
    this.held = { A: false, K: false, G: false, KIAI: false };
    this.dir = 'N';
    this.rei = 0;
    this.onPause = null;
    this.keys = {};
  }

  setDir(dir, t = now()) {
    if (dir === this.dir) return;
    this.dir = dir;
    this.q.push({ k: 'dir', dir, t });
  }

  button(btn, down, t = now()) {
    if (this.held[btn] === down) return;
    this.held[btn] = down;
    this.q.push({ k: down ? 'down' : 'up', btn, t });
  }

  pressRei() { this.rei++; }

  takeRei() {
    const r = this.rei > 0;
    this.rei = 0;
    return r;
  }

  drain() {
    const q = this.q;
    this.q = [];
    return q;
  }

  clear() {
    this.q = [];
    this.rei = 0;
    for (const b of Object.keys(this.held)) this.held[b] = false;
    this.dir = 'N';
    this.keys = {};
  }

  // Klaviatūra testavimui kompiuteryje: rodyklės + J/K/L (A/K/G), I arba tarpas = KIAI, Enter = REI, Esc = pauzė.
  attachKeyboard(target) {
    const MAP = { KeyJ: 'A', KeyK: 'K', KeyL: 'G', KeyI: 'KIAI', Space: 'KIAI' };
    const ARROWS = { ArrowLeft: 1, ArrowRight: 1, ArrowUp: 1, ArrowDown: 1 };
    const updateDir = () => {
      const dx = (this.keys.ArrowRight ? 1 : 0) - (this.keys.ArrowLeft ? 1 : 0);
      const dy = (this.keys.ArrowDown ? 1 : 0) - (this.keys.ArrowUp ? 1 : 0);
      this.setDir(dirFromVector(dx, dy, 0.2));
    };
    target.addEventListener('keydown', (e) => {
      if (e.repeat) { if (ARROWS[e.code] || MAP[e.code]) e.preventDefault(); return; }
      if (ARROWS[e.code]) { this.keys[e.code] = true; updateDir(); e.preventDefault(); }
      else if (MAP[e.code]) { this.button(MAP[e.code], true); e.preventDefault(); }
      else if (e.code === 'Enter' || e.code === 'KeyR') this.pressRei();
      else if (e.code === 'Escape' || e.code === 'KeyP') this.onPause?.();
    });
    target.addEventListener('keyup', (e) => {
      if (ARROWS[e.code]) { this.keys[e.code] = false; updateDir(); }
      else if (MAP[e.code]) this.button(MAP[e.code], false);
    });
  }
}

__exp.Input = Input;
});
__def('src/core/combo.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Kombinacijų atpažinimas: krypčių seka + mygtukas. Grynas modulis (be DOM), testuojamas Node aplinkoje.
// Kryptys visada santykinės: F = link varžovo (→), B = nuo varžovo (←), U, D ir įstrižainės.

const BUTTONS = new Set(['A', 'K', 'G', 'KIAI']);
const ANGLE = { F: 0, UF: 45, U: 90, UB: 135, B: 180, DB: 225, D: 270, DF: 315 };

// Ar istorijos kryptis `dir` tenkina šablono elementą `tok`.
function has(dir, tok) {
  return tok.length === 2 ? dir === tok : dir.includes(tok);
}

function weight(input) {
  let w = 0;
  for (const tok of input) w += tok === 'CIRCLE' ? 4 : 1;
  return w;
}

function matchSeq(tokens, hist, presses, now, cfg, limit) {
  const n = tokens.length;
  if (!n) return true;
  const last = tokens[n - 1];
  if (BUTTONS.has(last)) {
    // Šablone yra ankstesnis mygtuko paspaudimas (pvz., ↑↑K K).
    for (let i = presses.length - 1; i >= 0; i--) {
      const p = presses[i];
      if (p.btn !== last) continue;
      if (now - p.t > cfg.bufferMs) return false;
      return matchSeq(tokens.slice(0, -1), hist.filter((h) => h.t <= p.t), presses.slice(0, i), p.t, cfg, cfg.buttonMs);
    }
    return false;
  }
  let idx = hist.length - 1;
  let nextStart = now;
  for (let k = n - 1; k >= 0; k--) {
    const tok = tokens[k];
    if (tok === 'CIRCLE') {
      while (idx >= 0 && hist[idx].dir === 'N') idx--;
      if (idx < 1) return false;
      const end = idx + 1 < hist.length ? hist[idx + 1].t : now;
      if (nextStart - end > limit) return false;
      let total = 0;
      let sign = 0;
      let j = idx;
      while (j - 1 >= 0 && hist[j - 1].dir !== 'N' && total < 360) {
        let d = ANGLE[hist[j].dir] - ANGLE[hist[j - 1].dir];
        d = ((d + 540) % 360) - 180;
        if (d === 0 || Math.abs(d) > 90) break;
        if (sign && Math.sign(d) !== sign) break;
        if (hist[j].t - hist[j - 1].t > cfg.bufferMs) break;
        sign = Math.sign(d);
        total += Math.abs(d);
        j--;
      }
      if (total < 270) return false;
      nextStart = hist[j].t;
      idx = j - 1;
      limit = cfg.bufferMs;
      continue;
    }
    while (idx >= 0 && !has(hist[idx].dir, tok)) idx--;
    if (idx < 0) return false;
    const end = idx + 1 < hist.length ? hist[idx + 1].t : now;
    if (nextStart - end > limit) return false;
    const prev = k > 0 ? tokens[k - 1] : null;
    // Pratęsiame elementą atgal per gretimus įrašus, bet nepasisaviname įrašo, kurio reikia ankstesniam elementui.
    while (idx - 1 >= 0 && has(hist[idx - 1].dir, tok) &&
      !(prev && prev !== tok && prev !== 'CIRCLE' && has(hist[idx - 1].dir, prev))) idx--;
    nextStart = hist[idx].t;
    idx--;
    limit = cfg.bufferMs;
  }
  return true;
}

class ComboRecognizer {
  // techniques: visos technikos (ir neatrakintos) su `input` masyvu; cfg: { bufferMs, buttonMs }.
  constructor(techniques, cfg = {}) {
    this.cfg = { bufferMs: 350, buttonMs: 200, ...cfg };
    this.cands = {};
    techniques.forEach((t, order) => {
      if (!t.input || t.auto || t.hold) return;
      const btn = t.input[t.input.length - 1];
      const dirs = t.input.slice(0, -1);
      const lastDir = dirs[dirs.length - 1];
      (this.cands[btn] ||= []).push({ tech: t, dirs, w: weight(dirs), vert: lastDir === 'U' || lastDir === 'D' ? 1 : 0, order });
    });
    // Ilgiausia seka pirma; esant lygiam ilgiui – vertikali kryptis (lygio keitimas) svarbesnė.
    for (const list of Object.values(this.cands)) list.sort((a, b) => b.w - a.w || b.vert - a.vert || a.order - b.order);
    this.reset();
  }

  reset() {
    this.hist = [{ dir: 'N', t: -1e12 }];
    this.presses = [];
  }

  get dir() {
    return this.hist[this.hist.length - 1].dir;
  }

  pushDir(dir, t) {
    if (this.dir === dir) return;
    this.hist.push({ dir, t });
    if (this.hist.length > 20) this.hist.shift();
  }

  // Grąžina { tech, matched, locked }: tech – ką vykdyti; matched – atpažintos sekos id;
  // locked – seka atpažinta, bet technika neatrakinta (tada vykdoma paprasčiausia to mygtuko technika).
  press(btn, t, unlocked) {
    const list = this.cands[btn] || [];
    let found = null;
    for (const c of list) {
      if (matchSeq(c.dirs, this.hist, this.presses, t, this.cfg, this.cfg.buttonMs)) { found = c.tech; break; }
    }
    this.presses.push({ btn, t });
    if (this.presses.length > 8) this.presses.shift();
    if (!found) return { tech: null, matched: null, locked: false };
    if (!unlocked || unlocked.has(found.id)) return { tech: found, matched: found.id, locked: false };
    const base = list.find((c) => c.dirs.length === 0);
    return { tech: base && unlocked.has(base.tech.id) ? base.tech : null, matched: found.id, locked: true };
  }
}

// Analoginio vektoriaus (ekrano koordinatės, y žemyn) vertimas į 8 kryptis. → visada reiškia „link varžovo“.
function dirFromVector(dx, dy, deadzone = 0.2) {
  if (Math.hypot(dx, dy) < deadzone) return 'N';
  const a = (Math.atan2(-dy, dx) * 180) / Math.PI;
  const s = Math.round(a / 45);
  return ['B', 'DB', 'D', 'DF', 'F', 'UF', 'U', 'UB', 'B'][s + 4];
}

const GLYPH = { F: '→', B: '←', U: '↑', D: '↓', DF: '↘', UF: '↗', DB: '↙', UB: '↖', CIRCLE: '○' };
function inputGlyphs(input) {
  return input.map((tok) => GLYPH[tok] || tok);
}

__exp.ComboRecognizer = ComboRecognizer;
__exp.dirFromVector = dirFromVector;
__exp.inputGlyphs = inputGlyphs;
});
__def('src/core/audio.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Garsas: Web Audio API, atrakinamas pirmu bakstelėjimu. Visi garsai sintezuojami kodu (originalūs, be failų);
// teisėjo balsas – Web Speech API (ja-JP) kaip laikinas sprendimas, kol nėra įrašytų šūksnių.

class AudioSys {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.musicTimer = null;
    this.musicKind = null;
    this.crowd = null;
  }

  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.8;
      this.master.connect(this.ctx.destination);
      const len = this.ctx.sampleRate;
      this.noiseBuf = this.ctx.createBuffer(1, len, len);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { this.ctx = null; }
  }

  get on() { return !!this.ctx && this.settings.sound; }

  tone(freq, dur, { type = 'sine', vol = 0.3, to = null, delay = 0, attack = 0.005 } = {}) {
    const c = this.ctx;
    const t0 = c.currentTime + delay;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(this.master);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  noise(dur, { vol = 0.3, type = 'bandpass', freq = 1000, q = 1, delay = 0, to = null } = {}) {
    const c = this.ctx;
    const t0 = c.currentTime + delay;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t0);
    if (to) f.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f).connect(g).connect(this.master);
    s.start(t0, Math.random() * 0.5);
    s.stop(t0 + dur + 0.05);
  }

  // Smūgių garsai pagal zoną: duslūs į liemenį, aštresni į kojas ir galvą.
  hit(zone, strength = 0.5) {
    if (!this.on) return;
    const v = 0.25 + strength * 0.35;
    if (zone === 'body') { this.tone(95, 0.16, { to: 45, vol: v }); this.noise(0.08, { vol: v * 0.5, type: 'lowpass', freq: 500 }); }
    else if (zone === 'legs') { this.noise(0.07, { vol: v, freq: 1800, q: 0.8 }); this.tone(130, 0.1, { to: 70, vol: v * 0.7 }); }
    else { this.tone(180, 0.12, { to: 80, vol: v }); this.noise(0.05, { vol: v * 0.7, freq: 2600 }); }
  }

  block() { if (this.on) { this.noise(0.06, { vol: 0.25, freq: 1300, q: 1.5 }); this.tone(220, 0.05, { vol: 0.1, type: 'triangle' }); } }

  // „Trakštelėjimas“ blokuojant žemą spyrį blauzda.
  sune() { if (this.on) { this.noise(0.03, { vol: 0.5, freq: 3400, q: 2 }); this.noise(0.05, { vol: 0.3, freq: 900, delay: 0.02 }); } }

  whoosh() { if (this.on) this.noise(0.12, { vol: 0.06, freq: 500, to: 1800, q: 0.7 }); }

  thud() { if (this.on) { this.tone(70, 0.3, { to: 35, vol: 0.5 }); this.noise(0.15, { vol: 0.25, type: 'lowpass', freq: 300 }); } }

  // Švilpukai: 'long' (1 ilgas), 'strong' (1 stiprus), 'shorts' (keli trumpi), 'short' (1 trumpas).
  whistle(kind) {
    if (!this.on) return;
    const one = (delay, dur, vol) => {
      this.tone(2950, dur, { vol, delay, type: 'sine', attack: 0.01 });
      this.tone(3120, dur, { vol: vol * 0.7, delay, type: 'sine', attack: 0.01 });
      this.noise(dur, { vol: vol * 0.25, freq: 3000, q: 4, delay });
    };
    if (kind === 'long') one(0, 0.9, 0.16);
    else if (kind === 'strong') one(0, 0.38, 0.24);
    else if (kind === 'short') one(0, 0.14, 0.16);
    else for (let i = 0; i < 3; i++) one(i * 0.16, 0.09, 0.16);
  }

  kiai(variant = 0) {
    if (!this.on) return;
    const base = 210 + variant * 45;
    this.tone(base, 0.28, { type: 'sawtooth', to: base * 1.6, vol: 0.16 });
    this.noise(0.25, { vol: 0.14, freq: 1100, q: 2 });
  }

  osu() {
    if (!this.on) return;
    this.tone(125, 0.34, { type: 'sawtooth', to: 96, vol: 0.14 });
    this.noise(0.18, { vol: 0.07, freq: 700, q: 1.5, delay: 0.14 });
  }

  ui() { if (this.on) this.tone(660, 0.06, { type: 'triangle', vol: 0.12 }); }

  good() { if (this.on) { this.tone(660, 0.1, { type: 'triangle', vol: 0.15 }); this.tone(990, 0.16, { type: 'triangle', vol: 0.15, delay: 0.09 }); } }

  bad() { if (this.on) this.tone(200, 0.22, { type: 'square', to: 120, vol: 0.1 }); }

  taiko(vol = 0.5, delay = 0) {
    if (!this.on) return;
    this.tone(82, 0.5, { to: 48, vol, delay });
    this.noise(0.05, { vol: vol * 0.3, type: 'lowpass', freq: 400, delay });
  }

  // Muzika: taiko būgnai meniu, žiūrovų ūžesys turnyruose; kovos metu tylu.
  music(kind) {
    if (kind === this.musicKind) return;
    this.musicKind = kind;
    if (this.musicTimer) { clearInterval(this.musicTimer); this.musicTimer = null; }
    if (this.crowd) { try { this.crowd.stop(); } catch (e) { /* jau sustabdyta */ } this.crowd = null; }
    if (!this.ctx || !this.settings.music || !kind) return;
    if (kind === 'taiko') {
      const pattern = [1, 0, 0, 0.5, 1, 0, 0.6, 0, 1, 0, 0.5, 0.5, 1, 0.6, 0, 0];
      let i = 0;
      this.musicTimer = setInterval(() => {
        if (!this.settings.music || this.ctx.state !== 'running') return;
        const v = pattern[i++ % pattern.length];
        if (v) this.taiko(0.22 * v);
      }, 260);
    } else if (kind === 'crowd') {
      const s = this.ctx.createBufferSource();
      s.buffer = this.noiseBuf;
      s.loop = true;
      const f = this.ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 420;
      f.Q.value = 0.5;
      const g = this.ctx.createGain();
      g.gain.value = 0.035;
      s.connect(f).connect(g).connect(this.master);
      s.start();
      this.crowd = s;
    }
  }

  // Teisėjo ir sensei balsas japoniškai (jei įrenginys turi balsą).
  speak(text) {
    if (!this.settings.sound || !this.settings.voice) return;
    const synth = globalThis.speechSynthesis;
    if (!synth || !globalThis.SpeechSynthesisUtterance) return;
    try {
      const u = new SpeechSynthesisUtterance(text.replace(/[!–]/g, ' '));
      u.lang = 'ja-JP';
      u.rate = 1.05;
      u.volume = 0.9;
      synth.cancel();
      synth.speak(u);
    } catch (e) { /* balso nėra – lieka subtitrai */ }
  }
}

__exp.AudioSys = AudioSys;
});
__def('src/core/save.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Progreso išsaugojimas localStorage su versijuota schema.

const SAVE_KEY = 'osu-karates-kelias';
const SAVE_VERSION = 1;

function defaultSave() {
  return {
    v: SAVE_VERSION,
    settings: {
      lang: null, sound: true, music: true, voice: true, vibrate: true,
      btnScale: 1, btnOpacity: 0.6, leftHanded: false, assist: true,
      difficulty: 'normal', termsTranslated: true,
    },
    beltIndex: 0,          // dabartinis diržas (0 = baltas)
    stripes: {},           // { orange: true } – antras kyu (juostelė) už laimėtą skyriaus turnyrą
    learned: [],           // išmoktų technikų id
    learnedCombos: [],     // išmoktų kombinacijų id
    trophies: [],          // laimėtų turnyrų id
    exams: {},             // { orange: { best: 0.82, passed: true } }
    stats: { fights: 0, wins: 0 },
  };
}

function migrate(data) {
  const base = defaultSave();
  if (!data || typeof data !== 'object') return base;
  // v0 → v1 ir būsimos migracijos: trūkstami laukai užpildomi numatytaisiais.
  const out = { ...base, ...data, v: SAVE_VERSION };
  out.settings = { ...base.settings, ...(data.settings || {}) };
  out.stats = { ...base.stats, ...(data.stats || {}) };
  for (const k of ['learned', 'learnedCombos', 'trophies']) if (!Array.isArray(out[k])) out[k] = [];
  return out;
}

class Save {
  constructor(storage) {
    this.storage = storage || (typeof localStorage !== 'undefined' ? localStorage : null);
    this.data = defaultSave();
  }

  load() {
    try {
      const raw = this.storage && this.storage.getItem(SAVE_KEY);
      this.data = migrate(raw ? JSON.parse(raw) : null);
    } catch (e) {
      this.data = defaultSave();
    }
    return this.data;
  }

  write() {
    try {
      if (this.storage) this.storage.setItem(SAVE_KEY, JSON.stringify(this.data));
    } catch (e) { /* privatus režimas ar pilna saugykla – žaidimas tęsiasi be išsaugojimo */ }
  }

  reset() {
    const settings = this.data.settings;
    this.data = defaultSave();
    this.data.settings = settings;
    this.write();
  }

  learn(id, combo) {
    const list = combo ? this.data.learnedCombos : this.data.learned;
    if (!list.includes(id)) { list.push(id); this.write(); }
  }
}

__exp.SAVE_KEY = SAVE_KEY;
__exp.SAVE_VERSION = SAVE_VERSION;
__exp.defaultSave = defaultSave;
__exp.Save = Save;
});
__def('src/core/i18n.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Vertimai: data/strings.lt.json ir data/strings.en.json.

let dict = {};
let fallback = {};
let current = 'lt';

function setLang(db, lang) {
  current = db.strings[lang] ? lang : 'lt';
  dict = db.strings[current] || {};
  fallback = db.strings.lt || {};
  if (typeof document !== 'undefined') document.documentElement.lang = current;
}

function lang() {
  return current;
}

function t(key, vars) {
  let s = dict[key] ?? fallback[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));
  return s;
}

// Lokalizuotas duomenų laukas: loc(tech, 'name') → nameLt arba nameEn.
function loc(obj, base) {
  return obj[base + (current === 'lt' ? 'Lt' : 'En')] ?? obj[`${base}Lt`] ?? '';
}

function detectLang() {
  const l = (typeof navigator !== 'undefined' && navigator.language) || 'en';
  return l.toLowerCase().startsWith('lt') ? 'lt' : 'en';
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

__exp.setLang = setLang;
__exp.lang = lang;
__exp.t = t;
__exp.loc = loc;
__exp.detectLang = detectLang;
__exp.esc = esc;
});
__def('src/ui/touchControls.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Lietimo valdikliai: plaukiojantis džoistikas (kairė ~40 % ekrano) ir mygtukai A / K / G + KIAI lanku dešinėje.
// Pointer Events su multi-touch: kiekvienas pointerId sekamas atskirai, todėl džoistikas ir mygtukai veikia vienu metu.

const { dirFromVector } = __req('src/core/combo.js');
const GAP = 12;
const STICK_R = 62;

class TouchControls {
  constructor(root, input, settings) {
    this.root = root;
    this.input = input;
    this.settings = settings;
    this.stickId = null;
    this.origin = { x: 0, y: 0 };
    this.btnPointers = new Map();
    this.kiaiReady = false;
    root.innerHTML = `
      <div class="tc-zone"></div>
      <div class="tc-stick"><div class="tc-knob"></div></div>
      <button class="tc-btn tc-a" data-btn="A"><b>A</b><span>TE</span></button>
      <button class="tc-btn tc-k" data-btn="K"><b>K</b><span>ASHI</span></button>
      <button class="tc-btn tc-g" data-btn="G"><b>G</b><span>UKE</span></button>
      <button class="tc-btn tc-kiai" data-btn="KIAI"><b>気</b><span>KIAI</span></button>
      <button class="tc-pause" aria-label="Pause">II</button>
      <button class="tc-rei">REI</button>`;
    this.zone = root.querySelector('.tc-zone');
    this.stick = root.querySelector('.tc-stick');
    this.knob = root.querySelector('.tc-knob');
    this.rei = root.querySelector('.tc-rei');
    this.pause = root.querySelector('.tc-pause');
    this.buttons = [...root.querySelectorAll('.tc-btn')];

    const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
    this.zone.addEventListener('pointerdown', (e) => {
      stop(e);
      if (this.stickId !== null) return;
      this.stickId = e.pointerId;
      try { this.zone.setPointerCapture(e.pointerId); } catch (err) { /* sintetiniai įvykiai */ }
      this.origin = { x: e.clientX, y: e.clientY };
      this.stick.style.display = 'block';
      this.stick.style.left = `${e.clientX}px`;
      this.stick.style.top = `${e.clientY}px`;
      this.moveStick(e);
    });
    this.zone.addEventListener('pointermove', (e) => { if (e.pointerId === this.stickId) { stop(e); this.moveStick(e); } });
    const endStick = (e) => {
      if (e.pointerId !== this.stickId) return;
      stop(e);
      this.stickId = null;
      this.stick.style.display = 'none';
      this.input.setDir('N');
    };
    this.zone.addEventListener('pointerup', endStick);
    this.zone.addEventListener('pointercancel', endStick);

    for (const el of this.buttons) {
      const btn = el.dataset.btn;
      el.addEventListener('pointerdown', (e) => {
        stop(e);
        try { el.setPointerCapture(e.pointerId); } catch (err) { /* sintetiniai įvykiai */ }
        this.btnPointers.set(e.pointerId, btn);
        el.classList.add('down');
        this.input.button(btn, true);
      });
      const up = (e) => {
        if (!this.btnPointers.has(e.pointerId)) return;
        stop(e);
        this.btnPointers.delete(e.pointerId);
        el.classList.remove('down');
        this.input.button(btn, false);
      };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
    }
    this.rei.addEventListener('pointerdown', (e) => { stop(e); this.input.pressRei(); });
    this.pause.addEventListener('pointerdown', (e) => { stop(e); this.input.onPause?.(); });
    root.addEventListener('contextmenu', (e) => e.preventDefault());
    globalThis.addEventListener?.('resize', () => this.layout());
    this.setMode('none');
    this.layout();
  }

  moveStick(e) {
    let dx = (e.clientX - this.origin.x) / STICK_R;
    let dy = (e.clientY - this.origin.y) / STICK_R;
    const m = Math.hypot(dx, dy);
    if (m > 1) { dx /= m; dy /= m; }
    this.knob.style.transform = `translate(${dx * STICK_R}px, ${dy * STICK_R}px)`;
    this.input.setDir(dirFromVector(dx, dy, 0.2));   // mirtina zona – 20 % spindulio
  }

  // Mygtukai ≥ 64×64 CSS px, tarpai ≥ 12 px; dydis ir permatomumas – iš nustatymų; kairiarankiams zonos sukeičiamos.
  layout() {
    const s = this.settings;
    const S = Math.max(64, Math.round(84 * (s.btnScale || 1)));
    const m = 18;
    const side = s.leftHanded ? 'left' : 'right';
    const other = s.leftHanded ? 'right' : 'left';
    const pos = {
      A: [2.75 * S + 2 * GAP, 0.3 * S, S],
      K: [1.55 * S + GAP, 0.62 * S, S],
      G: [0.3 * S, 1.45 * S, S],
      KIAI: [1.75 * S + GAP, 1.95 * S, Math.max(52, Math.round(S * 0.7))],
    };
    for (const el of this.buttons) {
      const [x, y, size] = pos[el.dataset.btn];
      el.style[side] = `calc(${m + x}px + env(safe-area-inset-${side}, 0px))`;
      el.style[other] = 'auto';
      el.style.bottom = `calc(${m + y}px + env(safe-area-inset-bottom, 0px))`;
      el.style.width = el.style.height = `${size}px`;
      el.style.fontSize = `${Math.round(size * 0.34)}px`;
    }
    this.zone.style[other] = '0';
    this.zone.style[side] = 'auto';
    this.root.style.setProperty('--tc-alpha', String(s.btnOpacity ?? 0.6));
  }

  // mode: 'fight' – visi valdikliai; 'none' – paslėpti.
  setMode(mode) {
    this.root.style.display = mode === 'none' ? 'none' : 'block';
    if (mode === 'none') { this.showRei(false); this.stickId = null; this.stick.style.display = 'none'; this.btnPointers.clear(); }
    for (const el of this.buttons) el.classList.remove('down');
  }

  showRei(on) {
    this.rei.style.display = on ? 'block' : 'none';
  }

  setKiai(ready) {
    if (ready === this.kiaiReady) return;
    this.kiaiReady = ready;
    this.root.querySelector('.tc-kiai').classList.toggle('ready', ready);
  }
}

__exp.TouchControls = TouchControls;
});
__def('src/ui/ui.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// DOM sąsajos pagalbininkas: ekranai (meniu, sąrašai, rezultatai) rodomi virš canvas.

class Ui {
  constructor(root, audio) {
    this.root = root;
    this.audio = audio;
    this.handler = null;
    root.addEventListener('click', (e) => {
      const el = e.target.closest('[data-act]');
      if (!el || el.disabled || !this.handler) return;
      this.audio.unlock();
      this.audio.ui();
      this.handler(el.dataset.act, el);
    });
  }

  // Parodo ekraną. handler(act, el) kviečiamas paspaudus elementą su data-act.
  show(html, handler, cls = '') {
    this.root.className = `ui-on ${cls}`;
    this.root.innerHTML = html;
    this.handler = handler || null;
    this.root.scrollTop = 0;
  }

  // Parodo ekraną ir laukia pirmo veiksmo: grąžina { act, el }.
  ask(html, cls = '') {
    return new Promise((resolve) => {
      this.show(html, (act, el) => { this.handler = null; resolve({ act, el }); }, cls);
    });
  }

  clear() {
    this.root.className = '';
    this.root.innerHTML = '';
    this.handler = null;
  }
}

__exp.Ui = Ui;
});
__def('src/ui/menus.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Startas, pagrindinis meniu ir nustatymai.

const { t, loc, esc } = __req('src/core/i18n.js');
const { journey } = __req('src/modes/journey.js');
const { dojoMenu, wazaCho } = __req('src/modes/dojo.js');
const { quickFight } = __req('src/modes/quickfight.js');
const { debugScreen } = __req('src/modes/debug.js');
const { currentBelt, kyuLabel, beltChip } = __req('src/modes/common.js');
function isIos() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandalone() {
  return (window.matchMedia && window.matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches) || navigator.standalone === true;
}

// Startas: „Bakstelėk, kad pradėtum“ – šis bakstelėjimas įjungia pilno ekrano režimą ir garsą.
async function startScreen(game) {
  const ios = isIos() && !isStandalone();
  await game.ui.ask(`<div class="start" data-act="start"><div class="panel center">
    <div class="title-logo">OSU!</div>
    <div class="title-sub">${t('app.subtitle')}</div>
    <p class="muted">${t('app.tagline')}</p>
    <p><button class="btn primary" data-act="start">${t('start.tap')}</button></p>
    ${ios ? `<p class="muted">${t('start.ios')}</p>` : ''}
    <p class="muted">© 2026 Paulius Sladkevičius · BUSL-1.1</p></div></div>`);
  game.enterFullscreen();
}

async function settingsScreen(game) {
  const s = game.settings;
  const chk = (key) => `<label class="setting"><span>${t(`set.${key}`)}</span><input type="checkbox" data-set="${key}" ${s[key] ? 'checked' : ''}></label>`;
  const rng = (key, min, max, step) => `<label class="setting"><span>${t(`set.${key}`)}</span><input type="range" data-set="${key}" min="${min}" max="${max}" step="${step}" value="${s[key]}"></label>`;
  const seg = (key, items) => `<div class="setting"><span>${t(`set.${key}`)}</span><div class="seg">${items.map(([v, label]) => `<button data-act="set:${key}:${v}" class="${s[key] === v ? 'on' : ''}">${label}</button>`).join('')}</div></div>`;
  for (;;) {
    const html = `<div class="panel">
      <div class="head"><h2>${t('menu.settings')}</h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <div class="cols"><div>
        ${seg('lang', [['lt', 'Lietuvių'], ['en', 'English']])}
        ${seg('difficulty', ['easy', 'normal', 'hard'].map((d) => [d, t(`diff.${d}`)]))}
        ${chk('sound')}${chk('music')}${chk('voice')}${chk('vibrate')}
      </div><div>
        ${rng('btnScale', 0.8, 1.5, 0.05)}${rng('btnOpacity', 0.3, 1, 0.05)}
        ${chk('leftHanded')}${chk('assist')}${chk('termsTranslated')}
        <div class="setting"><span>${t('set.reset')}</span><button class="btn small" data-act="reset">${t('set.resetBtn')}</button></div>
      </div></div>
      <p class="muted">${t('set.install')}</p></div>`;
    const wait = game.ui.ask(html, 'top');
    game.ui.root.querySelectorAll('[data-set]').forEach((el) => {
      el.addEventListener('input', () => {
        s[el.dataset.set] = el.type === 'checkbox' ? el.checked : Number(el.value);
        game.applySettings();
        if (el.dataset.set === 'music') game.audio.music(s.music ? 'taiko' : null);
      });
    });
    const { act } = await wait;
    if (act === 'back') return;
    if (act === 'reset') {
      const c = await game.ui.ask(`<div class="panel center"><h2>${t('set.resetAsk')}</h2>
        <button class="btn primary" data-act="yes">${t('set.resetBtn')}</button><button class="btn" data-act="no">${t('ui.back')}</button></div>`);
      if (c.act === 'yes') { game.save.reset(); game.settings = game.save.data.settings; }
    } else if (act.startsWith('set:')) {
      const [, key, v] = act.split(':');
      s[key] = v;
      game.applySettings();
    }
  }
}

async function mainMenu(game) {
  if (new URLSearchParams(location.search).has('debug')) { game.audio.unlock(); await debugScreen(game); }
  else await startScreen(game);
  for (;;) {
    game.audio.music('taiko');
    const belt = currentBelt(game);
    const s = game.save.data;
    const fresh = s.learned.length === 0 && s.stats.fights === 0;
    const html = `<div class="panel narrow center">
      <div class="title-logo">OSU!</div>
      <div class="title-sub">${t('app.subtitle')}</div>
      <p class="muted">${t('app.tagline')}</p>
      <p>${beltChip(game, s.beltIndex)} ${esc(loc(belt, 'name'))} · ${kyuLabel(game, s.beltIndex)}${s.trophies.length ? ` · 🏆 ${s.trophies.length}` : ''}</p>
      <div class="menu-grid">
        <button class="btn primary wide" data-act="journey">${fresh ? t('menu.begin') : t('menu.journey')}</button>
        <button class="btn" data-act="dojo">Dojo</button>
        <button class="btn" data-act="quick">${t('menu.quick')}</button>
        <button class="btn" data-act="wazacho">Waza-chō</button>
        <button class="btn" data-act="settings">${t('menu.settings')}</button>
      </div>
      <p><button class="btn small" data-act="debug">Debug</button></p></div>`;
    const { act } = await game.ui.ask(html);
    game.audio.music(null);
    if (act === 'journey') await journey(game);
    else if (act === 'dojo') await dojoMenu(game);
    else if (act === 'quick') await quickFight(game);
    else if (act === 'wazacho') await wazaCho(game);
    else if (act === 'settings') await settingsScreen(game);
    else if (act === 'debug') await debugScreen(game);
  }
}

__exp.mainMenu = mainMenu;
});
__def('src/modes/journey.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Kelionės žemėlapis: 7 diržų skyriai kaip laiptai; kiekviename – pamokos, egzaminas, turnyras.

const { t, loc, esc } = __req('src/core/i18n.js');
const { chapterOpen, lessonsDone, lessonProgress, kyuLabel } = __req('src/modes/common.js');
const { lessonList } = __req('src/modes/dojo.js');
const { runExam } = __req('src/modes/exam.js');
const { runTournament } = __req('src/modes/tournament.js');
async function journey(game) {
  const db = game.db;
  let sel = Math.min(game.save.data.beltIndex + (lessonsDone(game, db.belts[game.save.data.beltIndex].id) ? 1 : 0), 2);
  for (;;) {
    const s = game.save.data;
    const cur = s.beltIndex;
    const steps = db.belts.map((b, i) => {
      const open = chapterOpen(game, i);
      return `<button class="step${i === sel ? ' sel' : ''}${open ? '' : ' locked'}" style="--belt:${b.color};height:${3.2 + i * 0.55}rem" data-act="sel:${i}">
        ${esc(loc(b, 'name'))}${i <= cur ? ' ✓' : ''}</button>`;
    }).join('');
    const b = db.belts[sel];
    const open = chapterOpen(game, sel);
    const prog = lessonProgress(game, b.id);
    const lessons = lessonsDone(game, b.id);
    const owned = cur >= sel;
    const T = b.tournament;
    let body;
    if (!b.available) body = `<p>${t('journey.stage4')}</p><p class="muted">${esc(loc(b, 'unlocks'))}</p>`;
    else if (!open) body = `<p>${t('journey.locked')}</p><p class="muted">${esc(loc(b, 'unlocks'))}</p>`;
    else {
      const examBtn = b.exam
        ? `<div class="item${owned ? ' done' : ''}"><div class="grow"><div class="name">${t('journey.exam')} (shinsa)</div>
            <div class="muted">${owned ? t('journey.examPassed') : lessons ? t('journey.examReady', { n: b.exam.kumite }) : t('journey.examNeedsLessons')}${s.exams[b.id] ? ` · ${Math.round(s.exams[b.id].best * 100)} %` : ''}</div></div>
            <button class="btn small${!owned && lessons ? ' primary' : ''}" data-act="exam" ${lessons ? '' : 'disabled'}>${owned ? t('dojo.repeat') : t('journey.take')}</button></div>`
        : `<div class="item done"><div class="grow"><div class="name">${t('journey.exam')}</div><div class="muted">${t('journey.noExam')}</div></div></div>`;
      const tourReady = owned && lessons;
      body = `<div class="list">
        <div class="item${lessons ? ' done' : ''}"><div class="grow"><div class="name">${t('dojo.lessons')}</div>
          <div class="muted">${esc(loc(b, 'unlocks'))} · ${prog.done}/${prog.total}</div></div>
          <button class="btn small${lessons ? '' : ' primary'}" data-act="lessons">${t('journey.open')}</button></div>
        ${examBtn}
        <div class="item${s.trophies.includes(T.id) ? ' done' : ''}"><div class="grow"><div class="name">${esc(loc(T, 'name'))}${s.trophies.includes(T.id) ? ' 🏆' : ''}</div>
          <div class="muted">${T.format === 'series' ? t('journey.series', { n: T.size - 1 }) : t('journey.bracket', { n: T.size })} · ${t('journey.optional')}</div></div>
          <button class="btn small" data-act="tour" ${tourReady ? '' : 'disabled'}>${t('journey.enter')}</button></div>
      </div>`;
    }
    const html = `<div class="panel">
      <div class="head"><h2>${t('journey.title')}</h2><span class="muted">${t('journey.current')}: ${esc(loc(db.belts[cur], 'name'))} (${kyuLabel(game, cur)})</span>
        <button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <div class="stairs">${steps}</div>
      <h3>${sel + 1}. ${esc(loc(b, 'name'))} <span class="muted">${b.kyu.map((k) => (typeof k === 'number' ? `${k} kyu` : k)).join(', ')}</span></h3>
      ${body}</div>`;
    const { act } = await game.ui.ask(html, 'top');
    if (act === 'back') return;
    if (act.startsWith('sel:')) sel = Number(act.slice(4));
    else if (act === 'lessons') await lessonList(game, sel);
    else if (act === 'exam') { if (await runExam(game, sel)) sel = Math.min(sel, 2); }
    else if (act === 'tour') await runTournament(game, sel);
  }
}

__exp.journey = journey;
});
__def('src/modes/common.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Bendri režimų pagalbininkai: progresas, žaidėjo technikų rinkinys, rezultatų ekranas.

const { techsUpTo, combosUpTo } = __req('src/core/data.js');
const { inputGlyphs } = __req('src/core/combo.js');
const { t, loc, esc } = __req('src/core/i18n.js');
// Skyriaus (diržo) mokomoji medžiaga: technikos ir tradicinės kombinacijos.
function chapterItems(db, beltId) {
  return {
    techs: db.techniques.filter((x) => x.belt === beltId && x.type !== 'mode' && x.condition !== 'afterSweep'),
    combos: db.combos.filter((c) => c.belt === beltId),
  };
}

function lessonsDone(game, beltId) {
  const { techs, combos } = chapterItems(game.db, beltId);
  const s = game.save.data;
  return techs.every((x) => s.learned.includes(x.id)) && combos.every((c) => s.learnedCombos.includes(c.id));
}

function lessonProgress(game, beltId) {
  const { techs, combos } = chapterItems(game.db, beltId);
  const s = game.save.data;
  return {
    done: techs.filter((x) => s.learned.includes(x.id)).length + combos.filter((c) => s.learnedCombos.includes(c.id)).length,
    total: techs.length + combos.length,
  };
}

// Paprasčiausios kiekvieno mygtuko technikos prieinamos visada.
function baseTechs(db) {
  return db.techniques.filter((x) => x.belt === db.belts[0].id && x.input.length === 1 && !x.hold).map((x) => x.id);
}

// Žaidėjo technikos kelionėje: tik išmoktos pamokose (+ bazinės).
function playerSet(game, extraTechs = [], extraCombos = []) {
  const s = game.save.data;
  return {
    unlocked: new Set([...baseTechs(game.db), ...s.learned, ...extraTechs]),
    combos: new Set([...s.learnedCombos, ...extraCombos]),
  };
}

// Visos technikos iki diržo imtinai (greita kova, AI).
function fullSet(db, beltId) {
  return { unlocked: techsUpTo(db, beltId), combos: combosUpTo(db, beltId) };
}

function currentBelt(game) {
  return game.db.belts[game.save.data.beltIndex];
}

// Skyrius atviras, jei diržas jau turimas arba tai kitas diržas ir ankstesnio skyriaus pamokos baigtos.
function chapterOpen(game, i) {
  const db = game.db;
  const cur = game.save.data.beltIndex;
  if (!db.belts[i] || !db.belts[i].available) return false;
  return i <= cur || (i === cur + 1 && lessonsDone(game, db.belts[cur].id));
}

function kyuLabel(game, i) {
  const b = game.db.belts[i];
  const stripe = !!game.save.data.stripes[b.id];
  const k = b.kyu.length > 1 ? b.kyu[stripe ? 1 : 0] : b.kyu[0];
  return typeof k === 'number' ? `${k} kyu` : k;
}

function beltChip(game, i) {
  const b = game.db.belts[i];
  return `<span class="belt-chip${game.save.data.stripes[b.id] ? ' stripe' : ''}" style="background:${b.color}"></span>`;
}

function glyphs(input) {
  return inputGlyphs(input).join(' ');
}

function comboGlyphs(db, combo) {
  return combo.sequence.map((id) => (id === '@block' ? 'G✓' : inputGlyphs(db.tech[id].input).join(''))).join('  ');
}

function oppFromRoster(db, r) {
  return { name: r.name, belt: r.belt, archetype: r.archetype };
}

function rosterFor(db, beltId) {
  return db.opponents.roster.filter((r) => r.belt === beltId);
}

// Kovos rezultato ekranas. Grąžina paspausto mygtuko veiksmą.
async function fightResultScreen(game, res, buttons) {
  const s = game.save.data;
  s.stats.fights++;
  if (res.playerWon) s.stats.wins++;
  game.save.write();
  const v = res.votes;
  const zone = (d) => `${t('zone.legs')} ${d.legs.toFixed(0)} · ${t('zone.body')} ${d.body.toFixed(0)} · ${t('zone.head')} ${d.head.toFixed(0)}`;
  const html = `<div class="panel center">
    <h1>${res.playerWon ? t('result.win') : t('result.lose')}</h1>
    <p class="jp">${esc(game.db.rules.calls[`${res.winner}_no_kachi`])} · ${Math.max(v.aka, v.shiro)}:${Math.min(v.aka, v.shiro)} ${t(`result.${res.by}`)}</p>
    <p class="muted">${t(`result.${res.by}.desc`)}${res.round > 0 ? ` · ${t('result.encho', { n: res.round })}` : ''}</p>
    <p>${t('result.yourDamage')}: ${zone(res.player.dmg)}</p>
    <p>${t('result.oppDamage')}: ${zone(res.opp.dmg)}</p>
    <p class="muted">Waza-ari ${res.player.wazaAri}:${res.opp.wazaAri} · Chui ${res.player.chui}:${res.opp.chui}${res.bowsMissed ? ` · ${t('result.bowsMissed', { n: res.bowsMissed })}` : ''}</p>
    <div>${buttons.map((b, i) => `<button class="btn${i === 0 ? ' primary' : ''}" data-act="${b.act}">${b.label}</button>`).join('')}</div>
  </div>`;
  const { act } = await game.ui.ask(html);
  return act;
}

function techRow(db, x, opts = {}) {
  const kum = x.type === 'mode' ? '' : `<span class="tag ${x.legalInKumite ? 'yes' : 'no'}">Kumite: ${x.legalInKumite ? t('ui.yes') : t('ui.no')}</span>`;
  return `<div class="item ${opts.cls || ''}">
    <div class="keys">${glyphs(x.input)}${x.hold ? ` ${t('ui.hold')}` : ''}</div>
    <div class="grow"><div class="name">${esc(x.name)} ${kum}</div><div class="muted">${esc(loc(x, 'name'))} – ${esc(loc(x, 'desc'))}</div></div>
    ${opts.button || ''}</div>`;
}

function comboRow(db, c, opts = {}) {
  return `<div class="item ${opts.cls || ''}">
    <div class="keys">${comboGlyphs(db, c)}</div>
    <div class="grow"><div class="name">${esc(c.name)} <span class="tag yes">renzoku</span></div><div class="muted">${esc(loc(c, 'name'))} · ${bonusText(c)}</div></div>
    ${opts.button || ''}</div>`;
}

function bonusText(c) {
  const b = c.bonus;
  const parts = [];
  if (b.damageMult) parts.push(`+${Math.round((b.damageMult - 1) * 100)} % ${t('bonus.damage')}`);
  if (b.legDamageMult) parts.push(`${t('bonus.leg')} ×${b.legDamageMult}`);
  if (b.balanceBonus) parts.push(`${t('bonus.balance')} −${b.balanceBonus}`);
  if (b.unblockable) parts.push(t('bonus.unblockable'));
  return parts.join(', ') || t('bonus.later');
}

__exp.chapterItems = chapterItems;
__exp.lessonsDone = lessonsDone;
__exp.lessonProgress = lessonProgress;
__exp.baseTechs = baseTechs;
__exp.playerSet = playerSet;
__exp.fullSet = fullSet;
__exp.currentBelt = currentBelt;
__exp.chapterOpen = chapterOpen;
__exp.kyuLabel = kyuLabel;
__exp.beltChip = beltChip;
__exp.glyphs = glyphs;
__exp.comboGlyphs = comboGlyphs;
__exp.oppFromRoster = oppFromRoster;
__exp.rosterFor = rosterFor;
__exp.fightResultScreen = fightResultScreen;
__exp.techRow = techRow;
__exp.comboRow = comboRow;
__exp.bonusText = bonusText;
});
__def('src/modes/dojo.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Dojo: pamokos (5 kartus iš eilės be klaidos → technika išmokta), Waza-chō (technikų knygelė), laisva praktika.

const { evalAnim, getPose, drawFigure } = __req('src/fight/skeleton.js');
const { inputGlyphs } = __req('src/core/combo.js');
const { t, loc, esc } = __req('src/core/i18n.js');
const { chapterItems, playerSet, fullSet, currentBelt, techRow, comboRow, beltChip } = __req('src/modes/common.js');
const FONT = '"Trebuchet MS", "Segoe UI", system-ui, sans-serif';

function wrap(ctx, text, x, y, maxW, lh) {
  let line = '';
  for (const w of text.split(' ')) {
    if (ctx.measureText(`${line}${w}`).width > maxW && line) { ctx.fillText(line.trim(), x, y); y += lh; line = ''; }
    line += `${w} `;
  }
  if (line.trim()) ctx.fillText(line.trim(), x, y);
  return y + lh;
}

// Pamokos režisierius: seka žaidėjo veiksmus, skaičiuoja pakartojimus, piešia paaiškinimą ir „vaiduoklį“.
class LessonDirector {
  // item: { kind: 'tech' | 'combo', def }, opts: { reps, free }
  constructor(game, item, opts = {}) {
    this.game = game;
    this.item = item;
    this.free = !!opts.free;
    this.reps = opts.reps || 5;
    this.count = 0;
    this.total = 0;
    this.time = 0;
    this.doneT = null;
    const d = item.def;
    this.seq = item.kind === 'combo' ? d.sequence : [d.id];
    this.glyphs = item.kind === 'combo'
      ? d.sequence.map((id) => (id === '@block' ? ['G✓'] : inputGlyphs(game.db.tech[id].input)))
      : [inputGlyphs(d.input).concat(d.hold ? [t('ui.hold')] : [])];
  }

  attach(scene) {
    this.scene = scene;
    this.game.audio.speak(this.item.def.name);
  }

  ok() {
    if (this.doneT != null) return;
    this.count++;
    this.total++;
    this.game.audio.good();
    this.scene.hud.popup(640, 380, this.free ? `✓ ${this.total}` : `✓ ${this.count}/${this.reps}`, { color: '#8ff08a', size: 34 });
    if (!this.free && this.count >= this.reps) {
      this.doneT = 0;
      this.scene.hud.call('OSU!', t('lesson.learned'), 1800);
      this.game.audio.osu();
      this.game.audio.speak('Osu');
    }
  }

  fail() {
    if (this.doneT != null || this.free) return;
    if (this.count > 0) this.scene.hud.popup(640, 380, t('lesson.again'), { color: '#ffb0a0', size: 26 });
    if (this.count > 0) this.game.audio.bad();
    this.count = 0;
  }

  onEvent(ev) {
    const { item, scene } = this;
    const p = scene.player;
    const d = item.def;
    if (item.kind === 'combo') {
      if (ev.type === 'combo' && ev.f === p && ev.combo.id === d.id) this.ok();
      return;
    }
    if (d.type === 'strike') {
      if (ev.type === 'techStart' && ev.f === p) { if (ev.def.id === d.id) this.ok(); else this.fail(); }
    } else if (d.auto) {
      // Sune uke: skaičiuojamas sėkmingas žemo spyrio blokas.
      if (ev.type === 'hit' && ev.defender === p) { if (ev.blocked && ev.sune) this.ok(); else if (!ev.blocked) this.fail(); }
    } else if (d.hold) {
      if (ev.type === 'guard' && ev.f === p && ev.techId === d.id) this.ok();
    } else if (ev.type === 'guard' && ev.f === p && ev.techId !== 'morote_uke') {
      if (ev.techId === d.id) this.ok(); else this.fail();
    } else if (ev.type === 'techStart' && ev.f === p) this.fail();
  }

  update(dt) {
    this.time += dt;
    if (this.doneT != null) {
      this.doneT += dt;
      if (this.doneT > 1900) this.scene.finish({ learned: true });
    }
  }

  draw(ctx) {
    const d = this.item.def;
    const db = this.game.db;
    ctx.save();
    // Paaiškinimo skydelis
    ctx.fillStyle = 'rgba(14,16,24,0.82)';
    ctx.beginPath(); ctx.roundRect(20, 16, 520, 216, 14); ctx.fill();
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffd54a';
    let size = 32;
    ctx.font = `bold ${size}px ${FONT}`;
    while (ctx.measureText(d.name).width > 490 && size > 18) { size -= 2; ctx.font = `bold ${size}px ${FONT}`; }
    ctx.fillText(d.name, 36, 56);
    ctx.fillStyle = '#fff';
    ctx.font = `bold 19px ${FONT}`;
    ctx.fillText(loc(d, 'name'), 36, 84);
    ctx.font = `16px ${FONT}`;
    ctx.fillStyle = '#d8d4ca';
    let y = 108;
    if (this.item.kind === 'tech') {
      y = wrap(ctx, loc(d, 'desc'), 36, y, 490, 20);
      ctx.fillStyle = d.legalInKumite ? '#8ff08a' : '#ff8a7a';
      ctx.font = `bold 15px ${FONT}`;
      ctx.fillText(`Kumite: ${d.legalInKumite ? t('ui.yes') : t('ui.no')}`, 36, y);
    } else y = wrap(ctx, t('lesson.chainTip'), 36, y, 490, 20);
    // Įvesties seka su animuota žyma
    const flat = [];
    this.glyphs.forEach((g, i) => { g.forEach((x) => flat.push({ x, grp: i })); });
    const active = Math.floor(this.time / 450) % (flat.length + 2);
    let gx = 36;
    ctx.font = `bold 30px ${FONT}`;
    flat.forEach((g, i) => {
      if (i > 0 && flat[i - 1].grp !== g.grp) gx += 16;
      const w = Math.max(40, ctx.measureText(g.x).width + 18);
      ctx.fillStyle = i === active ? '#ffd54a' : 'rgba(255,255,255,0.14)';
      ctx.beginPath(); ctx.roundRect(gx, 180, w, 40, 8); ctx.fill();
      ctx.fillStyle = i === active ? '#14161f' : '#fff';
      ctx.textAlign = 'center';
      ctx.fillText(g.x, gx + w / 2, 211);
      gx += w + 6;
    });
    // Progresas
    ctx.textAlign = 'right';
    ctx.font = `bold 20px ${FONT}`;
    ctx.fillStyle = '#fff';
    if (this.free) ctx.fillText(`${t('lesson.free')}: ${this.total}`, 528, 56);
    else for (let i = 0; i < this.reps; i++) {
      ctx.beginPath();
      ctx.arc(520 - i * 26, 48, 9, 0, Math.PI * 2);
      ctx.fillStyle = i < this.reps - this.count ? 'rgba(255,255,255,0.2)' : '#8ff08a';
      ctx.fill();
    }
    // „Vaiduoklis“, rodantis judesį
    ctx.fillStyle = 'rgba(14,16,24,0.82)';
    ctx.beginPath(); ctx.roundRect(1000, 16, 260, 216, 14); ctx.fill();
    ctx.fillStyle = '#b8b4aa';
    ctx.font = `14px ${FONT}`;
    ctx.textAlign = 'center';
    ctx.fillText(t('lesson.demo'), 1130, 36);
    const cyc = 1900;
    const idx = Math.floor(this.time / cyc) % this.seq.length;
    const id = this.seq[idx];
    const k = (this.time % cyc) / cyc;
    let pose;
    if (id === '@block') pose = getPose(db.anim, 'guard_chudan');
    else {
      const tech = db.tech[id];
      pose = tech.type === 'strike' ? evalAnim(db.anim, tech.anim, Math.min(3, k * 4)) : (k < 0.15 || k > 0.8 ? getPose(db.anim, 'kamae') : getPose(db.anim, tech.anim));
    }
    drawFigure(ctx, 1110, 222, 1, pose, { scale: 0.78, alpha: 0.85, gi: '#cfe6ff', far: '#a9c4e0', belt: '#f4f1ea' });
    ctx.restore();
  }
}

function lessonOpts(game, item, free) {
  const db = game.db;
  const d = item.def;
  const techIds = item.kind === 'combo' ? d.sequence.filter((id) => id !== '@block') : [d.id];
  const set = playerSet(game, techIds, item.kind === 'combo' ? [d.id] : []);
  const partnerTech = d.lesson && d.lesson.partner;
  const needsTarget = item.kind === 'combo' || d.type === 'strike';
  const belt = currentBelt(game).id;
  return {
    mode: 'practice', bg: 'dojo', showPanels: false, hints: true, showDamage: true,
    player: { name: t('hud.player'), belt, ...set },
    opponent: partnerTech
      ? { name: t('dojo.partner'), belt, dummy: 'attack', techId: partnerTech, intervalMs: 1900 }
      : needsTarget ? { name: t('dojo.partner'), belt, dummy: 'passive' } : null,
    director: new LessonDirector(game, item, { reps: item.kind === 'combo' ? db.rules.lesson.comboReps : db.rules.lesson.reps, free }),
  };
}

async function runLesson(game, item) {
  const res = await game.runFight(lessonOpts(game, item, false));
  if (res && res.learned) {
    game.save.learn(item.def.id, item.kind === 'combo');
    return true;
  }
  return false;
}

// Skyriaus pamokų sąrašas.
async function lessonList(game, beltIdx) {
  const db = game.db;
  const belt = db.belts[beltIdx];
  for (;;) {
    const s = game.save.data;
    const { techs, combos } = chapterItems(db, belt.id);
    const row = (kind, d) => {
      const done = (kind === 'combo' ? s.learnedCombos : s.learned).includes(d.id);
      // Kombinacijos pamoka atsiveria išmokus visas jos technikas.
      const ready = kind === 'tech' || d.sequence.every((id) => id === '@block' || s.learned.includes(id));
      const btn = `<button class="btn small${done ? '' : ' primary'}" data-act="${kind}:${d.id}" ${ready ? '' : 'disabled'}>${done ? t('dojo.repeat') : t('dojo.learn')}</button>`;
      return kind === 'combo' ? comboRow(db, d, { cls: done ? 'done' : '', button: btn }) : techRow(db, d, { cls: done ? 'done' : '', button: btn });
    };
    const html = `<div class="panel">
      <div class="head"><h2>${t('dojo.lessons')} · ${beltChip(game, beltIdx)} ${esc(loc(belt, 'name'))}</h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <p class="muted">${t('dojo.lessonsHelp', { n: db.rules.lesson.reps })}</p>
      <div class="list">${techs.map((x) => row('tech', x)).join('')}${combos.map((c) => row('combo', c)).join('')}</div>
    </div>`;
    const { act } = await game.ui.ask(html, 'top');
    if (act === 'back') return;
    const [kind, id] = act.split(':');
    await runLesson(game, { kind, def: kind === 'combo' ? db.combo[id] : db.tech[id] });
  }
}

// Waza-chō: visų išmoktų technikų ir kombinacijų sąrašas su įvestimis, kumite leistinumu ir mygtuku „Praktikuoti“.
async function wazaCho(game) {
  const db = game.db;
  for (;;) {
    const s = game.save.data;
    const techs = db.techniques.filter((x) => s.learned.includes(x.id));
    const combos = db.combos.filter((c) => s.learnedCombos.includes(c.id));
    const total = db.techniques.filter((x) => db.belts[db.beltIdx[x.belt]].available && x.type !== 'mode').length;
    const btn = (kind, id) => `<button class="btn small" data-act="${kind}:${id}">${t('dojo.practice')}</button>`;
    const html = `<div class="panel">
      <div class="head"><h2>Waza-chō <span class="muted">${t('wazacho.sub')}</span></h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <p class="muted">${t('wazacho.count', { n: techs.length, total })}</p>
      <div class="list">${techs.map((x) => techRow(db, x, { button: btn('tech', x.id) })).join('') || `<p>${t('wazacho.empty')}</p>`}
      ${combos.map((c) => comboRow(db, c, { button: btn('combo', c.id) })).join('')}</div>
    </div>`;
    const { act } = await game.ui.ask(html, 'top');
    if (act === 'back') return;
    const [kind, id] = act.split(':');
    await game.runFight(lessonOpts(game, { kind, def: kind === 'combo' ? db.combo[id] : db.tech[id] }, true));
  }
}

// Laisva praktika su sparingo partneriu: pasyvus, tik blokuoja arba tik puola. Rodo padarytą žalą.
async function freePractice(game) {
  const belt = currentBelt(game).id;
  const { act } = await game.ui.ask(`<div class="panel narrow center">
    <h2>${t('dojo.free')}</h2><p class="muted">${t('dojo.freeHelp')}</p>
    <button class="btn block primary" data-act="passive">${t('dojo.partnerPassive')}</button>
    <button class="btn block" data-act="block">${t('dojo.partnerBlock')}</button>
    <button class="btn block" data-act="attack">${t('dojo.partnerAttack')}</button>
    <button class="btn block" data-act="back">${t('ui.back')}</button></div>`);
  if (act === 'back') return;
  const set = game.save.data.learned.length ? playerSet(game) : fullSet(game.db, belt);
  await game.runFight({
    mode: 'practice', bg: 'dojo', hints: true, showDamage: true,
    player: { name: t('hud.player'), belt, ...set },
    opponent: { name: t('dojo.partner'), belt, dummy: act, intervalMs: 1500 },
  });
}

async function dojoMenu(game) {
  for (;;) {
    const cur = game.save.data.beltIndex;
    const { act } = await game.ui.ask(`<div class="panel narrow center">
      <h2>Dojo</h2>
      <button class="btn block primary" data-act="lessons">${t('dojo.lessons')}</button>
      <button class="btn block" data-act="free">${t('dojo.free')}</button>
      <button class="btn block" data-act="wazacho">Waza-chō</button>
      <button class="btn block" data-act="back">${t('ui.back')}</button></div>`);
    if (act === 'back') return;
    if (act === 'lessons') {
      // Mokomasi dabartinio skyriaus: turimo diržo arba kito, jei ankstesnio pamokos baigtos.
      const s = game.save.data;
      const { techs, combos } = chapterItems(game.db, game.db.belts[cur].id);
      const curDone = techs.every((x) => s.learned.includes(x.id)) && combos.every((c) => s.learnedCombos.includes(c.id));
      const next = game.db.belts[cur + 1];
      await lessonList(game, curDone && next && next.available ? cur + 1 : cur);
    } else if (act === 'free') await freePractice(game);
    else if (act === 'wazacho') await wazaCho(game);
  }
}

__exp.LessonDirector = LessonDirector;
__exp.lessonOpts = lessonOpts;
__exp.runLesson = runLesson;
__exp.lessonList = lessonList;
__exp.wazaCho = wazaCho;
__exp.freePractice = freePractice;
__exp.dojoMenu = dojoMenu;
});
__def('src/fight/skeleton.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// 2D skeletas: pozos ir raktiniai kadrai iš assets/anim/poses.json, interpoliacija ir kovotojo piešimas.

const L = { thigh: 48, shin: 48, torso: 74, neck: 10, head: 18, upper: 34, fore: 32 };
const KEYS = ['torso', 'head', 'fs', 'fe', 'bs', 'be', 'fh', 'fk', 'bh', 'bk', 'dx', 'rot'];
const RAD = Math.PI / 180;
const cache = new WeakMap();

function getPose(anim, name) {
  let c = cache.get(anim);
  if (!c) { c = {}; cache.set(anim, c); }
  if (c[name]) return c[name];
  const base = anim.poses.kamae;
  const src = anim.poses[name] || base;
  const p = {};
  for (const k of KEYS) p[k] = src[k] ?? base[k] ?? 0;
  if (src.hipH != null) p.hipH = src.hipH;
  c[name] = p;
  return p;
}

function solve(P) {
  const dir = (deg, len) => [Math.sin(deg * RAD) * len, Math.cos(deg * RAD) * len];
  const hip = [0, 0];
  const t = dir(P.torso, L.torso);
  const sh = [t[0], -t[1]];
  const hd = dir(P.torso + P.head, L.neck + L.head);
  const head = [sh[0] + hd[0], sh[1] - hd[1]];
  const arm = (s, e) => {
    const u = dir(s, L.upper);
    const f = dir(s + e, L.fore);
    const el = [sh[0] + u[0], sh[1] + u[1]];
    return [el, [el[0] + f[0], el[1] + f[1]]];
  };
  const leg = (h, k) => {
    const th = dir(h, L.thigh);
    const s = dir(h - k, L.shin);
    const kn = [th[0], th[1]];
    return [kn, [kn[0] + s[0], kn[1] + s[1]]];
  };
  const [fel, fha] = arm(P.fs, P.fe);
  const [bel, bha] = arm(P.bs, P.be);
  const [fkn, ffo] = leg(P.fh, P.fk);
  const [bkn, bfo] = leg(P.bh, P.bk);
  return { hip, sh, head, fel, fha, bel, bha, fkn, ffo, bkn, bfo, auto: Math.max(ffo[1], bfo[1]) + 6 };
}

function hipHeight(P) {
  return P.hipH ?? solve(P).auto;
}

function lerpPose(a, b, k) {
  const p = {};
  for (const key of KEYS) p[key] = a[key] + (b[key] - a[key]) * k;
  if (a.hipH != null || b.hipH != null) p.hipH = hipHeight(a) + (hipHeight(b) - hipHeight(a)) * k;
  return p;
}

const ease = (k) => k * k * (3 - 2 * k);

// p: 0–1 startup, 1–2 active, 2–3 recovery.
function evalAnim(anim, name, p) {
  const a = anim.anims[name] || anim.anims.gyaku_tsuki;
  const keys = a.keys;
  if (p <= keys[0][0]) return getPose(anim, keys[0][1]);
  for (let i = 1; i < keys.length; i++) {
    if (p <= keys[i][0]) {
      const k = (p - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0] || 1);
      return lerpPose(getPose(anim, keys[i - 1][1]), getPose(anim, keys[i][1]), ease(k));
    }
  }
  return getPose(anim, keys[keys.length - 1][1]);
}

function techPhase(T) {
  if (T.phase === 'startup') return Math.min(1, T.t / T.dur.s);
  if (T.phase === 'active') return 1 + Math.min(1, T.t / T.dur.a);
  return 2 + Math.min(1, T.t / (T.dur.r + T.extraRec));
}

// Tikslinė poza pagal kovotojo būseną.
function fighterPose(f, anim, time) {
  const P = (n) => getPose(anim, n);
  switch (f.state) {
    case 'attack': return evalAnim(anim, f.tech.def.anim, techPhase(f.tech));
    case 'guard': {
      if (f.suneT > 0) return P('sune_uke');
      if (f.guard && f.guard.morote && f.guard.level === 'chudan') return P('morote_uke');
      return P(`guard_${f.guard ? f.guard.level : 'chudan'}`);
    }
    case 'hit': return lerpPose(P('kamae'), P(`hit_${f.hitZone || 'body'}`), Math.sin(Math.PI * Math.min(1, f.st / (f.stun || 200))));
    case 'stagger': {
      const s = { ...P('stagger') };
      s.torso += Math.sin(time / 90) * 9;
      s.head += Math.sin(time / 70) * 6;
      return s;
    }
    case 'down': {
      const k = Math.min(1, f.down.t / 340);
      return k < 0.5 ? lerpPose(P('hit_head'), P('fall'), k * 2) : lerpPose(P('fall'), P('down'), (k - 0.5) * 2);
    }
    case 'getup': {
      const k = Math.min(1, f.st / 500);
      return k < 0.5 ? lerpPose(P('down'), P('kneel'), ease(k * 2)) : lerpPose(P('kneel'), P('kamae'), ease((k - 0.5) * 2));
    }
    case 'pose': {
      const k = Math.max(0, Math.min(1, f.st / 260, (f.pose.dur - f.st) / 260));
      return lerpPose(P('stand'), P(f.pose.name), ease(k));
    }
    case 'dash': return P(f.dash && f.dash.fwd ? 'dash' : 'backdash');
    case 'walk': return lerpPose(P('walk_a'), P('walk_b'), (Math.sin(time / 85) + 1) / 2);
    default: {
      if (f.formal) return P('stand');
      if (f.crouch) return P('crouch');
      const s = { ...P('kamae') };
      s.torso += Math.sin(time / 520 + f.id) * 1.3;
      return s;
    }
  }
}

const OUT = '#23232b';
const SKIN = '#e9bd95';

function limb(ctx, pts, w, col) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (let pass = 0; pass < 2; pass++) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.strokeStyle = pass ? col : OUT;
    ctx.lineWidth = pass ? w : w + 4;
    ctx.stroke();
  }
}

function blob(ctx, x, y, r, col) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = col;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = OUT;
  ctx.stroke();
}

// st: { belt, aka, alpha, flash, scale, gi, far, hair, kiai }
function drawFigure(ctx, x, groundY, facing, P, st = {}) {
  const J = solve(P);
  const hipH = P.hipH ?? J.auto;
  const s = st.scale || 1;
  const gi = st.flash ? '#ffd2c8' : (st.gi || '#f6f3ec');
  const far = st.flash ? '#f0b8ac' : (st.far || '#d9d5cb');
  ctx.save();
  ctx.globalAlpha *= st.alpha ?? 1;
  ctx.translate(x, groundY);
  ctx.scale(s * facing, s);
  ctx.translate(P.dx || 0, -hipH);
  if (P.rot) ctx.rotate(P.rot * RAD);

  // Šešėlis piešiamas atskirai (drawShadow), čia – tik figūra.
  const foot = (p) => limb(ctx, [p, [p[0] + 11, p[1] + 1]], 8, SKIN);
  limb(ctx, [J.sh, J.bel, J.bha], 13, far);
  blob(ctx, J.bha[0], J.bha[1], 7, SKIN);
  limb(ctx, [J.hip, J.bkn, J.bfo], 17, far);
  foot(J.bfo);

  limb(ctx, [J.hip, J.sh], 31, gi);
  // Atlapas
  ctx.beginPath();
  ctx.moveTo(J.sh[0] + 8, J.sh[1] + 6);
  ctx.lineTo(J.hip[0] + (J.sh[0] - J.hip[0]) * 0.35 + 2, J.hip[1] + (J.sh[1] - J.hip[1]) * 0.35);
  ctx.strokeStyle = 'rgba(40,40,50,0.5)';
  ctx.lineWidth = 2;
  ctx.stroke();
  // Diržas
  const ux = (J.sh[0] - J.hip[0]) / L.torso;
  const uy = (J.sh[1] - J.hip[1]) / L.torso;
  const bx = J.hip[0] + ux * 9;
  const by = J.hip[1] + uy * 9;
  limb(ctx, [[bx + uy * 15, by - ux * 15], [bx - uy * 15, by + ux * 15]], 7, st.belt || '#f4f1ea');
  limb(ctx, [[bx - uy * 13, by + ux * 13], [bx - uy * 13 + 3, by + ux * 13 + 20]], 5, st.belt || '#f4f1ea');
  if (st.aka) limb(ctx, [[bx + uy * 15, by - ux * 15], [bx + uy * 15 - 4, by - ux * 15 + 18]], 5, '#d5281f');

  blob(ctx, J.head[0], J.head[1], L.head, SKIN);
  ctx.beginPath();
  ctx.arc(J.head[0], J.head[1], L.head, Math.PI * 0.95, Math.PI * 1.85);
  ctx.lineTo(J.head[0] - 4, J.head[1] - 6);
  ctx.fillStyle = st.hair || '#2b2118';
  ctx.fill();
  ctx.fillStyle = OUT;
  ctx.fillRect(J.head[0] + 8, J.head[1] - 3, 3, 3);

  limb(ctx, [J.hip, J.fkn, J.ffo], 17, gi);
  foot(J.ffo);
  limb(ctx, [J.sh, J.fel, J.fha], 13, gi);
  blob(ctx, J.fha[0], J.fha[1], 7, SKIN);
  if (st.kiai) {
    ctx.globalAlpha *= 0.5;
    ctx.strokeStyle = '#ffd54a';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(J.sh[0] * 0.5, J.sh[1] * 0.5 + 10, 62, 120, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawShadow(ctx, x, groundY, w = 62) {
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.beginPath();
  ctx.ellipse(x, groundY + 4, w, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

__exp.getPose = getPose;
__exp.solve = solve;
__exp.hipHeight = hipHeight;
__exp.lerpPose = lerpPose;
__exp.evalAnim = evalAnim;
__exp.techPhase = techPhase;
__exp.fighterPose = fighterPose;
__exp.drawFigure = drawFigure;
__exp.drawShadow = drawShadow;
});
__def('src/modes/exam.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Egzaminas (shinsa): kihon (sensei šaukia japonišką pavadinimą, be užuominų) + kata (ritmo mini žaidimas) + kumite.
// Reikia surinkti ≥ passScore ir nepralaimėti kumite per ippon.

const { inputGlyphs } = __req('src/core/combo.js');
const { shuffle } = __req('src/core/rng.js');
const { t, loc, esc } = __req('src/core/i18n.js');
const { chapterItems, fullSet, playerSet, rosterFor, oppFromRoster, fightResultScreen, beltChip, techRow, comboRow } = __req('src/modes/common.js');
const FONT = '"Trebuchet MS", "Segoe UI", system-ui, sans-serif';

// Žaidėjo veiksmo id iš kovos įvykio (technikos pradžia arba gynyba).
function actionId(ev, player) {
  if (ev.type === 'techStart' && ev.f === player) return ev.def.id;
  if (ev.type === 'guard' && ev.f === player && ev.techId && ev.techId !== 'morote_uke') return ev.techId;
  return null;
}

class KihonDirector {
  constructor(game, pool, count) {
    this.game = game;
    this.R = game.db.rules.exam;
    const list = [];
    while (list.length < count) list.push(...shuffle(Math.random, pool));
    this.list = list.slice(0, count);
    this.i = -1;
    this.state = 'intro';
    this.t = 0;
    this.correct = 0;
    this.last = null;
  }

  attach(scene) {
    this.scene = scene;
    scene.hud.call('Kihon', t('exam.kihonHelp'), 2200);
  }

  next() {
    this.i++;
    if (this.i >= this.list.length) {
      this.scene.finish({ score: this.correct / this.list.length, correct: this.correct, total: this.list.length });
      return;
    }
    this.state = 'call';
    this.t = 0;
    // Sensei šaukia technikos pavadinimą japoniškai.
    this.game.audio.speak(this.list[this.i].name);
  }

  answer(ok) {
    this.state = 'feedback';
    this.t = 0;
    this.last = ok;
    if (ok) { this.correct++; this.game.audio.good(); } else this.game.audio.bad();
  }

  onEvent(ev) {
    if (this.state !== 'call') return;
    const id = actionId(ev, this.scene.player);
    if (id) this.answer(id === this.list[this.i].id);
  }

  update(dt) {
    this.t += dt;
    if (this.state === 'intro' && this.t > 2300) this.next();
    else if (this.state === 'call' && this.t > this.R.kihonTimeMs) this.answer(false);
    else if (this.state === 'feedback' && this.t > 1150) this.next();
  }

  draw(ctx) {
    if (this.state === 'intro') return;
    const tech = this.list[this.i];
    if (!tech) return;
    ctx.save();
    ctx.fillStyle = 'rgba(14,16,24,0.85)';
    ctx.beginPath(); ctx.roundRect(290, 20, 700, 150, 16); ctx.fill();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#b8b4aa';
    ctx.font = `bold 18px ${FONT}`;
    ctx.fillText(`Kihon ${this.i + 1}/${this.list.length} · ✓ ${this.correct}`, 640, 48);
    let size = 52;
    ctx.font = `bold ${size}px ${FONT}`;
    const name = `${tech.name}!`;
    while (ctx.measureText(name).width > 660 && size > 26) { size -= 3; ctx.font = `bold ${size}px ${FONT}`; }
    ctx.fillStyle = this.state === 'feedback' ? (this.last ? '#8ff08a' : '#ff8a7a') : '#ffd54a';
    ctx.fillText(name, 640, 108);
    if (this.state === 'call') {
      const k = 1 - this.t / this.R.kihonTimeMs;
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.fillRect(340, 132, 600, 12);
      ctx.fillStyle = k < 0.3 ? '#ff8a7a' : '#ffd54a';
      ctx.fillRect(340, 132, 600 * Math.max(0, k), 12);
    } else {
      ctx.font = `bold 30px ${FONT}`;
      ctx.fillText(this.last ? '✓ OSU!' : `✗ ${t('exam.miss')}`, 640, 152);
    }
    ctx.restore();
  }
}

class KataDirector {
  constructor(game, kata) {
    this.game = game;
    this.kata = kata;
    this.R = game.db.rules.exam;
    this.time = 0;
    this.lead = 2800;
    this.steps = kata.steps.map((s, i) => {
      const turn = s.startsWith('*');
      const id = turn ? s.slice(1) : s;
      return { id, turn, t: this.lead + i * kata.beatMs, state: 'pending', turned: false, glyphs: inputGlyphs(game.db.tech[id].input).join('') };
    });
    this.counts = { perfect: 0, good: 0, miss: 0 };
    this.endT = null;
  }

  attach(scene) {
    this.scene = scene;
    scene.player.x = scene.player.px = 640;
    scene.hud.call(this.kata.name, t('exam.kataHelp'), 2400);
    this.game.audio.speak(this.kata.name);
  }

  rate(step, kind) {
    step.state = kind;
    this.counts[kind]++;
    const col = { perfect: '#8ff0ff', good: '#8ff08a', miss: '#ff8a7a' }[kind];
    this.scene.hud.popup(210, 196, t(`kata.${kind}`), { color: col, size: 26, ms: 700 });
    if (kind === 'miss') this.game.audio.bad(); else this.game.audio.taiko(kind === 'perfect' ? 0.5 : 0.3);
  }

  onEvent(ev) {
    const id = actionId(ev, this.scene.player);
    if (!id) return;
    const step = this.steps.find((s) => s.state === 'pending' && Math.abs(this.time - s.t) <= this.R.kataGoodMs);
    if (!step) return;
    const d = Math.abs(this.time - step.t);
    if (id !== step.id) this.rate(step, 'miss');
    else this.rate(step, d <= this.R.kataPerfectMs ? 'perfect' : 'good');
  }

  update(dt) {
    this.time += dt;
    const p = this.scene.player;
    for (const s of this.steps) {
      if (s.turn && !s.turned && this.time >= s.t - this.kata.beatMs * 0.45 && (p.state === 'idle' || p.state === 'guard' || p.state === 'walk')) {
        s.turned = true;
        p.facing *= -1;     // formos posūkis (įvesties kryptys lieka tos pačios)
      }
      if (s.state === 'pending' && this.time > s.t + this.R.kataGoodMs) this.rate(s, 'miss');
    }
    if (this.endT == null && this.steps.every((s) => s.state !== 'pending')) this.endT = this.time;
    if (this.endT != null && this.time > this.endT + 1300) {
      const n = this.steps.length;
      this.scene.finish({ score: (this.counts.perfect + this.counts.good * 0.6) / n, ...this.counts, total: n });
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = 'rgba(14,16,24,0.85)';
    ctx.beginPath(); ctx.roundRect(120, 20, 1040, 150, 16); ctx.fill();
    ctx.textAlign = 'left';
    ctx.font = `bold 18px ${FONT}`;
    ctx.fillStyle = '#ffd54a';
    ctx.fillText(`Kata · ${this.kata.name}`, 140, 46);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.fillText(`${t('kata.perfect')} ${this.counts.perfect} · ${t('kata.good')} ${this.counts.good} · ${t('kata.miss')} ${this.counts.miss}`, 1140, 46);
    // Takelis: simboliai slenka į taikinį kairėje
    ctx.beginPath();
    ctx.rect(130, 60, 1020, 100);
    ctx.clip();
    ctx.strokeStyle = '#ffd54a';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.roundRect(170, 74, 80, 72, 12); ctx.stroke();
    ctx.textAlign = 'center';
    for (const s of this.steps) {
      const x = 210 + (s.t - this.time) * 0.34;
      if (x < 90 || x > 1200) continue;
      if (s.state !== 'pending' && this.time - s.t > 250) continue;
      ctx.fillStyle = s.state === 'pending' ? 'rgba(255,255,255,0.16)' : s.state === 'miss' ? 'rgba(255,90,70,0.5)' : 'rgba(120,240,130,0.5)';
      ctx.beginPath(); ctx.roundRect(x - 36, 78, 72, 64, 10); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = `bold 30px ${FONT}`;
      ctx.fillText(s.glyphs, x, 122);
      if (s.turn) { ctx.font = `14px ${FONT}`; ctx.fillStyle = '#8ff0ff'; ctx.fillText('↻', x + 26, 92); }
    }
    ctx.restore();
  }
}

function practiceBase(game, beltId, set) {
  return { mode: 'practice', bg: 'dojo', showPanels: false, hints: false, player: { name: t('hud.player'), belt: beltId, ...set } };
}

async function runKihon(game, beltIdx, count) {
  const db = game.db;
  const pool = db.techniques.filter((x) => db.beltIdx[x.belt] <= beltIdx && (x.type === 'strike' || x.type === 'guard') && !x.auto && !x.hold);
  const set = fullSet(db, db.belts[beltIdx].id);
  return game.runFight({ ...practiceBase(game, db.belts[game.save.data.beltIndex].id, set), opponent: null, director: new KihonDirector(game, pool, count) });
}

async function runKata(game, kataId) {
  const db = game.db;
  const kata = db.kata.find((k) => k.id === kataId) || db.kata[0];
  const set = fullSet(db, 'blue');
  const opts = practiceBase(game, db.belts[game.save.data.beltIndex].id, set);
  opts.player.lockFacing = true;
  return game.runFight({ ...opts, opponent: null, director: new KataDirector(game, kata) });
}

const pct = (v) => `${Math.round(v * 100)} %`;

// Visas diržo egzaminas. Grąžina true, jei išlaikytas.
async function runExam(game, beltIdx) {
  const db = game.db;
  const belt = db.belts[beltIdx];
  const ex = belt.exam;
  const R = db.rules.exam;
  const kata = db.kata.find((k) => k.id === ex.kata) || db.kata[0];
  const intro = await game.ui.ask(`<div class="panel center">
    <h2>Shinsa · ${beltChip(game, beltIdx)} ${esc(loc(belt, 'name'))}</h2>
    <p>${t('exam.intro', { pass: pct(R.passScore) })}</p>
    <div class="list">
      <div class="item"><div class="keys">1</div><div class="grow"><div class="name">Kihon</div><div class="muted">${t('exam.kihonDesc', { n: ex.kihonCount })}</div></div></div>
      <div class="item"><div class="keys">2</div><div class="grow"><div class="name">Kata · ${esc(kata.name)}</div><div class="muted">${t('exam.kataDesc')}</div></div></div>
      <div class="item"><div class="keys">3</div><div class="grow"><div class="name">Kumite × ${ex.kumite}</div><div class="muted">${t('exam.kumiteDesc')}</div></div></div>
    </div>
    <button class="btn primary" data-act="go">Osu!</button><button class="btn" data-act="back">${t('ui.back')}</button></div>`);
  if (intro.act !== 'go') return false;

  const kihon = await runKihon(game, beltIdx, ex.kihonCount);
  if (!kihon || kihon.aborted) return false;
  await game.ui.ask(`<div class="panel center"><h2>Kihon</h2><div class="score-big">${pct(kihon.score)}</div>
    <p>${t('exam.kihonResult', { n: kihon.correct, total: kihon.total })}</p><button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);

  const kataRes = await runKata(game, ex.kata);
  if (!kataRes || kataRes.aborted) return false;
  await game.ui.ask(`<div class="panel center"><h2>Kata · ${esc(kata.name)}</h2><div class="score-big">${pct(kataRes.score)}</div>
    <p>${t('kata.perfect')} ${kataRes.perfect} · ${t('kata.good')} ${kataRes.good} · ${t('kata.miss')} ${kataRes.miss}</p>
    <button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);

  // Kumite: N kovų iš eilės, tarp kovų atsistato tik 30 % žalos. Užuominos išjungtos, vertinama ir pagarba (REI).
  const opps = shuffle(Math.random, rosterFor(db, belt.id));
  const set = playerSet(game);
  let carry = null;
  let fightScore = 0;
  let bows = 0;
  let missed = 0;
  let ipponLoss = false;
  for (let i = 0; i < ex.kumite; i++) {
    const res = await game.runFight({
      mode: 'match', bg: 'dojo', hints: false, timeSec: belt.matchTimeSec,
      player: { name: t('hud.player'), belt: db.belts[game.save.data.beltIndex].id, ...set, carry },
      opponent: oppFromRoster(db, opps[i % opps.length]),
    });
    if (!res || res.aborted) return false;
    bows += res.bowsTotal;
    missed += res.bowsMissed;
    if (res.playerWon) fightScore += 1;
    else if (res.by === 'hantei') fightScore += 0.5;
    else ipponLoss = true;
    await fightResultScreen(game, res, [{ act: 'go', label: t('ui.next') }]);
    if (ipponLoss) break;
    const keep = 1 - db.rules.recovery.exam;
    carry = { legs: res.player.dmg.legs * keep, body: res.player.dmg.body * keep, head: res.player.dmg.head * keep };
  }
  const respect = bows ? 1 - missed / bows : 1;
  const kumite = (fightScore / ex.kumite) * 0.8 + respect * 0.2;
  const total = (kihon.score + kataRes.score + kumite) / 3;
  const passed = total >= R.passScore && !ipponLoss;
  const s = game.save.data;
  const prev = s.exams[belt.id] || { best: 0, passed: false };
  s.exams[belt.id] = { best: Math.max(prev.best, total), passed: prev.passed || passed };
  if (passed) s.beltIndex = Math.max(s.beltIndex, beltIdx);
  game.save.write();

  const scores = `<div class="row" style="justify-content:center">
    <div><div class="muted">Kihon</div><b>${pct(kihon.score)}</b></div><div><div class="muted">Kata</div><b>${pct(kataRes.score)}</b></div>
    <div><div class="muted">Kumite</div><b>${pct(kumite)}</b></div><div><div class="muted">${t('exam.respect')}</div><b>${pct(respect)}</b></div></div>`;
  if (!passed) {
    await game.ui.ask(`<div class="panel center"><h2>${t('exam.failed')}</h2><div class="score-big">${pct(total)}</div>${scores}
      <p>${ipponLoss ? t('exam.failedIppon') : t('exam.failedScore', { pass: pct(R.passScore) })}</p><p class="muted">${t('exam.retry')}</p>
      <button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);
    return false;
  }
  // Scena: sensei užriša naują diržą, „OSU!“, atrakintų technikų sąrašas.
  game.audio.osu();
  game.audio.speak('Osu');
  const { techs, combos } = chapterItems(db, belt.id);
  await game.ui.ask(`<div class="panel center">
    <div class="title-logo">OSU!</div>
    <h2>${t('exam.passed')}</h2>
    <p><span class="belt-chip" style="background:${belt.color};width:9rem;height:1.3rem"></span></p>
    <p>${t('exam.newBelt', { belt: loc(belt, 'name'), kyu: belt.kyu[0] })}</p>
    <div class="score-big">${pct(total)}</div>${scores}
    <p class="muted">${t(`story.${belt.id}`)}</p>
    <h3>${t('exam.unlocked')}</h3>
    <div class="list">${techs.map((x) => techRow(db, x)).join('')}${combos.map((c) => comboRow(db, c)).join('')}</div>
    <button class="btn primary" data-act="go">Osu!</button></div>`, 'top');
  return true;
}

__exp.KihonDirector = KihonDirector;
__exp.KataDirector = KataDirector;
__exp.runKihon = runKihon;
__exp.runKata = runKata;
__exp.runExam = runExam;
});
__def('src/core/rng.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Deterministinis atsitiktinių skaičių generatorius (testams ir turnyro simuliacijai).

function mulberry32(seed) {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, list) {
  return list[Math.floor(rng() * list.length) % list.length];
}

function shuffle(rng, list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function range(rng, lo, hi) {
  return lo + rng() * (hi - lo);
}

__exp.mulberry32 = mulberry32;
__exp.pick = pick;
__exp.shuffle = shuffle;
__exp.range = range;
});
__def('src/modes/tournament.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Turnyras (taikai): eliminacijos lentelė arba kovų serija; kitos poros simuliuojamos; tarp kovų atsistato 60 % žalos.

const { shuffle } = __req('src/core/rng.js');
const { t, loc, esc } = __req('src/core/i18n.js');
const { playerSet, rosterFor, oppFromRoster, fightResultScreen } = __req('src/modes/common.js');
const ME = { me: true };

function entrants(game, belt, n) {
  const db = game.db;
  let list = shuffle(Math.random, rosterFor(db, belt.id));
  // Jei šio diržo varžovų trūksta, lentelė papildoma kitų diržų dalyviais (su šio diržo lygiu).
  const others = shuffle(Math.random, db.opponents.roster.filter((r) => r.belt !== belt.id));
  while (list.length < n && others.length) list.push({ ...others.pop(), belt: belt.id });
  return list.slice(0, n).map((r) => ({ ...oppFromRoster(db, r), skill: 0.5 + Math.random() * 0.5 }));
}

function simulate(a, b) {
  return Math.random() * (a.skill + 0.3) > Math.random() * (b.skill + 0.3) ? a : b;
}

function bracketHtml(rounds, names) {
  return `<div class="bracket">${rounds.map((r, ri) => `<div class="round"><div class="muted">${names[ri] || ''}</div>${r.map((p) => `
    <div class="pair${p.next ? ' next' : ''}">
      <div class="${p.w === p.a ? 'win' : ''}${p.a && p.a.me ? ' me' : ''}">${p.a ? esc(p.a.name) : '—'}</div>
      <div class="${p.w === p.b ? 'win' : ''}${p.b && p.b.me ? ' me' : ''}">${p.b ? esc(p.b.name) : '—'}</div>
    </div>`).join('')}</div>`).join('')}</div>`;
}

async function runTournament(game, beltIdx) {
  const db = game.db;
  const belt = db.belts[beltIdx];
  const T = belt.tournament;
  const name = loc(T, 'name');
  const me = { ...ME, name: t('hud.player') };
  const set = playerSet(game);
  const keep = 1 - db.rules.recovery.tournament;
  let carry = null;

  const fightVs = async (opp) => {
    // Žaidėjas atsitiktinai gauna Aka arba Shiro pusę.
    const res = await game.runFight({
      mode: 'match', bg: T.bg, hints: true, timeSec: belt.matchTimeSec,
      playerSide: Math.random() < 0.5 ? 'aka' : 'shiro',
      player: { name: me.name, belt: db.belts[game.save.data.beltIndex].id, ...set, carry },
      opponent: opp,
    });
    if (!res || res.aborted) return null;
    carry = { legs: res.player.dmg.legs * keep, body: res.player.dmg.body * keep, head: res.player.dmg.head * keep };
    await fightResultScreen(game, res, [{ act: 'go', label: t('ui.next') }]);
    return res.playerWon;
  };

  let won = false;
  if (T.format === 'series') {
    const opps = entrants(game, belt, T.size - 1);
    won = true;
    for (let i = 0; i < opps.length; i++) {
      const { act } = await game.ui.ask(`<div class="panel center"><h2>${esc(name)}</h2>
        <p>${t('tour.fight', { n: i + 1, total: opps.length })}: <b>${esc(opps[i].name)}</b></p>
        <p class="muted">${t(`arch.${opps[i].archetype}`)}</p>
        <button class="btn primary" data-act="go">${t('tour.fightBtn')}</button><button class="btn" data-act="back">${t('ui.quit')}</button></div>`);
      if (act !== 'go') return false;
      const r = await fightVs(opps[i]);
      if (r === null) return false;
      if (!r) { won = false; break; }
    }
  } else {
    const all = shuffle(Math.random, [me, ...entrants(game, belt, T.size - 1)]);
    const roundNames = { 8: t('tour.quarter'), 4: t('tour.semi'), 2: t('tour.final') };
    const rounds = [];
    let cur = all;
    while (cur.length >= 2) {
      const pairs = [];
      for (let i = 0; i < cur.length; i += 2) pairs.push({ a: cur[i], b: cur[i + 1], w: null });
      rounds.push(pairs);
      const mine = pairs.find((p) => p.a.me || p.b.me);
      const names = rounds.map((r) => roundNames[r.length * 2] || '');
      if (mine) {
        mine.next = true;
        const opp = mine.a.me ? mine.b : mine.a;
        const { act } = await game.ui.ask(`<div class="panel"><div class="head"><h2>${esc(name)}</h2><span class="muted">${names[names.length - 1]}</span></div>
          ${bracketHtml(rounds, names)}
          <p>${t('tour.next')}: <b>${esc(opp.name)}</b> <span class="muted">${t(`arch.${opp.archetype}`)}</span></p>
          <button class="btn primary" data-act="go">${t('tour.fightBtn')}</button><button class="btn" data-act="back">${t('ui.quit')}</button></div>`, 'top');
        if (act !== 'go') return false;
        const r = await fightVs(opp);
        if (r === null) return false;
        mine.next = false;
        mine.w = r ? (mine.a.me ? mine.a : mine.b) : opp;
      }
      // Kitos poros kovos simuliuojamos.
      for (const p of pairs) if (!p.w) p.w = simulate(p.a, p.b);
      cur = pairs.map((p) => p.w);
      if (mine && !mine.w.me) {
        while (cur.length >= 2) {
          const more = [];
          for (let i = 0; i < cur.length; i += 2) more.push({ a: cur[i], b: cur[i + 1], w: simulate(cur[i], cur[i + 1]) });
          rounds.push(more);
          cur = more.map((p) => p.w);
        }
        const names2 = rounds.map((r) => roundNames[r.length * 2] || '');
        await game.ui.ask(`<div class="panel"><h2>${esc(name)}</h2>${bracketHtml(rounds, names2)}
          <p>${t('tour.out')} ${t('tour.champion')}: <b>${esc(cur[0].name)}</b></p>
          <button class="btn primary" data-act="go">${t('ui.next')}</button></div>`, 'top');
        return false;
      }
    }
    won = cur[0].me;
  }

  if (!won) {
    await game.ui.ask(`<div class="panel center"><h2>${esc(name)}</h2><p>${t('tour.out')}</p><button class="btn primary" data-act="go">${t('ui.next')}</button></div>`);
    return false;
  }
  // Finalo scena: apdovanojimai ir taurė.
  const s = game.save.data;
  if (!s.trophies.includes(T.id)) s.trophies.push(T.id);
  const stripe = belt.kyu.length > 1 && s.beltIndex >= beltIdx && !s.stripes[belt.id];
  if (stripe) s.stripes[belt.id] = true;
  game.save.write();
  game.audio.osu();
  await game.ui.ask(`<div class="panel center">
    <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
      <path d="M35 15h50v30a25 25 0 0 1-50 0z" fill="#ffd54a" stroke="#8a6a10" stroke-width="4"/>
      <path d="M35 22H18a17 17 0 0 0 20 22M85 22h17a17 17 0 0 1-20 22" fill="none" stroke="#8a6a10" stroke-width="5"/>
      <rect x="54" y="68" width="12" height="20" fill="#d9a520"/><rect x="38" y="88" width="44" height="12" rx="3" fill="#8a6a10"/>
    </svg>
    <h1>${t('tour.won')}</h1><p>${esc(name)}</p>
    ${stripe ? `<p class="jp">${t('tour.stripe', { kyu: belt.kyu[1] })}</p>` : ''}
    <button class="btn primary" data-act="go">Osu!</button></div>`);
  return true;
}

__exp.runTournament = runTournament;
});
__def('src/modes/quickfight.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Greita kova: pasirenkamas savo diržas (tik pasiekti), varžovo archetipas ir sunkumas.

const { t, loc, esc } = __req('src/core/i18n.js');
const { fullSet, fightResultScreen } = __req('src/modes/common.js');
async function quickFight(game) {
  const db = game.db;
  const sel = { belt: game.save.data.beltIndex, arch: 'tank', diff: game.settings.difficulty };
  for (;;) {
    const belts = db.belts.filter((b, i) => i <= game.save.data.beltIndex);
    const seg = (key, items) => `<div class="seg">${items.map(([v, label]) => `<button data-act="${key}:${v}" class="${String(sel[key]) === String(v) ? 'on' : ''}">${label}</button>`).join('')}</div>`;
    const arch = db.opponents.archetypes;
    const html = `<div class="panel narrow">
      <div class="head"><h2>${t('menu.quick')}</h2><button class="btn small" data-act="back">${t('ui.back')}</button></div>
      <div class="setting"><span>${t('quick.belt')}</span>${seg('belt', belts.map((b, i) => [i, esc(loc(b, 'name'))]))}</div>
      <div class="setting"><span>${t('quick.opponent')}</span>${seg('arch', Object.keys(arch).map((k) => [k, esc(loc(arch[k], 'name'))]))}</div>
      <p class="muted">${esc(loc(arch[sel.arch], 'desc'))}</p>
      <div class="setting"><span>${t('set.difficulty')}</span>${seg('diff', ['easy', 'normal', 'hard'].map((d) => [d, t(`diff.${d}`)]))}</div>
      <button class="btn block primary" data-act="go">Hajime!</button></div>`;
    const { act } = await game.ui.ask(html);
    if (act === 'back') return;
    if (act !== 'go') {
      const [key, v] = act.split(':');
      sel[key] = key === 'belt' ? Number(v) : v;
      continue;
    }
    const belt = db.belts[sel.belt];
    const names = db.opponents.roster.filter((r) => r.archetype === sel.arch);
    const opp = names[Math.floor(Math.random() * names.length)];
    for (;;) {
      const res = await game.runFight({
        mode: 'match', bg: sel.belt > 0 ? 'hall' : 'dojo', hints: true, difficulty: sel.diff, timeSec: belt.matchTimeSec,
        player: { name: t('hud.player'), belt: belt.id, ...fullSet(db, belt.id) },
        opponent: { name: opp.name, belt: belt.id, archetype: sel.arch },
      });
      if (!res || res.aborted) break;
      const a = await fightResultScreen(game, res, [{ act: 'again', label: t('ui.again') }, { act: 'back', label: t('ui.back') }]);
      if (a !== 'again') break;
    }
  }
}

__exp.quickFight = quickFight;
});
__def('src/modes/debug.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Derinimo ekranas: hitbox'ai ir hurtbox'ai, kovotojų būsenos skaičiai, visų technikų parametrų lentelė,
// vėliavėlių signalų peržiūra, partnerio režimai.

const { JudgePanel, SIGNALS, WHISTLE } = __req('src/fight/judges.js');
const { AIController, DummyController, buildProfile } = __req('src/fight/ai.js');
const { techsUpTo, combosUpTo } = __req('src/core/data.js');
const { inputGlyphs } = __req('src/core/combo.js');
const { t, esc } = __req('src/core/i18n.js');
function paramsTable(db) {
  const R = db.rules.combat.ranges;
  const rows = db.techniques.map((x) => {
    const f = x.frames || {};
    return `<tr><td>${esc(x.name)}</td><td>${x.belt}</td><td>${inputGlyphs(x.input).join(' ')}${x.hold ? ' (hold)' : ''}${x.auto ? ' (auto)' : ''}</td>
      <td>${x.level || ''}</td><td>${x.range ? `${x.range} ${R[x.range]}` : ''}</td>
      <td>${f.startup ?? ''}</td><td>${f.active ?? ''}</td><td>${f.recovery ?? ''}</td>
      <td>${x.damage ? `${x.damage.amount} ${x.damage.zone}` : ''}</td><td>${x.balanceDamage ?? ''}</td><td>${x.staminaCost ?? ''}</td>
      <td>${x.legalInKumite ? '✓' : `✗ chui ${x.foulChui || 1}`}</td></tr>`;
  }).join('');
  const C = db.rules.combat;
  return `<p class="muted">damageScale ${C.damageScale} · chainWindow ${C.chainWindow} · block ×${C.block.factor} · perfect ≤${C.block.perfectMs} ms · hold ≥${db.rules.input.holdMs} ms · buffer ${db.rules.input.bufferMs}/${db.rules.input.buttonMs} ms</p>
    <table class="params"><thead><tr><th>${t('debug.tech')}</th><th>belt</th><th>input</th><th>level</th><th>range px</th><th>startup</th><th>active</th><th>recovery</th>
    <th>dmg</th><th>bal</th><th>sta</th><th>kumite</th></tr></thead><tbody>${rows}</tbody></table>`;
}

async function debugScreen(game) {
  const db = game.db;
  const all = new Set(db.techniques.map((x) => x.id));
  const allCombos = new Set(db.combos.map((c) => c.id));
  const st = { table: false, signals: false, partner: 'passive', unlockAll: false, sig: 0 };
  const panel = new JudgePanel(db.rules.match);
  const done = game.runFight({
    mode: 'practice', bg: 'dojo', hints: true, debug: true, showDamage: true, judgesPreview: panel,
    player: { name: 'Debug', belt: 'blue', unlocked: techsUpTo(db, 'blue'), combos: combosUpTo(db, 'blue') },
    opponent: { name: 'Dummy', belt: 'blue', dummy: 'passive' },
    director: { attach() {}, update(dt) { panel.update(dt); } },
  });
  const scene = game.scene;
  const draw = () => {
    const b = (act, label, on) => `<button class="btn small${on ? ' primary' : ''}" data-act="${act}">${label}</button>`;
    game.ui.show(`<div class="debug-bars"><div class="debug-bar">
        ${b('table', t('debug.table'), st.table)}${b('signals', t('debug.signals'), st.signals)}
        ${b('partner', `${t('debug.partner')}: ${st.partner}`)}${b('unlock', t('debug.unlockAll'), st.unlockAll)}
        ${b('ki', 'Ki 100')}${b('boxes', t('debug.boxesInFights'), game.debugBoxes)}${b('exit', t('ui.quit'))}
      </div>
      ${st.signals ? `<div class="debug-bar">${SIGNALS.map((s) => b(`sig:${s}`, s)).join('')}${b('sigside', st.sig ? 'shiro' : 'aka')}</div>` : ''}</div>
      ${st.table ? `<div class="debug-panel">${paramsTable(db)}</div>` : ''}`, handler, 'overlay');
  };
  const handler = (act) => {
    if (act === 'exit') { scene.finish({ aborted: true }); return; }
    if (act === 'table') st.table = !st.table;
    else if (act === 'signals') st.signals = !st.signals;
    else if (act === 'sigside') st.sig = 1 - st.sig;
    else if (act.startsWith('sig:')) {
      const s = act.slice(4);
      const side = st.sig ? 'shiro' : 'aka';
      panel.corners.forEach((j) => panel.set(j.i, s, side, Math.random() * 150));
      if (WHISTLE[s]) game.audio.whistle(WHISTLE[s]);
    } else if (act === 'partner') {
      const modes = ['passive', 'block', 'attack', 'AI'];
      st.partner = modes[(modes.indexOf(st.partner) + 1) % modes.length];
      scene.ai = st.partner === 'AI'
        ? new AIController(scene.opp, scene.player, buildProfile(db, { belt: 'blue', archetype: 'tank' }, 'normal'), db)
        : new DummyController(scene.opp, scene.player, db, st.partner, { intervalMs: 1400 });
    } else if (act === 'unlock') {
      st.unlockAll = !st.unlockAll;
      scene.player.unlocked = st.unlockAll ? all : techsUpTo(db, 'blue');
      scene.player.combos = st.unlockAll ? allCombos : combosUpTo(db, 'blue');
      scene.hud.buildHints(scene.player);
    } else if (act === 'ki') scene.player.ki = 100;
    else if (act === 'boxes') game.debugBoxes = !game.debugBoxes;
    draw();
  };
  draw();
  await done;
  game.ui.clear();
}

__exp.debugScreen = debugScreen;
});
__def('src/fight/judges.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// 4 kampiniai teisėjai (fukushin): kiekvienas savarankiškai „mato“ įvykį, balsuoja ir rodo vėliavėlių signalą.
// Kartu su vyr. teisėju – 5 balsai; sprendimui reikia ≥ votesNeeded (3).

const { judgeVote, tallyVotes } = __req('src/fight/rules.js');
// Visi vėliavėlių signalai (animacijos – render.js flagPose).
const SIGNALS = ['none', 'ippon', 'wazaari', 'wazaari_ippon', 'chui', 'clinch', 'jogai', 'fumei', 'mitomezu', 'hantei', 'hikiwake'];
// Švilpukas pagal signalą: long = 1 ilgas, strong = 1 stiprus, shorts = keli trumpi, short = 1 trumpas.
const WHISTLE = {
  ippon: 'long', wazaari: 'strong', wazaari_ippon: 'long', chui: 'shorts', clinch: 'shorts', jogai: 'shorts',
  fumei: 'short', mitomezu: 'long', hantei: 'long', hikiwake: 'long',
};

class JudgePanel {
  constructor(R, rng) {
    this.R = R;
    this.rng = rng || Math.random;
    this.corners = [0, 1, 2, 3].map((i) => ({ i, signal: 'none', side: null, t: 0, delay: 0 }));
  }

  set(i, signal, side, delay = 0) {
    const j = this.corners[i];
    j.signal = signal;
    j.side = side;
    j.t = 0;
    j.delay = delay;
  }

  clear() {
    for (const j of this.corners) this.set(j.i, 'none', null);
  }

  update(dt) {
    for (const j of this.corners) j.t += dt;
  }

  delay() {
    const [lo, hi] = this.R.flagDelayMs;
    return lo + this.rng() * (hi - lo);
  }

  // Visi kampiniai rodo tą patį signalą; kiekvienas su 5 % tikimybe įvykio nematė (fumei), bet ne daugiau kaip
  // maxFumei teisėjų, kad akivaizdus įvykis (partrenkimas, draudžiama technika) visada surinktų ≥ 3 balsus.
  signalAll(signal, side, maxFumei = 1) {
    let fumei = 0;
    let yes = 1; // vyr. teisėjas
    for (const j of this.corners) {
      if (fumei < maxFumei && this.rng() < this.R.fumeiChance) {
        fumei++;
        this.set(j.i, 'fumei', null, this.rng() * 120);
      } else {
        yes++;
        this.set(j.i, signal, side, this.rng() * 120);
      }
    }
    return { yes, no: 0, fumei };
  }

  // Balsavimas dėl ginčytino įvykio (pvz., pusiausvyros praradimas be kritimo): pritaria → signalas, nepritaria → mitomezu.
  voteEvent(signal, side, chance) {
    let yes = 1;
    let no = 0;
    let fumei = 0;
    for (const j of this.corners) {
      const r = this.rng();
      if (r < this.R.fumeiChance) { fumei++; this.set(j.i, 'fumei', null, this.rng() * 150); }
      else if (this.rng() < chance) { yes++; this.set(j.i, signal, side, this.rng() * 150); }
      else { no++; this.set(j.i, 'mitomezu', null, this.rng() * 150); }
    }
    return { yes, no, fumei, passed: yes >= this.R.votesNeeded };
  }

  // Hantei: visi kampiniai vienu metu (su 100–250 ms vėlavimu kiekvienam) pakelia vėliavėles; vyr. teisėjas – 5-as balsas.
  voteHantei(aka, shiro, forced) {
    const votes = [];
    for (const j of this.corners) {
      const v = judgeVote(aka, shiro, this.R, this.rng, forced);
      votes.push(v);
      if (v === 'draw') this.set(j.i, 'hikiwake', null, this.delay());
      else this.set(j.i, 'hantei', v, this.delay());
    }
    votes.push(judgeVote(aka, shiro, this.R, this.rng, forced));
    return { votes, ...tallyVotes(votes, this.R.votesNeeded) };
  }

  // Pergalės ceremonija: kampiniai pakelia nugalėtojo spalvos vėliavėlę įstrižai aukštyn.
  // perJudge (hantei balsai) – jei sprendimas ne vienbalsis, kai kurie rodo kitą spalvą arba sukryžiuotas vėliavėles.
  ceremony(winner, perJudge) {
    for (const j of this.corners) {
      const v = perJudge ? perJudge[j.i] : winner;
      if (v === 'draw') this.set(j.i, 'hikiwake', null, this.delay());
      else this.set(j.i, 'hantei', v, this.delay());
    }
  }
}

__exp.SIGNALS = SIGNALS;
__exp.WHISTLE = WHISTLE;
__exp.JudgePanel = JudgePanel;
});
__def('src/fight/rules.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Taisyklių skaičiavimai: balsų sudėjimas (≥3 iš 5), hantei kriterijai, atsikėlimo laikas, įspėjimų pavadinimai.
// Visi parametrai ateina iš data/rules.json.

// Hantei kriterijai eilės tvarka (svoriai mažėja): waza-ari, žala, efektyvios technikos, technikų skaičius, iniciatyva.
function hanteiScore(f, W) {
  const s = W.wazaAri * f.wazaAri + W.damage * f.stats.dmg + W.effective * f.stats.effective +
    W.techniques * f.stats.techniques + W.initiative * (f.stats.initiative / 1000) - W.chui * f.chui;
  return Math.max(0, s);
}

// Vieno teisėjo balsas: 'aka' | 'shiro' | 'draw'. forced = paskutinis pratęsimas (lygiųjų nėra).
function judgeVote(aka, shiro, R, rng, forced) {
  const noise = () => 1 + (rng() * 2 - 1) * R.judgeNoise;
  const a = hanteiScore(aka, R.hantei) * noise();
  const b = hanteiScore(shiro, R.hantei) * noise();
  const diff = aka.chui - shiro.chui;
  if (Math.abs(diff) >= R.chuiDecisiveDiff) {
    // Dviejų įspėjimų skirtumas nulemia sprendimą prieš pažeidėją, jei jis nevedė aiškiai.
    const offenderIsAka = diff > 0;
    const off = offenderIsAka ? a : b;
    const other = offenderIsAka ? b : a;
    if (off <= other * (1 + R.clearLeadMargin)) return offenderIsAka ? 'shiro' : 'aka';
  }
  const m = Math.max(a, b, 1);
  if (!forced && Math.abs(a - b) <= R.hikiwakeMargin * m) return 'draw';
  if (a === b) return rng() < 0.5 ? 'aka' : 'shiro';
  return a > b ? 'aka' : 'shiro';
}

function tallyVotes(votes, needed) {
  const t = { aka: 0, shiro: 0, draw: 0, winner: null };
  for (const v of votes) t[v]++;
  if (t.aka >= needed) t.winner = 'aka';
  else if (t.shiro >= needed) t.winner = 'shiro';
  return t;
}

// Kiek ms kovotojas guli po partrenkimo. > knockdownCountSec → ippon, kitaip waza-ari.
function getUpTimeMs(f, cause, G, rng) {
  const total = (f.dmg.legs + f.dmg.body + f.dmg.head) / 300;
  let ms = G.baseMs + G.perDamageMs * total + (rng() * 2 - 1) * G.randMs;
  if (cause === 'head') ms += G.headExtraMs;
  return Math.max(600, ms);
}

function chuiCallId(total, limit) {
  return total >= limit ? 'shikkaku' : `chui_${Math.max(1, total)}`;
}

function otherSide(side) {
  return side === 'aka' ? 'shiro' : 'aka';
}

__exp.hanteiScore = hanteiScore;
__exp.judgeVote = judgeVote;
__exp.tallyVotes = tallyVotes;
__exp.getUpTimeMs = getUpTimeMs;
__exp.chuiCallId = chuiCallId;
__exp.otherSide = otherSide;
});
__def('src/fight/ai.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Varžovų AI: būsenų mašina Artinasi → Spaudžia → Keičiasi smūgiais → Atsitraukia → Kontratakuoja.
// Parametrai (reakcija, agresyvumas, blokavimo tikimybės, mėgstamos technikos, pražangų tikimybė) – data/opponents.json.

const { HALF_W } = __req('src/fight/fighter.js');
// Sujungia archetipą, diržo numatytuosius parametrus ir sunkumo lygį į vieną profilį.
function buildProfile(db, opp, difficulty = 'normal') {
  const O = db.opponents;
  const arch = O.archetypes[opp.archetype] || O.archetypes.tank;
  const belt = O.beltDefaults[opp.belt] || O.beltDefaults.white;
  const diff = O.difficulty[difficulty] || O.difficulty.normal;
  return {
    ...arch, ...belt, ...(opp.overrides || {}),
    reactionMs: belt.reactionMs * diff.reaction,
    aggression: Math.min(0.95, arch.aggression * diff.aggression * (0.75 + 0.25 * belt.skill)),
    dmgMult: diff.damage,
    blockScale: Math.min(1.25, belt.skill),
  };
}

class AIController {
  constructor(fighter, opponent, profile, db, rng) {
    this.f = fighter;
    this.o = opponent;
    this.p = profile;
    this.db = db;
    this.rng = rng || Math.random;
    this.C = db.rules.combat;
    this.state = 'approach';
    this.decT = 0;
    this.queue = [];
    this.guardT = 0;
    this.guardLevel = 'chudan';
    this.guardNew = false;
    this.react = null;
    this.seen = null;
    this.cool = 0;
    this.retreatT = 0;
    this.want = null;
    this.haltRolled = false;
    this.wasHit = null;
    this.strikes = db.techniques.filter((t) => t.type === 'strike' && !t.auto && fighter.unlocked.has(t.id));
    this.combos = db.combos.filter((c) => fighter.combos.has(c.id) && !c.sequence.includes('@block') && c.sequence.every((id) => fighter.unlocked.has(id)));
  }

  inRange(def, d) {
    return d - HALF_W <= this.C.ranges[def.range] - 6;
  }

  pickTech(d) {
    const rng = this.rng;
    const p = this.p;
    if (rng() < p.comboChance) {
      const ok = this.combos.filter((c) => this.inRange(this.db.tech[c.sequence[0]], d));
      if (ok.length) {
        const c = ok[Math.floor(rng() * ok.length)];
        this.queue = c.sequence.slice(1);
        return this.db.tech[c.sequence[0]];
      }
    }
    const list = this.strikes.filter((t) => t.legalInKumite && this.inRange(t, d) && t.staminaCost <= this.f.stamina + 2);
    if (!list.length) return null;
    let total = 0;
    for (const t of list) total += p.weights[t.id] ?? 1;
    let r = rng() * total;
    for (const t of list) { r -= p.weights[t.id] ?? 1; if (r <= 0) return t; }
    return list[list.length - 1];
  }

  decide(d) {
    const { f, p, rng } = this;
    const A = this.db.rules.arena;
    const behind = f.facing > 0 ? f.x - A.xMin : A.xMax - f.x;
    this.want = null;
    // Pasyvumo vengimas: per ilgai nepuolus – būtinai artėti ir pulti.
    if (f.passive > 5500) { this.want = this.pickTech(d); this.state = 'approach'; if (!this.want) this.want = this.strikes.find((t) => t.legalInKumite) || null; return; }
    if (f.counterT > 0) { this.state = 'counter'; this.want = this.pickTech(d); return; }
    if (f.stamina < 18 && behind > 90) { this.state = 'retreat'; this.retreatT = 500 + rng() * 500; return; }
    if (d > p.prefDist + 22) { this.state = behind < 70 || rng() < p.aggression + 0.2 ? 'approach' : 'wait'; return; }
    if (this.cool > 0) { this.state = 'exchange'; return; }
    const r = rng();
    if (r < p.aggression) {
      this.state = d < 110 ? 'pressure' : 'exchange';
      this.want = this.pickTech(d);
      if (!this.want) this.state = 'approach';
    } else if (r < p.aggression + p.retreatChance && behind > 110) {
      this.state = 'retreat';
      this.retreatT = 300 + rng() * 400;
    } else if (rng() < p.guardIdle) {
      this.guardT = 250 + rng() * 300;
      this.guardLevel = rng() < 0.6 ? 'chudan' : rng() < 0.5 ? 'gedan' : 'jodan';
      this.guardNew = true;
    } else this.state = 'exchange';
  }

  update(dt, fight) {
    const { f, o, p, rng } = this;
    const it = { move: 0, guard: null, guardPressed: false, tech: null };
    if (fight.phase !== 'live') {
      this.queue = [];
      this.react = null;
      this.guardT = 0;
      if (fight.phase === 'halt' && !this.haltRolled) {
        // Retas netyčinis puolimas po „Yame“.
        this.haltRolled = true;
        this.lateHit = rng() < p.foulChance * 0.5;
      }
      if (this.lateHit && fight.haltLate && fight.phase === 'halt' && this.strikes.length) { this.lateHit = false; it.tech = this.strikes[0]; }
      return it;
    }
    this.haltRolled = false;
    this.cool -= dt;
    const d = Math.abs(o.x - f.x);

    // Reakcija į varžovo techniką: po reakcijos laiko – blokas atitinkamame lygyje.
    if (o.tech && o.tech !== this.seen && o.tech.phase === 'startup') {
      this.seen = o.tech;
      if (d - HALF_W <= this.C.ranges[o.tech.def.range] + 40) {
        const level = o.tech.def.level;
        this.react = {
          at: fight.time + p.reactionMs * (0.8 + rng() * 0.4), tech: o.tech, level,
          will: rng() < Math.min(0.95, (p.block[level] || 0) * p.blockScale),
        };
      }
    }
    if (this.react && fight.time >= this.react.at) {
      const r = this.react;
      this.react = null;
      if (r.will && o.tech === r.tech && o.tech.phase !== 'recovery' && f.state !== 'attack' && f.unlocked.has(this.db.guardByLevel[r.level]?.id)) {
        this.guardT = 320 + rng() * 200;
        this.guardLevel = r.level;
        this.guardNew = true;
      }
    }
    // Gavęs smūgį, su blokavimo tikimybe dengiasi tame lygyje (apsauga nuo grandinių).
    if (f.state === 'hit') this.wasHit = f.hitZone;
    else if (this.wasHit) {
      const level = this.wasHit === 'legs' ? 'gedan' : this.wasHit === 'head' ? 'jodan' : 'chudan';
      this.wasHit = null;
      if (rng() < Math.min(0.95, (p.block[level] || 0) * p.blockScale + 0.15)) {
        this.guardT = 380 + rng() * 260;
        this.guardLevel = level;
        this.guardNew = true;
      }
    }
    if (this.guardT > 0 && f.state !== 'attack') {
      this.guardT -= dt;
      it.guard = this.guardLevel;
      it.guardPressed = this.guardNew;
      this.guardNew = false;
      return it;
    }

    // Kombinacijos tęsinys grandinės lange.
    if (f.state === 'attack') {
      const T = f.tech;
      if (this.queue.length && T.phase === 'recovery') {
        const total = T.dur.s + T.dur.a + T.dur.r;
        if ((T.dur.s + T.dur.a + T.t) / total >= 1 - this.C.chainWindow + 0.04) it.tech = this.db.tech[this.queue.shift()];
      }
      return it;
    }
    if (this.queue.length) {
      if (f.state === 'idle' && f.chainT <= this.C.chainGraceMs) { it.tech = this.db.tech[this.queue.shift()]; return it; }
      if (f.chainT > this.C.chainGraceMs) this.queue = [];
    }
    if (f.state !== 'idle' && f.state !== 'walk') return it;

    this.decT -= dt;
    if (this.decT <= 0) {
      this.decT = 150 + rng() * 150;
      this.decide(d);
    }
    switch (this.state) {
      case 'approach': it.move = d > p.prefDist ? 1 : 0; break;
      case 'retreat':
        this.retreatT -= dt;
        it.move = -1;
        if (this.retreatT <= 0) this.state = 'exchange';
        break;
      case 'pressure': it.move = d > 92 ? 1 : 0; break;
      default: break;
    }
    if (this.want) {
      if (this.inRange(this.want, d)) {
        it.tech = this.want;
        if (rng() < p.foulChance) {
          // Žemesnių diržų AI kartais suklysta (pvz., smogia į veidą) – žaidėjas mato, kaip reaguoja teisėjai.
          const illegal = this.strikes.filter((t) => !t.legalInKumite && this.inRange(t, d));
          if (illegal.length) { it.tech = illegal[Math.floor(rng() * illegal.length)]; this.queue = []; }
        }
        this.cool = p.cooldownMs[0] + rng() * (p.cooldownMs[1] - p.cooldownMs[0]);
      } else it.move = 1;
      this.want = it.tech ? null : this.want;
    }
    return it;
  }
}

// Paprastas treniruočių partneris: 'passive' | 'block' | 'attack'.
class DummyController {
  constructor(fighter, opponent, db, mode = 'passive', opts = {}) {
    this.f = fighter;
    this.o = opponent;
    this.db = db;
    this.mode = mode;
    this.tech = opts.techId ? db.tech[opts.techId] : db.tech.seiken_gyaku_tsuki;
    this.interval = opts.intervalMs || 1700;
    this.timer = 900;
    this.guardNew = true;
  }

  update(dt) {
    const { f, o } = this;
    const it = { move: 0, guard: null, guardPressed: false, tech: null };
    const d = Math.abs(o.x - f.x);
    if (this.mode === 'block') {
      if (o.tech && o.tech.phase !== 'recovery') {
        it.guard = o.tech.def.level;
        it.guardPressed = this.guardNew;
        this.guardNew = false;
      } else this.guardNew = true;
    } else if (this.mode === 'attack') {
      const reach = this.db.rules.combat.ranges[this.tech.range] + HALF_W - 14;
      if (d > reach) it.move = 1;
      else if (d < reach - 40) it.move = -1;
      this.timer -= dt;
      if (this.timer <= 0 && d <= reach && f.state === 'idle') {
        it.tech = this.tech;
        this.timer = this.interval;
      }
    }
    return it;
  }
}

__exp.buildProfile = buildProfile;
__exp.AIController = AIController;
__exp.DummyController = DummyController;
});
__def('src/fight/fighter.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Kovotojo būsena ir hitbox'ai.

const ZONES = ['legs', 'body', 'head'];
const HALF_W = 22;
// Zonų aukščiai virš grindų (px): naudojami hurtbox'ams ir derinimo ekranui.
const ZONE_Y = { legs: [0, 96], body: [96, 176], head: [176, 216] };
const LEVEL_ZONE = { gedan: 'legs', chudan: 'body', jodan: 'head' };

function createFighter(db, cfg) {
  return {
    id: cfg.id,
    side: cfg.side,
    name: cfg.name || cfg.side,
    belt: cfg.belt || 'white',
    isPlayer: !!cfg.isPlayer,
    hidden: !!cfg.hidden,
    immortal: !!cfg.immortal,
    lockFacing: !!cfg.lockFacing,
    unlocked: cfg.unlocked || new Set(),
    combos: cfg.combos || new Set(),
    dmgMult: cfg.dmgMult ?? 1,
    x: 0, px: 0, facing: 1,
    state: 'idle', st: 0,
    tech: null, guard: null, down: null, pose: null, dash: null, buf: null, req: null,
    crouch: false, moving: 0,
    dmg: { legs: cfg.carry?.legs || 0, body: cfg.carry?.body || 0, head: cfg.carry?.head || 0 },
    balance: 100, stamina: 100, ki: cfg.ki || 0, kiaiT: 0,
    wazaAri: 0, chui: 0,
    stats: { dmg: 0, effective: 0, techniques: 0, initiative: 0 },
    sinceHit: 9999, sinceAct: 9999, passive: 0,
    invul: 0, open: 0, counterT: 0, stun: 0, flash: 0, holdT: 0, suneT: 0,
    chainList: [], chainCount: 0, chainSeq: 0, chainT: 9999, lastCombo: null,
  };
}

function setState(f, s) {
  f.state = s;
  f.st = 0;
}

// Hurtbox'ai pasaulio koordinatėmis: y – aukštis virš grindų.
function hurtboxes(f) {
  if (f.state === 'down') return [{ zone: 'legs', x0: f.x - 60, x1: f.x + 60, y0: 0, y1: 30 }];
  return ZONES.map((zone) => ({ zone, x0: f.x - HALF_W, x1: f.x + HALF_W, y0: ZONE_Y[zone][0], y1: ZONE_Y[zone][1] }));
}

// Aktyvios technikos hitbox'as (arba null).
function attackBox(f, ranges) {
  const T = f.tech;
  if (!T || T.phase !== 'active') return null;
  const reach = ranges[T.def.range];
  const [y0, y1] = ZONE_Y[T.def.damage.zone];
  const a = f.x + f.facing * 14;
  const b = f.x + f.facing * reach;
  return { x0: Math.min(a, b), x1: Math.max(a, b), y0: y0 + 10, y1: y1 - 6, reach };
}

function totalDamage(f) {
  return f.dmg.legs + f.dmg.body + f.dmg.head;
}

__exp.ZONES = ZONES;
__exp.HALF_W = HALF_W;
__exp.ZONE_Y = ZONE_Y;
__exp.LEVEL_ZONE = LEVEL_ZONE;
__exp.createFighter = createFighter;
__exp.setState = setState;
__exp.hurtboxes = hurtboxes;
__exp.attackBox = attackBox;
__exp.totalDamage = totalDamage;
});
__def('src/fight/fightScene.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Kovos scena: sujungia kovos branduolį, teisėją, valdiklius, HUD, garsą ir piešimą.
// Naudojama ir kumite kovoms (mode 'match'), ir dojo / egzamino treniruotėms (mode 'practice' + director).

const { Fight } = __req('src/fight/combat.js');
const { Referee } = __req('src/fight/referee.js');
const { PlayerController } = __req('src/fight/player.js');
const { AIController, DummyController, buildProfile } = __req('src/fight/ai.js');
const { fighterPose, lerpPose, drawFigure, drawShadow } = __req('src/fight/skeleton.js');
const { makeBackground, judgeSpots, drawCornerJudge, drawShushin, Particles, W, H } = __req('src/fight/render.js');
const { hurtboxes, attackBox, ZONE_Y } = __req('src/fight/fighter.js');
const { Hud } = __req('src/ui/hud.js');
const { techsUpTo, combosUpTo } = __req('src/core/data.js');
const { t, loc } = __req('src/core/i18n.js');
class FightScene {
  // opts: { mode, bg, playerSide, player: { name, belt, unlocked, combos, carry, lockFacing },
  //         opponent: { name, belt, archetype, dummy, techId, carry } | null, difficulty, timeSec,
  //         hints, director, debug, rng, showPanels, judgesPreview }
  constructor(game, opts) {
    this.game = game;
    this.db = game.db;
    this.opts = opts;
    const db = this.db;
    const mode = opts.mode || 'match';
    const pSide = opts.playerSide || 'aka';
    const oSide = pSide === 'aka' ? 'shiro' : 'aka';
    const practice = mode === 'practice';
    const p = opts.player;
    const o = opts.opponent;
    const profile = o && !o.dummy ? buildProfile(db, o, opts.difficulty || game.settings.difficulty) : null;
    const pCfg = {
      side: pSide, name: p.name || t('hud.player'), belt: p.belt, isPlayer: true, unlocked: p.unlocked, combos: p.combos,
      carry: p.carry, immortal: practice, lockFacing: !!p.lockFacing,
    };
    const oBelt = o ? o.belt : p.belt;
    const oCfg = {
      side: oSide, name: o ? o.name : '', belt: oBelt, hidden: !o, immortal: practice,
      unlocked: techsUpTo(db, oBelt), combos: combosUpTo(db, oBelt), dmgMult: profile ? profile.dmgMult : 1, carry: o ? o.carry : null,
    };
    this.fight = new Fight(db, pSide === 'aka' ? pCfg : oCfg, pSide === 'aka' ? oCfg : pCfg, { mode, rng: opts.rng });
    this.pi = pSide === 'aka' ? 0 : 1;
    this.player = this.fight.fighters[this.pi];
    this.opp = this.fight.fighters[1 - this.pi];
    this.ctrl = new PlayerController(this.player, db, game.input);
    this.ai = null;
    if (o) {
      this.ai = o.dummy
        ? new DummyController(this.opp, this.player, db, o.dummy, { techId: o.techId, intervalMs: o.intervalMs })
        : new AIController(this.opp, this.player, profile, db, opts.rng);
    }
    this.bg = makeBackground(opts.bg || 'dojo', db.rules.arena);
    this.spots = judgeSpots(db.rules.arena);
    this.hud = new Hud(this);
    this.particles = new Particles();
    this.cam = { shake: 0, zoom: 1, zx: 640 };
    this.official = null;
    this.time = 0;
    this.done = false;
    this.onDone = null;
    this.showPanels = opts.showPanels ?? true;
    this.showTrail = !!opts.hints && game.settings.assist;
    if (opts.hints && game.settings.assist && !opts.director) this.hud.buildHints(this.player);
    this.debug = !!opts.debug;
    this.judgesPreview = opts.judgesPreview || null;
    this.director = opts.director || null;
    game.input.clear();
    game.touch.setMode('fight');
    game.touch.showRei(false);
    this.official = mode === 'match'
      ? new Referee(this.fight, db, { rng: opts.rng, timeSec: opts.timeSec, onEvent: (ev) => this.onOfficial(ev) })
      : null;
    game.audio.music(opts.bg === 'hall' || opts.bg === 'arena' ? 'crowd' : null);
    if (this.director) this.director.attach(this);
  }

  update(dt) {
    if (this.done) return;
    this.time += dt;
    const intents = [null, null];
    const pIt = this.ctrl.update();
    intents[this.pi] = pIt;
    if (this.ai) intents[1 - this.pi] = this.ai.update(dt, this.fight);
    if (this.director && this.director.intents) this.director.intents(intents, dt);
    if (this.official && this.game.input.takeRei()) this.official.bow(this.pi);
    this.fight.update(dt, intents);
    const evs = this.fight.takeEvents();
    for (const ev of evs) this.onFightEvent(ev);
    if (this.official) {
      this.official.handle(evs);
      this.official.update(dt);
      const z = this.official.zoom;
      this.cam.zoom += ((z ? z.k : 1) - this.cam.zoom) * 0.06;
      if (z) this.cam.zx += (z.x - this.cam.zx) * 0.08;
    }
    if (this.ctrl.lastLocked) {
      const tech = this.db.tech[this.ctrl.lastLocked.id];
      this.hud.popup(this.player.x, 300, `${tech.name} – ${t('hud.locked')}`, { color: '#ffb0a0', size: 18 });
      this.ctrl.lastLocked = null;
    }
    this.game.touch.setKiai(this.player.ki >= 100 && this.player.unlocked.has('kiai_mode'));
    if (this.director) this.director.update(dt);
    this.hud.update(dt);
    this.particles.update(dt);
    this.cam.shake = Math.max(0, this.cam.shake - dt * 0.04);
  }

  onFightEvent(ev) {
    const g = this.game;
    const gy = this.db.rules.arena.groundY;
    switch (ev.type) {
      case 'techStart':
        if (ev.f === this.player) {
          const sub = g.settings.termsTranslated ? ` · ${loc(ev.def, 'name')}` : '';
          this.hud.popup(ev.f.x, gy - 250, ev.def.name + sub, { size: 19, color: ev.def.legalInKumite ? '#fff' : '#ffb0a0' });
        }
        break;
      case 'techActive': g.audio.whoosh(); break;
      case 'combo':
        if (ev.f === this.player) { this.hud.popup(640, 330, `OSU! ${ev.combo.name}`, { size: 34, color: '#ffd54a', ms: 1300 }); g.audio.osu(); }
        break;
      case 'kiai': g.audio.kiai(ev.f.id); this.hud.popup(ev.f.x, gy - 270, 'KIAI!', { size: 40, color: '#ffe36b' }); break;
      case 'hit': {
        const d = ev.defender;
        const y = gy - (ZONE_Y[ev.zone || 'body'][0] + ZONE_Y[ev.zone || 'body'][1]) / 2;
        const dir = Math.sign(d.x - ev.attacker.x) || 1;
        if (ev.blocked) {
          if (ev.sune) g.audio.sune(); else g.audio.block();
          this.particles.burst(d.x - dir * 20, y, dir, 4, 'rgba(255,240,180,0.9)');
          if (ev.perfect) this.hud.popup(d.x, y - 60, t('hud.perfect'), { color: '#8ff0ff', size: 22 });
        } else if (!ev.foul || ev.foul === 'illegal') {
          g.audio.hit(ev.zone || 'body', Math.min(1, (ev.amount || 6) / 25));
          this.particles.burst(d.x - dir * 14, y, dir, 6 + Math.round((ev.amount || 0) / 3));
          this.cam.shake = Math.min(10, 3 + (ev.amount || 0) / 3);
          if (d === this.player || ev.attacker === this.player) g.vibrate(d === this.player ? 40 : 20);
        }
        if (this.opts.showDamage && ev.amount) this.hud.popup(d.x, y - 30, ev.amount.toFixed(1), { color: '#ffd54a', size: 20 });
        break;
      }
      case 'knockdown':
        g.audio.thud();
        this.cam.shake = 12;
        g.vibrate(80);
        // Parkritęs žaidėjas gali atsikelti greičiau, greitai bakstelėdamas A / K / G.
        if (ev.f === this.player) this.hud.popup(640, 470, t('hud.mash'), { color: '#ffd54a', size: 30, ms: 2600 });
        break;
      default: break;
    }
    if (this.director && this.director.onEvent) this.director.onEvent(ev);
  }

  onOfficial(ev) {
    const g = this.game;
    switch (ev.type) {
      case 'call': {
        const who = ev.side ? `${this.db.rules.calls[ev.side]}, ` : '';
        const text = who + this.db.rules.calls[ev.id];
        let sub = g.settings.termsTranslated ? t(`call.${ev.id}`) : '';
        if (ev.reason) sub = t(`foul.${ev.reason}`) + (sub ? ` · ${sub}` : '');
        this.hud.call(text, sub, ev.ms || 1500);
        g.audio.speak(text);
        break;
      }
      case 'whistle': g.audio.whistle(ev.kind); break;
      case 'rei': g.touch.showRei(ev.open && !this.player.hidden); break;
      case 'count': this.hud.count = { n: ev.n, age: 0 }; g.audio.taiko(0.3); break;
      case 'result': {
        const r = ev.result;
        const v = r.votes;
        const hi = Math.max(v.aka, v.shiro);
        const lo = Math.min(v.aka, v.shiro);
        this.hud.banner = { side: r.winner, title: this.db.rules.calls[`${r.winner}_no_kachi`], votes: `${hi}:${lo} ${t(`result.${r.by}`)}` };
        break;
      }
      case 'end': this.finish(this.buildResult(ev.result)); break;
      default: break;
    }
    if (this.director && this.director.onOfficial) this.director.onOfficial(ev);
  }

  buildResult(r) {
    const p = this.player;
    return {
      ...r,
      playerWon: r.winner === p.side,
      playerSide: p.side,
      player: { dmg: { ...p.dmg }, chui: p.chui, wazaAri: p.wazaAri },
      opp: { dmg: { ...this.opp.dmg }, chui: this.opp.chui, wazaAri: this.opp.wazaAri, name: this.opp.name },
      bowsMissed: this.official ? this.official.respectMiss[this.pi] : 0,
      bowsTotal: this.official ? this.official.bowCalls : 0,
    };
  }

  finish(result) {
    if (this.done) return;
    this.done = true;
    this.onDone?.(result);
  }

  destroy() {
    this.game.touch.setMode('none');
    this.game.input.clear();
  }

  drawFighter(ctx, f, alpha) {
    if (f.hidden) return;
    const db = this.db;
    const gy = db.rules.arena.groundY;
    const target = fighterPose(f, db.anim, this.time);
    const k = f.state === 'attack' ? 0.8 : 0.4;
    f._rp = f._rp ? lerpPose(f._rp, target, k) : target;
    if (target.hipH == null && f._rp.hipH != null && Math.abs(f._rp.rot) < 1) delete f._rp.hipH;
    const x = f.px + (f.x - f.px) * alpha;
    drawShadow(ctx, x, gy, f.state === 'down' ? 90 : 60);
    drawFigure(ctx, x, gy, f.facing, f._rp, {
      belt: db.belts[db.beltIdx[f.belt]].color, aka: f.side === 'aka', flash: f.flash > 0, kiai: f.kiaiT > 0,
      hair: f.id === this.pi ? '#2b2118' : '#4a2f1a',
    });
  }

  render(ctx, alpha) {
    const db = this.db;
    const gy = db.rules.arena.groundY;
    ctx.save();
    if (this.cam.shake > 0.2) ctx.translate((Math.random() - 0.5) * this.cam.shake, (Math.random() - 0.5) * this.cam.shake);
    if (this.cam.zoom > 1.005) {
      ctx.translate(this.cam.zx, 430);
      ctx.scale(this.cam.zoom, this.cam.zoom);
      ctx.translate(-this.cam.zx, -430);
    }
    ctx.drawImage(this.bg, 0, 0);
    const panel = this.official ? this.official.judges : this.judgesPreview;
    if (panel) for (let i = 0; i < 2; i++) drawCornerJudge(ctx, panel.corners[i], this.spots[i]);
    if (this.official) drawShushin(ctx, this.official.shushin, gy, this.time);
    if (this.director && this.director.drawWorld) this.director.drawWorld(ctx);
    const [a, b] = this.fight.fighters;
    const first = a.state === 'attack' || (b.state !== 'attack' && a.isPlayer) ? b : a;
    this.drawFighter(ctx, first, alpha);
    this.drawFighter(ctx, first === a ? b : a, alpha);
    this.particles.draw(ctx);
    if (panel) for (let i = 2; i < 4; i++) drawCornerJudge(ctx, panel.corners[i], this.spots[i]);
    if (this.debug || this.game.debugBoxes) this.drawDebug(ctx);
    ctx.restore();
    this.hud.draw(ctx);
    if (this.director && this.director.draw) this.director.draw(ctx);
  }

  // Derinimo sluoksnis: hurtbox'ai (žali), aktyvus hitbox'as (raudonas), nuotolio juostos ir būsenos skaičiai.
  drawDebug(ctx) {
    const gy = this.db.rules.arena.groundY;
    const R = this.db.rules.combat.ranges;
    ctx.save();
    ctx.lineWidth = 2;
    ctx.font = '13px monospace';
    for (const f of this.fight.fighters) {
      if (f.hidden) continue;
      for (const hb of hurtboxes(f)) {
        ctx.strokeStyle = 'rgba(80,255,120,0.9)';
        ctx.fillStyle = 'rgba(80,255,120,0.12)';
        ctx.fillRect(hb.x0, gy - hb.y1, hb.x1 - hb.x0, hb.y1 - hb.y0);
        ctx.strokeRect(hb.x0, gy - hb.y1, hb.x1 - hb.x0, hb.y1 - hb.y0);
      }
      const ab = attackBox(f, R);
      if (ab) {
        ctx.strokeStyle = '#ff3b30';
        ctx.fillStyle = 'rgba(255,59,48,0.35)';
        ctx.fillRect(ab.x0, gy - ab.y1, ab.x1 - ab.x0, ab.y1 - ab.y0);
        ctx.strokeRect(ab.x0, gy - ab.y1, ab.x1 - ab.x0, ab.y1 - ab.y0);
      }
      Object.entries(R).forEach(([name, r], i) => {
        ctx.strokeStyle = `rgba(255,220,80,${0.9 - i * 0.18})`;
        ctx.beginPath();
        ctx.moveTo(f.x + f.facing * r, gy + 6 + i * 5);
        ctx.lineTo(f.x, gy + 6 + i * 5);
        ctx.stroke();
        if (f.isPlayer) { ctx.fillStyle = '#ffdc50'; ctx.fillText(name, f.x + f.facing * r - 14, gy + 30 + i * 13); }
      });
      const T = f.tech;
      const lines = [
        `${f.state} ${Math.round(f.st)}ms x=${Math.round(f.x)}`,
        T ? `${T.def.id} ${T.phase} ${Math.round(T.t)}/${Math.round(T.dur[T.phase[0]])} x${T.mult.toFixed(2)}${T.charged ? ' HOLD' : ''}` : (f.guard ? `guard ${f.guard.level} ${Math.round(f.guard.t)}ms${f.guard.morote ? ' morote' : ''}` : '-'),
        `dmg L${f.dmg.legs.toFixed(0)} B${f.dmg.body.toFixed(0)} H${f.dmg.head.toFixed(0)}`,
        `bal ${f.balance.toFixed(0)} sta ${f.stamina.toFixed(0)} ki ${f.ki.toFixed(0)}`,
        `chain [${f.chainList.length}] +${f.chainCount}`,
      ];
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      const bx = f.id === 0 ? 30 : W - 330;
      ctx.fillRect(bx, 226, 300, 86);
      ctx.fillStyle = '#9dffb0';
      ctx.textAlign = 'left';
      lines.forEach((l, i) => ctx.fillText(l, bx + 8, 242 + i * 16));
    }
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    const d = Math.abs(this.fight.fighters[0].x - this.fight.fighters[1].x);
    ctx.fillText(`dist ${d.toFixed(0)} · phase ${this.fight.phase}${this.official ? ` · ${this.official.state}` : ''}`, W / 2, H - 14);
    ctx.restore();
  }
}

__exp.FightScene = FightScene;
});
__def('src/fight/combat.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Kovos branduolys: judėjimas, technikų fazės (startup/active/recovery), pataikymai, gynyba, žala zonose,
// pusiausvyra, ištvermė, ki, knockdown. Grynas modulis – be DOM, fiksuotu žingsniu.

const { createFighter, setState, HALF_W } = __req('src/fight/fighter.js');
const { getUpTimeMs } = __req('src/fight/rules.js');
const EMPTY = Object.freeze({});

class Fight {
  // opts: { mode: 'match' | 'practice', rng }
  constructor(db, cfgA, cfgB, opts = {}) {
    this.db = db;
    this.C = db.rules.combat;
    this.A = db.rules.arena;
    this.M = db.rules.match;
    this.rng = opts.rng || Math.random;
    this.mode = opts.mode || 'match';
    this.fighters = [createFighter(db, { ...cfgA, id: 0 }), createFighter(db, { ...cfgB, id: 1 })];
    this.phase = this.mode === 'match' ? 'locked' : 'live';
    this.time = 0;
    this.hitStop = 0;
    this.haltLate = false;
    this.events = [];
    this.resetPositions(true);
  }

  emit(ev) { this.events.push(ev); }

  takeEvents() {
    const e = this.events;
    this.events = [];
    return e;
  }

  resetPositions(force) {
    for (const f of this.fighters) {
      if (f.state === 'down' && !force) continue;
      f.x = f.px = f.side === 'aka' ? this.A.startAka : this.A.startShiro;
      if (!f.lockFacing) f.facing = f.side === 'aka' ? 1 : -1;
      f.tech = null; f.guard = null; f.down = null; f.pose = null; f.dash = null;
      f.balance = Math.max(f.balance, 50);
      f.holdT = 0; f.open = 0; f.invul = 0; f.counterT = 0;
      f.chainList = []; f.chainCount = 0;
      setState(f, 'idle');
    }
  }

  // Scenarinė poza (nusilenkimas ir pan.) – kovotojas kurį laiką nevaldomas.
  pose(f, name, ms) {
    f.tech = null; f.guard = null;
    f.pose = { name, dur: ms };
    setState(f, 'pose');
  }

  update(dt, intents) {
    for (const f of this.fighters) f.px = f.x;
    if (this.hitStop > 0) { this.hitStop -= dt; return; }
    this.time += dt;
    const [a, b] = this.fighters;
    this.step(a, b, intents[0] || EMPTY, dt);
    this.step(b, a, intents[1] || EMPTY, dt);
    this.separate();
    if (this.phase === 'live' && this.mode === 'match') {
      for (const f of this.fighters) {
        if (f.x < this.A.xMin || f.x > this.A.xMax) { this.emit({ type: 'jogai', f, pushed: f.sinceHit < 600 }); break; }
      }
    }
  }

  step(f, o, it, dt) {
    const C = this.C;
    f.sinceHit += dt; f.sinceAct += dt; f.chainT += dt; f.st += dt;
    f.invul = Math.max(0, f.invul - dt); f.open = Math.max(0, f.open - dt);
    f.counterT = Math.max(0, f.counterT - dt); f.flash = Math.max(0, f.flash - dt);
    f.suneT = Math.max(0, f.suneT - dt);
    if (f.kiaiT > 0) f.kiaiT -= dt;
    f.moving = 0;
    // Trumpas įvesties buferis: per anksti paspausta technika įvykdoma, kai tik kovotojas gali veikti.
    if (it.tech) f.buf = { tech: it.tech, t: this.time };
    f.req = f.buf && this.time - f.buf.t <= C.inputBufferMs ? f.buf.tech : null;
    const live = this.phase === 'live';
    const halt = this.phase === 'halt';

    // Atsistatymas: žala neatsistato, ištvermė ir pusiausvyra – taip.
    if (f.state !== 'down') {
      if (f.sinceAct > C.staminaRegenDelayMs) {
        f.stamina = Math.min(100, f.stamina + C.staminaRegen * (f.dmg.body > 50 ? C.bodyRegenFactor : 1) * dt / 1000);
      }
      if (f.sinceHit > C.balanceRegenDelayMs && f.state !== 'stagger') {
        const max = f.dmg.legs > 50 ? C.legBalanceMax : 100;
        if (f.balance < max) f.balance = Math.min(max, f.balance + C.balanceRegen * dt / 1000);
      }
      if (f.immortal && f.sinceHit > 1500) for (const z of ['legs', 'body', 'head']) f.dmg[z] = Math.max(0, f.dmg[z] - 40 * dt / 1000);
    }

    switch (f.state) {
      case 'down': {
        f.down.t += dt;
        if (it.mash) f.down.mash = Math.min(C.getUp.mashMax, f.down.mash + it.mash * C.getUp.mashStep);
        if (!f.down.stay && f.down.t >= f.down.getUpAt * (1 - f.down.mash)) {
          const d = f.down;
          if (d.cause === 'zone') f.dmg[d.zone] = Math.min(f.dmg[d.zone], C.zoneAfterGetUp);
          if (d.cause === 'head') f.dmg.head = Math.min(f.dmg.head, C.headAfterGetUp);
          f.balance = 60;
          setState(f, 'getup');
          this.emit({ type: 'getup', f });
        }
        return;
      }
      case 'getup': if (f.st >= C.getUp.riseMs) { f.down = null; setState(f, 'idle'); } return;
      case 'hit': if (f.st >= f.stun) setState(f, 'idle'); return;
      case 'stagger': if (f.st >= C.staggerMs) { f.balance = 40; setState(f, 'idle'); } return;
      case 'pose': if (f.st >= f.pose.dur) { f.pose = null; setState(f, 'idle'); } return;
      case 'dash': {
        // Iš įsiveržimo (→→) galima iškart pulti, pvz., →→A = Hiji chudan uchi.
        if (f.req && f.dash.fwd && f.open <= 0 && (live || halt)) {
          f.dash = null;
          if (this.startTech(f, o, f.req, it, false)) return;
          setState(f, 'idle');
          return;
        }
        f.x += f.dash.v * dt;
        if (f.st >= f.dash.dur) { f.dash = null; setState(f, 'idle'); }
        return;
      }
      case 'attack': this.stepTech(f, o, it, dt); return;
      default: break;
    }

    // idle / walk / guard
    if (!f.lockFacing && !o.hidden && o.x !== f.x) f.facing = o.x > f.x ? 1 : -1;
    f.crouch = false;
    if (!live && !halt) { f.guard = null; if (f.state !== 'idle') setState(f, 'idle'); return; }

    if (it.kiai && live) this.tryKiai(f);
    if (f.req && f.open <= 0 && this.startTech(f, o, f.req, it, false)) return;
    if (!live) { f.guard = null; if (f.state !== 'idle') setState(f, 'idle'); return; }

    if (it.guard && f.open <= 0) {
      if (!f.guard || it.guardPressed) {
        f.guard = { level: it.guard, t: 0, morote: false };
        if (f.state !== 'guard') setState(f, 'guard');
        const gt = this.db.guardByLevel[it.guard];
        this.emit({ type: 'guard', f, level: it.guard, techId: gt ? gt.id : null });
      } else {
        f.guard.level = it.guard;
        f.guard.t += dt;
        if (!f.guard.morote && f.guard.t >= C.moroteHoldMs && f.unlocked.has('morote_uke')) {
          f.guard.morote = true;
          this.emit({ type: 'guard', f, level: f.guard.level, techId: 'morote_uke' });
        }
      }
      f.sinceAct = 0;
      if (f.kiaiT <= 0) f.stamina = Math.max(0, f.stamina - C.guardStaminaDrain * dt / 1000);
      // Per ilgai laikoma gynyba arti varžovo = laikymas / stūmimas.
      if (!o.hidden && Math.abs(o.x - f.x) < this.M.holdFoulDist) {
        f.holdT += dt;
        if (f.holdT >= this.M.holdFoulSec * 1000) { f.holdT = 0; this.emit({ type: 'holding', f }); }
      } else f.holdT = 0;
      return;
    }
    f.guard = null;
    f.holdT = 0;

    if (it.dash && f.stamina >= C.dashStamina) {
      const fwd = it.dash === 'F';
      const dist = fwd ? C.dashDist : C.backdashDist;
      const dur = fwd ? C.dashMs : C.backdashMs;
      f.dash = { v: (fwd ? 1 : -1) * f.facing * dist / dur, dur, fwd };
      if (!fwd) f.invul = C.backdashIframesMs; // tai sabaki
      f.stamina -= C.dashStamina;
      f.sinceAct = 0;
      setState(f, 'dash');
      this.emit({ type: 'dash', f, fwd });
      return;
    }

    f.crouch = !!it.crouch;
    const mv = f.crouch ? 0 : (it.move || 0);
    if (mv) {
      const slow = f.dmg.legs > 50 ? C.legSlow : 1;
      const speed = (mv > 0 ? C.walkSpeed : C.backSpeed) * slow;
      f.x += f.facing * mv * speed * dt / 1000;
      f.moving = mv;
      if (mv > 0) {
        f.stats.initiative += dt;
        f.ki = Math.min(100, f.ki + C.kiInitiative * dt / 1000);
      }
      if (f.state !== 'walk') setState(f, 'walk');
    } else if (f.state !== 'idle') setState(f, 'idle');
  }

  tryKiai(f) {
    if (f.ki < 100 || f.kiaiT > 0 || !f.unlocked.has('kiai_mode')) return false;
    f.ki = 0;
    f.kiaiT = this.C.kiaiMs;
    this.emit({ type: 'kiai', f });
    return true;
  }

  findCombo(f) {
    let best = null;
    for (const c of this.db.combos) {
      if (!f.combos.has(c.id)) continue;
      const n = c.sequence.length;
      if (f.chainList.length < n) continue;
      let ok = true;
      for (let i = 0; i < n; i++) if (f.chainList[f.chainList.length - n + i] !== c.sequence[i]) { ok = false; break; }
      if (!ok) continue;
      if (f.lastCombo && f.lastCombo.id === c.id && f.chainSeq - f.lastCombo.seq < n) continue;
      if (!best || n > best.sequence.length) best = c;
    }
    return best;
  }

  startTech(f, o, def, it, chained) {
    const C = this.C;
    f.buf = null;
    f.req = null;
    if (def.type === 'mode') return this.tryKiai(f);
    if (def.type !== 'strike') return false;
    const link = chained || (f.chainT <= C.chainGraceMs && f.chainList.length > 0) || f.counterT > 0;
    if (link) {
      f.chainList.push(def.id);
      if (chained || f.chainT <= C.chainGraceMs) f.chainCount++;
    } else {
      f.chainList = [def.id];
      f.chainCount = 0;
      f.lastCombo = null;
    }
    f.chainSeq++;
    if (f.chainList.length > 8) f.chainList.shift();
    const tired = f.stamina < C.tiredBelow ? C.tiredSlow : 1;
    if (f.kiaiT <= 0) f.stamina = Math.max(0, f.stamina - def.staminaCost);
    f.sinceAct = 0;
    f.passive = 0;
    f.stats.techniques++;
    const combo = this.findCombo(f);
    if (combo) f.lastCombo = { id: combo.id, seq: f.chainSeq };
    f.tech = {
      def, phase: 'startup', t: 0,
      dur: { s: def.frames.startup * tired, a: def.frames.active, r: def.frames.recovery * tired },
      mult: 1 + Math.min(C.chainBonusMax, C.chainBonus * f.chainCount),
      chain: f.chainCount, combo, unblockable: !!(combo && combo.bonus.unblockable),
      held: !!it.techHeld, sincePress: 0, charged: false, hit: false, extraRec: 0,
      inHalt: this.phase !== 'live', late: this.phase === 'halt' && !!this.haltLate,
    };
    f.guard = null;
    f.counterT = 0;
    setState(f, 'attack');
    this.emit({ type: 'techStart', f, def, chain: f.chainCount, combo });
    if (combo) this.emit({ type: 'combo', f, combo });
    return true;
  }

  stepTech(f, o, it, dt) {
    const C = this.C;
    const T = f.tech;
    T.t += dt;
    T.sincePress += dt;
    if (!it.techHeld) T.held = false;
    if (T.phase === 'startup') {
      if (T.def.advance && T.t <= T.dur.s + dt) f.x += f.facing * T.def.advance * dt / T.dur.s;
      if (T.t >= T.dur.s) {
        if (T.held && !T.charged) {
          // Laikant mygtuką ≥ holdMs – sustiprinta versija.
          if (T.sincePress < this.db.rules.input.holdMs) { T.t = T.dur.s; return; }
          T.charged = true;
          T.dur.r *= C.holdBonus.slow;
          if (f.kiaiT <= 0) f.stamina = Math.max(0, f.stamina - T.def.staminaCost * (C.holdBonus.stamina - 1));
          this.emit({ type: 'charged', f, def: T.def });
        }
        T.phase = 'active';
        T.t = 0;
        this.emit({ type: 'techActive', f, def: T.def });
      }
      return;
    }
    if (T.phase === 'active') {
      if (!T.hit) this.resolveHit(f, o, T);
      if (f.tech !== T) return;
      if (T.t >= T.dur.a) {
        T.phase = 'recovery';
        T.t = 0;
        if (!T.hit) this.emit({ type: 'whiff', f, def: T.def });
      }
      return;
    }
    // recovery: paskutiniame animacijos lange galima susieti kitą techniką (renzoku).
    const total = T.dur.s + T.dur.a + T.dur.r;
    const frac = (T.dur.s + T.dur.a + T.t) / total;
    if (f.req && f.open <= 0 && frac >= 1 - C.chainWindow && (this.phase === 'live' || this.phase === 'halt')) {
      if (this.startTech(f, o, f.req, it, true)) return;
    }
    if (T.t >= T.dur.r + T.extraRec) {
      f.tech = null;
      f.chainT = 0;
      setState(f, 'idle');
    }
  }

  resolveHit(f, o, T) {
    const C = this.C;
    const def = T.def;
    if (o.hidden) return;
    const dx = o.x - f.x;
    if (dx * f.facing <= 0) return;
    if (Math.abs(dx) - HALF_W > C.ranges[def.range]) return;
    const match = this.mode === 'match';
    if (o.state === 'down' || o.state === 'getup') {
      T.hit = true;
      if (match && T.late) this.emit({ type: 'hit', attacker: f, defender: o, def, foul: 'downed', amount: 0 });
      return;
    }
    if (o.invul > 0) return;
    if (this.phase !== 'live') {
      T.hit = true;
      // Technika pradėta aiškiai po „Yame“ ir pasiekė varžovą – pražanga; pradėta anksčiau ar iškart – neįskaitoma.
      if (match && T.late) this.emit({ type: 'hit', attacker: f, defender: o, def, foul: 'afterYame', amount: 0 });
      return;
    }
    T.hit = true;
    const zone = def.damage.zone;
    if (match && !def.legalInKumite) {
      // „Ne“ technika kumite metu: žalos nėra, visada pražanga.
      this.hitStop = C.hitStopMs[0];
      o.flash = 160;
      this.emit({ type: 'hit', attacker: f, defender: o, def, zone, foul: 'illegal', chui: def.foulChui || 1, amount: 0 });
      return;
    }

    let amt = def.damage.amount * C.damageScale * T.mult * f.dmgMult * (f.kiaiT > 0 ? C.kiaiDamage : 1) * (T.charged ? C.holdBonus.damage : 1);
    let bal = def.balanceDamage * (T.charged ? C.holdBonus.damage : 1);
    if (T.combo) {
      const b = T.combo.bonus;
      amt *= b.damageMult || 1;
      if (zone === 'legs') amt *= b.legDamageMult || 1;
      bal += b.balanceBonus || 0;
    }
    const dir = Math.sign(dx);
    const guarding = o.state === 'guard' && o.guard && o.guard.level === def.level && !T.unblockable;

    if (guarding) {
      const B = C.block;
      const perfect = o.guard.t <= B.perfectMs;
      const sune = !!def.lowKick && o.unlocked.has('sune_uke');
      let factor = perfect ? 0 : sune ? B.suneFactor : o.guard.morote ? B.moroteFactor : B.factor;
      if (!perfect && o.stamina < C.tiredBelow) factor = Math.max(factor, B.tiredFactor);
      amt *= factor;
      bal *= factor;
      o.dmg[zone] = Math.min(99, o.dmg[zone] + amt);
      o.balance = Math.max(1, o.balance - bal);
      if (o.kiaiT <= 0) o.stamina = Math.max(0, o.stamina - B.staminaCost);
      o.sinceAct = 0;
      o.ki = Math.min(100, o.ki + C.kiBlock + (perfect ? B.perfectKi : 0));
      o.counterT = B.counterMs;
      o.chainList = ['@block'];
      o.chainCount = 0;
      o.lastCombo = null;
      o.holdT = 0;
      if (sune) o.suneT = 350;
      o.x += dir * 8;
      if (perfect) { f.open = B.openMs; T.extraRec = B.openMs; }
      f.stats.dmg += amt;
      this.hitStop = C.hitStopMs[0] * 0.6;
      this.emit({ type: 'hit', attacker: f, defender: o, def, zone, blocked: true, perfect, sune, amount: amt });
      return;
    }

    const wasBroken = o.state === 'stagger' || o.balance <= 0;
    o.dmg[zone] = Math.min(100, o.dmg[zone] + amt);
    o.balance = Math.max(0, o.balance - bal);
    o.sinceHit = 0;
    o.flash = 180;
    o.tech = null;
    o.guard = null;
    o.dash = null;
    f.ki = Math.min(100, f.ki + amt * C.kiPerDamage);
    o.ki = Math.min(100, o.ki + amt * C.kiPerDamage * 0.3);
    f.stats.dmg += amt;
    f.stats.effective++;
    o.x += dir * (def.knockback ?? bal * 2.2);

    let kd = null;
    if (o.dmg[zone] >= 100) kd = 'zone';
    else if (zone === 'head' && o.dmg.head > C.headKnockdown) kd = 'head';
    else if (wasBroken) kd = 'balance';
    if (o.immortal) { kd = null; o.balance = Math.max(o.balance, 1); o.dmg[zone] = Math.min(o.dmg[zone], 95); }

    const k = Math.min(1, amt / 30);
    this.hitStop = C.hitStopMs[0] + (C.hitStopMs[1] - C.hitStopMs[0]) * k;
    let balanceBreak = false;
    if (kd) {
      o.down = { t: 0, mash: 0, cause: kd, zone, stay: false, getUpAt: getUpTimeMs(o, kd, C.getUp, this.rng) };
      setState(o, 'down');
    } else if (o.balance <= 0) {
      balanceBreak = true;
      setState(o, 'stagger');
    } else {
      o.stun = C.hitStunMs;
      o.hitZone = zone;
      setState(o, 'hit');
    }
    this.emit({ type: 'hit', attacker: f, defender: o, def, zone, amount: amt, knockdown: kd, balanceBreak, combo: T.combo, charged: T.charged });
    if (kd) this.emit({ type: 'knockdown', f: o, by: f, cause: kd });
    else if (balanceBreak) this.emit({ type: 'balanceBreak', f: o, by: f });
  }

  separate() {
    const [a, b] = this.fighters;
    const lo = this.A.xMin - 90;
    const hi = this.A.xMax + 90;
    if (!a.hidden && !b.hidden && a.state !== 'down' && b.state !== 'down') {
      const min = this.C.minSeparation;
      const d = b.x - a.x;
      if (Math.abs(d) < min) {
        const push = (min - Math.abs(d)) / 2;
        const s = d >= 0 ? 1 : -1;
        a.x -= s * push;
        b.x += s * push;
      }
    }
    for (const f of this.fighters) if (!f.hidden) f.x = Math.max(lo, Math.min(hi, f.x));
  }
}

__exp.Fight = Fight;
});
__def('src/fight/referee.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Vyr. teisėjas (shushin) – kovos būsenų mašina:
// ENTER → BOW → KAMAETE → HAJIME → FIGHTING → YAME → (SCORE | FOUL | JOGAI | KNOCKDOWN_COUNT) → ZOKKO | END
// → HANTEI → (ENCHO) → CEREMONY → FINAL_BOW → DONE.
// Visi parametrai – data/rules.json „match“. Grynas modulis (be DOM): apie įvykius praneša per onEvent.

const { JudgePanel, WHISTLE } = __req('src/fight/judges.js');
const { chuiCallId, otherSide } = __req('src/fight/rules.js');
const { setState } = __req('src/fight/fighter.js');
const BOWS = ['shomen_ni_rei', 'shushin_ni_rei', 'otagai_ni_rei'];

class Referee {
  // opts: { rng, onEvent, timeSec, autoBow }
  constructor(fight, db, opts = {}) {
    this.fight = fight;
    this.db = db;
    this.R = db.rules.match;
    this.rng = opts.rng || Math.random;
    this.emit = opts.onEvent || (() => {});
    this.autoBow = !!opts.autoBow;
    this.judges = new JudgePanel(this.R, this.rng);
    this.mainTime = (opts.timeSec || this.R.mainTimeSec) * 1000;
    this.enchoTime = (opts.timeSec ? Math.min(opts.timeSec, this.R.enchoTimeSec) : this.R.enchoTimeSec) * 1000;
    this.clock = this.mainTime;
    this.round = 0;
    this.result = null;
    this.zoom = null;
    this.shushin = { x: 640, gesture: null, gt: 0 };
    this.jogai = [0, 0];
    this.holdWarned = [false, false];
    this.respectMiss = [0, 0];
    this.respectDone = false;
    this.bowCalls = 0;
    this.bowed = [false, false];
    this.pendingFoul = null;
    this.last = null;      // paskutinio sprendimo balsai
    this.data = null;
    this.flags = {};
    this.state = null;
    this.t = 0;
    fight.phase = 'locked';
    for (const f of fight.fighters) f.formal = true;
    this.go('ENTER');
  }

  go(state, data) {
    this.state = state;
    this.data = data || {};
    this.t = 0;
    this.flags = {};
    const fn = this[`enter_${state}`];
    if (fn) fn.call(this, this.data);
  }

  call(id, extra = {}) {
    this.emit({ type: 'call', id, ...extra });
  }

  signal(sig, side, maxFumei = 1) {
    const r = this.judges.signalAll(sig, side, maxFumei);
    this.emit({ type: 'whistle', kind: WHISTLE[sig] });
    return r;
  }

  gesture(g) {
    this.shushin.gesture = g;
    this.shushin.gt = 0;
  }

  once(key, at) {
    if (this.flags[key] || this.t < at) return false;
    this.flags[key] = true;
    return true;
  }

  fighter(side) {
    return this.fight.fighters.find((f) => f.side === side);
  }

  // ----- Žaidėjo veiksmai -----

  // REI mygtukas: nusilenkimas.
  bow(idx) {
    if ((this.state !== 'BOW' && this.state !== 'FINAL_BOW') || this.bowed[idx]) return;
    this.bowed[idx] = true;
    this.fight.pose(this.fight.fighters[idx], 'bow', 800);
    if (this.bowed[0] && this.bowed[1]) this.data.bothAt = this.t;
  }

  autoBows() {
    this.fight.fighters.forEach((f, i) => {
      if (!this.bowed[i] && (this.autoBow || !f.isPlayer) && this.t >= 420 + i * 90) this.bow(i);
    });
  }

  // ----- Kovos įvykiai -----

  handle(events) {
    for (const ev of events) {
      if (ev.type === 'techStart') ev.f.passive = 0;
      if (ev.type === 'hit' && (ev.foul === 'afterYame' || ev.foul === 'downed')) {
        // Puolimas po „Yame“ arba į gulintį – chui ni; paskelbiama prieš tęsiant kovą.
        if (!this.pendingFoul && this.state !== 'CEREMONY' && this.state !== 'DONE' && this.state !== 'FINAL_BOW') {
          this.pendingFoul = { f: ev.attacker, kind: ev.foul, n: 2 };
          if (this.state === 'FIGHTING') { this.pendingFoul = null; this.yame('FOUL', { f: ev.attacker, kind: ev.foul, n: 2 }); }
        }
        continue;
      }
      if (this.state !== 'FIGHTING') continue;
      if (ev.type === 'knockdown') { this.yame('KNOCKDOWN_COUNT', { down: ev.f, by: ev.by }); return; }
      if (ev.type === 'hit' && ev.foul === 'illegal') { this.yame('FOUL', { f: ev.attacker, kind: 'illegal', n: ev.chui || 1 }); return; }
      if (ev.type === 'balanceBreak') { this.yame('SCORE', { to: ev.by, kind: 'vote' }); return; }
      if (ev.type === 'holding') {
        const first = !this.holdWarned[ev.f.id];
        this.holdWarned[ev.f.id] = true;
        this.yame('FOUL', { f: ev.f, kind: 'holding', n: first ? 0 : 1 });
        return;
      }
      if (ev.type === 'jogai') { this.yame('JOGAI', { f: ev.f, pushed: ev.pushed }); return; }
    }
  }

  // „Yame“: kova stabdoma; trumpą laiką po komandos pradėtas ir pataikęs puolimas laikomas pražanga.
  yame(next, data) {
    this.call('yame', { ms: 900 });
    this.gesture('stop');
    this.fight.phase = 'halt';
    this.fight.haltLate = false;
    this.haltT = 0;
    this.go(next, data);
  }

  // Kova tęsiama: jei laukia pražanga – pirma ji, tada grįžimas į starto linijas ir „Zokko“.
  resume() {
    if (this.pendingFoul) {
      const p = this.pendingFoul;
      this.pendingFoul = null;
      this.go('FOUL', p);
      return;
    }
    this.go('ZOKKO');
  }

  update(dt) {
    this.t += dt;
    this.shushin.gt += dt;
    this.judges.update(dt);
    if (this.fight.phase === 'halt') {
      this.haltT += dt;
      this.fight.haltLate = this.haltT >= this.R.yameGraceMs;
      if (this.haltT >= this.R.haltWindowMs) this.lock();
    }
    const [a, b] = this.fight.fighters;
    const target = this.shushin.target ?? (a.x + b.x) / 2;
    this.shushin.x += (target - this.shushin.x) * 0.06;
    const fn = this[`update_${this.state}`];
    if (fn) fn.call(this, dt, this.data);
  }

  lock() {
    this.fight.phase = 'locked';
    for (const f of this.fight.fighters) {
      if (f.state === 'attack' || f.state === 'guard' || f.state === 'walk' || f.state === 'dash') { f.tech = null; f.guard = null; f.dash = null; setState(f, 'idle'); }
    }
  }

  // ----- Pradžia -----

  enter_ENTER() {
    this.call('aka_shiro', { ms: 1100 });
  }

  update_ENTER() {
    if (this.t >= 1200) this.go('BOW', { i: 0 });
  }

  enter_BOW(d) {
    this.bowed = [false, false];
    this.bowCalls++;
    this.call(BOWS[d.i], { ms: 1500 });
    this.emit({ type: 'rei', open: true });
  }

  update_BOW(dt, d) {
    this.autoBows();
    const bothDone = d.bothAt != null && this.t >= d.bothAt + 750;
    if (!bothDone && this.t < this.R.bowWindowMs) return;
    this.bowed.forEach((ok, i) => { if (!ok) this.respectMiss[i]++; });
    this.emit({ type: 'rei', open: false });
    if (d.i < BOWS.length - 1) { this.go('BOW', { i: d.i + 1 }); return; }
    // Nepagarba: nenusilenkta per Rei – chui prieš kovos pradžią.
    const idx = this.respectMiss.findIndex((n) => n > 0);
    if (idx >= 0 && !this.respectDone) {
      this.respectDone = true;
      this.go('FOUL', { f: this.fight.fighters[idx], kind: 'disrespect', n: 1, next: 'KAMAETE' });
    } else this.go('KAMAETE');
  }

  enter_KAMAETE() {
    this.judges.clear();
    this.gesture(null);
    this.shushin.target = null;
    this.fight.resetPositions(true);
    for (const f of this.fight.fighters) f.formal = false;
    this.call('kamaete', { ms: 900 });
  }

  update_KAMAETE() {
    if (this.t >= 950) this.go('HAJIME');
  }

  enter_HAJIME() {
    this.call('hajime', { ms: 900 });
    this.gesture('both');
  }

  update_HAJIME() {
    if (this.t >= 550) this.startFighting();
  }

  startFighting() {
    this.gesture(null);
    this.fight.phase = 'live';
    for (const f of this.fight.fighters) { f.passive = 0; f.holdT = 0; }
    this.go('FIGHTING');
  }

  // ----- Kova -----

  update_FIGHTING(dt) {
    this.clock -= dt;
    for (const f of this.fight.fighters) {
      f.passive += dt;
      if (f.passive >= this.R.passivitySec * 1000) {
        f.passive = 0;
        this.yame('FOUL', { f, kind: 'passivity', n: 1 });
        return;
      }
    }
    if (this.clock <= 0) {
      this.clock = 0;
      this.call('yame', { ms: 900 });
      this.gesture('stop');
      this.lock();
      this.go('HANTEI');
    }
  }

  enter_ZOKKO() {
    this.judges.clear();
    this.gesture(null);
    this.fight.resetPositions();
    this.lock();
    this.call('zokko', { ms: 800 });
  }

  update_ZOKKO() {
    if (this.t >= 650) this.startFighting();
  }

  // ----- Knockdown ir taškai -----

  enter_KNOCKDOWN_COUNT() {
    this.n = 0;
  }

  update_KNOCKDOWN_COUNT(dt, d) {
    const limit = this.R.knockdownCountSec;
    const n = Math.floor(this.t / 1000) + 1;
    if (n !== this.n && n <= limit) { this.n = n; this.emit({ type: 'count', n }); }
    const up = d.down.state !== 'down';
    if (up && d.down.state !== 'getup') {
      // Atsikėlė per 3 s → waza-ari.
      this.go('SCORE', { to: d.by, kind: 'wazaari' });
    } else if (!up && this.t >= limit * 1000) {
      // Neatsikėlė → ippon.
      d.down.down.stay = true;
      this.go('SCORE', { to: d.by, kind: 'ippon' });
    }
  }

  enter_SCORE(d) {
    const side = d.to.side;
    if (d.kind === 'vote') {
      // Pusiausvyros praradimas be kritimo: kampiniai gali skirti waza-ari (≥ 3 iš 5).
      const v = this.judges.voteEvent('wazaari', side, this.R.balanceBreakVoteChance);
      this.last = { [side]: v.yes, [otherSide(side)]: v.no, draw: v.fumei };
      if (!v.passed) {
        d.kind = 'none';
        this.emit({ type: 'whistle', kind: WHISTLE.mitomezu });
        this.call('mitomezu', { ms: 1000 });
        return;
      }
      d.kind = 'wazaari';
      this.emit({ type: 'whistle', kind: WHISTLE.wazaari });
    } else {
      const v = this.signal(d.kind, side, 1);
      this.last = { [side]: v.yes, [otherSide(side)]: 0, draw: v.fumei };
    }
    if (d.kind === 'wazaari') {
      d.to.wazaAri++;
      this.gesture(side);
      this.call('waza_ari', { side, ms: 1300 });
      this.emit({ type: 'score', kind: 'wazaari', side });
    } else if (d.kind === 'ippon') {
      this.gesture(side);
      this.call('ippon', { side, ms: 1500 });
      this.emit({ type: 'score', kind: 'ippon', side });
    }
  }

  update_SCORE(dt, d) {
    const side = d.to.side;
    if (d.kind === 'none') { if (this.t >= 1200) this.resume(); return; }
    if (d.kind === 'ippon') { if (this.t >= 1700) this.end(side, 'ippon'); return; }
    if (d.to.wazaAri >= 2) {
      // Antras waza-ari: vėliavėlė iš horizontalios keliama įstrižai aukštyn – „Waza-ari awasete ippon“.
      if (this.once('awasete', 1300)) {
        for (const j of this.judges.corners) if (j.signal === 'wazaari') this.judges.set(j.i, 'wazaari_ippon', side);
        this.emit({ type: 'whistle', kind: WHISTLE.wazaari_ippon });
        this.call('awasete_ippon', { ms: 1700 });
      }
      if (this.t >= 3100) this.end(side, 'awasete');
      return;
    }
    if (this.t >= 1600) this.resume();
  }

  // ----- Pražangos -----

  enter_FOUL(d) {
    const side = d.f.side;
    if (d.kind === 'holding') this.signal('clinch', side, 2);
    else this.signal('chui', side, 2);
    this.gesture(side);
    this.emit({ type: 'foul', kind: d.kind, side, n: d.n });
  }

  update_FOUL(dt, d) {
    const limit = this.R.chuiLimit;
    if (this.once('announce', 850)) {
      if (d.n > 0) {
        d.f.chui = Math.min(limit, d.f.chui + d.n);
        this.call(chuiCallId(d.f.chui, limit), { side: d.f.side, reason: d.kind, ms: 1500 });
      } else this.call('oshi', { side: d.f.side, reason: d.kind, ms: 1300 });
    }
    if (this.t < 2300) return;
    if (d.f.chui >= limit) {
      // 4-as chui = shikkaku.
      this.last = { [otherSide(d.f.side)]: 5, [d.f.side]: 0, draw: 0 };
      this.end(otherSide(d.f.side), 'shikkaku');
    } else if (d.next) this.go(d.next);
    else this.resume();
  }

  // ----- Jogai -----

  enter_JOGAI(d) {
    this.signal('jogai', d.f.side, 2);
    this.call('jogai', { side: d.f.side, ms: 1100 });
    if (!d.pushed) this.jogai[d.f.id]++;
  }

  update_JOGAI(dt, d) {
    if (this.t < 1300) return;
    // Pasikartojantis bėgimas už ribos = chui.
    if (!d.pushed && this.jogai[d.f.id] >= this.R.jogaiChuiFrom) this.go('FOUL', { f: d.f, kind: 'jogai', n: 1 });
    else this.resume();
  }

  // ----- Hantei ir encho -----

  enter_HANTEI() {
    this.judges.clear();
    this.fight.resetPositions(true);
    for (const f of this.fight.fighters) f.formal = true;
  }

  update_HANTEI(dt, d) {
    if (this.once('muite', 900)) { this.gesture(null); this.call('shomen_muite', { ms: 1100 }); }
    if (this.once('torimasu', 2100)) this.call('hantei_o_torimasu', { ms: 1100 });
    if (this.once('hantei', 3300)) {
      this.call('hantei', { ms: 1200 });
      this.emit({ type: 'whistle', kind: WHISTLE.hantei });
      const [aka, shiro] = [this.fighter('aka'), this.fighter('shiro')];
      // Paskutiniame pratęsime teisėjai privalo išrinkti nugalėtoją.
      d.v = this.judges.voteHantei(aka, shiro, this.round >= this.R.maxEncho);
      this.last = { aka: d.v.aka, shiro: d.v.shiro, draw: d.v.draw };
      this.emit({ type: 'hantei', votes: d.v });
    }
    if (!d.v || this.t < 4900) return;
    if (d.v.winner) this.end(d.v.winner, 'hantei', d.v.votes);
    else if (this.once('hikiwake', 4900)) { this.gesture('both'); this.call('hikiwake', { ms: 1300 }); }
    else if (this.t >= 6400) this.go('ENCHO');
  }

  enter_ENCHO() {
    this.round++;
    this.clock = this.enchoTime;
    this.judges.clear();
    this.gesture(null);
    this.call('encho', { ms: 1200 });
    this.emit({ type: 'encho', round: this.round });
  }

  update_ENCHO() {
    if (this.t >= 1300) this.go('KAMAETE');
  }

  // ----- Pabaiga ir pergalės ceremonija -----

  end(winner, by, perJudge) {
    const v = { aka: 0, shiro: 0, draw: 0, ...(this.last || {}) };
    if (by !== 'hantei') { v[winner] = Math.max(v[winner], this.R.votesNeeded); }
    this.result = { winner, by, votes: v, round: this.round, perJudge: perJudge || null };
    this.go('CEREMONY');
  }

  enter_CEREMONY() {
    this.lock();
    this.pendingFoul = null;
    this.fight.resetPositions(true);
    for (const f of this.fight.fighters) f.formal = true;
    this.shushin.target = 640;
    this.gesture(null);
  }

  update_CEREMONY() {
    const r = this.result;
    if (this.once('flags', 500)) {
      this.judges.ceremony(r.winner, r.perJudge);
      this.emit({ type: 'whistle', kind: WHISTLE.hantei });
    }
    if (this.once('kachi', 1500)) {
      this.gesture(r.winner);
      this.call(`${r.winner}_no_kachi`, { ms: 2400 });
      this.emit({ type: 'result', result: r });
      this.zoom = { k: 1.22, x: this.fighter(r.winner).x };
    }
    if (this.t >= 4600) this.go('FINAL_BOW');
  }

  enter_FINAL_BOW() {
    this.zoom = null;
    this.bowed = [false, false];
    this.bowCalls++;
    this.call('otagai_ni_rei', { ms: 1500 });
    this.emit({ type: 'rei', open: true });
  }

  update_FINAL_BOW(dt, d) {
    this.autoBows();
    const bothDone = d.bothAt != null && this.t >= d.bothAt + 900;
    if (!bothDone && this.t < this.R.bowWindowMs) return;
    this.bowed.forEach((ok, i) => { if (!ok) this.respectMiss[i]++; });
    this.emit({ type: 'rei', open: false });
    this.state = 'DONE';
    this.emit({ type: 'end', result: this.result });
  }
}

__exp.Referee = Referee;
});
__def('src/fight/player.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Žaidėjo valdiklis: įvesties įvykius paverčia kovotojo ketinimais (intent) per kombinacijų atpažinimą.

const { ComboRecognizer, inputGlyphs } = __req('src/core/combo.js');
class PlayerController {
  constructor(fighter, db, input) {
    this.f = fighter;
    this.db = db;
    this.input = input;
    this.cfg = db.rules.input;
    this.recog = new ComboRecognizer(db.techniques, this.cfg);
    this.trail = [];        // įvesties pėdsakas pagalbos režimui: [{ g, t }]
    this.heldBtn = null;
    this.tap = { dir: null, start: 0, end: -1e9, dur: 0 };
    this.onPress = null;    // (rezultatas, mygtukas) – pamokoms ir egzaminui
    this.lastLocked = null;
  }

  pushTrail(g, t) {
    this.trail.push({ g, t });
    if (this.trail.length > 8) this.trail.shift();
  }

  update() {
    const f = this.f;
    const it = { move: 0, crouch: false, guard: null, guardPressed: false, tech: null, techHeld: false, dash: null, kiai: false, mash: 0 };
    for (const ev of this.input.drain()) {
      if (ev.k === 'dir') {
        const prev = this.recog.dir;
        this.recog.pushDir(ev.dir, ev.t);
        if (ev.dir !== 'N') this.pushTrail(inputGlyphs([ev.dir])[0], ev.t);
        // Dvigubas bakstelėjimas →→ / ←← = įsiveržimas / atsitraukimas.
        if (prev === 'F' || prev === 'B') { this.tap.end = ev.t; this.tap.dur = ev.t - this.tap.start; this.tap.dir = prev; }
        if (ev.dir === 'F' || ev.dir === 'B') {
          if (this.tap.dir === ev.dir && ev.t - this.tap.end <= this.cfg.dashTapMs && this.tap.dur <= this.cfg.dashTapMs) it.dash = ev.dir;
          this.tap.start = ev.t;
        }
      } else if (ev.k === 'down') {
        it.mash++;
        this.pushTrail(ev.btn, ev.t);
        if (ev.btn === 'KIAI') { it.kiai = true; continue; }
        const r = this.recog.press(ev.btn, ev.t, f.unlocked);
        this.lastLocked = r.locked ? { id: r.matched, t: ev.t } : null;
        if (ev.btn === 'G') it.guardPressed = true;
        else if (r.tech) { it.tech = r.tech; this.heldBtn = ev.btn; }
        this.onPress?.(r, ev.btn);
      } else if (ev.k === 'up' && ev.btn === this.heldBtn) this.heldBtn = null;
    }
    const d = this.recog.dir;
    it.move = d.includes('F') ? 1 : d.includes('B') ? -1 : 0;
    it.crouch = d === 'D';
    if (this.input.held.G) {
      const level = d.includes('U') ? 'jodan' : d.includes('D') ? 'gedan' : 'chudan';
      const gt = this.db.guardByLevel[level];
      it.guard = gt && f.unlocked.has(gt.id) ? level : 'chudan';
    }
    it.techHeld = this.heldBtn != null && this.input.held[this.heldBtn];
    return it;
  }
}

__exp.PlayerController = PlayerController;
});
__def('src/fight/render.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Scenos piešimas: fonas, tatamis lengva perspektyva, kampiniai teisėjai su vėliavėlėmis, vyr. teisėjas, dalelės.
// Visa grafika generuojama kodu (originali, be trečiųjų šalių resursų).

const W = 1280;
const H = 720;
const CX = 640;
const BACK_Y = 462;
const FRONT_Y = 640;

// Perspektyva: tolimasis tatamio kraštas siauresnis.
function persp(x, y) {
  return CX + (x - CX) * (1 + (y - 540) * 0.0016);
}

function quad(ctx, x0, x1, y0, y1, fill) {
  ctx.beginPath();
  ctx.moveTo(persp(x0, y0), y0);
  ctx.lineTo(persp(x1, y0), y0);
  ctx.lineTo(persp(x1, y1), y1);
  ctx.lineTo(persp(x0, y1), y1);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
}

function drawWall(ctx, kind, rnd) {
  if (kind === 'hall' || kind === 'arena') {
    const dark = kind === 'arena';
    const g = ctx.createLinearGradient(0, 0, 0, 440);
    g.addColorStop(0, dark ? '#10131c' : '#b9c6d2');
    g.addColorStop(1, dark ? '#232838' : '#8fa0b0');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, 440);
    // Žiūrovų siluetai
    for (let row = 0; row < 4; row++) {
      const y = 250 + row * 42;
      ctx.fillStyle = dark ? `rgba(60,66,90,${0.9 - row * 0.12})` : `rgba(70,84,100,${0.55 - row * 0.08})`;
      ctx.fillRect(0, y + 12, W, 40);
      for (let x = 12 + (row % 2) * 16; x < W; x += 32) {
        ctx.beginPath();
        ctx.arc(x + rnd() * 6, y + 8 + rnd() * 5, 11, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // Vėliavos be simbolikos
    const cols = ['#c0463b', '#f1ead8', '#2d5d9a', '#e0b23a'];
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = cols[i % cols.length];
      ctx.fillRect(140 + i * 190, 120, 70, 100);
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(140 + i * 190, 120, 70, 8);
    }
    ctx.fillStyle = dark ? '#161a26' : '#6d7c8b';
    ctx.fillRect(0, 418, W, 22);
    ctx.fillStyle = dark ? '#1c2030' : '#a8b3bd';
    ctx.fillRect(0, 440, W, H - 440);
    return;
  }
  // Dojo: medinė siena, kaligrafijos ritiniai su išgalvotais brūkšniais.
  const g = ctx.createLinearGradient(0, 0, 0, 440);
  g.addColorStop(0, '#5a3d27');
  g.addColorStop(1, '#7a5636');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, 440);
  for (let x = 0; x < W; x += 80) {
    ctx.fillStyle = 'rgba(0,0,0,0.13)';
    ctx.fillRect(x, 0, 3, 440);
  }
  ctx.fillStyle = '#3b2616';
  ctx.fillRect(0, 96, W, 16);
  ctx.fillRect(0, 418, W, 22);
  for (const sx of [250, 640, 1030]) {
    ctx.fillStyle = '#efe6cf';
    ctx.fillRect(sx - 44, 130, 88, 230);
    ctx.fillStyle = '#3b2616';
    ctx.fillRect(sx - 50, 124, 100, 8);
    ctx.fillRect(sx - 50, 358, 100, 8);
    ctx.strokeStyle = '#1d1a18';
    ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) {
      const y = 165 + i * 62;
      ctx.lineWidth = 5 + rnd() * 4;
      ctx.beginPath();
      ctx.moveTo(sx - 22 + rnd() * 10, y);
      ctx.quadraticCurveTo(sx + rnd() * 30 - 15, y + rnd() * 40 - 10, sx + 20 - rnd() * 10, y + 30 + rnd() * 12);
      ctx.stroke();
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(sx - 16 + rnd() * 30, y - 6);
      ctx.lineTo(sx - 20 + rnd() * 34, y + 36);
      ctx.stroke();
    }
  }
  const fg = ctx.createLinearGradient(0, 440, 0, H);
  fg.addColorStop(0, '#9a7147');
  fg.addColorStop(1, '#b98a5a');
  ctx.fillStyle = fg;
  ctx.fillRect(0, 440, W, H - 440);
  ctx.strokeStyle = 'rgba(60,35,15,0.25)';
  ctx.lineWidth = 2;
  for (let y = 448; y < H; y += 26) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
}

function drawTatami(ctx, A) {
  quad(ctx, A.xMin - 78, A.xMax + 78, BACK_Y - 20, FRONT_Y + 38, '#b8443a');   // saugos juosta
  quad(ctx, A.xMin, A.xMax, BACK_Y, FRONT_Y, '#356fa3');                        // kovos zona
  ctx.strokeStyle = 'rgba(255,255,255,0.10)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 8; i++) {
    const x = A.xMin + ((A.xMax - A.xMin) * i) / 8;
    ctx.beginPath(); ctx.moveTo(persp(x, BACK_Y), BACK_Y); ctx.lineTo(persp(x, FRONT_Y), FRONT_Y); ctx.stroke();
  }
  for (let i = 1; i < 4; i++) {
    const y = BACK_Y + ((FRONT_Y - BACK_Y) * i) / 4;
    ctx.beginPath(); ctx.moveTo(persp(A.xMin, y), y); ctx.lineTo(persp(A.xMax, y), y); ctx.stroke();
  }
  // Ribos linija
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(persp(A.xMin, BACK_Y), BACK_Y);
  ctx.lineTo(persp(A.xMax, BACK_Y), BACK_Y);
  ctx.lineTo(persp(A.xMax, FRONT_Y), FRONT_Y);
  ctx.lineTo(persp(A.xMin, FRONT_Y), FRONT_Y);
  ctx.closePath();
  ctx.stroke();
  // Starto linijos: Aka (raudona) kairėje, Shiro (balta) dešinėje
  ctx.lineWidth = 6;
  for (const [x, col] of [[A.startAka, '#e03127'], [A.startShiro, '#ffffff']]) {
    ctx.strokeStyle = col;
    ctx.beginPath(); ctx.moveTo(persp(x, 520), 520); ctx.lineTo(persp(x, 566), 566); ctx.stroke();
  }
}

function makeBackground(kind, A) {
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  drawWall(ctx, kind, rnd);
  drawTatami(ctx, A);
  return c;
}

// Kampinių teisėjų vietos: 0,1 – tolimieji kampai, 2,3 – priekiniai (pusiau permatomi).
function judgeSpots(A) {
  return [
    { x: persp(A.xMin - 48, BACK_Y - 8), y: BACK_Y - 6, s: 0.8, near: false },
    { x: persp(A.xMax + 48, BACK_Y - 8), y: BACK_Y - 6, s: 0.8, near: false },
    { x: persp(A.xMin - 52, FRONT_Y + 30), y: FRONT_Y + 44, s: 1.1, near: true },
    { x: persp(A.xMax + 52, FRONT_Y + 30), y: FRONT_Y + 44, s: 1.1, near: true },
  ];
}

const RAD = Math.PI / 180;
const FLAG = { aka: '#e03127', shiro: '#ffffff' };
const easeOut = (k) => 1 - (1 - k) * (1 - k);

// Vėliavėlės kampas (laipsniai nuo „žemyn“ į šoną) pagal signalą. Grąžina { red, white, cross, cy, wobble }.
function flagPose(signal, side, t) {
  const rest = 18;
  const up = easeOut(Math.min(1, t / 170));
  const mix = (target) => rest + (target - rest) * up;
  const one = (target) => (side === 'shiro' ? { red: rest, white: mix(target) } : { red: mix(target), white: rest });
  switch (signal) {
    case 'ippon': case 'hantei': return one(135);
    case 'wazaari': return one(90);
    case 'wazaari_ippon': return one(90 + 45 * easeOut(Math.min(1, t / 420)));
    case 'chui': return one(50 + Math.sin(t / 70) * 14);
    case 'clinch': return { red: mix(50), white: mix(50) };
    case 'jogai': return one(20 + Math.abs(Math.sin(t / 110)) * 16);
    case 'fumei': return { cross: true, cy: -92, wobble: 0, up };
    case 'mitomezu': return { cross: true, cy: -22, wobble: Math.sin(t / 110) * 12, up };
    case 'hikiwake': return { cross: true, cy: -40, wobble: 0, up };
    default: return { red: rest, white: rest };
  }
}

function flag(ctx, hx, hy, ang, dirX, col) {
  const dx = Math.sin(ang * RAD) * dirX;
  const dy = Math.cos(ang * RAD);
  const ex = hx + dx * 46;
  const ey = hy + dy * 46;
  ctx.strokeStyle = '#3a2a1a';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(ex, ey); ctx.stroke();
  // Audinys: stačiakampis prie koto galo
  const px = -dy * dirX;
  const py = dx * dirX;
  const sx = hx + dx * 18;
  const sy = hy + dy * 18;
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.lineTo(ex, ey);
  ctx.lineTo(ex + px * 24, ey + py * 24);
  ctx.lineTo(sx + px * 24, sy + py * 24);
  ctx.closePath();
  ctx.fillStyle = col;
  ctx.fill();
  ctx.strokeStyle = '#23232b';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawCornerJudge(ctx, j, spot, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha * (spot.near ? 0.55 : 1);
  ctx.translate(spot.x, spot.y);
  ctx.scale(spot.s, spot.s);
  // Kėdė
  ctx.fillStyle = '#2a2a33';
  ctx.fillRect(-20, -40, 40, 8);
  ctx.fillRect(-20, -40, 5, 40);
  ctx.fillRect(15, -40, 5, 40);
  // Kojos, liemuo, galva
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-16, -46, 14, 44);
  ctx.fillRect(2, -46, 14, 44);
  ctx.fillStyle = '#f4f4f1';
  ctx.beginPath();
  ctx.roundRect(-19, -98, 38, 56, 8);
  ctx.fill();
  ctx.strokeStyle = '#23232b';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-5, -98, 10, 6);
  ctx.beginPath();
  ctx.arc(0, -112, 13, 0, Math.PI * 2);
  ctx.fillStyle = '#e9bd95';
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -114, 13, Math.PI, 0);
  ctx.fillStyle = '#3a3a40';
  ctx.fill();

  const active = j.t >= j.delay ? j.signal : 'none';
  const fp = flagPose(active, j.side, Math.max(0, j.t - j.delay));
  ctx.lineCap = 'round';
  if (fp.cross) {
    const cx = fp.wobble;
    const cy = -22 + (fp.cy + 22) * fp.up;
    for (const [sx, col, d] of [[-17, FLAG.shiro, 1], [17, FLAG.aka, -1]]) {
      ctx.strokeStyle = '#f4f4f1';
      ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(sx, -90); ctx.lineTo(cx - d * 14, cy + 12); ctx.stroke();
      flag(ctx, cx - d * 14, cy + 12, 150, d, col);
    }
  } else {
    for (const [sx, ang, col, d] of [[-17, fp.white, FLAG.shiro, -1], [17, fp.red, FLAG.aka, 1]]) {
      const hx = sx + Math.sin(ang * RAD) * d * 30;
      const hy = -90 + Math.cos(ang * RAD) * 30;
      ctx.strokeStyle = '#f4f4f1';
      ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(sx, -90); ctx.lineTo(hx, hy); ctx.stroke();
      flag(ctx, hx, hy, ang, d, col);
    }
  }
  ctx.restore();
}

// Vyr. teisėjas (shushin): gestai null | 'aka' | 'shiro' | 'stop' | 'both'.
function drawShushin(ctx, sh, groundY, time) {
  ctx.save();
  ctx.translate(sh.x, groundY - 34);
  ctx.scale(0.9, 0.9);
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath(); ctx.ellipse(0, 4, 40, 8, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-15, -96, 13, 96);
  ctx.fillRect(2, -96, 13, 96);
  ctx.fillStyle = '#f4f4f1';
  ctx.beginPath(); ctx.roundRect(-20, -170, 40, 80, 8); ctx.fill();
  ctx.strokeStyle = '#23232b';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#20232e';
  ctx.fillRect(-6, -170, 12, 7);
  ctx.beginPath(); ctx.arc(0, -186, 15, 0, Math.PI * 2); ctx.fillStyle = '#e9bd95'; ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(0, -189, 15, Math.PI, 0); ctx.fillStyle = '#55555c'; ctx.fill();
  const k = easeOut(Math.min(1, (sh.gt || 0) / 200));
  const arm = (side, ang) => {
    const a = 12 + (ang - 12) * k;
    ctx.strokeStyle = '#f4f4f1';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(side * 19, -160);
    ctx.lineTo(side * 19 + Math.sin(a * RAD) * side * 62, -160 + Math.cos(a * RAD) * 62);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(side * 19 + Math.sin(a * RAD) * side * 66, -160 + Math.cos(a * RAD) * 66, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#e9bd95';
    ctx.fill();
  };
  const g = sh.gesture;
  arm(-1, g === 'aka' ? 130 : g === 'both' ? 80 : 12);
  arm(1, g === 'shiro' ? 130 : g === 'both' ? 80 : g === 'stop' ? 95 + Math.sin(time / 80) * 4 : 12);
  ctx.restore();
}

class Particles {
  constructor() { this.list = []; }

  // Prakaito / dulkių dalelės pataikius (be kraujo).
  burst(x, y, dir, n, col = 'rgba(255,255,255,0.9)') {
    for (let i = 0; i < n; i++) {
      this.list.push({ x, y, vx: dir * (60 + Math.random() * 220), vy: -60 - Math.random() * 200, life: 300 + Math.random() * 250, age: 0, col });
    }
  }

  update(dt) {
    for (const p of this.list) {
      p.age += dt;
      p.x += p.vx * dt / 1000;
      p.y += p.vy * dt / 1000;
      p.vy += 700 * dt / 1000;
    }
    this.list = this.list.filter((p) => p.age < p.life);
  }

  draw(ctx) {
    for (const p of this.list) {
      ctx.globalAlpha = 1 - p.age / p.life;
      ctx.fillStyle = p.col;
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
    }
    ctx.globalAlpha = 1;
  }
}

__exp.W = W;
__exp.H = H;
__exp.persp = persp;
__exp.makeBackground = makeBackground;
__exp.judgeSpots = judgeSpots;
__exp.flagPose = flagPose;
__exp.drawCornerJudge = drawCornerJudge;
__exp.drawShushin = drawShushin;
__exp.Particles = Particles;
});
__def('src/ui/hud.js', function (__exp, __req) {
// SPDX-License-Identifier: BUSL-1.1
// Kovos HUD: laikmatis, vardai, diržai, waza-ari ir chui ženklai, pusiausvyros / ištvermės / ki juostos,
// kūno siluetas su žala zonose, teisėjo komandos su subtitrais, įvesties pėdsakas ir užuominos.

const { W } = __req('src/fight/render.js');
const { inputGlyphs } = __req('src/core/combo.js');
const { t, loc } = __req('src/core/i18n.js');
const FONT = '"Trebuchet MS", "Segoe UI", system-ui, sans-serif';

function dmgColor(v) {
  const k = Math.min(1, v / 100);
  const g = Math.round(255 - 215 * k);
  return `rgb(255,${g},${Math.round(g * 0.92)})`;
}

function bar(ctx, x, y, w, h, frac, col, left) {
  ctx.fillStyle = 'rgba(10,12,20,0.6)';
  ctx.fillRect(x, y, w, h);
  const fw = w * Math.max(0, Math.min(1, frac));
  ctx.fillStyle = col;
  ctx.fillRect(left ? x : x + w - fw, y, fw, h);
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);
}

class Hud {
  constructor(scene) {
    this.scene = scene;
    this.callText = null;
    this.popups = [];
    this.banner = null;
    this.count = null;
    this.hints = [];
  }

  call(text, sub, ms = 1500) {
    this.callText = { text, sub, age: 0, ms };
  }

  popup(x, y, text, opts = {}) {
    this.popups.push({ x, y, text, age: 0, ms: opts.ms || 900, color: opts.color || '#fff', size: opts.size || 22 });
    if (this.popups.length > 10) this.popups.shift();
  }

  update(dt) {
    if (this.callText) { this.callText.age += dt; if (this.callText.age > this.callText.ms) this.callText = null; }
    for (const p of this.popups) p.age += dt;
    this.popups = this.popups.filter((p) => p.age < p.ms);
    if (this.count) { this.count.age += dt; if (this.count.age > 950) this.count = null; }
  }

  panel(ctx, f, left) {
    const db = this.scene.db;
    const X = (v) => (left ? 24 + v : W - 24 - v);
    const belt = db.belts[db.beltIdx[f.belt]];
    ctx.textAlign = left ? 'left' : 'right';
    ctx.textBaseline = 'alphabetic';
    // Aka / Shiro žyma ir vardas
    ctx.fillStyle = f.side === 'aka' ? '#e03127' : '#ffffff';
    ctx.beginPath(); ctx.arc(X(10), 26, 9, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#111'; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = `bold 23px ${FONT}`;
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = 'rgba(0,0,0,0.75)';
    ctx.lineWidth = 4;
    const label = `${f.side === 'aka' ? 'AKA' : 'SHIRO'} · ${f.name}${f.isPlayer ? ` (${t('hud.you')})` : ''}`;
    ctx.strokeText(label, X(26), 34);
    ctx.fillText(label, X(26), 34);
    // Diržas
    ctx.fillStyle = belt.color;
    ctx.fillRect(left ? X(0) : X(0) - 64, 42, 64, 9);
    ctx.strokeStyle = '#111'; ctx.lineWidth = 1.5;
    ctx.strokeRect(left ? X(0) : X(0) - 64, 42, 64, 9);
    // Juostos
    const bx = left ? X(74) : X(74) - 300;
    bar(ctx, bx, 42, 300, 11, f.balance / 100, f.balance <= 0 ? '#ff5a4a' : '#59c8e6', left);
    bar(ctx, bx, 56, 300, 8, f.stamina / 100, f.stamina < 20 ? '#e0a03a' : '#78d06a', left);
    bar(ctx, bx, 67, 300, 8, f.ki / 100, f.kiaiT > 0 || f.ki >= 100 ? '#ffe36b' : '#d9a520', left);
    ctx.font = `11px ${FONT}`;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.textAlign = left ? 'right' : 'left';
    ctx.fillText('気', left ? bx - 4 : bx + 304, 75);
    // Waza-ari (pusės apskritimo ikonos) ir chui (1–4)
    for (let i = 0; i < 2; i++) {
      const cx = X(14 + i * 30);
      ctx.beginPath();
      ctx.arc(cx, 96, 11, Math.PI, 0);
      ctx.closePath();
      ctx.fillStyle = i < f.wazaAri ? '#ffd54a' : 'rgba(10,12,20,0.55)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    const limit = db.rules.match.chuiLimit;
    for (let i = 0; i < limit; i++) {
      const cx = X(84 + i * 20);
      ctx.fillStyle = i < f.chui ? '#ff7a2a' : 'rgba(10,12,20,0.55)';
      ctx.fillRect(cx - 7, 85, 14, 14);
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.strokeRect(cx - 7, 85, 14, 14);
    }
    // Kūno siluetas: kojos, liemuo, galva nusidažo nuo baltos iki raudonos
    const sx = X(408);
    ctx.strokeStyle = '#15151c';
    ctx.lineWidth = 2;
    ctx.fillStyle = dmgColor(f.dmg.head);
    ctx.beginPath(); ctx.arc(sx, 30, 10, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = dmgColor(f.dmg.body);
    ctx.fillRect(sx - 12, 42, 24, 28); ctx.strokeRect(sx - 12, 42, 24, 28);
    ctx.fillStyle = dmgColor(f.dmg.legs);
    ctx.fillRect(sx - 12, 72, 10, 30); ctx.strokeRect(sx - 12, 72, 10, 30);
    ctx.fillRect(sx + 2, 72, 10, 30); ctx.strokeRect(sx + 2, 72, 10, 30);
  }

  draw(ctx) {
    const sc = this.scene;
    const off = sc.official;
    ctx.save();
    if (sc.showPanels) {
      this.panel(ctx, sc.fight.fighters[0], true);
      if (!sc.fight.fighters[1].hidden) this.panel(ctx, sc.fight.fighters[1], false);
    }
    if (off) {
      const sec = Math.max(0, Math.ceil(off.clock / 1000));
      ctx.textAlign = 'center';
      ctx.font = `bold 42px ${FONT}`;
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      ctx.lineWidth = 5;
      ctx.fillStyle = sec <= 10 ? '#ffb347' : '#fff';
      const txt = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
      ctx.strokeText(txt, 640, 100);
      ctx.fillText(txt, 640, 100);
      if (off.round > 0) {
        ctx.font = `bold 17px ${FONT}`;
        ctx.fillStyle = '#ffd54a';
        const e = off.round > 1 ? `ENCHO ${off.round}` : 'ENCHO';
        ctx.strokeText(e, 640, 120);
        ctx.fillText(e, 640, 120);
      }
    }
    // Užuominos (tik pagalbos režime; egzaminuose išjungtos)
    if (this.hints.length) {
      ctx.textAlign = 'left';
      ctx.font = `15px ${FONT}`;
      ctx.globalAlpha = 0.8;
      this.hints.forEach((h, i) => {
        ctx.fillStyle = 'rgba(10,12,20,0.5)';
        ctx.fillRect(22, 120 + i * 21, 236, 19);
        ctx.fillStyle = '#ffd54a';
        ctx.fillText(h.glyphs, 28, 134 + i * 21);
        ctx.fillStyle = '#fff';
        ctx.fillText(h.name, 92, 134 + i * 21);
      });
      ctx.globalAlpha = 1;
    }
    // Įvesties pėdsakas
    if (sc.showTrail && sc.ctrl) {
      const now = performance.now();
      const tr = sc.ctrl.trail.filter((e) => now - e.t < 1300);
      if (tr.length) {
        ctx.textAlign = 'center';
        ctx.font = `bold 26px ${FONT}`;
        const text = tr.map((e) => e.g).join(' ');
        const w = ctx.measureText(text).width + 28;
        ctx.fillStyle = 'rgba(10,12,20,0.55)';
        ctx.beginPath(); ctx.roundRect(640 - w / 2, 672, w, 38, 10); ctx.fill();
        ctx.fillStyle = '#ffe9a8';
        ctx.fillText(text, 640, 700);
      }
    }
    for (const p of this.popups) {
      const k = p.age / p.ms;
      ctx.globalAlpha = k < 0.75 ? 1 : (1 - k) * 4;
      ctx.textAlign = 'center';
      ctx.font = `bold ${p.size}px ${FONT}`;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.lineWidth = 4;
      ctx.strokeText(p.text, p.x, p.y - k * 34);
      ctx.fillStyle = p.color;
      ctx.fillText(p.text, p.x, p.y - k * 34);
    }
    ctx.globalAlpha = 1;
    if (this.count) {
      ctx.textAlign = 'center';
      ctx.font = `bold 120px ${FONT}`;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.lineWidth = 8;
      ctx.fillStyle = '#ffd54a';
      ctx.strokeText(String(this.count.n), 640, 400);
      ctx.fillText(String(this.count.n), 640, 400);
    }
    if (this.callText) {
      const c = this.callText;
      const a = Math.min(1, c.age / 90, (c.ms - c.age) / 220);
      ctx.globalAlpha = Math.max(0, a);
      ctx.textAlign = 'center';
      let size = 74;
      ctx.font = `bold ${size}px ${FONT}`;
      while (ctx.measureText(c.text.toUpperCase()).width > 1100 && size > 34) { size -= 6; ctx.font = `bold ${size}px ${FONT}`; }
      ctx.strokeStyle = 'rgba(0,0,0,0.9)';
      ctx.lineWidth = 9;
      ctx.strokeText(c.text.toUpperCase(), 640, 240);
      ctx.fillStyle = '#fff';
      ctx.fillText(c.text.toUpperCase(), 640, 240);
      if (c.sub) {
        ctx.font = `25px ${FONT}`;
        ctx.lineWidth = 5;
        ctx.strokeText(c.sub, 640, 280);
        ctx.fillStyle = '#ffe9a8';
        ctx.fillText(c.sub, 640, 280);
      }
      ctx.globalAlpha = 1;
    }
    if (this.banner) {
      const b = this.banner;
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(10,12,20,0.82)';
      ctx.beginPath(); ctx.roundRect(340, 596, 600, 96, 14); ctx.fill();
      ctx.strokeStyle = b.side === 'aka' ? '#e03127' : '#ffffff';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.font = `bold 38px ${FONT}`;
      ctx.fillStyle = '#fff';
      ctx.fillText(b.title, 640, 640);
      ctx.font = `bold 26px ${FONT}`;
      ctx.fillStyle = '#ffd54a';
      ctx.fillText(b.votes, 640, 676);
    }
    ctx.restore();
  }

  // Užuominų sąrašas: atrakintos technikos su ilgesne nei vieno mygtuko įvestimi.
  buildHints(fighter) {
    const db = this.scene.db;
    const termsTr = this.scene.game.settings.termsTranslated;
    this.hints = db.techniques
      .filter((x) => fighter.unlocked.has(x.id) && x.type === 'strike' && !x.auto && x.input.length > 1 && x.legalInKumite)
      .slice(-7)
      .map((x) => ({ glyphs: inputGlyphs(x.input).join(''), name: termsTr ? `${x.name}` : x.name, sub: loc(x, 'name') }));
  }
}

__exp.Hud = Hud;
});
__req('src/main.js');
})();
