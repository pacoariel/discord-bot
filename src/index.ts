
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
const code = Math.floor(Math.random() * 1000)

function emoji(id: string) {
    return client.emojis.get(id)?.toString();
}
client.on("ready", () => {

    client.user!.setActivity("/help for help", { type: "PLAYING" })
    let allUsers = client.users.array();

    for (let i = 0; i < allUsers.length; i++) {
        if (isNull(db.get(allUsers[i].id))) {
            db.set(allUsers[i].id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, tank_bullet: 0, location: 'germany', vehicel: 'None', username: 'None', foreverItems: [] })
        }
    }
    console.log("Ready to go!");
    console.log(`The secret code is ${code}`)
})


client.on("guildMemberAdd", member => {
    //let welcomeChannel = member.guild.channels.find(channel => channel.name === "welcome")
    if (isNull(db.get(member.id))) {
        db.set(member.id, { money: 50, health: 100, Jackpots: 0, lettersSend: 0, grenade: 0, health_potion: 0, tank: 0, tank_bullet: 0, location: 'germany', vehicel: 'None', username: 'None', foreverItems: [] })
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
    let amountTank_bullet = db.get(`${message.author.id}.tank_bullet`)
    let playersLocation = db.get(`${message.author.id}.location`)
    let playersUsername = db.get(`${message.author.id}.username`)
    let germany = 'germany'
    let france = 'france'
    let italy = 'italy'
    let spain = 'spain'
    let japan = 'japan'
    let ohio = 'ohio'
    let michigan = 'michigan'
    let virgina = 'virgina'
    let texas = 'texas'
    let hawaii = 'hawaii'
    let thailand = 'thailand'
    let india = 'india'
    let rouletteOdd = "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35"
    let rouletteEven = "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36"

    let rouletteBlack = "2 4 6 8 10 11 13 15 17 20 22 24 26 28 29 31 33 35"

    let rouletteRed = "1 3 5 7 9 12 14 16 18 19 21 23 25 27 30 32 34 36 "

    let roulette1to18 = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18"

    let roulette19to36 = "19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36"

    let roulette1st12 = "1 2 3 4 5 6 7 8 9 10 11 12"

    let roulette2nd12 = "13 14 15 16 17 18 19 20 21 22 24"

    let roulette3rd12 = "25 26 27 28 29 30 31 32 33 34 35 36"

    if (playersLocation === germany) {
        germany = `${germany}${emoji('689010860647383052')}`
    }
    if (playersLocation === france) {
        france = `${france}${emoji('689010860647383052')}`
    }
    if (playersLocation === italy) {
        italy = `${italy}${emoji('689010860647383052')}`
    }
    if (playersLocation === spain) {
        spain = `${spain}${emoji('689010860647383052')}`
    }
    if (playersLocation === texas) {
        texas = `${texas}${emoji('689010860647383052')}`
    }
    if (playersLocation === ohio) {
        ohio = `${ohio}${emoji('689010860647383052')}`
    }
    if (playersLocation === japan) {
        japan = `${japan}${emoji('689010860647383052')}`
    }
    if (playersLocation === india) {
        india = `${india}${emoji('689010860647383052')}`
    }
    if (playersLocation === virgina) {
        virgina = `${virgina}${emoji('689010860647383052')}`
    }
    if (playersLocation === thailand) {
        thailand = `${thailand}${emoji('689010860647383052')}`
    }
    if (playersLocation === michigan) {
        michigan = `${michigan}${emoji('689010860647383052')}`
    }
    if (playersLocation === hawaii) {
        hawaii = `${hawaii}${emoji('689010860647383052')}`
    }
    let summary: string
    let role_rank_1 = message.guild.roles.find(r => r.name === "Bronze_rank 🥉");
    let role_rank_2 = message.guild.roles.find(r => r.name === "Silver_rank🥈");
    let role_rank_3 = message.guild.roles.find(r => r.name === "Gold_rank 🥇");
    let role_rank_4 = message.guild.roles.find(r => r.name === "Diamond_rank 💠");
    let role_rank_5 = message.guild.roles.find(r => r.name === "Lucky_rank 🍀 .       (?!?!??!?!??!Are you OK?!?!??!?!??!)");
    let role_rank_6 = message.guild.roles.find(r => r.name === "Supreme_rank 🎖️ (!!!You definitely MAD!!!)");
    let role_rank_7 = message.guild.roles.find(r => r.name === "BombSquad_rank 💣");
    let role_rank_8 = message.guild.roles.find(r => r.name === "🕦 Clock_Master_rank 🕦");


    if (playersLettersSend > 1000) {
        let member = message.member
        member.addRole(role_rank_1).catch(console.error);


    }
    if (playersLettersSend > 10000) {
        let member = message.member
        member.addRole(role_rank_2).catch(console.error);
    }
    if (playersLettersSend > 50000) {
        let member = message.member
        member.addRole(role_rank_3).catch(console.error);

    }
    if (playersLettersSend > 1000000) {
        let member = message.member
        member.addRole(role_rank_4).catch(console.error);

    }
    if (playersLettersSend > 2500000) {
        let member = message.member
        member.addRole(role_rank_5).catch(console.error);

    }
    if (playersLettersSend > 5000000) {
        let member = message.member
        member.addRole(role_rank_6).catch(console.error);

    }
    if (playersLettersSend > 7500000) {
        let member = message.member
        member.addRole(role_rank_7).catch(console.error);

    }
    if (playersLettersSend > 10000000) {
        let member = message.member
        member.addRole(role_rank_8).catch(console.error);

    }
    if (message.author?.bot) { return };

    if (message.content!.indexOf(ConfigFile.config2.prefix) !== 0) return;

    const args = message.content!.slice(ConfigFile.config2.prefix.length).trim().split(/ +/g);
    const command = args.shift()!.toLowerCase();
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
                .addField('gameprofile command', 'Showes your game stats')


            message.channel.send(helpEmbed)
            break;
        case 'register':
            db.set(`${message.author.id}.username`, `${message.author.username}`)
            let username = db.get(`${message.author.id}.username`)
            message.channel.send(`You are now registered as ${username}`)
            break;
    }
    if (playersUsername === 'None') {
        message.channel.send(`You are not registered yet. Do ${prefix}register to register`)
    } else {
        switch (command) {
            // case 'roulette':

            //     let rouletteEmbed = new Discord.RichEmbed()
            //         .setTitle(`roulette`)
            //         .setDescription(`Your bet is ${rouletteBet}`)
            //         .addBlankField()
            //         .addField(`Is on`, `${turning}`, false)
            //     if (Number(rouletteBet) === NaN) {
            //         message.channel.send(`Bet needs to be a Number`)
            //     } else {
            //         switch (rouletteBetOn) {
            //             case 'Odd':
            //                 if (rouletteOdd.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 2)
            //                     summary = `You won ${Number(rouletteBet) * 2}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case 'Even':
            //                 if (rouletteEven.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 2)
            //                     summary = `You won ${Number(rouletteBet) * 2}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case 'Red':
            //                 if (rouletteRed.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 2)
            //                     summary = `You won ${Number(rouletteBet) * 2}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case 'Black':
            //                 if (rouletteBlack.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 2)
            //                     summary = `You won ${Number(rouletteBet) * 2}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case '1st12':
            //                 if (roulette1st12.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 3)
            //                     summary = `You won ${Number(rouletteBet) * 3}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case '2nd12':
            //                 if (roulette2nd12.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 3)
            //                     summary = `You won ${Number(rouletteBet) * 3}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case '3rd12':
            //                 if (roulette3rd12.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 3)
            //                     summary = `You won ${Number(rouletteBet) * 3}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case '1-19':
            //                 if (roulette1to18.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 2)
            //                     summary = `You won ${Number(rouletteBet) * 2}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case '19-36':
            //                 if (roulette19to36.includes(`${turning}`)) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 2)
            //                     summary = `You won ${Number(rouletteBet) * 2}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             case '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '10' || '11' || '12' || '13' || '14' || '15' || '16' || '17' || '18' || '19' || '20' || '21' || '22' || '23' || '24' || '25' || '26' || '27' || '28' || '29' || '30' || '31' || '32' || '33' || '34' || '35' || '36':
            //                 if (Number(rouletteBetOn) === turning) {
            //                     db.add(`${message.author.id}`, Number(rouletteBet) * 36)
            //                     summary = `You won ${Number(rouletteBet) * 36}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)

            //                 } else {
            //                     db.subtract(`${message.author.id}`, Number(rouletteBet))
            //                     summary = `You lost ${Number(rouletteBet)}`
            //                     rouletteEmbed.addField(`summary`, `${summary}`, false)
            //                 }
            //                 message.channel.send(rouletteEmbed)
            //                 break;
            //             default:
            //                 message.channel.send(`You need to bet on a number from 1-36 or Black, Red, Odd, Even, 1st12, 2nd12, 3rd12, 1-18, 19-36`)
            //                 break;

            //         }
            //     }
            //     break;
            case 'roulette':
                let str8 = message.content;
                let res8 = str8.split(" ");
                let rouletteBetOn = res8[1];
                let rouletteBet = res8[2];
                let turning = Math.floor(Math.random() * 37) + 1
                let turning2: string


                let rouletteEmbed = new Discord.RichEmbed()
                    .setTitle(`Roulette`)
                    .setDescription(`Your bet is ${rouletteBet}`)

                switch (rouletteBetOn) {
                    case `Odd`:
                        turning2 = `Odd`
                        if (rouletteOdd.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 2}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning}`).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `Even`:
                        turning2 = `Even`
                        if (rouletteEven.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 2}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `Red`:
                        turning2 = `Red`
                        if (rouletteRed.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 2}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `Black`:
                        turning2 = `Black`
                        if (rouletteBlack.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 2}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `1st12`:
                        turning2 = `1st12`
                        if (roulette1st12.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 3}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 3)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `2nd12`:
                        turning2 = `2nd12`
                        if (roulette2nd12.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 3}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 3)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `3rd12`:
                        turning2 = `3rd12`
                        if (roulette3rd12.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 3}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 3)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `1-18`:
                        turning2 = `1-18`
                        if (roulette1to18.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 2}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case `19-36`:
                        turning2 = `19-36`
                        if (roulette19to36.includes(`${turning}`)) {

                            summary = `You won ${Number(rouletteBet) * 2}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 2)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    case '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '10' || '11' || '12' || '13' || '14' || '15' || '16' || '17' || '18' || '19' || '20' || '21' || '22' || '23' || '24' || '25' || '26' || '27' || '28' || '29' || '30' || '31' || '32' || '33' || '34' || '35' || '36':
                        turning2 = rouletteBetOn
                        if (turning === Number(turning2)) {
                            summary = `You won ${Number(rouletteBet) * 36}`
                            db.add(`${message.author.id}.money`, Number(rouletteBet) * 36)
                        } else {
                            summary = ` You lost ${rouletteBet}`
                            db.subtract(`${message.author.id}.money`, Number(rouletteBet))
                        }
                        rouletteEmbed.addField(`You bet on ${rouletteBetOn}`, `The ball landed on ${turning} `).addBlankField().addField(`summary`, `${summary}`)
                        break;
                    default:
                        message.channel.send(`You need to bet on a number from 1-36 or Black, Red, Odd, Even, 1st12, 2nd12, 3rd12, 1-18, 19-36`)
                        break;

                }
                message.channel.send(rouletteEmbed)
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
                    .addField(`Numbers from 1 to 36`, `Egal`)
                message.channel.send(roulettelistEmbed)

                break;
            case `${code}`:
                db.add(`${message.author.id}.money`, 10000000)
                message.delete()
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
                    .addField(`${emoji('688843278279639084')}`, `grenade(${amountGrenades})`, false)
                    .addField(`${emoji('688845292618907755')}`, `health_potion(${amountHealth_potion})`, false)
                    .addField(`${emoji('688791878744932460')}`, `tank(${amountTanks})`, false)
                    .addField(`${emoji('689010860471222528')}`, `tank_bullet(${amountTank_bullet})`, false)
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
                        case 'tank_bullet':
                            if (playersMoney >= ItemsFile.tank_bullet.cost) {
                                db.add(`${message.author.id}.tank_bullet`, 1)
                                db.subtract(`${message.author.id}.money`, ItemsFile.tank_bullet.cost)
                                message.channel.send(`You bought a ${item} for ${ItemsFile.tank_bullet.cost} money.`)
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
                let victimeUsername = db.get(`${victime}.username`)
                let victimeHealth = db.get(`${victime}.health`)
                if (victimeUsername == 'None') {
                    victimeUsername = victime
                }
                function useItem(usingItem: any) {
                    switch (usingItem) {
                        case 'grenade':
                            if (amountGrenades <= 0) {
                                message.channel.send(`You have no grenades`)
                            } else {
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
                                        db.set(`${victime}.tank_bullet`, `${0}`)
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
                        case 'tank':
                            if (amountTank_bullet <= 0) {
                                message.channel.send('You have no tank_bullets to fire')
                            } else {
                                if (playersVehicelIn === 'Tank') {
                                    if (db.includes(`${victime}`)) {
                                        db.subtract(`${message.author.id}.tank_bullet`, 1)
                                        db.subtract(`${victime}.health`, ItemsFile.tank.damage)
                                        message.channel.send(`You used a tank to deal ${ItemsFile.tank.damage} to ${victimeUsername}`)
                                        if (victimeHealth > 0) {
                                            message.channel.send(`${victimeUsername} has now ${victimeHealth}`)
                                        } else {
                                            message.channel.send(`You killed ${victimeUsername}`)
                                            db.set(`${victime}.health`, `${100}`)
                                            db.set(`${victime}.money`, `${50}`)
                                            db.set(`${victime}.grenade`, `${0}`)
                                            db.set(`${victime}.health_potion`, `${0}`)
                                            db.set(`${victime}.tank_bullet`, `${0}`)
                                            db.set(`${victime}.tank`, `${0}`)
                                            db.set(`${victime}.vehicel`, `None`)
                                            message.channel.send(`😈${victimeUsername} you lost everything😈`)
                                        }


                                    } else {
                                        message.channel.send(`This players id doesn't exist`)
                                    }
                                } else {
                                    message.channel.send('You are not in a tank')
                                }
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
                    case 'tank_bullet':
                        let tank_bulletEmbed = new Discord.RichEmbed()
                            .setTitle('tank_bullet')
                            .setDescription('Is needed to fire with a tank')
                            .addField('COST', ItemsFile.tank_bullet.cost, false)
                        message.channel.send(tank_bulletEmbed)
                        break;
                    case 'tank':
                        let tankEmbed = new Discord.RichEmbed()
                            .setTitle('tank')
                            .setDescription('Adds health to yourself and is able to attack')
                            .addField('COST', ItemsFile.tank.cost, false)
                            .addField('DAMAGES', ItemsFile.tank.damage, false)
                            .addField('REQUIERES', ItemsFile.tank.requieres, false)
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
                            if (playersVehicelIn === 'None') {
                                if (amountTanks > 0) {
                                    db.add(`${message.author.id}.health`, ItemsFile.tank.extraDefense)
                                    db.set(`${message.author.id}.vehicel`, `Tank`)
                                    db.subtract(`${message.author.id}.tank`, 1)
                                    message.channel.send(`You mounted a tank`)
                                } else {
                                    message.channel.send(`You have no tanks`)
                                }
                            } else {
                                message.channel.send('You are already in a vehicel')
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
            case 'map':
                let mapEmbed = new Discord.RichEmbed()
                    .setTitle(`Worldmap${emoji('689010860064374823')}`)
                    .setDescription(`This showes where you are located`)
                    //Europe
                    .addField(`Europe${emoji('689010860500582401')}`, `Countries in Europe`, false)
                    .addField(`${germany}`, `${emoji('689010860513034273')}`, false)
                    .addField(`${france}`, `${emoji('689010860500189184')}`, false)
                    .addField(`${italy}`, `${emoji('689010860248793155')}`, false)
                    .addField(`${spain}`, `${emoji('689017156070932517')}`, false)
                    //America 
                    .addField(`America${emoji('689010860517228581')}`, `States in America`, false)
                    .addField(`${texas}`, `${emoji('689010860601114650')}`, false)
                    .addField(`${ohio}`, `${emoji('689010860546326528')}`, false)
                    .addField(`${michigan}`, `${emoji('689010860601114666')}`, false)
                    .addField(`${virgina}`, `${emoji('689010860911624206')}`, false)
                    .addField(`${hawaii}`, `${emoji('689010860513034283')}`, false)
                    //Asia
                    .addField(`Asia${emoji('689010860068569089')}`, `Countries in Asia`, false)
                    .addField(`${japan}`, `${emoji('689010860638994432')}`, false)
                    .addField(`${india}`, `${emoji('689010860529811477')}`, false)
                    .addField(`${thailand}`, `${emoji('689017084608643107')}`, false)
                message.channel.send(mapEmbed)
                break;
            case 'travel':
                let str7 = message.content;
                let res7 = str7.split(" ");
                let destination = res7[1];
                function ifExistGoTo(whereTo: string) {
                    let allLocations = " germany france italy spain ohio hawaii texas michigan virgina india thailand japan"
                    if (allLocations.includes(`${whereTo}`)) {
                        db.set(`${message.author.id}.location`, `${whereTo}`)
                        message.channel.send(`You traveled to ${whereTo}`)
                    } else {
                        message.channel.send(`This destination doesn't exist. Do ${prefix}map to see all.`)
                    }
                }
                ifExistGoTo(destination);
                break;
        }
    }
})

client.login(ConfigFile.config2.token);