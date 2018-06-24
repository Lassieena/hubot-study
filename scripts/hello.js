'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
    robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots =['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ', ' + username);
	});
	robot.hear(/きょうの料理は？/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['お好み焼き','オムライス','寿司','ハンバーグ','味噌汁','お茶漬け','ステーキ','焼き肉','焼き鮭','鮎の塩焼き','土','卵焼き','野菜炒め','リンカーン','納豆','ビール','スターリン'];
		const lot = lots[Math.floor(Math.randam() * lots.length)];
		msg.send(lot);
	});
	robot.hear(/sino>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('白築慕ちゃんは可愛い。咲-saki-のスピンオフ作品、シノハユの主人公。この子の魅力は語るに語れない。 ' + 'by' + username);
	});
};