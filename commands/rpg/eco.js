const commando = require('discord.js-commando');
const fs = require('fs');
// const file = new Discord.Attachment('../assets/')

 //json files 
let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8'));


class Eco extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'money', 
        group : 'rpg', 
        memberName: 'money', 
        description: "how poor are you?"
    });//tells the command 

}



    async run(message, args) {
    //variables 
    let sender = message.author;

    //events 
    // if (bot.user.id === message.author.id){ //makes sure that there's no bot dialogue
    //     return;
    // }

    let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8')); //rewrite things every time called

    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {} 
    //this creates a json file for the user & guild if it is not made already

    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 100; 
    //sets starting money
        
    // if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected"; 
    //checks/creates the time they last collected their reward 

    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    })
    
    message.channel.send({"embed": {
        title: "**__Pantry__**",
        color: 16756952, 

        fields: [{

            name: "Account Holder", 
            value: message.author.username, 
        }, 
        {
            name: "Biscuits ", 
            value: userData[sender.id + message.guild.id].money,

        }]
    }})
    }
}
module.exports = Eco;