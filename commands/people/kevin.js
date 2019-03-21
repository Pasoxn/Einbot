const commando = require('discord.js-commando');

class Kevin extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'kevin', 
        group : 'people', 
        memberName: 'kevin', 
        description: "He likes guitar and twitter."
    });//tells the command 

}



    async run(message, args){//code will run if !kevin

        var kevin = [
            "Eat shit and die", 
            "Epic",
        ];

        var random = kevin[Math.floor(Math.random()*kevin.length)];
        var mention = message.mentions.users.first();

        if (mention == undefined){
            message.channel.send(random);
        }
        else {
            message.channel.send(random + " " + mention);
        }
    }
}
module.exports = Kevin;