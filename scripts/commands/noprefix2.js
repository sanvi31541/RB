const fs = require("fs");
module.exports.config = {
  name: "💏",
  version: "1.0.0", 
  permission: 0,
  credits: "Rahad",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👨‍❤️‍💋‍👨")==0 || event.body.indexOf("😘")==0 || event.body.indexOf("😽")==0 || event.body.indexOf("🙁")==0) {
		var msg = {
				body: "--চাইলেই যদি ভোলা যেতো...!\nতাহলে সুসাইড বলে কিছুই থাকত না..!🙂\n𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱 🙂",
				attachment: fs.createReadStream(__dirname + `/noprefix/rahad10.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
