module.exports.config = {
	name: "delthread",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HungCho",
	description: "",
	commandCategory: "Admin",
	usages: "delthread [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "",
			type: 'Văn bản',
			example: ''
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.deleteThread(item.threadID) : '');
		api.sendMessage(' Đã xoá tin nhắn của tất cả nhóm.', event.threadID);
	});
}
