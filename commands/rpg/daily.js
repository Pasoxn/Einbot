const commando = require('discord.js-commando');
const fs = require('fs');
const moment = require('moment');
// const file = new Discord.Attachment('../assets/')

const adj = [
    "depressed", 
    'soft', 
    'happy', 
    'stressed', 
    'aprehensive', 
    'superstitious', 
    'below average', 
    'boisterous', 
    'spiteful', 
    'beautiful', 
    'awful', 
    'self deprecating', 
    'affectionate', 
    'apathetic', 
    'assertive', 
    'cheerful', 
    'scarred', 
    'optimistic', 
    'pessimistic', 
    'cantankerous', 
    'conceited', 
    'environmentally friendly', 
    'vegan', 
    'gluten free', 
    'cowardly', 
    'handmade, gluten free, ecofriendly, vegan, cruelty free', 
    'courageous', 
    'sleepy', 
    'lazy', 
    'egotistical', 
    'weak', 
    'soggy', 
    'stubborn', 
    'moist'

 ]


class Daily extends commando.Command {
    constructor(client) { //passes it the input 
        super(client, {
            name: 'daily',
            group: 'rpg',
            memberName: 'daily',
            description: "Collect your daily rations peasant."
        });//tells the command 

    }



    async run(message, args) {
        //variables 
        let random = adj[Math.floor(Math.random()* adj.length)];
        let sender = message.author;
        let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8')); //rewrite things every time called

        //setup 
        if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {};
        if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 100; 
        if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected"; //checks/creates the time they last collected their reward 

        if (userData[sender.id + message.guild.id].lastDaily != moment().format('L')) {
            userData[sender.id + message.guild.id].lastDaily = moment().format('L');
            
            userData[sender.id + message.guild.id].exp += 1;
            userData[sender.id + message.guild.id].money += 1;
            
        let lvlreq = 80 * (Math.pow((1 + .2), userData[sender.id + message.guild.id].lvl)); //exp requirement to level up 
        if (userData[sender.id + message.guild.id].exp == lvlreq) {
            userData[sender.id + message.guild.id].lvl += 1;
            userData[sender.id + message.guild.id].exp = 0;
            message.channel.send("**" + sender.username + " advanced to level " + userData[sender.id + message.guild.id].lvl + "!**");
        }
            message.reply({embed: {
                title: "**Daily Snacc**", 
                color: 16756952, 
                description: "A " + random + " biscuit joined your pantry!"
            }});
        }
        else {
            message.reply({embed: {
                title: "Daily Snacc", 
                color: 16756952, 
                description: 
                "You already collected your daily biscuit. Fuck off you degenerate piece of shit land whale. Bet you can't wait for your next disgusting carbohydrate filled feast. Come back " + moment().endOf('day').fromNow() + ", or not, I don't care."
            }});
        }

        fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
            if (err) console.error(err);
        })
    }
}
module.exports = Daily;