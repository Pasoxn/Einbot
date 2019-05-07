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


class Gamble extends commando.Command {
    constructor(client) { //passes it the input 
        super(client, {
            name: 'gamble',
            group: 'rpg',
            memberName: 'gamble',
            description: "RISK IT FOR THE BISCUIT",
            args: [
                {
                    key: 'text',
                    prompt: "RISK IT FOR THE BISCUIT",
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
        // let mention = message.mentions.users.first();
        // let mname = mention.username;


        //setup 
        if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {};
        if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 100;
        if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected"; //checks/creates the time they last collected their reward 

        //working code
        //check for invalid inputs   
        // if (text < 1 || text > 1001 || userData[sender.id + message.guild.id].money < text) {

        //     switch (text) {
        //         case (text < 1):
        //             message.reply({
        //                 embed: {
        //                     title: "Listen here, **you can't gamble negative biscuits.** Surprise!",
        //                     color: 16756952,
        //                 }
        //             })
        //             break;

        //         case (text > 1001):
        //             message.reply({
        //                 embed: {
        //                     title: "Woah there, that's too **chonky** of a biscuit gamble for my christian server--Trust me buddy pal.",
        //                     color: 16756952,
        //                 }
        //             })
        //             break;

        //         case (userData[sender.id + message.guild.id].money < text):
        //             message.reply({
        //                 embed: {
        //                     title: "You fucking tried, didn't you. **Can't gamble biscuits you don't have.** Degenerate.",
        //                     color: 16756952,
        //                 }
        //             })
        //             break;
        //     }
        // }

        if (text < 1 || text > 1001 || userData[sender.id + message.guild.id].money < text) {
            message.reply({
                embed: {
                    title: "**You fucking tried, didn't you.**",
                    color: 16756952,
                }
            })
        }
        else {
            //main code - X BISCUITS max gain = 2x, max loss 2x, gamble biscuit so if you gamble 1, and lose 2
            //problem = only lose biscuits 
            let maxGain = text * 2;
            let maxLoss = text * (-2);
            let reward = Math.floor(Math.random() * (maxGain - maxLoss + 1)) + maxLoss;

            userData[sender.id + message.guild.id].exp += 2;
            userData[sender.id + message.guild.id].money += reward;

            if (reward <= 0) {
                message.reply({
                    embed: {
                        title: "You useless fuck. You can't even gamble right. **You lost " + Math.abs(reward) + " " + random + "  biscuits**, ready to gamble the rest of them?",
                        color: 16756952,

                        fields: [
                            {
                                name: sender.username + "'s Current Biscuits",
                                value: userData[sender.id + message.guild.id].money,
                            },
                        ]
                    }
                })
            }

            else {
                message.reply({
                    embed: {
                        title: "Congrats. **You won " + reward + " " + random + " biscuits.** I know you could use these biscuits to improve your life, but you won't. Another round?",
                        color: 16756952,

                        fields: [
                            {
                                name: sender.username + "'s Current Biscuits",
                                value: userData[sender.id + message.guild.id].money,
                            },
                        ]
                    }
                })

            }
        }

        fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
            if (err) console.error(err);
        })
    }
}
module.exports = Gamble;