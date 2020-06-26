
import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import * as db from "quick.db";
import { isNull } from "util";
import * as chalk from "chalk"
import { Server } from "http";


// camelCase e.g. gamePoints   <==
// PascalCase e.g. GamePoints  <== for classes
// kebab-case e.g. game-points
// snack_case e.g. game_points


const client: Discord.Client = new Discord.Client();
const prefix = ConfigFile.config2.prefix
const code = Math.floor(Math.random() * 1000)
let dt = new Date();
let utcDate = dt.toUTCString();
function emoji(id: string) {
    return client.emojis.get(id)?.toString();
}
client.on("ready", () => {

    client.user!.setActivity("+help for help", { type: "WATCHING" })
    let allUsers = client.users.array();
    for (let i = 0; i < allUsers.length; i++) {
        if (isNull(db.get(allUsers[i].id))) {
            db.set(allUsers[i].id, {money: 50})
        }
    }
    console.log(chalk.keyword('green')('Ready to go!'));

    console.log(chalk.keyword('magenta')`The secret code is ${code}`)
})
client.on("message", message =>{
    let playersMoney = db.get(`${message.author.id}.money`)
    if (message.content.indexOf(ConfigFile.config2.prefix) !== 0)
        return;
    const args = message.content.slice(ConfigFile.config2.prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();
    switch(command) {
        case`help`:
        let helpembed = new Discord.RichEmbed()
            .setColor("#66ffff")
            .setTitle("Help")
            .setDescription("Command and under it is description")
            .addField("help" , "outputs this embed", false)
            .addField("invite" , "outputs the bot invite", false)
            .addField("support" , "outputs the support server invite", false)
            .addField("bal" , "outputs your money", false)
            .addField("work" , "Adds money to you", false)
            .addField("cake" , "Outputs a cake. Yes exactly a cake.", false)
        message.channel.send(helpembed)
        break;
        case`invite`:
        message.channel.send(`This is an invite to add this bot to a server. Feel free to do so. 🙂\n https://discord.com/api/oauth2/authorize?client_id=725635490694561802&permissions=8&scope=bot`);
        break;
        case`support`:
        message.channel.send(`This is an invite to the Support server. If you have any questions feel free to join and ask. 🙂\n https://discord.gg/E9EanAg`)
        break;
        case`bal`:
        message.channel.send(`You currently have **${playersMoney}**`)
        break;
        case`work`:
        let random = Math.floor(Math.random() * 24) + 1;
        let msg = `You got ${random}`
        if (random > 17) {
            db.add(`${message.author.id}.money`, random)
            msg = `**${message.author.username}**, You made a **yummy** cake. You got ${random} \n https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo4gUCdnQ4JQGW8FcpLyjmVw4AJJ0uE_rjxg&usqp=CAU`
        } else if(random > 5) {
            db.add(`${message.author.id}.money`, random)
            msg = `**${message.author.username}**, You made a **ugly** cake. You got ${random} \n https://i.pinimg.com/originals/29/fd/e2/29fde238bbe604cb04388d4b56b9afb1.jpg`
        } else {
            db.subtract(`${message.author.id}.money`, random * 15)
            msg = `**${message.author.username}**, Your cake killed a peron pay ${random * 15} \n https://tenor.com/view/dead-dying-dog-shocked-cake-gif-16453337`
        }
        message.channel.send(msg) 
        break;
        case`cake`:
        function cake(file:string, description:string) {
            message.channel.send(description, { files: [`${file}`] })
        }
        let random2 = Math.floor(Math.random()* 99) +1
        if ( 100 > random2 && random2 > 90) {
            cake("../assets/cakes/1.jpeg","Rainbows.... Wait what **no** rainbows don't have white!??!?!")
        } else if (90 > random2 && random2 > 80){
            cake("../assets/cakes/2.jpeg","Choclate hearts.... Lovely.")
        } else if (80 > random2 && random2 > 70) {
            cake("../assets/cakes/3.jpeg","Not so smart now huh. Understood ? Cause of **SMART**ies?? Not funny? K 😭.") 
        } else if (70 > random2 && random2 > 60) {
            cake("../assets/cakes/4.jpeg","Hmmm this looks veeeeeery yummy.") 
        } else if (70 > random2 && random2 > 60) {
            cake("../assets/cakes/5.jpeg","Oreo with a big pile of fruits....") 
        } else if (70 > random2 && random2 > 65) {
            db.add(`${message.author.id}.money`, 100)
            cake("../assets/cakes/6.jpeg","This is the rarest cake of the collection :-). You amazed? No? Ok you get the 100$ anyways.") 
        } else if (65 > random2 && random2 > 50) {
            db.add(`${message.author.id}.money`, 75)
            cake("../assets/cakes/7.jpeg","This is also a rare cake though not the rarest. You get 75$.") 
        } else if (50 > random2 && random2 > 40) {
            cake("../assets/cakes/8.jpeg","***Pig***") 
        } else if (40 > random2 && random2 > 30) {
            cake("../assets/cakes/9.jpeg","Roses. Beautiful cake.") 
        } else if (30 > random2 && random2 > 20) {
            cake("../assets/cakes/10.jpeg","The Galaxy: infinite possibilities no end a real dream.") 
        } else if (20 > random2 && random2 > 10) {
            cake("../assets/cakes/11.jpeg","I'm not a Bunny !??!?!? WHAT DO YOU WANT FROM ME.") 
        } else if (10 > random2 && random2 > 0) {
            cake("../assets/cakes/12.jpeg","Trippel Oreo with rainbow Stuff on it..... I like it!") 
        }
    }
})
client.login(ConfigFile.config2.token);