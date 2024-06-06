const fs = require("fs-extra");

module.exports = {
	config: {
		name: "restart",
		version: "1.1",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Khởi động lại bot",
			en: "Restart bot"
		},
		category: "Owner",
		guide: {
			vi: "   {pn}: Khởi động lại bot",
			en: "   {pn}: Restart bot"
		}
	},

	langs: {
		vi: {
			restartting: "🔄 | Đang khởi động lại bot..."
		},
		en: {
			restartting: "𝗛𝗲𝗹𝗹𝗼 𝗯𝗼𝘀𝘀 👋\n\n𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗮 𝗺𝗼𝗺𝗲𝗻𝘁,\n𝘁𝗵𝗲 𝗯𝗼𝘁 𝘀𝘆𝘀𝘁𝗲𝗺 𝘄𝗶𝗹𝗹 𝗿𝗲𝘀𝘁𝗮𝗿𝘁 𝗮𝗳𝘁𝗲𝗿 𝙛𝙚𝙬 𝘀𝗲𝗰𝗼𝗻𝗱𝘀💟"
		}
	},

	
	onStart: async function ({ message, event, getLang }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
		await message.reply(getLang("restartting"));
		process.exit(2);
	}
};
