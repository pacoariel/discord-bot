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
const ConfigFile = require("./config2");
const db = require("quick.db");
const ItemsFile = require("./items");
const util_1 = require("util");
const client = new Discord.Client();
const prefix = ConfigFile.config2.prefix;
function emoji(id) {
    var _a;
    return (_a = client.emojis.get(id)) === null || _a === void 0 ? void 0 : _a.toString();
}
client.on("ready", () => {
    client.user.setActivity("/help for help", { type: "PLAYING" });
    let allUsers = client.users.array();
    for (let i = 0; i < allUsers.length; i++) {
        if (util_1.isNull(db.get(allUsers[i].id))) {
            db.set(allUsers[i].id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, vehicel: 'None', username: 'None', foreverItems: [] });
        }
    }
    console.log("Ready to go!");
});
client.on("guildMemberAdd", member => {
    if (util_1.isNull(db.get(member.id))) {
        db.set(member.id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, vehicel: 'None', username: 'None', foreverItems: [] });
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
    let summary;
    if ((_a = message.author) === null || _a === void 0 ? void 0 : _a.bot) {
        return;
    }
    ;
    if (message.content.indexOf(ConfigFile.config2.prefix) !== 0)
        return;
    const args = message.content.slice(ConfigFile.config2.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    switch (command) {
        case 'register':
            db.set(`${message.author.id}.username`, `${message.author.username}`);
            let username = db.get(`${message.author.id}.username`);
            message.channel.send(`You are now registered as ${username}`);
            break;
        case '1524532':
            db.add(`${message.author.id}.money`, 10000000);
            break;
        case 'help':
            let helpEmbed = new Discord.RichEmbed()
                .setTitle('Help')
                .setDescription(`prefx: ${prefix}`)
                .setAuthor(`Every command must be spelled exactly how it is wrote in the "help"`)
                .addField(`First of all do ${prefix}register`, `It will save your username`)
                .addField('Commands', 'coinflip, help, rand, bet, myserverstats, gameprofile, health, money, jackpots, buy, inv, iteminfo, mount, dismount', true)
                .addField('coinflip command', `${prefix}coinflip + bet + Heads or Tails`)
                .addField('buy command', `${prefix}buy + item`)
                .addField('use command', `${prefix}use + item (+players ID)<= just if it is a damaging item`)
                .addField('mount/dismount command', `${prefix}mount/dismount + vehiicel example: tank`)
                .addField('iteminfo command', `${prefix}iteminfo + item`)
                .addField('bet command', `It's One-Armed Bandit`)
                .addField('myserverstats command', `Showes your general information`)
                .addField('gameprofile command', 'Showes your game stats');
            message.channel.send(helpEmbed);
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
        case 'myserverstats':
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
                .addField(`◔`, `grenade(${amountGrenades})`, false)
                .addField(`◔`, `health_potion(${amountHealth_potion})`, false)
                .addField(`${emoji('688791878744932460')}`, `tank(${amountTanks})`, false);
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
            function useItem(usingItem) {
                switch (usingItem) {
                    case 'grenade':
                        if (amountGrenades <= 0) {
                            message.channel.send(`You have no grenades`);
                        }
                        else {
                            let victimeUsername = db.get(`${victime}.username`);
                            let victimeHealth = db.get(`${victime}.health`);
                            if (victimeUsername == 'None') {
                                victimeUsername = victime;
                            }
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
                case 'tank':
                    let tankEmbed = new Discord.RichEmbed()
                        .setTitle('tank')
                        .setDescription('Adds health to yourself')
                        .addField('COST', ItemsFile.tank.cost, false)
                        .addField('DAMAGES', ItemsFile.tank.damage, false);
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
                        if (amountTanks > 0) {
                            db.add(`${message.author.id}.health`, ItemsFile.tank.extraDefense);
                            db.set(`${message.author.id}.vehicel`, `Tank`);
                            db.subtract(`${message.author.id}.tank`, 1);
                            message.channel.send(`You mounted a tank`);
                        }
                        else {
                            message.channel.send(`You have no tanks`);
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
    }
}));
client.login(ConfigFile.config2.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBc0M7QUFDdEMsd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsK0JBQWlEO0FBU2pELE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUV6QyxTQUFTLEtBQUssQ0FBQyxFQUFVOztJQUNyQixhQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxRQUFRLEdBQUc7QUFDN0MsQ0FBQztBQUNELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUVwQixNQUFNLENBQUMsSUFBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQy9ELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxhQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUs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