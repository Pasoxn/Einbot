const commando = require('discord.js-commando');
const fs = require('fs');

class Pat extends commando.Command {
    constructor(client) { //passes it the input 
        super(client, {
            name: 'pat',
            group: 'rpg',
            memberName: 'pat',
            description: "Hand over the good pats and no one gets hurt.",
        });

    }



    async run(message, args) {
        //variables 
        let sender = message.author;
        let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8')); //rewrite things every time called
        let mention = message.mentions.users.first();

        //new user entry, money = biscuits
        if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}; //this creates a json file for the user & guild if it is not made already
        if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 100; //sets starting money
        if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected"; //sets daily reward
        if (!userData[sender.id + message.guild.id].exp) userData[sender.id + message.guild.id].exp = 0; //sets starting exp


        //working code 
        userData[sender.id + message.guild.id].exp += 1;

        //level req
        let lvlreq = 80 * (Math.pow((1 + .2), userData[sender.id + message.guild.id].lvl)); //exp requirement to level up 
        if (userData[sender.id + message.guild.id].exp === lvlreq) {
            userData[sender.id + message.guild.id].exp = 0;
            userData[sender.id + message.guild.id].lvl++;
            message.channel.send("**" + sender.username + " advanced to level " + userData[sender.id + message.guild.id].lvl + "!**");
            console.log("it worked");
        }

        //pat message
        var patpat = [
            "*Ein likes pleasant pats.*",
            "*Ein is happy because he got the good pat.*",
            "*Ein is delighted because he got the best pat.*",
            "*Ein wants more pats.*",
            "*Ein loves soft pats.*",
            "<:heart:55196731751320781> <:dog:551968808009728020>",
            "Yes. Ein wants an infinite amount of pats.",
        ]

        if (mention == undefined) {
            let random = patpat[Math.floor(Math.random() * patpat.length)];
            message.reply(random);
        }

        else {
            message.channel.send('*' + "pats" + '*' + " " + mention);
        }

        //error writer
        fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
            if (err) console.error(err);
        })
    }
}
module.exports = Pat;
