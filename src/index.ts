
import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import * as db from "quick.db";
import * as ItemsFile from "./items";
import { isNull, isNullOrUndefined } from "util";


// camelCase e.g. gamePoints   <==
// PascalCase e.g. GamePoints  <== for classes
// kebab-case e.g. game-points
// snack_case e.g. game_points


const client: Discord.Client = new Discord.Client();
const prefix = ConfigFile.config2.prefix;

function emoji(id: string) {
    return client.emojis.get(id)?.toString();
}
client.on("ready", () => {

    client.user!.setActivity("/help for help", { type: "PLAYING" })
    let allUsers = client.users.array();

    for (let i = 0; i < allUsers.length; i++) {
        if (isNull(db.get(allUsers[i].id))) {
            db.set(allUsers[i].id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, vehicel: 'None', username: 'None', foreverItems: [] })
        }
    }
    console.log("Ready to go!");
})


client.on("guildMemberAdd", member => {
    //let welcomeChannel = member.guild.channels.find(channel => channel.name === "welcome")
    if (isNull(db.get(member.id))) {
        db.set(member.id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, vehicel: 'None', username: 'None', foreverItems: [] })
    }
})

client.on("message", async message => {
    db.add(`${message.author.id}.lettersSend`, message.content.split("").length)
    let playersLettersSend = db.get(`${message.author.id}.lettersSend`)
    let playersMoney = db.get(`${message.author.id}.money`)
    let playersHealth = db.get(`${message.author.id}.health`)
    let amountGrenades = db.get(`${message.author.id}.grenade`)
    let amountHealth_potion = db.get(`${message.author.id}.health_potion`)
    let playersJackpots = db.get(`${message.author.id}.Jackpots`)
    let amountTanks = db.get(`${message.author.id}.tank`)
    let playersVehicelIn = db.get(`${message.author.id}.vehicel`)

    let summary: string

    if (message.author?.bot) { return };

    if (message.content!.indexOf(ConfigFile.config2.prefix) !== 0) return;

    const args = message.content!.slice(ConfigFile.config2.prefix.length).trim().split(/ +/g);
    const command = args.shift()!.toLowerCase();

    switch (command) {
        case 'register':
            db.set(`${message.author.id}.username`, `${message.author.username}`)
            let username = db.get(`${message.author.id}.username`)
            message.channel.send(`You are now registered as ${username}`)
            break;
        case '1524532':
            db.add(`${message.author.id}.money`, 10000000)
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
                .addField('gameprofile command', 'Showes your game stats')


            message.channel.send(helpEmbed)
            break;

        case 'rand':
            message.channel?.send(`${Math.floor(Math.random() * 7) + 1}`)
            break;
        case 'money':
            playersMoney = db.get(`${message.author.id}.money`)
            if (playersMoney < 0) {
                playersMoney = 0
            }
            let moneyEmbed = new Discord.RichEmbed()
                .setColor('#339933')
                .setTitle(`${message.author.username}'s Money`)
                .setDescription(`This showes you the Amount of Money you have`)
                .addField(`Your Money`, `${playersMoney}`, true)
            message.channel.send(moneyEmbed)
            break;
        case 'health':
            playersHealth = db.get(`${message.author.id}.health`)
            let healthEmbed = new Discord.RichEmbed()
                .setColor('#ff6600')
                .setTitle(`${message.author.username}'s Health`)
                .setDescription(`This showes you the Amount of Health you have`)
                .addField(`Your Health`, `${playersHealth}`, true)
            message.channel.send(healthEmbed)
            break;
        case 'jackpots':
            playersJackpots = db.get(`${message.author.id}.Jackpots`)
            let jackpotsEmbed = new Discord.RichEmbed()
                .setColor('#ff7776')
                .setTitle(`${message.author.username}'s Jackpots`)
                .setDescription(`This showes you the Amount of Jackpots you have`)
                .addField(`Your Jackpots`, `${playersJackpots}`, true)
            message.channel.send(jackpotsEmbed)
            break;
        case 'myserverstats':
            let serverEmbed = new Discord.RichEmbed()
                .setColor('#ff0026')
                .setTitle(`${message.author.username}'s serverstats`)
                .setDescription(`These are your general Server stats`)
                .addField(`Letters send`, `${playersLettersSend}`, true)
                .addField('ID', `${message.author.id}`, true)
            message.channel.send(serverEmbed)
            break;
        case 'gameprofile':
            let profileEmbed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}'s Profile`)
                .setDescription(`This showes all your stats`)
                .addField(`money`, playersMoney, true)
                .addField(`jackpots`, playersJackpots, true)
                .addField(`health`, playersHealth, true)
                .addField(`Vehicel in right now`, playersVehicelIn, true)
                
            message.channel.send(profileEmbed)
            break;
        case 'id':
            message.channel.send(`${message.author.username + ': ' + message.author.id}`)
            break;
        case 'coinflip':
            let str = message.content;
            let res = str.split(" ");
            let bet = res[1];
            let betOn = res[2]
            let last: string
            let randCoinflip = Math.floor(Math.random() * 2)
            if (randCoinflip === 0) {
                last = 'Heads'
            } else {
                last = 'Tails'
            }
            if (playersMoney < bet) {
                message.channel.send(`You don't have enought money`)
            } else {
                switch (betOn && last) {
                    case 'Heads':
                        summary = `You won, +${Number(bet) * 2}`
                        db.add(`${message.author.id}.money`, 2 * Number(bet))
                        break;
                    case 'Tails':
                        summary = `You lost, -${Number(bet)}`
                        db.subtract(`${message.author.id}.money`, Number(bet))
                        break;
                    default:
                        summary = `You didn't bet on anything`
                        break;
                }
                let betEmbed = new Discord.RichEmbed()
                    .setColor('#DAA520')
                    .setTitle(`coinflip`)
                    .setDescription(`Your bet: ${bet}`)
                    .addField(`The coin landed on`, last, true)
                    .addField('Summary', summary, false)

                message.channel.send(betEmbed)
            }
            break;
        case 'bet':
            let roll1 = Math.floor(Math.random() * 9) + 1
            let roll2 = Math.floor(Math.random() * 9) + 1
            let roll3 = Math.floor(Math.random() * 9) + 1
            if (roll1 == roll2 && roll2 == roll3) {
                summary = `Jakpot, +1000`
                db.add(`${message.author.id}.money`, 1000)
                db.add(`${message.author.id}.Jackpots`, 1)
            } else if (roll1 == roll2 || roll2 == roll3 || roll1 == roll3) {
                summary = `Pair, +25`
                db.add(`${message.author.id}.money`, 25)
            } else {
                summary = `no Pair, -25`
                db.subtract(`${message.author.id}.money`, 25)
            }
            if (playersMoney < 0) {
                db.add(`${message.author.id}.money`, Math.abs(playersMoney))
            }
            let OneArmedBanditEmbed = new Discord.RichEmbed()
                .setColor('#C0C0C0')
                .setTitle(`One-Armed Bandit`)
                .setDescription(`There's a chance!!`)
                .addField(`Barrel1`, roll1, true)
                .addField(`Barrel2`, roll2, true)
                .addField(`Barrel3`, roll3, true)
                .addField('Summary', summary, false)
            message.channel.send(OneArmedBanditEmbed)
            break;
        case 'inv':
            let itemsEmbed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}'s Items`)
                .setDescription(`This showes your items.`)
                .setDescription('Items:')
                .addField(`◔`, `grenade(${amountGrenades})`, false)
                .addField(`◔`, `health_potion(${amountHealth_potion})`, false)
                .addField(`${emoji('688791878744932460')}`, `tank(${amountTanks})`, false)
            message.channel.send(itemsEmbed)
            break;
        case 'buy':
            let str2 = message.content;
            let res2 = str2.split(" ");
            let item = res2[1];
            function buyItem(item: any) {
                switch (item) {
                    case 'grenade':
                        if (playersMoney >= ItemsFile.grenade.cost) {
                            db.add(`${message.author.id}.grenade`, 1)
                            db.subtract(`${message.author.id}.money`, ItemsFile.grenade.cost)
                            message.channel.send(`You bought a ${item} for ${ItemsFile.grenade.cost} money.`)
                        } else {
                            message.channel.send(`You don't have enough Money.`)
                        }
                        break;
                    case 'tank':
                        if (playersMoney >= ItemsFile.tank.cost) {
                            db.add(`${message.author.id}.tank`, 1)
                            db.subtract(`${message.author.id}.money`, ItemsFile.tank.cost)
                            message.channel.send(`You bought a ${item} for ${ItemsFile.tank.cost} money.`)
                        } else {
                            message.channel.send(`You don't have enough Money.`)
                        }
                        break;
                    case 'health_potion':
                        if (playersMoney >= ItemsFile.health_potion.cost) {
                            db.add(`${message.author.id}.health_potion`, 1)
                            db.subtract(`${message.author.id}.money`, ItemsFile.health_potion.cost)
                            message.channel.send(`You bought a ${item}  for ${ItemsFile.health_potion.cost} money.`)
                        } else {
                            message.channel.send(`You don't have enough Money.`)
                        }
                        break;
                    default:
                        message.channel.send(`This item doesn't exist`)
                        break;
                }
            }
            buyItem(item)
            break;
        case 'use':
            let str3 = message.content;
            let res3 = str3.split(" ");
            let usingItem = res3[1];
            let victime = res3[2]
            function useItem(usingItem: any) {
                switch (usingItem) {
                    case 'grenade':
                        if (amountGrenades <= 0) {
                            message.channel.send(`You have no grenades`)
                        } else {
                            let victimeUsername = db.get(`${victime}.username`)
                            let victimeHealth = db.get(`${victime}.health`)
                            if (victimeUsername == 'None') {
                                victimeUsername = victime
                            }
                            if (db.includes(`${victime}`)) {
                                db.subtract(`${message.author.id}.grenade`, 1)
                                db.subtract(`${victime}.health`, ItemsFile.grenade.damage)
                                message.channel.send(`You used a grenade to deal ${ItemsFile.grenade.damage} to ${victimeUsername}`)
                                if (victimeHealth > 0) {
                                    message.channel.send(`${victimeUsername} has now ${victimeHealth}`)
                                } else {
                                    message.channel.send(`You killed ${victimeUsername}`)
                                    db.set(`${victime}.health`, `${100}`)
                                    db.set(`${victime}.money`, `${50}`)
                                    db.set(`${victime}.grenade`, `${0}`)
                                    db.set(`${victime}.health_potion`, `${0}`)
                                    db.set(`${victime}.tank`, `${0}`)
                                    db.set(`${victime}.vehicel`, `None`)
                                    message.channel.send(`😈${victimeUsername} you lost everything😈`)
                                }


                            } else {
                                message.channel.send(`This players id doesn't exist`)
                            }
                        }
                        break;
                    case 'health_potion':
                        if (amountHealth_potion <= 0) {
                            message.channel.send(`You have no health_potions`)
                        } else {
                            db.subtract(`${message.author.id}.health_potion`, 1)
                            message.channel.send(`You used a health_potion to add yourself ${ItemsFile.health_potion.healing} health`)
                            message.channel.send(`You now have ${playersHealth} health`)
                            db.add(`${message.author.id}.health`, ItemsFile.health_potion.healing)
                        }
                        break;
                    default:
                        message.channel.send(`This item doesn't exist`)
                        break;
                }

            }
            useItem(usingItem)
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
                        .addField('HEALS', ItemsFile.health_potion.healing, false)
                    message.channel.send(health_potionEmbed)
                    break;
                case 'tank':
                    let tankEmbed = new Discord.RichEmbed()
                        .setTitle('tank')
                        .setDescription('Adds health to yourself')
                        .addField('COST', ItemsFile.tank.cost, false)
                        .addField('DAMAGES', ItemsFile.tank.damage, false)
                    message.channel.send(tankEmbed)
                    break;
                case 'grenade':
                    let grenadeEmbed = new Discord.RichEmbed()
                        .setTitle('health_potion')
                        .setDescription('Adds health to yourself')
                        .addField('COST', ItemsFile.grenade.cost, false)
                        .addField('DAMAGES', ItemsFile.grenade.damage, false)
                    message.channel.send(grenadeEmbed)
                    break;
                default:
                    message.channel.send(`This item doesn't exist`)
                    break;
            }
            break;
        case 'mount':
            let str5 = message.content;
            let res5 = str5.split(" ");
            let getinItem = res5[1];
            function getInVehicel(getinItem: any) {
                switch (getinItem) {
                    case 'tank':
                        if (amountTanks > 0) {
                            db.add(`${message.author.id}.health`, ItemsFile.tank.extraDefense)
                            db.set(`${message.author.id}.vehicel`, `Tank`)
                            db.subtract(`${message.author.id}.tank`, 1)
                            message.channel.send(`You mounted a tank`)
                        } else {
                            message.channel.send(`You have no tanks`)
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
            function getOutVehicel(getoutItem: any) {
                switch (getoutItem) {
                    case 'tank':
                        if (playersVehicelIn !== 'None') {
                        db.subtract(`${message.author.id}.health`, ItemsFile.tank.extraDefense)
                        db.set(`${message.author.id}.vehicel`, `None`)
                        db.add(`${message.author.id}.tank`, 1)
                        message.channel.send(`You dismounted a tank`)
                        } else {
                            message.channel.send(`You are in no vehicel`)
                        }
                        break;
                }
            }
            getOutVehicel(getoutItem);
            break;
    }

})

client.login(ConfigFile.config2.token);