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
    let role_rank_7 = message.guild.roles.find(r => r.name === "BombSquad_rank 💣");
    let role_rank_8 = message.guild.roles.find(r => r.name === "🕦 Clock_Master_rank 🕦");
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
    if (playersLettersSend > 1750000) {
        let member = message.member;
        member.addRole(role_rank_9).catch(console.error);
    }
    if (playersLettersSend > 2500000) {
        let member = message.member;
        member.addRole(role_rank_5).catch(console.error);
    }
    if (playersLettersSend > 5000000) {
        let member = message.member;
        member.addRole(role_rank_6).catch(console.error);
    }
    if (playersLettersSend > 7500000) {
        let member = message.member;
        member.addRole(role_rank_7).catch(console.error);
    }
    if (playersLettersSend > 10000000) {
        let member = message.member;
        member.addRole(role_rank_8).catch(console.error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsK0JBQWlEO0FBU2pELE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUU3QyxTQUFTLEtBQUssQ0FBQyxFQUFVOztJQUNyQixhQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxRQUFRLEdBQUc7QUFDN0MsQ0FBQztBQUNELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUVwQixNQUFNLENBQUMsSUFBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQy9ELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxhQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFF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RSxDQUFBO0tBQ3ZEO0lBQ0QsSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO1FBQzVCLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ3JEO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ2pEO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssS0FBSyxFQUFFO1FBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxlQUFlLEtBQUssT0FBTyxFQUFFO1FBQzdCLE9BQU8sR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ3ZEO0lBQ0QsSUFBSSxlQUFlLEtBQUssUUFBUSxFQUFFO1FBQzlCLFFBQVEsR0FBRyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ3pEO0lBQ0QsSUFBSSxlQUFlLEtBQUssUUFBUSxFQUFFO1FBQzlCLFFBQVEsR0FBRyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ3pEO0lBQ0QsSUFBSSxlQUFlLEtBQUssTUFBTSxFQUFFO1FBQzVCLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFBO0tBQ3JEO0lBQ0QsSUFBSSxPQUFlLENBQUE7SUFDbkIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUM7SUFDNUUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQztJQUMzRSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLENBQUM7SUFDOUUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssNERBQTRELENBQUMsQ0FBQztJQUN6SCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLG9EQUFvRCxDQUFDLENBQUM7SUFDakgsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUsseUJBQXlCLENBQUMsQ0FBQztJQUd0RixJQUFJLGtCQUFrQixHQUFHLElBQUksRUFBRTtRQUMzQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUdwRDtJQUNELElBQUksa0JBQWtCLEdBQUcsS0FBSyxFQUFFO1FBQzVCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BEO0lBQ0QsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLEVBQUU7UUFDN0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFcEQ7SUFDRCxJQUFJLGtCQUFrQixHQUFHLE9BQU8sRUFBRTtRQUM5QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUVwRDtJQUNELElBQUksa0JBQWtCLEdBQUcsT0FBTyxFQUFFO1FBQzlCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRXBEO0lBQ0QsSUFBSSxrQkFBa0IsR0FBRyxPQUFPLEVBQUU7UUFDOUIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFcEQ7SUFDRCxJQUFJLGtCQUFrQixHQUFHLE9BQU8sRUFBRTtRQUM5QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUVwRDtJQUNELElBQUksa0JBQWtCLEdBQUcsT0FBTyxFQUFFO1FBQzlCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7UUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRXBEO0lBQ0QsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLEVBQUU7UUFDL0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFcEQ7SUFDRCxVQUFJLE9BQU8sQ0FBQyxNQUFNLDBDQUFFLEdBQUcsRUFBRTtRQUFFLE9BQU07S0FBRTtJQUFBLENBQUM7SUFFcEMsSUFBSSxPQUFPLENBQUMsT0FBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPO0lBRXRFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsUUFBUSxPQUFPLEVBQUU7UUFDYixLQUFLLE1BQU07WUFDUCxJQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLGNBQWMsQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDO2lCQUNsQyxTQUFTLENBQUMscUVBQXFFLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxtQkFBbUIsTUFBTSxVQUFVLEVBQUUsNEJBQTRCLENBQUM7aUJBQzNFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsa0lBQWtJLEVBQUUsSUFBSSxDQUFDO2lCQUM5SixRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxNQUFNLGlDQUFpQyxDQUFDO2lCQUN4RSxRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsTUFBTSxZQUFZLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxNQUFNLDBEQUEwRCxDQUFDO2lCQUM1RixRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxNQUFNLHlCQUF5QixNQUFNLDJCQUEyQixDQUFDO2lCQUMvRixRQUFRLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxNQUFNLHlDQUF5QyxDQUFDO2lCQUN0RixRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxNQUFNLGlCQUFpQixDQUFDO2lCQUN4RCxRQUFRLENBQUMsYUFBYSxFQUFFLHVCQUF1QixDQUFDO2lCQUNoRCxRQUFRLENBQUMsdUJBQXVCLEVBQUUsaUNBQWlDLENBQUM7aUJBQ3BFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO1lBRzlELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQy9CLE1BQU07UUFDVixLQUFLLFVBQVU7WUFDWCxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUNyRSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO1lBQ3RELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQzdELE1BQU07S0FDYjtJQUNELElBQUksZUFBZSxLQUFLLE1BQU0sRUFBRTtRQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsTUFBTSxzQkFBc0IsQ0FBQyxDQUFBO0tBQ3ZGO1NBQU07UUFDSCxRQUFRLE9BQU8sRUFBRTtZQXFKYixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEQsSUFBSSxRQUFnQixDQUFBO2dCQUdwQixJQUFJLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7cUJBQ3RDLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3BCLGNBQWMsQ0FBQyxlQUFlLFdBQVcsRUFBRSxDQUFDLENBQUE7Z0JBRWpELFFBQVEsYUFBYSxFQUFFO29CQUNuQixLQUFLLEtBQUs7d0JBQ04sUUFBUSxHQUFHLEtBQUssQ0FBQTt3QkFDaEIsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRTs0QkFFcEMsT0FBTyxHQUFHLFdBQVcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBOzRCQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7eUJBQ2hFOzZCQUFNOzRCQUNILE9BQU8sR0FBRyxhQUFhLFdBQVcsRUFBRSxDQUFBOzRCQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTt5QkFDakU7d0JBQ0QsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLGFBQWEsRUFBRSxFQUFFLHNCQUFzQixPQUFPLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFBO3dCQUN4SSxNQUFNO29CQUNWLEtBQUssTUFBTTt3QkFDUCxRQUFRLEdBQUcsTUFBTSxDQUFBO3dCQUNqQixJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFOzRCQUVyQyxPQUFPLEdBQUcsV0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7NEJBQzlDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTt5QkFDaEU7NkJBQU07NEJBQ0gsT0FBTyxHQUFHLGFBQWEsV0FBVyxFQUFFLENBQUE7NEJBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO3lCQUNqRTt3QkFDRCxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsYUFBYSxFQUFFLEVBQUUsc0JBQXNCLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUE7d0JBQ3pJLE1BQU07b0JBQ1YsS0FBSyxLQUFLO3dCQUNOLFFBQVEsR0FBRyxLQUFLLENBQUE7d0JBQ2hCLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUU7NEJBRXBDLE9BQU8sR0FBRyxXQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTs0QkFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO3lCQUNoRTs2QkFBTTs0QkFDSCxPQUFPLEdBQUcsYUFBYSxXQUFXLEVBQUUsQ0FBQTs0QkFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7eUJBQ2pFO3dCQUNELGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxhQUFhLEVBQUUsRUFBRSxzQkFBc0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQTt3QkFDekksTUFBTTtvQkFDVixLQUFLLE9BQU87d0JBQ1IsUUFBUSxHQUFHLE9BQU8sQ0FBQTt3QkFDbEIsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRTs0QkFFdEMsT0FBTyxHQUFHLFdBQVcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBOzRCQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7eUJBQ2hFOzZCQUFNOzRCQUNILE9BQU8sR0FBRyxhQUFhLFdBQVcsRUFBRSxDQUFBOzRCQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTt5QkFDakU7d0JBQ0QsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLGFBQWEsRUFBRSxFQUFFLHNCQUFzQixPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFBO3dCQUN6SSxNQUFNO29CQUNWLEtBQUssT0FBTzt3QkFDUixRQUFRLEdBQUcsT0FBTyxDQUFBO3dCQUNsQixJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFOzRCQUV0QyxPQUFPLEdBQUcsV0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7NEJBQzlDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTt5QkFDaEU7NkJBQU07NEJBQ0gsT0FBTyxHQUFHLGFBQWEsV0FBVyxFQUFFLENBQUE7NEJBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO3lCQUNqRTt3QkFDRCxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsYUFBYSxFQUFFLEVBQUUsc0JBQXNCLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUE7d0JBQ3pJLE1BQU07b0JBQ1YsS0FBSyxPQUFPO3dCQUNSLFFBQVEsR0FBRyxPQUFPLENBQUE7d0JBQ2xCLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUU7NEJBRXRDLE9BQU8sR0FBRyxXQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTs0QkFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO3lCQUNoRTs2QkFBTTs0QkFDSCxPQUFPLEdBQUcsYUFBYSxXQUFXLEVBQUUsQ0FBQTs0QkFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7eUJBQ2pFO3dCQUNELGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxhQUFhLEVBQUUsRUFBRSxzQkFBc0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQTt3QkFDekksTUFBTTtvQkFDVixLQUFLLE9BQU87d0JBQ1IsUUFBUSxHQUFHLE9BQU8sQ0FBQTt3QkFDbEIsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRTs0QkFFdEMsT0FBTyxHQUFHLFdBQVcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBOzRCQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7eUJBQ2hFOzZCQUFNOzRCQUNILE9BQU8sR0FBRyxhQUFhLFdBQVcsRUFBRSxDQUFBOzRCQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTt5QkFDakU7d0JBQ0QsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLGFBQWEsRUFBRSxFQUFFLHNCQUFzQixPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFBO3dCQUN6SSxNQUFNO29CQUNWLEtBQUssTUFBTTt3QkFDUCxRQUFRLEdBQUcsTUFBTSxDQUFBO3dCQUNqQixJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFOzRCQUV0QyxPQUFPLEdBQUcsV0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7NEJBQzlDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTt5QkFDaEU7NkJBQU07NEJBQ0gsT0FBTyxHQUFHLGFBQWEsV0FBVyxFQUFFLENBQUE7NEJBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO3lCQUNqRTt3QkFDRCxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsYUFBYSxFQUFFLEVBQUUsc0JBQXNCLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUE7d0JBQ3pJLE1BQU07b0JBQ1YsS0FBSyxPQUFPO3dCQUNSLFFBQVEsR0FBRyxPQUFPLENBQUE7d0JBQ2xCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUU7NEJBRXZDLE9BQU8sR0FBRyxXQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTs0QkFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO3lCQUNoRTs2QkFBTTs0QkFDSCxPQUFPLEdBQUcsYUFBYSxXQUFXLEVBQUUsQ0FBQTs0QkFDcEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7eUJBQ2pFO3dCQUNELGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxhQUFhLEVBQUUsRUFBRSxzQkFBc0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQTt3QkFDekksTUFBTTtvQkFDVixLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTt3QkFDcFIsUUFBUSxHQUFHLGFBQWEsQ0FBQTt3QkFDeEIsSUFBSSxPQUFPLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUM5QixPQUFPLEdBQUcsV0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUE7NEJBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTt5QkFDakU7NkJBQU07NEJBQ0gsT0FBTyxHQUFHLGFBQWEsV0FBVyxFQUFFLENBQUE7NEJBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO3lCQUNqRTt3QkFDRCxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsYUFBYSxFQUFFLEVBQUUsc0JBQXNCLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUE7d0JBQ3pJLE1BQU07b0JBQ1Y7d0JBQ0ksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0dBQWtHLENBQUMsQ0FBQTt3QkFDeEgsTUFBTTtpQkFFYjtnQkFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDbkMsTUFBTTtZQUNWLEtBQUssY0FBYztnQkFDZixJQUFJLGlCQUFpQixHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDMUMsUUFBUSxDQUFDLGlEQUFpRCxDQUFDO3FCQUMzRCxRQUFRLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztxQkFDaEMsUUFBUSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7cUJBQzVCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO3FCQUM1QixRQUFRLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztxQkFDOUIsUUFBUSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7cUJBQ2hDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO3FCQUNoQyxRQUFRLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztxQkFDaEMsUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7cUJBQy9CLFFBQVEsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO3FCQUNqQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0JBRXZDLE1BQU07WUFDVixLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUNWLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUM5QyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsTUFBQSxPQUFPLENBQUMsT0FBTywwQ0FBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQztnQkFDN0QsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixZQUFZLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtnQkFDbkQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixZQUFZLEdBQUcsQ0FBQyxDQUFBO2lCQUNuQjtnQkFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7cUJBQ25DLFFBQVEsQ0FBQyxTQUFTLENBQUM7cUJBQ25CLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxVQUFVLENBQUM7cUJBQzlDLGNBQWMsQ0FBQyw4Q0FBOEMsQ0FBQztxQkFDOUQsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNwRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDaEMsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxhQUFhLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTtnQkFDckQsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO3FCQUNwQyxRQUFRLENBQUMsU0FBUyxDQUFDO3FCQUNuQixRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsV0FBVyxDQUFDO3FCQUMvQyxjQUFjLENBQUMsK0NBQStDLENBQUM7cUJBQy9ELFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxhQUFhLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDdEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ2pDLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsZUFBZSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUE7Z0JBQ3pELElBQUksYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDdEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztxQkFDbkIsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGFBQWEsQ0FBQztxQkFDakQsY0FBYyxDQUFDLGlEQUFpRCxDQUFDO3FCQUNqRSxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQzFELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUNuQyxNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDcEMsUUFBUSxDQUFDLFNBQVMsQ0FBQztxQkFDbkIsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGdCQUFnQixDQUFDO3FCQUNwRCxjQUFjLENBQUMscUNBQXFDLENBQUM7cUJBQ3JELFFBQVEsQ0FBQyxjQUFjLEVBQUUsR0FBRyxrQkFBa0IsRUFBRSxFQUFFLElBQUksQ0FBQztxQkFDdkQsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDckMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFlBQVksQ0FBQztxQkFDaEQsY0FBYyxDQUFDLDRCQUE0QixDQUFDO3FCQUM1QyxRQUFRLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7cUJBQ3JDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQztxQkFDM0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO3FCQUN2QyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBRTdELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUNsQyxNQUFNO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDN0UsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDbEIsSUFBSSxJQUFZLENBQUE7Z0JBQ2hCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUNoRCxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7b0JBQ3BCLElBQUksR0FBRyxPQUFPLENBQUE7aUJBQ2pCO3FCQUFNO29CQUNILElBQUksR0FBRyxPQUFPLENBQUE7aUJBQ2pCO2dCQUNELElBQUksWUFBWSxHQUFHLEdBQUcsRUFBRTtvQkFDcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTtpQkFDdkQ7cUJBQU07b0JBQ0gsUUFBUSxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUNuQixLQUFLLE9BQU87NEJBQ1IsT0FBTyxHQUFHLGFBQWEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBOzRCQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7NEJBQ3JELE1BQU07d0JBQ1YsS0FBSyxPQUFPOzRCQUNSLE9BQU8sR0FBRyxjQUFjLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBOzRCQUNyQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs0QkFDdEQsTUFBTTt3QkFDVjs0QkFDSSxPQUFPLEdBQUcsNEJBQTRCLENBQUE7NEJBQ3RDLE1BQU07cUJBQ2I7b0JBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO3lCQUNqQyxRQUFRLENBQUMsU0FBUyxDQUFDO3lCQUNuQixRQUFRLENBQUMsVUFBVSxDQUFDO3lCQUNwQixjQUFjLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzt5QkFDbEMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7eUJBQzFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO29CQUV4QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDakM7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzdDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDN0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUM3QyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtvQkFDbEMsT0FBTyxHQUFHLGVBQWUsQ0FBQTtvQkFDekIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7b0JBQzFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFBO2lCQUM3QztxQkFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO29CQUMzRCxPQUFPLEdBQUcsV0FBVyxDQUFBO29CQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtpQkFDM0M7cUJBQU07b0JBQ0gsT0FBTyxHQUFHLGNBQWMsQ0FBQTtvQkFDeEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUE7aUJBQ2hEO2dCQUNELElBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtvQkFDbEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO2lCQUMvRDtnQkFDRCxJQUFJLG1CQUFtQixHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDNUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztxQkFDbkIsUUFBUSxDQUFDLGtCQUFrQixDQUFDO3FCQUM1QixjQUFjLENBQUMsb0JBQW9CLENBQUM7cUJBQ3BDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztxQkFDaEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO3FCQUNoQyxRQUFRLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7cUJBQ2hDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO2dCQUN6QyxNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDbkMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFVBQVUsQ0FBQztxQkFDOUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDO3FCQUN6QyxjQUFjLENBQUMsUUFBUSxDQUFDO3FCQUN4QixRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLFdBQVcsY0FBYyxHQUFHLEVBQUUsS0FBSyxDQUFDO3FCQUMvRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLGlCQUFpQixtQkFBbUIsR0FBRyxFQUFFLEtBQUssQ0FBQztxQkFDMUYsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxRQUFRLFdBQVcsR0FBRyxFQUFFLEtBQUssQ0FBQztxQkFDekUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxlQUFlLGlCQUFpQixHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQzNGLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsU0FBUyxPQUFPLENBQUMsSUFBUztvQkFDdEIsUUFBUSxJQUFJLEVBQUU7d0JBQ1YsS0FBSyxTQUFTOzRCQUNWLElBQUksWUFBWSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dDQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQ0FDekMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQ0FDakUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUE7NkJBQ3BGO2lDQUFNO2dDQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUE7NkJBQ3ZEOzRCQUNELE1BQU07d0JBQ1YsS0FBSyxhQUFhOzRCQUNkLElBQUksWUFBWSxJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO2dDQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQ0FDN0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQ0FDckUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUE7NkJBQ3hGO2lDQUFNO2dDQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUE7NkJBQ3ZEOzRCQUNELE1BQU07d0JBQ1YsS0FBSyxNQUFNOzRCQUNQLElBQUksWUFBWSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dDQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtnQ0FDdEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQ0FDOUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUE7NkJBQ2pGO2lDQUFNO2dDQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUE7NkJBQ3ZEOzRCQUNELE1BQU07d0JBQ1YsS0FBSyxlQUFlOzRCQUNoQixJQUFJLFlBQVksSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtnQ0FDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQ0FDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQ0FDdkUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksU0FBUyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUE7NkJBQzNGO2lDQUFNO2dDQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUE7NkJBQ3ZEOzRCQUNELE1BQU07d0JBQ1Y7NEJBQ0ksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQTs0QkFDL0MsTUFBTTtxQkFDYjtnQkFDTCxDQUFDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDYixNQUFNO1lBQ1YsS0FBSyxLQUFLO2dCQUNOLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNyQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxXQUFXLENBQUMsQ0FBQTtnQkFDbkQsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sU0FBUyxDQUFDLENBQUE7Z0JBQy9DLElBQUksZUFBZSxJQUFJLE1BQU0sRUFBRTtvQkFDM0IsZUFBZSxHQUFHLE9BQU8sQ0FBQTtpQkFDNUI7Z0JBQ0QsU0FBUyxPQUFPLENBQUMsU0FBYztvQkFDM0IsUUFBUSxTQUFTLEVBQUU7d0JBQ2YsS0FBSyxTQUFTOzRCQUNWLElBQUksY0FBYyxJQUFJLENBQUMsRUFBRTtnQ0FDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTs2QkFDL0M7aUNBQU07Z0NBQ0gsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRTtvQ0FDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0NBQzlDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29DQUMxRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLE9BQU8sZUFBZSxFQUFFLENBQUMsQ0FBQTtvQ0FDcEcsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFO3dDQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsWUFBWSxhQUFhLEVBQUUsQ0FBQyxDQUFBO3FDQUN0RTt5Q0FBTTt3Q0FDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLGVBQWUsRUFBRSxDQUFDLENBQUE7d0NBQ3JELEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUE7d0NBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7d0NBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7d0NBQ3BDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3Q0FDMUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3Q0FDeEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3Q0FDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFBO3dDQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLGVBQWUsd0JBQXdCLENBQUMsQ0FBQTtxQ0FDckU7aUNBR0o7cUNBQU07b0NBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQTtpQ0FDeEQ7NkJBQ0o7NEJBQ0QsTUFBTTt3QkFDVixLQUFLLGVBQWU7NEJBQ2hCLElBQUksbUJBQW1CLElBQUksQ0FBQyxFQUFFO2dDQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBOzZCQUNyRDtpQ0FBTTtnQ0FDSCxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFBO2dDQUNwRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFBO2dDQUMxRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsYUFBYSxTQUFTLENBQUMsQ0FBQTtnQ0FDNUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTs2QkFDekU7NEJBQ0QsTUFBTTt3QkFDVixLQUFLLE1BQU07NEJBQ1AsSUFBSSxpQkFBaUIsSUFBSSxDQUFDLEVBQUU7Z0NBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7NkJBQzNEO2lDQUFNO2dDQUNILElBQUksZ0JBQWdCLEtBQUssTUFBTSxFQUFFO29DQUM3QixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFO3dDQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQTt3Q0FDbEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7d0NBQ3ZELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sT0FBTyxlQUFlLEVBQUUsQ0FBQyxDQUFBO3dDQUM5RixJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUU7NENBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxZQUFZLGFBQWEsRUFBRSxDQUFDLENBQUE7eUNBQ3RFOzZDQUFNOzRDQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsZUFBZSxFQUFFLENBQUMsQ0FBQTs0Q0FDckQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQTs0Q0FDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTs0Q0FDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTs0Q0FDcEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBOzRDQUMxQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBOzRDQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBOzRDQUNqQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7NENBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssZUFBZSx3QkFBd0IsQ0FBQyxDQUFBO3lDQUNyRTtxQ0FHSjt5Q0FBTTt3Q0FDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO3FDQUN4RDtpQ0FDSjtxQ0FBTTtvQ0FDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO2lDQUNoRDs2QkFDSjs0QkFDRCxNQUFNO3dCQUNWOzRCQUNJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUE7NEJBQy9DLE1BQU07cUJBQ2I7Z0JBRUwsQ0FBQztnQkFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixRQUFRLFdBQVcsRUFBRTtvQkFDakIsS0FBSyxlQUFlO3dCQUNoQixJQUFJLGtCQUFrQixHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTs2QkFDM0MsUUFBUSxDQUFDLGVBQWUsQ0FBQzs2QkFDekIsY0FBYyxDQUFDLHlCQUF5QixDQUFDOzZCQUN6QyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzs2QkFDckQsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDOUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTt3QkFDeEMsTUFBTTtvQkFDVixLQUFLLGFBQWE7d0JBQ2QsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7NkJBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUM7NkJBQ3ZCLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQzs2QkFDL0MsUUFBUSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTt3QkFDdEMsTUFBTTtvQkFDVixLQUFLLE1BQU07d0JBQ1AsSUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFOzZCQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDOzZCQUNoQixjQUFjLENBQUMsK0NBQStDLENBQUM7NkJBQy9ELFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDOzZCQUM1QyxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs2QkFDakQsUUFBUSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDM0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7d0JBQy9CLE1BQU07b0JBQ1YsS0FBSyxTQUFTO3dCQUNWLElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTs2QkFDckMsUUFBUSxDQUFDLGVBQWUsQ0FBQzs2QkFDekIsY0FBYyxDQUFDLHlCQUF5QixDQUFDOzZCQUN6QyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzs2QkFDL0MsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDekQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7d0JBQ2xDLE1BQU07b0JBQ1Y7d0JBQ0ksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQTt3QkFDL0MsTUFBTTtpQkFDYjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsU0FBUyxZQUFZLENBQUMsU0FBYztvQkFDaEMsUUFBUSxTQUFTLEVBQUU7d0JBQ2YsS0FBSyxNQUFNOzRCQUNQLElBQUksZ0JBQWdCLEtBQUssTUFBTSxFQUFFO2dDQUM3QixJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7b0NBQ2pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7b0NBQ2xFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFBO29DQUM5QyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtvQ0FDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtpQ0FDN0M7cUNBQU07b0NBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtpQ0FDNUM7NkJBQ0o7aUNBQU07Z0NBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTs2QkFDdkQ7NEJBQ0QsTUFBTTtxQkFDYjtnQkFDTCxDQUFDO2dCQUNELFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsYUFBYSxDQUFDLFVBQWU7b0JBQ2xDLFFBQVEsVUFBVSxFQUFFO3dCQUNoQixLQUFLLE1BQU07NEJBQ1AsSUFBSSxnQkFBZ0IsS0FBSyxNQUFNLEVBQUU7Z0NBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Z0NBQ3ZFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dDQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtnQ0FDdEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQTs2QkFDaEQ7aUNBQU07Z0NBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQTs2QkFDaEQ7NEJBQ0QsTUFBTTtxQkFDYjtnQkFDTCxDQUFDO2dCQUNELGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7cUJBQ2pDLFFBQVEsQ0FBQyxXQUFXLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7cUJBQ2xELGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQztxQkFFbkQsUUFBUSxDQUFDLFNBQVMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLENBQUM7cUJBQzlFLFFBQVEsQ0FBQyxHQUFHLE9BQU8sRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7cUJBQy9ELFFBQVEsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7cUJBQzlELFFBQVEsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7cUJBQzdELFFBQVEsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7cUJBRTdELFFBQVEsQ0FBQyxVQUFVLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDO3FCQUM3RSxRQUFRLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO3FCQUM3RCxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO3FCQUM1RCxRQUFRLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO3FCQUNoRSxRQUFRLENBQUMsR0FBRyxPQUFPLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO3FCQUMvRCxRQUFRLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO3FCQUU5RCxRQUFRLENBQUMsT0FBTyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEtBQUssQ0FBQztxQkFDMUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztxQkFDN0QsUUFBUSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztxQkFDN0QsUUFBUSxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUNyRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDOUIsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLFNBQVMsV0FBVyxDQUFDLE9BQWU7b0JBQ2hDLElBQUksWUFBWSxHQUFHLHFGQUFxRixDQUFBO29CQUN4RyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFO3dCQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUE7d0JBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixPQUFPLEVBQUUsQ0FBQyxDQUFBO3FCQUNyRDt5QkFBTTt3QkFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsTUFBTSxpQkFBaUIsQ0FBQyxDQUFBO3FCQUN0RjtnQkFDTCxDQUFDO2dCQUNELFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsTUFBTTtTQUNiO0tBQ0o7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=