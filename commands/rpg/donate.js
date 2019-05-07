const commando = require('discord.js-commando');
const fs = require('fs');

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
    'stubborn'
]


class Donate extends commando.Command {
    constructor(client) { //passes it the input 
        super(client, {
            name: 'donate',
            group: 'rpg',
            memberName: 'donate',
            description: "Be a kind friend and pass the biscuits will you?",
            args: [
                {
                    key: 'text',
                    prompt: "how many biscuits would you like to donate?",
                    type: 'integer',
                    default: 5,
                },
            ],
        });//tells the command 

    }



    async run(message, { text }) {
        //variables 
        let random = adj[Math.floor(Math.random() * adj.length)];
        let sender = message.author;
        let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8')); //rewrite things every time called
        let mention = message.mentions.users.first();
        let mname = mention.username;


        //setup 
        if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {};
        if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 100;
        if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected"; //checks/creates the time they last collected their reward 

        //working code
        if (text < 1 || text > 1001 || userData[sender.id + message.guild.id].money < text) {
            message.reply({
                embed: {
                    title: "**You fucking tried, didn't you.**",
                    color: 16756952,
                }
            })
        }
        else {
            userData[mention.id + message.guild.id].money += text;
            userData[sender.id + message.guild.id].money -= text;

            message.reply({
                embed: {
                    title: "**You donated " + text + " " + random + " biscuits to " + mname + ".**",
                    color: 16756952,

                    fields: [
                        {
                            name: sender.username + "'s Current Biscuits",
                            value: userData[sender.id + message.guild.id].money,
                        },
                        {
                            name: mname + "'s Current Biscuits",
                            value: userData[mention.id + message.guild.id].money,
                        },
                    ]
                }
            })
        }

        fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
            if (err) console.error(err);
        })
    }
}
module.exports = Donate;