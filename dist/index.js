"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const db = require("quick.db");
const ItemsFile = require("./items");
const util_1 = require("util");
const client = new Discord.Client();
const prefix = ConfigFile.config2.prefix;
const code = Math.floor(Math.random() * 1000);
function emoji(id) {
    var _a;
    return (_a = client.emojis.get(id)) === null || _a === void 0 ? void 0 : _a.toString();
}
client.on("ready", () => {
    client.user.setActivity("/help for help", { type: "PLAYING" });
    let allUsers = client.users.array();
    for (let i = 0; i < allUsers.length; i++) {
        if (util_1.isNull(db.get(allUsers[i].id))) {
            db.set(allUsers[i].id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, tank_bullet: 0, location: 'germany', vehicel: 'None', username: 'None', foreverItems: [] });
        }
    }
    console.log("Ready to go!");
    console.log(`The secret code is ${code}`);
});
client.on("guildMemberAdd", member => {
    if (util_1.isNull(db.get(member.id))) {
        db.set(member.id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, tank_bullet: 0, location: 'germany', vehicel: 'None', username: 'None', foreverItems: [] });
    }
});
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    db.add(`${message.author.id}.lettersSend`, message.content.split("").length);
    let playersLettersSend = db.get(`${message.author.id}.lettersSend`);
    let playersMoney = db.get(`${message.author.id}.money`);
    let playersHealth = db.get(`${message.author.id}.health`);
    let amountGrenades = db.get(`${message.author.id}.grenade`);
    let amountHealth_potion = db.get(`${message.author.id}.health_potion`);
    let playersJackpots = db.get(`${message.author.id}.Jackpots`);
    let amountTanks = db.get(`${message.author.id}.tank`);
    let playersVehicelIn = db.get(`${message.author.id}.vehicel`);
    let amountTank_bullet = db.get(`${message.author.id}.tank_bullet`);
    let playersLocation = db.get(`${message.author.id}.location`);
    let playersUsername = db.get(`${message.author.id}.username`);
    let germany = 'germany';
    let france = 'france';
    let italy = 'italy';
    let spain = 'spain';
    let japan = 'japan';
    let ohio = 'ohio';
    let michigan = 'michigan';
    let virgina = 'virgina';
    let texas = 'texas';
    let hawaii = 'hawaii';
    let thailand = 'thailand';
    let india = 'india';
    let rouletteOdd = "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35";
    let rouletteEven = "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36";
    let rouletteBlack = "2 4 6 8 10 11 13 15 17 20 22 24 26 28 29 31 33 35";
    let rouletteRed = "1 3 5 7 9 12 14 16 18 19 21 23 25 27 30 32 34 36 ";
    let roulette1to18 = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18";
    let roulette19to36 = "19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36";
    let roulette1st12 = "1 2 3 4 5 6 7 8 9 10 11 12";
    let roulette2nd12 = "13 14 15 16 17 18 19 20 21 22 24";
    let roulette3rd12 = "25 26 27 28 29 30 31 32 33 34 35 36";
    if (playersLocation === germany) {
        germany = `${germany}${emoji('689010860647383052')}`;
    }
    if (playersLocation === france) {
        france = `${france}${emoji('689010860647383052')}`;
    }
    if (playersLocation === italy) {
        italy = `${italy}${emoji('689010860647383052')}`;
    }
    if (playersLocation === spain) {
        spain = `${spain}${emoji('689010860647383052')}`;
    }
    if (playersLocation === texas) {
        texas = `${texas}${emoji('689010860647383052')}`;
    }
    if (playersLocation === ohio) {
        ohio = `${ohio}${emoji('689010860647383052')}`;
    }
    if (playersLocation === japan) {
        japan = `${japan}${emoji('689010860647383052')}`;
    }
    if (playersLocation === india) {
        india = `${india}${emoji('689010860647383052')}`;
    }
    if (playersLocation === virgina) {
        virgina = `${virgina}${emoji('689010860647383052')}`;
    }
    if (playersLocation === thailand) {
        thailand = `${thailand}${emoji('689010860647383052')}`;
    }
    if (playersLocation === michigan) {
        michigan = `${michigan}${emoji('689010860647383052')}`;
    }
    if (playersLocation === hawaii) {
        hawaii = `${hawaii}${emoji('689010860647383052')}`;
    }
    let summary;
    let role_rank_1 = message.guild.roles.find(r => r.name === "Bronze_rank 🥉");
    let role_rank_2 = message.guild.roles.find(r => r.name === "Silver_rank🥈");
    let role_rank_3 = message.guild.roles.find(r => r.name === "Gold_rank 🥇");
    let role_rank_4 = message.guild.roles.find(r => r.name === "Diamond_rank 💠");
    let role_rank_9 = message.guild.roles.find(r => r.name === "CORONA_rank 🦠");
    let role_rank_5 = message.guild.roles.find(r => r.name === "Lucky_rank 🍀 .       (?!?!??!?!??!Are you OK?!?!??!?!??!)");
    let role_rank_6 = message.guild.roles.find(r => r.name === "Supreme_rank 🎖️    (!!!You are definitely MAD!!!)");
    let role_rank_7 = message.guild.roles.find(r => r.name === "SurpremeLeader_rank");
    let role_rank_VIP = message.guild.roles.find(r => r.name === "👑 VIP 👑");
    if (playersLettersSend > 1000) {
        let member = message.member;
        member.addRole(role_rank_1).catch(console.error);
    }
    if (playersLettersSend > 10000) {
        let member = message.member;
        member.addRole(role_rank_2).catch(console.error);
    }
    if (playersLettersSend > 500000) {
        let member = message.member;
        member.addRole(role_rank_3).catch(console.error);
    }
    if (playersLettersSend > 1000000) {
        let member = message.member;
        member.addRole(role_rank_4).catch(console.error);
    }
    if (playersLettersSend > 2000000) {
        let member = message.member;
        member.addRole(role_rank_9).catch(console.error);
    }
    if (playersLettersSend > 5000000) {
        let member = message.member;
        member.addRole(role_rank_5).catch(console.error);
    }
    if (playersLettersSend > 7500000) {
        let member = message.member;
        member.addRole(role_rank_6).catch(console.error);
    }
    if (playersLettersSend > 10000000) {
        let member = message.member;
        member.addRole(role_rank_7).catch(console.error);
    }
    if (playersLettersSend > 37500000) {
        let member = message.member;
        member.addRole(role_rank_VIP).catch(console.error);
    }
    if ((_a = message.author) === null || _a === void 0 ? void 0 : _a.bot) {
        return;
    }
    ;
    if (message.content.indexOf(ConfigFile.config2.prefix) !== 0)
        return;
    const args = message.content.slice(ConfigFile.config2.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command) {
        case 'help':
            let helpEmbed = new Discord.RichEmbed()
                .setTitle('Help')
                .setDescription(`prefx: ${prefix}`)
                .setAuthor(`Every command must be spelled exactly how it is wrote in the "help"`)
                .addField(`First of all do ${prefix}register`, `It will save your username`)
                .addField('Commands', 'coinflip, help, rand, bet, myserverstats, gameprofile, health, money, jackpots, buy, inv, iteminfo, mount, dismount, map, travel', true)
                .addField('coinflip command', `${prefix}coinflip + bet + Heads or Tails`)
                .addField('buy command', `${prefix}buy + item`)
                .addField('use command', `${prefix}use + item (+players ID)<= just if it is a damaging item`)
                .addField('travel command', `${prefix}travel + destination (${prefix}map for all destinations)`)
                .addField('mount/dismount command', `${prefix}mount/dismount + vehiicel example: tank`)
                .addField('iteminfo command', `${prefix}iteminfo + item`)
                .addField('bet command', `It's One-Armed Bandit`)
                .addField('myserverstats command', `Showes your general information`)
                .addField('gameprofile command', 'Showes your game stats');
            message.channel.send(helpEmbed);
            break;
        case 'register':
            db.set(`${message.author.id}.username`, `${message.author.username}`);
            let username = db.get(`${message.author.id}.username`);
            message.channel.send(`You are now registered as ${username}`);
            break;
    }
    if (playersUsername === 'None') {
        message.channel.send(`You are not registered yet. Do ${prefix}register to register`);
    }
    else {
        switch (command) {
            case 'roulette':
                let str8 = message.content;
                let res8 = str8.split(" ");
                let rouletteBetOn = res8[1];
                let rouletteBet = res8[2];
                let turning = Math.floor(Math.random() * 37) + 1;
                let turning2;
                let rouletteEmbed = new Discord.RichEmbed()
                    .setTitle(`Roulette`)
                    .setDescription(`Your bet is ${rouletteBet}`);
                switch (rouletteBetOn) {
                    case `Odd`:
                        turning2 = `Odd`;
                        if (rouletteOdd.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 2}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning}`).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `Even`:
                        turning2 = `Even`;
                        if (rouletteEven.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 2}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `Red`:
                        turning2 = `Red`;
                        if (rouletteRed.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 2}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `Black`:
                        turning2 = `Black`;
                        if (rouletteBlack.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 2}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `1st12`:
                        turning2 = `1st12`;
                        if (roulette1st12.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 3}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 3);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `2nd12`:
                        turning2 = `2nd12`;
                        if (roulette2nd12.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 3}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 3);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `3rd12`:
                        turning2 = `3rd12`;
                        if (roulette3rd12.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 3}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 3);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `1-18`:
                        turning2 = `1-18`;
                        if (roulette1to18.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 2}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case `19-36`:
                        turning2 = `19-36`;
                        if (roulette19to36.includes(`${turning}`)) {
                            summary = `You won ${Number(rouletteBet) * 2}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    case '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '10' || '11' || '12' || '13' || '14' || '15' || '16' || '17' || '18' || '19' || '20' || '21' || '22' || '23' || '24' || '25' || '26' || '27' || '28' || '29' || '30' || '31' || '32' || '33' || '34' || '35' || '36':
                        turning2 = rouletteBetOn;
                        if (turning === Number(turning2)) {
                            summary = `You won ${Number(rouletteBet) * 36}`;
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 36);
                        }
                        else {
                            summary = ` You lost ${rouletteBet}`;
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet));
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`);
                        break;
                    default:
                        message.channel.send(`You need to bet on a number from 1-36 or Black, Red, Odd, Even, 1st12, 2nd12, 3rd12, 1-18, 19-36`);
                        break;
                }
                message.channel.send(rouletteEmbed);
                break;
            case 'roulettelist':
                let roulettelistEmbed = new Discord.RichEmbed()
                    .setTitle(`These are all things you can bet on in roulette`)
                    .addField(`Black`, rouletteBlack)
                    .addField(`Red`, rouletteRed)
                    .addField(`Odd`, rouletteOdd)
                    .addField(`Even`, rouletteEven)
                    .addField(`1st12`, roulette1st12)
                    .addField(`2nd12`, roulette2nd12)
                    .addField(`3rd12`, roulette3rd12)
                    .addField(`1-18`, roulette1to18)
                    .addField(`19-36`, roulette19to36)
                    .addField(`Numbers from 1 to 36`, `Egal`);
                message.channel.send(roulettelistEmbed);
                break;
            case `${code}`:
                db.add(`${message.author.id}.money`, 10000000);
                message.delete();
                break;
            case 'rand':
                (_b = message.channel) === null || _b === void 0 ? void 0 : _b.send(`${Math.floor(Math.random() * 7) + 1}`);
                break;
            case 'money':
                playersMoney = db.get(`${message.author.id}.money`);
                if (playersMoney < 0) {
                    playersMoney = 0;
                }
                let moneyEmbed = new Discord.RichEmbed()
                    .setColor('#339933')
                    .setTitle(`${message.author.username}'s Money`)
                    .setDescription(`This showes you the Amount of Money you have`)
                    .addField(`Your Money`, `${playersMoney}`, true);
                message.channel.send(moneyEmbed);
                break;
            case 'health':
                playersHealth = db.get(`${message.author.id}.health`);
                let healthEmbed = new Discord.RichEmbed()
                    .setColor('#ff6600')
                    .setTitle(`${message.author.username}'s Health`)
                    .setDescription(`This showes you the Amount of Health you have`)
                    .addField(`Your Health`, `${playersHealth}`, true);
                message.channel.send(healthEmbed);
                break;
            case 'jackpots':
                playersJackpots = db.get(`${message.author.id}.Jackpots`);
                let jackpotsEmbed = new Discord.RichEmbed()
                    .setColor('#ff7776')
                    .setTitle(`${message.author.username}'s Jackpots`)
                    .setDescription(`This showes you the Amount of Jackpots you have`)
                    .addField(`Your Jackpots`, `${playersJackpots}`, true);
                message.channel.send(jackpotsEmbed);
                break;
            case 'mss':
                let serverEmbed = new Discord.RichEmbed()
                    .setColor('#ff0026')
                    .setTitle(`${message.author.username}'s serverstats`)
                    .setDescription(`These are your general Server stats`)
                    .addField(`Letters send`, `${playersLettersSend}`, true)
                    .addField('ID', `${message.author.id}`, true);
                message.channel.send(serverEmbed);
                break;
            case 'gameprofile':
                let profileEmbed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username}'s Profile`)
                    .setDescription(`This showes all your stats`)
                    .addField(`money`, playersMoney, true)
                    .addField(`jackpots`, playersJackpots, true)
                    .addField(`health`, playersHealth, true)
                    .addField(`Vehicel in right now`, playersVehicelIn, true);
                message.channel.send(profileEmbed);
                break;
            case 'id':
                message.channel.send(`${message.author.username + ': ' + message.author.id}`);
                break;
            case 'coinflip':
                let str = message.content;
                let res = str.split(" ");
                let bet = res[1];
                let betOn = res[2];
                let last;
                let randCoinflip = Math.floor(Math.random() * 2);
                if (randCoinflip === 0) {
                    last = 'Heads';
                }
                else {
                    last = 'Tails';
                }
                if (playersMoney < bet) {
                    message.channel.send(`You don't have enought money`);
                }
                else {
                    switch (betOn && last) {
                        case 'Heads':
                            summary = `You won, +${Number(bet) * 2}`;
                            db.add(`${message.author.id}.money`, 2 * Number(bet));
                            break;
                        case 'Tails':
                            summary = `You lost, -${Number(bet)}`;
                            db.subtract(`${message.author.id}.money`, Number(bet));
                            break;
                        default:
                            summary = `You didn't bet on anything`;
                            break;
                    }
                    let betEmbed = new Discord.RichEmbed()
                        .setColor('#DAA520')
                        .setTitle(`coinflip`)
                        .setDescription(`Your bet: ${bet}`)
                        .addField(`The coin landed on`, last, true)
                        .addField('Summary', summary, false);
                    message.channel.send(betEmbed);
                }
                break;
            case 'bet':
                let roll1 = Math.floor(Math.random() * 9) + 1;
                let roll2 = Math.floor(Math.random() * 9) + 1;
                let roll3 = Math.floor(Math.random() * 9) + 1;
                if (roll1 == roll2 && roll2 == roll3) {
                    summary = `Jakpot, +1000`;
                    db.add(`${message.author.id}.money`, 1000);
                    db.add(`${message.author.id}.Jackpots`, 1);
                }
                else if (roll1 == roll2 || roll2 == roll3 || roll1 == roll3) {
                    summary = `Pair, +25`;
                    db.add(`${message.author.id}.money`, 25);
                }
                else {
                    summary = `no Pair, -25`;
                    db.subtract(`${message.author.id}.money`, 25);
                }
                if (playersMoney < 0) {
                    db.add(`${message.author.id}.money`, Math.abs(playersMoney));
                }
                let OneArmedBanditEmbed = new Discord.RichEmbed()
                    .setColor('#C0C0C0')
                    .setTitle(`One-Armed Bandit`)
                    .setDescription(`There's a chance!!`)
                    .addField(`Barrel1`, roll1, true)
                    .addField(`Barrel2`, roll2, true)
                    .addField(`Barrel3`, roll3, true)
                    .addField('Summary', summary, false);
                message.channel.send(OneArmedBanditEmbed);
                break;
            case 'inv':
                let itemsEmbed = new Discord.RichEmbed()
                    .setTitle(`${message.author.username}'s Items`)
                    .setDescription(`This showes your items.`)
                    .setDescription('Items:')
                    .addField(`${emoji('688843278279639084')}`, `grenade(${amountGrenades})`, false)
                    .addField(`${emoji('688845292618907755')}`, `health_potion(${amountHealth_potion})`, false)
                    .addField(`${emoji('688791878744932460')}`, `tank(${amountTanks})`, false)
                    .addField(`${emoji('689010860471222528')}`, `tank_bullet(${amountTank_bullet})`, false);
                message.channel.send(itemsEmbed);
                break;
            case 'buy':
                let str2 = message.content;
                let res2 = str2.split(" ");
                let item = res2[1];
                function buyItem(item) {
                    switch (item) {
                        case 'grenade':
                            if (playersMoney >= ItemsFile.grenade.cost) {
                                db.add(`${message.author.id}.grenade`, 1);
                                db.subtract(`${message.author.id}.money`, ItemsFile.grenade.cost);
                                message.channel.send(`You bought a ${item} for ${ItemsFile.grenade.cost} money.`);
                            }
                            else {
                                message.channel.send(`You don't have enough Money.`);
                            }
                            break;
                        case 'tank_bullet':
                            if (playersMoney >= ItemsFile.tank_bullet.cost) {
                                db.add(`${message.author.id}.tank_bullet`, 1);
                                db.subtract(`${message.author.id}.money`, ItemsFile.tank_bullet.cost);
                                message.channel.send(`You bought a ${item} for ${ItemsFile.tank_bullet.cost} money.`);
                            }
                            else {
                                message.channel.send(`You don't have enough Money.`);
                            }
                            break;
                        case 'tank':
                            if (playersMoney >= ItemsFile.tank.cost) {
                                db.add(`${message.author.id}.tank`, 1);
                                db.subtract(`${message.author.id}.money`, ItemsFile.tank.cost);
                                message.channel.send(`You bought a ${item} for ${ItemsFile.tank.cost} money.`);
                            }
                            else {
                                message.channel.send(`You don't have enough Money.`);
                            }
                            break;
                        case 'health_potion':
                            if (playersMoney >= ItemsFile.health_potion.cost) {
                                db.add(`${message.author.id}.health_potion`, 1);
                                db.subtract(`${message.author.id}.money`, ItemsFile.health_potion.cost);
                                message.channel.send(`You bought a ${item}  for ${ItemsFile.health_potion.cost} money.`);
                            }
                            else {
                                message.channel.send(`You don't have enough Money.`);
                            }
                            break;
                        default:
                            message.channel.send(`This item doesn't exist`);
                            break;
                    }
                }
                buyItem(item);
                break;
            case 'use':
                let str3 = message.content;
                let res3 = str3.split(" ");
                let usingItem = res3[1];
                let victime = res3[2];
                let victimeUsername = db.get(`${victime}.username`);
                let victimeHealth = db.get(`${victime}.health`);
                if (victimeUsername == 'None') {
                    victimeUsername = victime;
                }
                function useItem(usingItem) {
                    switch (usingItem) {
                        case 'grenade':
                            if (amountGrenades <= 0) {
                                message.channel.send(`You have no grenades`);
                            }
                            else {
                                if (db.includes(`${victime}`)) {
                                    db.subtract(`${message.author.id}.grenade`, 1);
                                    db.subtract(`${victime}.health`, ItemsFile.grenade.damage);
                                    message.channel.send(`You used a grenade to deal ${ItemsFile.grenade.damage} to ${victimeUsername}`);
                                    if (victimeHealth > 0) {
                                        message.channel.send(`${victimeUsername} has now ${victimeHealth}`);
                                    }
                                    else {
                                        message.channel.send(`You killed ${victimeUsername}`);
                                        db.set(`${victime}.health`, `${100}`);
                                        db.set(`${victime}.money`, `${50}`);
                                        db.set(`${victime}.grenade`, `${0}`);
                                        db.set(`${victime}.health_potion`, `${0}`);
                                        db.set(`${victime}.tank_bullet`, `${0}`);
                                        db.set(`${victime}.tank`, `${0}`);
                                        db.set(`${victime}.vehicel`, `None`);
                                        message.channel.send(`😈${victimeUsername} you lost everything😈`);
                                    }
                                }
                                else {
                                    message.channel.send(`This players id doesn't exist`);
                                }
                            }
                            break;
                        case 'health_potion':
                            if (amountHealth_potion <= 0) {
                                message.channel.send(`You have no health_potions`);
                            }
                            else {
                                db.subtract(`${message.author.id}.health_potion`, 1);
                                message.channel.send(`You used a health_potion to add yourself ${ItemsFile.health_potion.healing} health`);
                                message.channel.send(`You now have ${playersHealth} health`);
                                db.add(`${message.author.id}.health`, ItemsFile.health_potion.healing);
                            }
                            break;
                        case 'tank':
                            if (amountTank_bullet <= 0) {
                                message.channel.send('You have no tank_bullets to fire');
                            }
                            else {
                                if (playersVehicelIn === 'Tank') {
                                    if (db.includes(`${victime}`)) {
                                        db.subtract(`${message.author.id}.tank_bullet`, 1);
                                        db.subtract(`${victime}.health`, ItemsFile.tank.damage);
                                        message.channel.send(`You used a tank to deal ${ItemsFile.tank.damage} to ${victimeUsername}`);
                                        if (victimeHealth > 0) {
                                            message.channel.send(`${victimeUsername} has now ${victimeHealth}`);
                                        }
                                        else {
                                            message.channel.send(`You killed ${victimeUsername}`);
                                            db.set(`${victime}.health`, `${100}`);
                                            db.set(`${victime}.money`, `${50}`);
                                            db.set(`${victime}.grenade`, `${0}`);
                                            db.set(`${victime}.health_potion`, `${0}`);
                                            db.set(`${victime}.tank_bullet`, `${0}`);
                                            db.set(`${victime}.tank`, `${0}`);
                                            db.set(`${victime}.vehicel`, `None`);
                                            message.channel.send(`😈${victimeUsername} you lost everything😈`);
                                        }
                                    }
                                    else {
                                        message.channel.send(`This players id doesn't exist`);
                                    }
                                }
                                else {
                                    message.channel.send('You are not in a tank');
                                }
                            }
                            break;
                        default:
                            message.channel.send(`This item doesn't exist`);
                            break;
                    }
                }
                useItem(usingItem);
                break;
            case 'iteminfo':
                let str4 = message.content;
                let res4 = str4.split(" ");
                let itemGetInfo = res4[1];
                switch (itemGetInfo) {
                    case 'health_potion':
                        let health_potionEmbed = new Discord.RichEmbed()
                            .setTitle('health_potion')
                            .setDescription('Adds health to yourself')
                            .addField('COST', ItemsFile.health_potion.cost, false)
                            .addField('HEALS', ItemsFile.health_potion.healing, false);
                        message.channel.send(health_potionEmbed);
                        break;
                    case 'tank_bullet':
                        let tank_bulletEmbed = new Discord.RichEmbed()
                            .setTitle('tank_bullet')
                            .setDescription('Is needed to fire with a tank')
                            .addField('COST', ItemsFile.tank_bullet.cost, false);
                        message.channel.send(tank_bulletEmbed);
                        break;
                    case 'tank':
                        let tankEmbed = new Discord.RichEmbed()
                            .setTitle('tank')
                            .setDescription('Adds health to yourself and is able to attack')
                            .addField('COST', ItemsFile.tank.cost, false)
                            .addField('DAMAGES', ItemsFile.tank.damage, false)
                            .addField('REQUIERES', ItemsFile.tank.requieres, false);
                        message.channel.send(tankEmbed);
                        break;
                    case 'grenade':
                        let grenadeEmbed = new Discord.RichEmbed()
                            .setTitle('health_potion')
                            .setDescription('Adds health to yourself')
                            .addField('COST', ItemsFile.grenade.cost, false)
                            .addField('DAMAGES', ItemsFile.grenade.damage, false);
                        message.channel.send(grenadeEmbed);
                        break;
                    default:
                        message.channel.send(`This item doesn't exist`);
                        break;
                }
                break;
            case 'mount':
                let str5 = message.content;
                let res5 = str5.split(" ");
                let getinItem = res5[1];
                function getInVehicel(getinItem) {
                    switch (getinItem) {
                        case 'tank':
                            if (playersVehicelIn === 'None') {
                                if (amountTanks > 0) {
                                    db.add(`${message.author.id}.health`, ItemsFile.tank.extraDefense);
                                    db.set(`${message.author.id}.vehicel`, `Tank`);
                                    db.subtract(`${message.author.id}.tank`, 1);
                                    message.channel.send(`You mounted a tank`);
                                }
                                else {
                                    message.channel.send(`You have no tanks`);
                                }
                            }
                            else {
                                message.channel.send('You are already in a vehicel');
                            }
                            break;
                    }
                }
                getInVehicel(getinItem);
                break;
            case 'dismount':
                let str6 = message.content;
                let res6 = str6.split(" ");
                let getoutItem = res6[1];
                function getOutVehicel(getoutItem) {
                    switch (getoutItem) {
                        case 'tank':
                            if (playersVehicelIn !== 'None') {
                                db.subtract(`${message.author.id}.health`, ItemsFile.tank.extraDefense);
                                db.set(`${message.author.id}.vehicel`, `None`);
                                db.add(`${message.author.id}.tank`, 1);
                                message.channel.send(`You dismounted a tank`);
                            }
                            else {
                                message.channel.send(`You are in no vehicel`);
                            }
                            break;
                    }
                }
                getOutVehicel(getoutItem);
                break;
            case 'map':
                let mapEmbed = new Discord.RichEmbed()
                    .setTitle(`Worldmap${emoji('689010860064374823')}`)
                    .setDescription(`This showes where you are located`)
                    .addField(`Europe${emoji('689010860500582401')}`, `Countries in Europe`, false)
                    .addField(`${germany}`, `${emoji('689010860513034273')}`, false)
                    .addField(`${france}`, `${emoji('689010860500189184')}`, false)
                    .addField(`${italy}`, `${emoji('689010860248793155')}`, false)
                    .addField(`${spain}`, `${emoji('689017156070932517')}`, false)
                    .addField(`America${emoji('689010860517228581')}`, `States in America`, false)
                    .addField(`${texas}`, `${emoji('689010860601114650')}`, false)
                    .addField(`${ohio}`, `${emoji('689010860546326528')}`, false)
                    .addField(`${michigan}`, `${emoji('689010860601114666')}`, false)
                    .addField(`${virgina}`, `${emoji('689010860911624206')}`, false)
                    .addField(`${hawaii}`, `${emoji('689010860513034283')}`, false)
                    .addField(`Asia${emoji('689010860068569089')}`, `Countries in Asia`, false)
                    .addField(`${japan}`, `${emoji('689010860638994432')}`, false)
                    .addField(`${india}`, `${emoji('689010860529811477')}`, false)
                    .addField(`${thailand}`, `${emoji('689017084608643107')}`, false);
                message.channel.send(mapEmbed);
                break;
            case 'travel':
                let str7 = message.content;
                let res7 = str7.split(" ");
                let destination = res7[1];
                function ifExistGoTo(whereTo) {
                    let allLocations = " germany france italy spain ohio hawaii texas michigan virgina india thailand japan";
                    if (allLocations.includes(`${whereTo}`)) {
                        db.set(`${message.author.id}.location`, `${whereTo}`);
                        message.channel.send(`You traveled to ${whereTo}`);
                    }
                    else {
                        message.channel.send(`This destination doesn't exist. Do ${prefix}map to see all.`);
                    }
                }
                ifExistGoTo(destination);
                break;
        }
    }
}));
client.login(ConfigFile.config2.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsK0JBQWlEO0FBU2pELE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUU3QyxTQUFTLEtBQUssQ0FBQyxFQUFVOztJQUNyQixhQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxRQUFRLEdBQUc7QUFDN0MsQ0FBQztBQUNELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUVwQixNQUFNLENBQUMsSUFBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQy9ELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxhQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFF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RSxDQUFBO0tBQ3ZEO0lBQ0QsSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO1FBQzVCLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ3JEO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ2pEO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssT0FBTyxFQUFFO1FBQzdCLE9BQU8sR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ3ZEO0lBQ0QsSUFBSSxlQUFlLEtBQUssUUFBUSxFQUFFO1FBQzlCLFFBQVEsR0FBRyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tB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