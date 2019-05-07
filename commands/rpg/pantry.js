const commando = require('discord.js-commando');
const fs = require('fs');

class Pantry extends commando.Command {
    constructor(client) { //passes it the input 
        super(client, {
            name: 'pantry',
            group: 'rpg',
            memberName: 'pantry',
            description: "how poor are you?"
        });//tells the command 

    }


    async run(message, args) {
        //variables 
        let sender = message.author;
        let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8')); //rewrite things every time called
        let mention = message.mentions.users.first();


        //new user entry
        if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {} //this creates a json entry for the user & guild if it is not made already
        if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 100; //sets starting money
        if (!userData[sender.id + message.guild.id].exp) userData[sender.id + message.guild.id].exp = 0; //sets starting exp
        if (!userData[sender.id + message.guild.id].lvl) userData[sender.id + message.guild.id].lvl = 1; //sets starting lvl

        //level check -- paste where exp increase is involved.
        // if (userData[sender.id + message.guild.id].exp == lvlreq) {
        //     userData[sender.id + message.guild.id].lvl += 1;
        //     userData[sender.id + message.guild.id].exp = 0;
        // }

        //error writer
        fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
            if (err) console.error(err);
        })

        //main code 
            //variables 
        let lvlreq = Math.round(80 * (Math.pow((1 + .2), userData[sender.id + message.guild.id].lvl))); //exp requirement to level up 

            //putting exp in bar form ---- scales with lvlreq
                //take (exp / lvlreq)*10 = needed filled boxes, then rounds to the nearest 10 
        let boxes = Math.round((userData[sender.id + message.guild.id].exp / lvlreq) * 10); //gets relatively close integer form of exp percentage until next lvl

        var final = "";
        var bars = function (boxes) {
            for (var i = 0; i < boxes; i++) {
                final += "<:white_square_button:568075453731176458>";
            };
            for (var i = 0; i < 10 - boxes; i++) {
                final += "<:white_large_square:568067407470657540>";
            }
            return final;

        };

            //calculating all time exp 
        let totexp = 0;
        if (userData[sender.id + message.guild.id].lvl === 1) {
            totexp = 0;
        }
        else {
            for (var i = 1; i < userData[sender.id + message.guild.id].lvl; i++) {
                totexp += Math.round(80 * (Math.pow((1 + .2), i)));
            }
        }

        message.reply({
            "embed": {
                title: "**" + message.author.username + "'s Pantry**",
                color: 16756952,

                fields: [
                    { //add exp bar
                        name: "```Level: " + userData[sender.id + message.guild.id].lvl + "```",
                        value: bars(boxes) + "```" + userData[sender.id + message.guild.id].exp + "/" + lvlreq + "```",
                    },
                    {
                        name: "Total Exp",
                        value: totexp + userData[sender.id + message.guild.id].exp,
                    },
                    {
                        name: "Biscuits ",
                        value: userData[sender.id + message.guild.id].money,

                    },
                ]
            }
        })
    }
}
module.exports = Pantry;