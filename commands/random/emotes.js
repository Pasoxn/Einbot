const commando = require('discord.js-commando');

class Emotes extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'emotes', 
        group : 'random', 
        memberName: 'emotes', 
        description: "all the emotes in this server"
    });//tells the command 

}



    async run(message, args){
        var emotes = [
            "**triggered**: when sally doesn't get enough tendies for the entire school", 
            "**leave**: when things are too spicy", 
            "**feelsbadman**: every single day of my fucking life", 
            "**yeetsupreme**: YEET", 
            "**pepega**: ooga booga", 
            "**pepehands**: it be like that sometimes", 
            "**ree**: that was a major ree", 
            "**gays**: this server.", 
            "**laugh**: ?", 
            "**ping**: stop pinging me degenerates"
        ];
        
            message.channel.send(emotes);
    }
}
module.exports = Emotes;