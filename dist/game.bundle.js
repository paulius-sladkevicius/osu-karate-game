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
globalThis.__OSU_DATA__ = {"techniques":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"input: krypciu kodai F B U D DF UF DB UB CIRCLE + paskutinis mygtukas A K G KIAI. frames ms. range: close|mid|midfar|far. level: jodan|chudan|gedan.","techniques":[{"id":"seiken_gyaku_tsuki","name":"Seiken gyaku tsuki","nameLt":"Tiesus kumštis priešinga ranka","nameEn":"Reverse straight punch","descLt":"Tiesus kumštis į liemenį priešinga ranka.","descEn":"Straight punch to the body with the rear hand.","belt":"white","type":"strike","input":["A"],"level":"chudan","legalInKumite":true,"range":"close","frames":{"startup":120,"active":60,"recovery":180},"damage":{"zone":"body","amount":6},"balanceDamage":4,"staminaCost":4,"anim":"gyaku_tsuki"},{"id":"seiken_oi_tsuki","name":"Seiken oi tsuki","nameLt":"Tiesus kumštis su žingsniu","nameEn":"Lunge punch","descLt":"Tiesus kumštis į liemenį žengiant pirmyn.","descEn":"Straight punch to the body while stepping forward.","belt":"white","type":"strike","input":["F","A"],"level":"chudan","legalInKumite":true,"range":"close","advance":60,"frames":{"startup":160,"active":60,"recovery":220},"damage":{"zone":"body","amount":7},"balanceDamage":5,"staminaCost":5,"anim":"oi_tsuki"},{"id":"seiken_jodan_tsuki","name":"Seiken jodan tsuki","nameLt":"Kumštis į galvą","nameEn":"Punch to the head","descLt":"Kumštis į galvą. Tik kihon ir kata – kumite metu draudžiama!","descEn":"Punch to the head. Kihon and kata only – forbidden in kumite!","belt":"white","type":"strike","input":["U","A"],"level":"jodan","legalInKumite":false,"foulChui":1,"range":"close","frames":{"startup":130,"active":60,"recovery":200},"damage":{"zone":"head","amount":8},"balanceDamage":5,"staminaCost":4,"anim":"jodan_tsuki"},{"id":"mae_geri_chudan","name":"Mae geri chudan","nameLt":"Tiesus spyris į pilvą","nameEn":"Front kick to the body","descLt":"Tiesus spyris padu į pilvą.","descEn":"Front kick with the ball of the foot to the stomach.","belt":"white","type":"strike","input":["K"],"level":"chudan","legalInKumite":true,"range":"mid","frames":{"startup":180,"active":80,"recovery":250},"damage":{"zone":"body","amount":9},"balanceDamage":10,"staminaCost":7,"anim":"mae_geri"},{"id":"chudan_uchi_uke","name":"Chudan uchi uke","nameLt":"Vidurinė gynyba","nameEn":"Middle block","descLt":"Vidurinė gynyba – stabdo smūgius į liemenį.","descEn":"Middle block – stops attacks to the body.","belt":"white","type":"guard","input":["G"],"level":"chudan","legalInKumite":true,"staminaCost":3,"anim":"guard_chudan"},{"id":"jodan_uke","name":"Jodan uke","nameLt":"Aukšta gynyba","nameEn":"High block","descLt":"Aukšta gynyba – stabdo spyrius į galvą.","descEn":"High block – stops kicks to the head.","belt":"white","type":"guard","input":["U","G"],"level":"jodan","legalInKumite":true,"staminaCost":3,"anim":"guard_jodan"},{"id":"gedan_barai","name":"Gedan barai","nameLt":"Žema gynyba","nameEn":"Low block","descLt":"Žema gynyba – stabdo žemus spyrius.","descEn":"Low sweeping block – stops low kicks.","belt":"white","type":"guard","input":["D","G"],"level":"gedan","legalInKumite":true,"staminaCost":3,"anim":"guard_gedan"},{"id":"seiken_shita_tsuki","name":"Seiken shita tsuki","nameLt":"Smūgis iš apačios","nameEn":"Uppercut to the body","descLt":"Smūgis iš apačios į pilvą ir šonkaulius.","descEn":"Rising punch to the stomach and ribs.","belt":"orange","type":"strike","input":["D","A"],"level":"chudan","legalInKumite":true,"range":"close","frames":{"startup":150,"active":60,"recovery":220},"damage":{"zone":"body","amount":8},"balanceDamage":4,"staminaCost":5,"anim":"shita_tsuki"},{"id":"seiken_kagi_tsuki","name":"Seiken kagi tsuki","nameLt":"Kabliukas į šoną","nameEn":"Hook punch","descLt":"Kabliukas į šoną (šonkaulius).","descEn":"Hook punch to the side of the body.","belt":"orange","type":"strike","input":["D","F","A"],"level":"chudan","legalInKumite":true,"range":"close","frames":{"startup":170,"active":60,"recovery":240},"damage":{"zone":"body","amount":9},"balanceDamage":6,"staminaCost":6,"anim":"kagi_tsuki"},{"id":"gedan_mawashi_geri","name":"Gedan mawashi geri","nameLt":"Žemas šoninis spyris","nameEn":"Low roundhouse kick","descLt":"Žemas spyris blauzda į šlaunies šoną („low kick“).","descEn":"Low kick with the shin to the side of the thigh.","belt":"orange","type":"strike","input":["D","K"],"level":"gedan","legalInKumite":true,"range":"mid","lowKick":true,"frames":{"startup":200,"active":80,"recovery":300},"damage":{"zone":"legs","amount":12},"balanceDamage":12,"staminaCost":8,"anim":"gedan_mawashi"},{"id":"hiza_geri","name":"Hiza geri","nameLt":"Kelio smūgis","nameEn":"Knee strike","descLt":"Kelio smūgis į liemenį iš arti.","descEn":"Knee strike to the body at close range.","belt":"orange","type":"strike","input":["F","K"],"level":"chudan","legalInKumite":true,"range":"close","advance":20,"frames":{"startup":170,"active":70,"recovery":260},"damage":{"zone":"body","amount":11},"balanceDamage":8,"staminaCost":8,"anim":"hiza_geri"},{"id":"sune_uke","name":"Sune uke","nameLt":"Blokas blauzda","nameEn":"Shin block","descLt":"Žemo spyrio blokavimas pakelta blauzda. Laikyk ↓G, kai skrenda žemas spyris.","descEn":"Low kick check with a raised shin. Hold ↓G when a low kick is coming.","belt":"orange","type":"guard","input":["D","G"],"level":"gedan","legalInKumite":true,"auto":true,"condition":"vsLowKick","staminaCost":3,"anim":"sune_uke","lesson":{"partner":"gedan_mawashi_geri"}},{"id":"chudan_mawashi_geri","name":"Chudan mawashi geri","nameLt":"Šoninis spyris į liemenį","nameEn":"Middle roundhouse kick","descLt":"Šoninis (lankinis) spyris į liemenį.","descEn":"Roundhouse kick to the body.","belt":"blue","type":"strike","input":["D","F","K"],"level":"chudan","legalInKumite":true,"range":"mid","frames":{"startup":260,"active":90,"recovery":360},"damage":{"zone":"body","amount":14},"balanceDamage":10,"staminaCost":10,"anim":"chudan_mawashi"},{"id":"yoko_geri_chudan","name":"Yoko geri chudan","nameLt":"Spyris šonu","nameEn":"Side kick","descLt":"Spyris šonu, kulnu į liemenį – atstumia varžovą.","descEn":"Side kick with the heel to the body – pushes the opponent back.","belt":"blue","type":"strike","input":["B","F","K"],"level":"chudan","legalInKumite":true,"range":"midfar","knockback":90,"frames":{"startup":240,"active":90,"recovery":340},"damage":{"zone":"body","amount":11},"balanceDamage":16,"staminaCost":10,"anim":"yoko_geri"},{"id":"hiji_chudan_uchi","name":"Hiji chudan uchi","nameLt":"Alkūnė į liemenį","nameEn":"Elbow strike to the body","descLt":"Alkūnės smūgis į liemenį iš arti (tik į liemenį!).","descEn":"Elbow strike to the body at close range (body only!).","belt":"blue","type":"strike","input":["F","F","A"],"level":"chudan","legalInKumite":true,"range":"close","advance":25,"frames":{"startup":150,"active":60,"recovery":230},"damage":{"zone":"body","amount":12},"balanceDamage":7,"staminaCost":7,"anim":"hiji_uchi"},{"id":"seiken_ago_uchi","name":"Seiken ago uchi","nameLt":"Kumštis į smakrą","nameEn":"Punch to the chin","descLt":"Kumštis iš apačios į smakrą. Tik kihon – kumite metu draudžiama!","descEn":"Rising punch to the chin. Kihon only – forbidden in kumite!","belt":"blue","type":"strike","input":["D","U","A"],"level":"jodan","legalInKumite":false,"foulChui":1,"range":"close","frames":{"startup":160,"active":60,"recovery":240},"damage":{"zone":"head","amount":10},"balanceDamage":6,"staminaCost":5,"anim":"ago_uchi"},{"id":"morote_uke","name":"Morote uke","nameLt":"Dviejų rankų gynyba","nameEn":"Two-handed block","descLt":"Dviejų rankų gynyba – stipresnė, bet lėtesnė. Laikyk G.","descEn":"Two-handed block – stronger but slower. Hold G.","belt":"blue","type":"guard","input":["G"],"level":"chudan","legalInKumite":true,"hold":true,"staminaCost":3,"anim":"morote_uke"},{"id":"jodan_mae_geri","name":"Jodan mae geri","nameLt":"Tiesus spyris į galvą","nameEn":"Front kick to the head","descLt":"Tiesus spyris į galvą.","descEn":"Front kick to the head.","belt":"yellow","type":"strike","input":["U","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":230,"active":80,"recovery":330},"damage":{"zone":"head","amount":22},"balanceDamage":12,"staminaCost":11,"anim":"jodan_mae_geri"},{"id":"jodan_mawashi_geri","name":"Jodan mawashi geri","nameLt":"Aukštas šoninis spyris","nameEn":"High roundhouse kick","descLt":"Aukštas šoninis spyris į galvą.","descEn":"High roundhouse kick to the head.","belt":"yellow","type":"strike","input":["D","F","U","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":320,"active":100,"recovery":450},"damage":{"zone":"head","amount":30},"balanceDamage":15,"staminaCost":14,"anim":"jodan_mawashi"},{"id":"ushiro_geri","name":"Ushiro geri","nameLt":"Atgalinis spyris","nameEn":"Back kick","descLt":"Atgalinis spyris apsisukant.","descEn":"Spinning back kick.","belt":"yellow","type":"strike","input":["F","D","B","K"],"level":"chudan","legalInKumite":true,"range":"midfar","knockback":80,"frames":{"startup":340,"active":90,"recovery":460},"damage":{"zone":"body","amount":20},"balanceDamage":18,"staminaCost":14,"anim":"yoko_geri"},{"id":"kansetsu_geri","name":"Kansetsu geri","nameLt":"Spyris į kelį","nameEn":"Joint kick","descLt":"Tiesus spyris į kelį. Tik kihon – kumite metu draudžiama!","descEn":"Straight kick to the knee. Kihon only – forbidden in kumite!","belt":"yellow","type":"strike","input":["B","D","K"],"level":"gedan","legalInKumite":false,"foulChui":2,"range":"mid","frames":{"startup":200,"active":80,"recovery":300},"damage":{"zone":"legs","amount":14},"balanceDamage":12,"staminaCost":8,"anim":"gedan_mawashi"},{"id":"mawashi_uke","name":"Mawashi uke","nameLt":"Apskritiminė gynyba","nameEn":"Circular block","descLt":"Apskritiminė gynyba; sėkminga atveria 400 ms kontratakos langą.","descEn":"Circular block; success opens a 400 ms counter window.","belt":"yellow","type":"guard","input":["F","G"],"level":"chudan","legalInKumite":true,"staminaCost":4,"anim":"morote_uke"},{"id":"kakato_otoshi","name":"Kakato otoshi","nameLt":"„Kirvio“ spyris","nameEn":"Axe kick","descLt":"„Kirvio“ spyris kulnu iš viršaus (oroshi kakato geri).","descEn":"Axe kick with the heel from above (oroshi kakato geri).","belt":"green","type":"strike","input":["U","D","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":380,"active":100,"recovery":500},"damage":{"zone":"head","amount":32},"balanceDamage":16,"staminaCost":16,"anim":"jodan_mae_geri"},{"id":"ushiro_mawashi_geri","name":"Ushiro mawashi geri","nameLt":"Sukamasis spyris kulnu","nameEn":"Spinning hook kick","descLt":"Sukamasis spyris kulnu į galvą.","descEn":"Spinning heel kick to the head.","belt":"green","type":"strike","input":["CIRCLE","K"],"level":"jodan","legalInKumite":true,"range":"midfar","frames":{"startup":450,"active":100,"recovery":600},"damage":{"zone":"head","amount":40},"balanceDamage":20,"staminaCost":20,"anim":"jodan_mawashi"},{"id":"uchi_mawashi_geri","name":"Uchi mawashi geri","nameLt":"Spyris iš vidaus į išorę","nameEn":"Inside crescent kick","descLt":"Aukštas spyris iš vidaus į išorę.","descEn":"High crescent kick from the inside out.","belt":"green","type":"strike","input":["U","B","K"],"level":"jodan","legalInKumite":true,"range":"mid","frames":{"startup":300,"active":90,"recovery":420},"damage":{"zone":"head","amount":24},"balanceDamage":12,"staminaCost":13,"anim":"jodan_mawashi"},{"id":"ashi_barai","name":"Ashi barai","nameLt":"Pakirtimas","nameEn":"Foot sweep","descLt":"Kojos pakirtimas; iškart po jo galima smogti gedan tsuki (↓A).","descEn":"Foot sweep; follow immediately with gedan tsuki (↓A).","belt":"green","type":"strike","input":["D","B","K"],"level":"gedan","legalInKumite":true,"range":"mid","frames":{"startup":220,"active":80,"recovery":320},"damage":{"zone":"legs","amount":5},"balanceDamage":30,"staminaCost":9,"anim":"gedan_mawashi"},{"id":"gedan_tsuki_followup","name":"Gedan tsuki","nameLt":"Smūgis po pakirtimo","nameEn":"Follow-up punch after a sweep","descLt":"Kontroliuojamas smūgis į parkritusį iškart po pakirtimo.","descEn":"Controlled punch to the downed opponent right after a sweep.","belt":"green","type":"strike","input":["D","A"],"level":"gedan","legalInKumite":true,"auto":true,"condition":"afterSweep","range":"close","frames":{"startup":150,"active":60,"recovery":260},"damage":{"zone":"body","amount":6},"balanceDamage":0,"staminaCost":5,"anim":"shita_tsuki"},{"id":"tobi_mae_geri","name":"Tobi mae geri","nameLt":"Šuolinis tiesus spyris","nameEn":"Jumping front kick","descLt":"Šuolinis tiesus spyris.","descEn":"Jumping front kick.","belt":"brown","type":"strike","input":["U","U","K"],"level":"jodan","legalInKumite":true,"range":"midfar","advance":40,"frames":{"startup":300,"active":100,"recovery":480},"damage":{"zone":"head","amount":26},"balanceDamage":16,"staminaCost":15,"anim":"jodan_mae_geri"},{"id":"tobi_hiza_geri","name":"Tobi hiza geri","nameLt":"Šuolinis kelio smūgis","nameEn":"Jumping knee strike","descLt":"Šuolinis kelio smūgis.","descEn":"Jumping knee strike.","belt":"brown","type":"strike","input":["U","U","F","K"],"level":"jodan","legalInKumite":true,"range":"mid","advance":60,"frames":{"startup":280,"active":90,"recovery":460},"damage":{"zone":"head","amount":28},"balanceDamage":18,"staminaCost":15,"anim":"hiza_geri"},{"id":"tobi_nidan_geri","name":"Tobi nidan geri","nameLt":"Dvigubas šuolinis spyris","nameEn":"Jumping double kick","descLt":"Dvigubas šuolinis spyris.","descEn":"Jumping double front kick.","belt":"brown","type":"strike","input":["U","U","K","K"],"level":"jodan","legalInKumite":true,"range":"midfar","advance":50,"frames":{"startup":220,"active":120,"recovery":520},"damage":{"zone":"head","amount":30},"balanceDamage":18,"staminaCost":18,"anim":"jodan_mae_geri"},{"id":"tobi_ushiro_mawashi_geri","name":"Tobi ushiro mawashi geri","nameLt":"Šuolinis sukamasis spyris","nameEn":"Jumping spinning hook kick","descLt":"Šuolinis sukamasis spyris kulnu.","descEn":"Jumping spinning heel kick.","belt":"brown","type":"strike","input":["U","U","CIRCLE","K"],"level":"jodan","legalInKumite":true,"range":"midfar","frames":{"startup":480,"active":110,"recovery":650},"damage":{"zone":"head","amount":46},"balanceDamage":24,"staminaCost":24,"anim":"jodan_mawashi"},{"id":"kiai_mode","name":"Kiai","nameLt":"KIAI režimas","nameEn":"KIAI mode","descLt":"5 s: +25 % žala, ištvermė nesmunka. Reikia pilnos ki juostos.","descEn":"5 s: +25 % damage, no stamina drain. Needs a full ki bar.","belt":"black","type":"mode","input":["KIAI"],"legalInKumite":true}]},"combos":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"sequence: techniku id grandine (renzoku). '@block' = sekminga gynyba. bonus raktai: damageMult, legDamageMult, balanceBonus, unblockable (MVP); wazaAriIfLegDamageOver, autoWazaAri, guaranteedWazaAri (4 etapas).","combos":[{"id":"sanbon_tsuki","name":"Sanbon tsuki","nameLt":"Trys smūgiai iš eilės","nameEn":"Triple punch","belt":"white","sequence":["seiken_gyaku_tsuki","seiken_gyaku_tsuki","seiken_gyaku_tsuki"],"bonus":{"damageMult":1.15,"balanceBonus":10}},{"id":"mae_gyaku","name":"Mae geri – gyaku tsuki","nameLt":"Spyris ir kumštis","nameEn":"Front kick – reverse punch","belt":"white","sequence":["mae_geri_chudan","seiken_gyaku_tsuki"],"bonus":{"damageMult":1.15}},{"id":"shita_gedan","name":"Shita tsuki – gedan mawashi","nameLt":"Smūgis iš apačios ir žemas spyris","nameEn":"Uppercut – low kick","belt":"orange","sequence":["seiken_shita_tsuki","gedan_mawashi_geri"],"bonus":{"damageMult":1.2,"legDamageMult":1.5}},{"id":"kagi_kagi_gedan","name":"Kagi tsuki – kagi tsuki – gedan","nameLt":"Du kabliukai ir žemas spyris","nameEn":"Double hook – low kick","belt":"orange","sequence":["seiken_kagi_tsuki","seiken_kagi_tsuki","gedan_mawashi_geri"],"bonus":{"damageMult":1.2}},{"id":"gyaku_shita_chudan","name":"Gyaku tsuki – shita tsuki – chudan mawashi","nameLt":"Du kumščiai ir šoninis spyris","nameEn":"Two punches – middle roundhouse","belt":"blue","sequence":["seiken_gyaku_tsuki","seiken_shita_tsuki","chudan_mawashi_geri"],"bonus":{"damageMult":1.25}},{"id":"uke_hiza","name":"Uke – hiza geri","nameLt":"Gynyba ir kelio kontrataka","nameEn":"Block – knee counter","belt":"blue","sequence":["@block","hiza_geri"],"bonus":{"unblockable":true},"lesson":{"partner":"seiken_gyaku_tsuki"}},{"id":"gedan_jodan","name":"Gedan – jodan mawashi","nameLt":"Žemas ir aukštas spyris ta pačia koja","nameEn":"Low – high kick, same leg","belt":"yellow","sequence":["gedan_mawashi_geri","jodan_mawashi_geri"],"bonus":{"wazaAriIfLegDamageOver":50}},{"id":"mae_ushiro","name":"Mae geri – ushiro geri","nameLt":"Tiesus ir atgalinis spyris","nameEn":"Front kick – back kick","belt":"yellow","sequence":["mae_geri_chudan","ushiro_geri"],"bonus":{"damageMult":1.25}},{"id":"sanbon_kakato","name":"Sanbon tsuki – kakato otoshi","nameLt":"Trys smūgiai ir kirvio spyris","nameEn":"Triple punch – axe kick","belt":"green","sequence":["seiken_gyaku_tsuki","seiken_gyaku_tsuki","seiken_gyaku_tsuki","kakato_otoshi"],"bonus":{"unblockable":true}},{"id":"gedan_ushiro_mawashi","name":"Gedan – ushiro mawashi","nameLt":"Žemas ir sukamasis spyris","nameEn":"Low kick – spinning hook kick","belt":"green","sequence":["gedan_mawashi_geri","ushiro_mawashi_geri"],"bonus":{"damageMult":1.3}},{"id":"ashi_gedan_tsuki","name":"Ashi barai – gedan tsuki","nameLt":"Pakirtimas ir smūgis","nameEn":"Sweep – follow-up punch","belt":"brown","sequence":["ashi_barai","gedan_tsuki_followup"],"bonus":{"autoWazaAri":true}},{"id":"nidan_gyaku","name":"Tobi nidan – gyaku tsuki","nameLt":"Dvigubas šuolinis spyris ir kumštis","nameEn":"Jumping double kick – reverse punch","belt":"brown","sequence":["tobi_nidan_geri","seiken_gyaku_tsuki"],"bonus":{"damageMult":1.35}},{"id":"osu_no_seishin","name":"Osu no seishin","nameLt":"Signatūrinė kombinacija","nameEn":"Signature combination","belt":"black","sequence":["seiken_gyaku_tsuki","seiken_shita_tsuki","gedan_mawashi_geri","chudan_mawashi_geri","jodan_mawashi_geri"],"bonus":{"guaranteedWazaAri":true}}]},"belts":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"available=false skyriai laukia 4 etapo. exam.kumite = kovu skaicius is eiles. tournament.format: series (kovos is eiles) | bracket (eliminacija).","belts":[{"id":"white","nameLt":"Baltas","nameEn":"White","kyu":["mukyu"],"color":"#f4f1ea","available":true,"unlocksLt":"Bazė: stovos, tiesus smūgis, gynyba","unlocksEn":"Basics: stances, straight punch, blocks","matchTimeSec":60,"bg":"dojo","exam":null,"tournament":{"id":"dojo_sparring","nameLt":"Dojo sparingas su 3 mokiniais","nameEn":"Dojo sparring with 3 students","format":"series","size":4,"bg":"dojo"}},{"id":"orange","nameLt":"Oranžinis","nameEn":"Orange","kyu":[10,9],"color":"#f08a24","available":true,"unlocksLt":"Pirmieji smūgiai į liemenį, žemas spyris","unlocksEn":"First body punches, low kick","bg":"dojo","exam":{"kihonCount":12,"kata":"taikyoku_sono_ichi","kumite":1},"tournament":{"id":"city_cup","nameLt":"Miesto turnyras","nameEn":"City tournament","format":"bracket","size":4,"bg":"hall"}},{"id":"blue","nameLt":"Mėlynas","nameEn":"Blue","kyu":[8,7],"color":"#2f6fd6","available":true,"unlocksLt":"Vidurinis šoninis spyris, alkūnė","unlocksEn":"Middle roundhouse kick, elbow","bg":"dojo","exam":{"kihonCount":14,"kata":"taikyoku_sono_san","kumite":2},"tournament":{"id":"regional_cup","nameLt":"Regiono turnyras","nameEn":"Regional tournament","format":"bracket","size":8,"bg":"hall"}},{"id":"yellow","nameLt":"Geltonas","nameEn":"Yellow","kyu":[6,5],"color":"#f2cf2e","available":false,"unlocksLt":"Aukštas spyris, atgalinis spyris","unlocksEn":"High kick, back kick","bg":"dojo","exam":{"kihonCount":16,"kata":"taikyoku_sono_san","kumite":3},"tournament":{"id":"national_youth","nameLt":"Nacionalinis jaunimo turnyras","nameEn":"National youth tournament","format":"bracket","size":8,"bg":"hall"}},{"id":"green","nameLt":"Žalias","nameEn":"Green","kyu":[4,3],"color":"#2e9e4a","available":false,"unlocksLt":"Kirvio spyris, sukamasis spyris","unlocksEn":"Axe kick, spinning kick","bg":"dojo","exam":{"kihonCount":18,"kata":"taikyoku_sono_san","kumite":5},"tournament":{"id":"national_cup","nameLt":"Nacionalinis čempionatas","nameEn":"National championship","format":"bracket","size":16,"bg":"arena"}},{"id":"brown","nameLt":"Rudas","nameEn":"Brown","kyu":[2,1],"color":"#7a4a22","available":false,"unlocksLt":"Šuoliniai spyriai, ilgos kombinacijos","unlocksEn":"Jumping kicks, long combinations","bg":"dojo","exam":{"kihonCount":20,"kata":"taikyoku_sono_san","kumite":7},"tournament":{"id":"europe_cup","nameLt":"Europos turnyras","nameEn":"European tournament","format":"bracket","size":16,"bg":"arena"}},{"id":"black","nameLt":"Juodas","nameEn":"Black","kyu":["shodan"],"color":"#1b1b1f","available":false,"unlocksLt":"Visos technikos + signatūrinė kombinacija","unlocksEn":"All techniques + signature combination","bg":"dojo","exam":{"kihonCount":20,"kata":"taikyoku_sono_san","kumite":10},"tournament":{"id":"world_open","nameLt":"Atvirasis pasaulio turnyras","nameEn":"Open world tournament","format":"bracket","size":32,"bg":"arena"}}]},"opponents":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"Visi vardai isgalvoti. archetypes: AI elgsenos parametrai; weights: megstamu techniku svoriai (nenurodyta = 1). beltDefaults: reakcijos laikas ms ir prazangu tikimybe. difficulty daugina reakcija ir zala.","archetypes":{"tank":{"nameLt":"Tankas","nameEn":"Tank","descLt":"Spaudžia arti, daug smūgių į liemenį.","descEn":"Presses in close with lots of body punches.","prefDist":96,"aggression":0.78,"retreatChance":0.04,"guardIdle":0.08,"comboChance":0.4,"cooldownMs":[320,800],"block":{"jodan":0.3,"chudan":0.5,"gedan":0.3},"weights":{"seiken_gyaku_tsuki":3,"seiken_oi_tsuki":2,"seiken_shita_tsuki":3,"seiken_kagi_tsuki":3,"hiza_geri":2.5,"hiji_chudan_uchi":2.5,"mae_geri_chudan":0.6,"gedan_mawashi_geri":0.8}},"kicker":{"nameLt":"Spyrikas","nameEn":"Kicker","descLt":"Laiko atstumą ir spardo.","descEn":"Keeps distance and kicks.","prefDist":142,"aggression":0.58,"retreatChance":0.28,"guardIdle":0.12,"comboChance":0.2,"cooldownMs":[450,1000],"block":{"jodan":0.4,"chudan":0.45,"gedan":0.45},"weights":{"mae_geri_chudan":3,"gedan_mawashi_geri":3,"chudan_mawashi_geri":3.5,"yoko_geri_chudan":3,"seiken_gyaku_tsuki":0.6,"hiza_geri":0.8}},"counter":{"nameLt":"Kontratakuotojas","nameEn":"Counter-fighter","descLt":"Daug blokuoja ir atsako po gynybos.","descEn":"Blocks a lot and answers after defending.","prefDist":118,"aggression":0.34,"retreatChance":0.14,"guardIdle":0.4,"comboChance":0.25,"cooldownMs":[500,1100],"block":{"jodan":0.6,"chudan":0.78,"gedan":0.62},"weights":{"hiza_geri":2.5,"seiken_gyaku_tsuki":2,"seiken_shita_tsuki":2,"gedan_mawashi_geri":1.5,"chudan_mawashi_geri":1.5}}},"beltDefaults":{"white":{"reactionMs":600,"foulChance":0.012,"skill":0.6},"orange":{"reactionMs":520,"foulChance":0.008,"skill":0.75},"blue":{"reactionMs":440,"foulChance":0.005,"skill":0.9},"yellow":{"reactionMs":370,"foulChance":0.02,"skill":1},"green":{"reactionMs":300,"foulChance":0.015,"skill":1.1},"brown":{"reactionMs":240,"foulChance":0.01,"skill":1.2},"black":{"reactionMs":180,"foulChance":0.005,"skill":1.3}},"difficulty":{"easy":{"reaction":1.35,"damage":0.8,"aggression":0.8},"normal":{"reaction":1,"damage":1,"aggression":1},"hard":{"reaction":0.75,"damage":1.15,"aggression":1.15}},"roster":[{"id":"w_jonas","name":"Jonas","belt":"white","archetype":"tank"},{"id":"w_ugne","name":"Ugnė","belt":"white","archetype":"kicker"},{"id":"w_matas","name":"Matas","belt":"white","archetype":"counter"},{"id":"o_rokas","name":"Rokas Vėtra","belt":"orange","archetype":"tank"},{"id":"o_emilija","name":"Emilija Šilas","belt":"orange","archetype":"kicker"},{"id":"o_dovas","name":"Dovas Girėnas","belt":"orange","archetype":"counter"},{"id":"o_kenji","name":"Kenji Morita","belt":"orange","archetype":"tank"},{"id":"b_ainis","name":"Ainis Uosis","belt":"blue","archetype":"counter"},{"id":"b_lukne","name":"Luknė Beržė","belt":"blue","archetype":"kicker"},{"id":"b_tadas","name":"Tadas Kalnius","belt":"blue","archetype":"tank"},{"id":"b_hana","name":"Hana Sato","belt":"blue","archetype":"kicker"},{"id":"b_oskar","name":"Oskar Lind","belt":"blue","archetype":"tank"},{"id":"b_mila","name":"Mila Novak","belt":"blue","archetype":"counter"},{"id":"b_vytis","name":"Vytis Ąžuolas","belt":"blue","archetype":"tank"}]},"kata":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"Ritmo mini zaidimas. steps: technikos id; '*' priekyje = pries judesi apsisukama. Formos supaprastintos zaidimui (20 skaiciavimu).","kata":[{"id":"taikyoku_sono_ichi","name":"Taikyoku sono ichi","belt":"white","beatMs":1250,"steps":["*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","seiken_oi_tsuki","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","seiken_oi_tsuki","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki","*gedan_barai","seiken_oi_tsuki"]},{"id":"taikyoku_sono_ni","name":"Taikyoku sono ni","belt":"white","beatMs":1200,"steps":["*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki","*gedan_barai","seiken_jodan_tsuki"]},{"id":"taikyoku_sono_san","name":"Taikyoku sono san","belt":"orange","beatMs":1150,"steps":["*chudan_uchi_uke","seiken_oi_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*gedan_barai","seiken_jodan_tsuki","seiken_jodan_tsuki","seiken_jodan_tsuki","*chudan_uchi_uke","seiken_oi_tsuki","*chudan_uchi_uke","seiken_oi_tsuki"]}]},"rules":{"_license":"SPDX-License-Identifier: BUSL-1.1","match":{"mainTimeSec":90,"enchoTimeSec":90,"maxEncho":2,"knockdownCountSec":3,"chuiLimit":4,"passivitySec":10,"votesNeeded":3,"judgeNoise":0.05,"hikiwakeMargin":0.08,"fumeiChance":0.05,"flagDelayMs":[100,250],"holdFoulSec":1.5,"holdFoulDist":118,"jogaiChuiFrom":2,"bowWindowMs":2800,"chuiDecisiveDiff":2,"clearLeadMargin":0.3,"balanceBreakVoteChance":0.6,"haltWindowMs":1100,"yameGraceMs":400,"hantei":{"wazaAri":100,"damage":1,"effective":3,"techniques":0.5,"initiative":0.4,"chui":12}},"arena":{"xMin":230,"xMax":1050,"startAka":540,"startShiro":740,"groundY":540},"input":{"bufferMs":350,"buttonMs":200,"holdMs":300,"deadzone":0.2,"dashTapMs":250},"combat":{"ranges":{"close":105,"mid":150,"midfar":172,"far":195},"minSeparation":86,"damageScale":0.45,"zoneAfterGetUp":62,"headAfterGetUp":60,"walkSpeed":150,"backSpeed":125,"dashDist":150,"dashMs":170,"backdashDist":140,"backdashMs":200,"backdashIframesMs":150,"dashStamina":6,"chainWindow":0.3,"chainGraceMs":160,"chainBonus":0.1,"chainBonusMax":0.4,"holdBonus":{"damage":1.3,"stamina":1.5,"slow":1.25},"block":{"factor":0.25,"moroteFactor":0.1,"suneFactor":0.1,"tiredFactor":0.4,"staminaCost":3,"perfectMs":120,"perfectKi":10,"openMs":300,"counterMs":400},"moroteHoldMs":300,"headKnockdown":70,"staggerMs":900,"hitStunMs":220,"blockStunMs":110,"hitStopMs":[60,100],"staminaRegen":28,"staminaRegenDelayMs":700,"balanceRegen":45,"balanceRegenDelayMs":1200,"tiredBelow":20,"tiredSlow":1.3,"legSlow":0.7,"legBalanceMax":75,"bodyRegenFactor":0.6,"guardStaminaDrain":4,"kiPerDamage":0.6,"kiBlock":3,"kiInitiative":1.5,"kiaiMs":5000,"kiaiDamage":1.25,"getUp":{"baseMs":1200,"perDamageMs":2400,"randMs":400,"headExtraMs":500,"mashStep":0.03,"mashMax":0.3,"riseMs":500}},"recovery":{"exam":0.3,"tournament":0.6},"lesson":{"reps":5,"comboReps":3},"exam":{"kihonCount":12,"kihonTimeMs":2000,"passScore":0.7,"kataPerfectMs":130,"kataGoodMs":320},"calls":{"aka_shiro":"Aka, Shiro","shomen_ni_rei":"Shomen ni rei","shushin_ni_rei":"Shushin ni rei","otagai_ni_rei":"Otagai ni rei","kamaete":"Kamaete","hajime":"Hajime!","yame":"Yame","zokko":"Zokko","jikan":"Jikan","fukushin_shugo":"Fukushin shūgō","shomen_muite":"Shomen muite","hantei_o_torimasu":"Hantei o torimasu","hantei":"Hantei!","hikiwake":"Hikiwake","encho":"Enchō","waza_ari":"Waza-ari","ippon":"Ippon","awasete_ippon":"Waza-ari awasete ippon","chui_1":"Chui ichi","chui_2":"Chui ni","chui_3":"Chui san","shikkaku":"Shikkaku","jogai":"Jogai","mitomezu":"Mitomezu","oshi":"Oshi","aka":"Aka","shiro":"Shiro","aka_no_kachi":"Aka no kachi","shiro_no_kachi":"Shiro no kachi","osu":"Osu!"}},"anim":{"_license":"SPDX-License-Identifier: BUSL-1.1","_doc":"2D skeleto pozos (laipsniai). Kampas matuojamas nuo 'zemyn', teigiamas = pirmyn. fs/fe priekine ranka (petys/alkune), bs/be galine; fh/fk priekine koja (klubas/kelis), bh/bk galine; torso = liemens palinkimas pirmyn; rot = viso kuno pasukimas; hipH = klubo aukstis (jei nenurodyta - skaiciuojamas pagal pedas); dx = poslinkis pirmyn. Nenurodytos reiksmes paimamos is 'kamae'. anims.keys: [faze, poza], faze 0-1 startup, 1-2 active, 2-3 recovery.","poses":{"kamae":{"torso":8,"head":0,"fs":35,"fe":100,"bs":10,"be":115,"fh":30,"fk":38,"bh":-22,"bk":4,"dx":0,"rot":0},"stand":{"torso":0,"fs":4,"fe":8,"bs":-4,"be":8,"fh":5,"fk":2,"bh":-5,"bk":2},"bow":{"torso":42,"head":12,"fs":6,"fe":4,"bs":0,"be":4,"fh":5,"fk":2,"bh":-5,"bk":2},"crouch":{"torso":14,"fh":48,"fk":75,"bh":-10,"bk":50},"walk_a":{"fh":38,"fk":34,"bh":-12,"bk":14},"walk_b":{"fh":20,"fk":36,"bh":-30,"bk":2},"dash":{"torso":20,"fh":46,"fk":40,"bh":-36,"bk":8,"fs":45,"fe":95},"backdash":{"torso":-8,"fh":18,"fk":8,"bh":-30,"bk":38},"guard_chudan":{"torso":4,"fs":58,"fe":72,"bs":25,"be":110},"guard_jodan":{"torso":2,"fs":118,"fe":62,"bs":20,"be":115},"guard_gedan":{"torso":12,"fs":30,"fe":8,"bs":5,"be":120},"sune_uke":{"torso":4,"fs":40,"fe":100,"fh":72,"fk":96,"bh":-4,"bk":4},"morote_uke":{"torso":6,"fs":62,"fe":84,"bs":56,"be":88},"hit_body":{"torso":28,"head":16,"fs":22,"fe":80,"bs":10,"be":90,"dx":-6},"hit_head":{"torso":-18,"head":-26,"fs":10,"fe":70,"bs":-10,"be":70,"dx":-8},"hit_legs":{"torso":16,"fh":42,"fk":70,"bh":-18,"bk":20,"dx":-4},"stagger":{"torso":-10,"head":-12,"fs":-10,"fe":30,"bs":-22,"be":30,"fh":16,"fk":30,"bh":-30,"bk":30},"fall":{"rot":-45,"torso":-6,"head":-15,"fs":30,"fe":30,"bs":-30,"be":30,"fh":40,"fk":50,"bh":10,"bk":40,"hipH":55},"down":{"rot":-88,"torso":0,"head":0,"fs":12,"fe":20,"bs":-20,"be":20,"fh":8,"fk":10,"bh":22,"bk":34,"hipH":16},"kneel":{"torso":24,"fs":20,"fe":40,"bs":0,"be":60,"fh":72,"fk":100,"bh":-8,"bk":92},"gyaku_chamber":{"torso":4,"bs":-28,"be":112,"fs":42,"fe":90},"gyaku_strike":{"torso":15,"bs":88,"be":4,"fs":-6,"fe":120,"fh":34,"fk":40,"bh":-28,"bk":0,"dx":10},"oi_chamber":{"torso":6,"fs":-22,"fe":112,"bs":30,"be":100,"fh":10,"fk":28,"bh":-20,"bk":20},"oi_strike":{"torso":13,"fs":88,"fe":4,"bs":-10,"be":116,"fh":40,"fk":46,"bh":-30,"bk":2,"dx":14},"jodan_strike":{"torso":10,"bs":114,"be":4,"fs":0,"fe":120,"dx":8},"shita_chamber":{"torso":17,"bs":-16,"be":96,"fh":38,"fk":60,"bh":-28,"bk":20},"shita_strike":{"torso":12,"bs":48,"be":86,"fs":0,"fe":118,"fh":34,"fk":48,"dx":10},"kagi_chamber":{"torso":6,"bs":-30,"be":100},"kagi_strike":{"torso":17,"bs":76,"be":80,"fs":0,"fe":118,"dx":8},"ago_strike":{"torso":6,"bs":70,"be":102,"fs":0,"fe":118,"dx":8},"hiji_chamber":{"torso":8,"fs":10,"fe":150},"hiji_strike":{"torso":19,"fs":82,"fe":150,"bs":-10,"be":110,"fh":40,"fk":46,"dx":16},"mae_chamber":{"torso":-4,"bh":85,"bk":100,"fh":6,"fk":8},"mae_strike":{"torso":-10,"bh":88,"bk":6,"fh":4,"fk":6,"dx":8},"gedan_chamber":{"torso":-4,"bh":40,"bk":70,"fh":4,"fk":8},"gedan_strike":{"torso":-8,"bh":54,"bk":8,"fh":0,"fk":6,"dx":6},"hiza_chamber":{"torso":6,"bh":30,"bk":60,"fh":8,"fk":10},"hiza_strike":{"torso":14,"bh":100,"bk":130,"fh":6,"fk":8,"fs":62,"fe":60,"bs":58,"be":60,"dx":14},"mawashi_chamber":{"torso":-8,"bh":60,"bk":110,"fh":2,"fk":6},"mawashi_strike":{"torso":-16,"bh":92,"bk":4,"fh":-4,"fk":4,"dx":6},"yoko_chamber":{"torso":-12,"bh":80,"bk":120,"fh":0,"fk":6},"yoko_strike":{"torso":-30,"bh":95,"bk":0,"fh":-6,"fk":4,"fs":30,"fe":60,"dx":10},"jodan_mae_strike":{"torso":-14,"bh":124,"bk":4,"fh":2,"fk":4,"dx":8},"jodan_mawashi_strike":{"torso":-24,"bh":128,"bk":2,"fh":-4,"fk":4,"dx":6}},"anims":{"gyaku_tsuki":{"keys":[[0,"kamae"],[0.7,"gyaku_chamber"],[1,"gyaku_strike"],[2,"gyaku_strike"],[3,"kamae"]]},"oi_tsuki":{"keys":[[0,"kamae"],[0.6,"oi_chamber"],[1,"oi_strike"],[2,"oi_strike"],[3,"kamae"]]},"jodan_tsuki":{"keys":[[0,"kamae"],[0.7,"gyaku_chamber"],[1,"jodan_strike"],[2,"jodan_strike"],[3,"kamae"]]},"shita_tsuki":{"keys":[[0,"kamae"],[0.7,"shita_chamber"],[1,"shita_strike"],[2,"shita_strike"],[3,"kamae"]]},"kagi_tsuki":{"keys":[[0,"kamae"],[0.7,"kagi_chamber"],[1,"kagi_strike"],[2,"kagi_strike"],[3,"kamae"]]},"ago_uchi":{"keys":[[0,"kamae"],[0.7,"shita_chamber"],[1,"ago_strike"],[2,"ago_strike"],[3,"kamae"]]},"hiji_uchi":{"keys":[[0,"kamae"],[0.6,"hiji_chamber"],[1,"hiji_strike"],[2,"hiji_strike"],[3,"kamae"]]},"mae_geri":{"keys":[[0,"kamae"],[0.7,"mae_chamber"],[1,"mae_strike"],[2,"mae_strike"],[2.5,"mae_chamber"],[3,"kamae"]]},"gedan_mawashi":{"keys":[[0,"kamae"],[0.7,"gedan_chamber"],[1,"gedan_strike"],[2,"gedan_strike"],[2.5,"gedan_chamber"],[3,"kamae"]]},"hiza_geri":{"keys":[[0,"kamae"],[0.6,"hiza_chamber"],[1,"hiza_strike"],[2,"hiza_strike"],[3,"kamae"]]},"chudan_mawashi":{"keys":[[0,"kamae"],[0.7,"mawashi_chamber"],[1,"mawashi_strike"],[2,"mawashi_strike"],[2.5,"mawashi_chamber"],[3,"kamae"]]},"yoko_geri":{"keys":[[0,"kamae"],[0.7,"yoko_chamber"],[1,"yoko_strike"],[2,"yoko_strike"],[2.5,"yoko_chamber"],[3,"kamae"]]},"jodan_mae_geri":{"keys":[[0,"kamae"],[0.7,"mae_chamber"],[1,"jodan_mae_strike"],[2,"jodan_mae_strike"],[2.5,"mae_chamber"],[3,"kamae"]]},"jodan_mawashi":{"keys":[[0,"kamae"],[0.7,"mawashi_chamber"],[1,"jodan_mawashi_strike"],[2,"jodan_mawashi_strike"],[2.5,"mawashi_chamber"],[3,"kamae"]]},"guard_chudan":{"keys":[[0,"guard_chudan"]]},"guard_jodan":{"keys":[[0,"guard_jodan"]]},"guard_gedan":{"keys":[[0,"guard_gedan"]]},"sune_uke":{"keys":[[0,"sune_uke"]]},"morote_uke":{"keys":[[0,"morote_uke"]]}}},"strings.lt":{"_license":"SPDX-License-Identifier: BUSL-1.1","hud.you":"TU","hud.player":"Žaidėjas","hud.locked":"neatrakinta","hud.perfect":"Tobulas blokas!","ui.rotate":"Pasukite įrenginį horizontaliai","ui.paused":"Pauzė","ui.resume":"Tęsti","ui.quit":"Išeiti","result.ippon":"Ippon","result.awasete":"Awasete ippon","result.hantei":"Hantei","result.shikkaku":"Shikkaku","call.aka_shiro":"Dalyviai įžengia ant tatamio","call.shomen_ni_rei":"Nusilenkti teisėjų stalui","call.shushin_ni_rei":"Nusilenkti vyr. teisėjui","call.otagai_ni_rei":"Nusilenkti vienas kitam","call.kamaete":"Kovos stovos","call.hajime":"Pradėti!","call.yame":"Stop","call.zokko":"Tęsti","call.jikan":"Laikas sustabdytas","call.fukushin_shugo":"Pasitarimas su kampiniais","call.shomen_muite":"Atsisukti į priekį","call.hantei_o_torimasu":"Priimamas sprendimas","call.hantei":"Sprendimas!","call.hikiwake":"Lygiosios","call.encho":"Pratęsimas","call.waza_ari":"Pusė taško","call.ippon":"Pilnas taškas","call.awasete_ippon":"Du waza-ari = ippon","call.chui_1":"Pirmas įspėjimas","call.chui_2":"Antras įspėjimas","call.chui_3":"Trečias įspėjimas","call.shikkaku":"Diskvalifikacija","call.jogai":"Už ribos","call.mitomezu":"Nepripažįstama","call.oshi":"Įspėjamasis gestas","call.aka_no_kachi":"Laimi raudonas","call.shiro_no_kachi":"Laimi baltas","foul.illegal":"Draudžiama technika","foul.holding":"Laikymas / stūmimas","foul.passivity":"Pasyvumas","foul.jogai":"Bėgimas už ribos","foul.disrespect":"Nepagarba (nenusilenkta)","foul.afterYame":"Puolimas po „Yame“","foul.downed":"Puolimas į gulintį"},"strings.en":{"_license":"SPDX-License-Identifier: BUSL-1.1","hud.you":"TU","hud.player":"Žaidėjas","hud.locked":"neatrakinta","hud.perfect":"Tobulas blokas!","ui.rotate":"Pasukite įrenginį horizontaliai","ui.paused":"Pauzė","ui.resume":"Tęsti","ui.quit":"Išeiti","result.ippon":"Ippon","result.awasete":"Awasete ippon","result.hantei":"Hantei","result.shikkaku":"Shikkaku"}};
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
// 1 etapo (prototipo) meniu: iškart paleidžia bandomąją kovą. 3 etape pakeičiamas pilnu meniu.

