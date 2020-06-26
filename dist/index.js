"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const db = require("quick.db");
const util_1 = require("util");
const chalk = require("chalk");
const client = new Discord.Client();
const prefix = ConfigFile.config2.prefix;
const code = Math.floor(Math.random() * 1000);
let dt = new Date();
let utcDate = dt.toUTCString();
function emoji(id) {
    var _a;
    return (_a = client.emojis.get(id)) === null || _a === void 0 ? void 0 : _a.toString();
}
client.on("ready", () => {
    client.user.setActivity("+help for help", { type: "WATCHING" });
    let allUsers = client.users.array();
    for (let i = 0; i < allUsers.length; i++) {
        if (util_1.isNull(db.get(allUsers[i].id))) {
            db.set(allUsers[i].id, { money: 50 });
        }
    }
    console.log(chalk.keyword('green')('Ready to go!'));
    console.log(chalk.keyword('magenta') `The secret code is ${code}`);
});
client.on("message", message => {
    var _a;
    let playersMoney = db.get(`${message.author.id}.money`);
    if (message.content.indexOf(ConfigFile.config2.prefix) !== 0)
        return;
    const args = message.content.slice(ConfigFile.config2.prefix.length).trim().split(/ +/g);
    const command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (command) {
        case `help`:
            let helpembed = new Discord.RichEmbed()
                .setColor("#66ffff")
                .setTitle("Help")
                .setDescription("Command and under it is description")
                .addField("help", "outputs this embed", false)
                .addField("invite", "outputs the bot invite", false)
                .addField("support", "outputs the support server invite", false)
                .addField("bal", "outputs your money", false)
                .addField("work", "Adds money to you", false)
                .addField("cake", "Outputs a cake. Yes exactly a cake.", false);
            message.channel.send(helpembed);
            break;
        case `invite`:
            message.channel.send(`This is an invite to add this bot to a server. Feel free to do so. 🙂\n https://discord.com/api/oauth2/authorize?client_id=725635490694561802&permissions=8&scope=bot`);
            break;
        case `support`:
            message.channel.send(`This is an invite to the Support server. If you have any questions feel free to join and ask. 🙂\n https://discord.gg/E9EanAg`);
            break;
        case `bal`:
            message.channel.send(`You currently have **${playersMoney}**`);
            break;
        case `work`:
            let random = Math.floor(Math.random() * 24) + 1;
            let msg = `You got ${random}`;
            if (random > 17) {
                db.add(`${message.author.id}.money`, random);
                msg = `**${message.author.username}**, You made a **yummy** cake. You got ${random} \n https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo4gUCdnQ4JQGW8FcpLyjmVw4AJJ0uE_rjxg&usqp=CAU`;
            }
            else if (random > 5) {
                db.add(`${message.author.id}.money`, random);
                msg = `**${message.author.username}**, You made a **ugly** cake. You got ${random} \n https://i.pinimg.com/originals/29/fd/e2/29fde238bbe604cb04388d4b56b9afb1.jpg`;
            }
            else {
                db.subtract(`${message.author.id}.money`, random * 15);
                msg = `**${message.author.username}**, Your cake killed a peron pay ${random * 15} \n https://tenor.com/view/dead-dying-dog-shocked-cake-gif-16453337`;
            }
            message.channel.send(msg);
            break;
        case `cake`:
            function cake(file, description) {
                message.channel.send(description, { files: [`${file}`] });
            }
            let random2 = Math.floor(Math.random() * 99) + 1;
            if (100 > random2 && random2 > 90) {
                cake("../assets/cakes/1.jpeg", "Rainbows.... Wait what **no** rainbows don't have white!??!?!");
            }
            else if (90 > random2 && random2 > 80) {
                cake("../assets/cakes/2.jpeg", "Choclate hearts.... Lovely.");
            }
            else if (80 > random2 && random2 > 70) {
                cake("../assets/cakes/3.jpeg", "Not so smart now huh. Understood ? Cause of **SMART**ies?? Not funny? K 😭.");
            }
            else if (70 > random2 && random2 > 60) {
                cake("../assets/cakes/4.jpeg", "Hmmm this looks veeeeeery yummy.");
            }
            else if (70 > random2 && random2 > 60) {
                cake("../assets/cakes/5.jpeg", "Oreo with a big pile of fruits....");
            }
            else if (70 > random2 && random2 > 65) {
                db.add(`${message.author.id}.money`, 100);
                cake("../assets/cakes/6.jpeg", "This is the rarest cake of the collection :-). You amazed? No? Ok you get the 100$ anyways.");
            }
            else if (65 > random2 && random2 > 50) {
                db.add(`${message.author.id}.money`, 75);
                cake("../assets/cakes/7.jpeg", "This is also a rare cake though not the rarest. You get 75$.");
            }
            else if (50 > random2 && random2 > 40) {
                cake("../assets/cakes/8.jpeg", "***Pig***");
            }
            else if (40 > random2 && random2 > 30) {
                cake("../assets/cakes/9.jpeg", "Roses. Beautiful cake.");
            }
            else if (30 > random2 && random2 > 20) {
                cake("../assets/cakes/10.jpeg", "The Galaxy: infinite possibilities no end a real dream.");
            }
            else if (20 > random2 && random2 > 10) {
                cake("../assets/cakes/11.jpeg", "I'm not a Bunny !??!?!? WHAT DO YOU WANT FROM ME.");
            }
            else if (10 > random2 && random2 > 0) {
                cake("../assets/cakes/12.jpeg", "Trippel Oreo with rainbow Stuff on it..... I like it!");
            }
    }
});
client.login(ConfigFile.config2.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQiwrQkFBOEI7QUFDOUIsK0JBQThCO0FBVTlCLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtBQUN4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUM3QyxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3BCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMvQixTQUFTLEtBQUssQ0FBQyxFQUFVOztJQUNyQixhQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxRQUFRLEdBQUc7QUFDN0MsQ0FBQztBQUNELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUVwQixNQUFNLENBQUMsSUFBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFBO0lBQ2hFLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxhQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNoQyxF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