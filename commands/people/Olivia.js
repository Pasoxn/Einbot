const commando = require('discord.js-commando');

class Olivia extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'olivia', 
        group : 'people', 
        memberName: 'olivia', 
        description: "[lesbian description]"
    });//tells the command 

}


    async run(message, args){
        var olivia = [
            "Big dick energy", 
            "[insert lesbian comment]", 
            "UWU", 
            "uwu", 
            "OWO", 
            "owo",
            "big UWU energy", 
            "big OWO energy",
            "sicko mode",
        ]

        var random = olivia[Math.floor(Math.random()* olivia.length)];
        var mention = message.mentions.users.first();
    
        if (mention == undefined){
            message.channel.send(random);
        }
        else {
            message.channel.send(random + " " + mention);
        }
    }
}
module.exports = Olivia;