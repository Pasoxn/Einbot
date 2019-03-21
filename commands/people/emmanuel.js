const commando = require('discord.js-commando');

class Emmanuel extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'emmanuel', 
        group : 'people', 
        memberName: 'emmanuel', 
        description: "The Big Depresso. TBD."
    });//tells the command 

}



    async run(message, args){
        var emmanuel = [
            "understandable have a nice day.", 
            "UNDERSTANDABLE HAVE A NICE DAY", 
            "oh god oh fuck", 
            "OH GOD OH FUCK", 
            "monch", 
            "chonk",
            "lov",
        ]

        var random = emmanuel[Math.floor(Math.random()* emmanuel.length)];
        var mention = message.mentions.users.first();
    
        if (mention == undefined){
            message.channel.send(random);
        }
        else {
            message.channel.send(random + " " + mention);
        }
    }
}
module.exports = Emmanuel;