const { techsUpTo, combosUpTo } = __req('src/core/data.js');
async function mainMenu(game) {
  for (;;) {
    const res = await game.runFight({
      mode: 'match', bg: 'dojo', hints: true, timeSec: 60,
      player: { name: 'Žaidėjas', belt: 'orange', unlocked: techsUpTo(game.db, 'orange'), combos: combosUpTo(game.db, 'orange') },
      opponent: { name: 'Rokas', belt: 'orange', archetype: 'tank' },
    });
    if (res && res.aborted) continue;
    await game.ui.ask(`<div class="panel center"><h1>${res.playerWon ? 'Pergalė' : 'Pralaimėjimas'}</h1>
      <button class="btn primary" data-act="again">Dar kartą</button></div>`);
  }
}

__exp.mainMenu = mainMenu;
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
    if (opts.hints && game.settings.assist) this.hud.buildHints(this.player);
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
      case 'knockdown': g.audio.thud(); this.cam.shake = 12; g.vibrate(80); break;
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
      ctx.fillRect(bx, 126, 300, 86);
      ctx.fillStyle = '#9dffb0';
      ctx.textAlign = 'left';
      lines.forEach((l, i) => ctx.fillText(l, bx + 8, 142 + i * 16));
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
    if (it.tech && f.open <= 0 && this.startTech(f, o, it.tech, it, false)) return;
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
      if (f.lastCombo && f.lastCombo.id === c.id && f.chainList.length - f.lastCombo.len < n) continue;
      if (!best || n > best.sequence.length) best = c;
    }
    return best;
  }

  startTech(f, o, def, it, chained) {
    const C = this.C;
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
    if (f.chainList.length > 8) f.chainList.shift();
    const tired = f.stamina < C.tiredBelow ? C.tiredSlow : 1;
    if (f.kiaiT <= 0) f.stamina = Math.max(0, f.stamina - def.staminaCost);
    f.sinceAct = 0;
    f.passive = 0;
    f.stats.techniques++;
    const combo = this.findCombo(f);
    if (combo) f.lastCombo = { id: combo.id, len: f.chainList.length };
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
    if (it.tech && f.open <= 0 && frac >= 1 - C.chainWindow && (this.phase === 'live' || this.phase === 'halt')) {
      if (this.startTech(f, o, it.tech, it, true)) return;
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
    tech: null, guard: null, down: null, pose: null, dash: null,
    crouch: false, moving: 0,
    dmg: { legs: cfg.carry?.legs || 0, body: cfg.carry?.body || 0, head: cfg.carry?.head || 0 },
    balance: 100, stamina: 100, ki: cfg.ki || 0, kiaiT: 0,
    wazaAri: 0, chui: 0,
    stats: { dmg: 0, effective: 0, techniques: 0, initiative: 0 },
    sinceHit: 9999, sinceAct: 9999, passive: 0,
    invul: 0, open: 0, counterT: 0, stun: 0, flash: 0, holdT: 0, suneT: 0,
    chainList: [], chainCount: 0, chainT: 9999, lastCombo: null,
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
