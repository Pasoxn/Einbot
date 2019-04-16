const commando = require('discord.js-commando');

class Sleep extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'sleep', 
        group : 'random', 
        memberName: 'sleep', 
        description: "how sleep deprived are you?"
    });//tells the command 

}


    async run(message, args){
        var sleep = Math.random()*12;
        var sleepfinal = sleep.toFixed(2);

        var mention = message.mentions.users.first();
    
        if (mention == undefined){
            message.channel.send("You will get " + sleepfinal + " hours of sleep tonight.");
        }
        else {
            message.channel.send(mention + " will get " + sleepfinal + "hours of sleep tonight.");
        }
    }
}
module.exports = Sleep;