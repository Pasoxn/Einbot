const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    
constructor(client){ //passes it the input 
    super(client, {
        name : 'ratemyree', 
        group : 'random', 
        memberName: 'ratemyree', 
        description: "I'll rate your ree, you fucking idiot", 
    });//tells the command 

}

    async run(message, args){//code will run if !roll
        var ree = Math.floor(Math.random()*10) + 1;
        if (ree == 5){
            message.reply("Your ree is a solid " + ree + " out of 10");
        }
        else if (ree > 5){
            message.reply("Your ree is an unrivaled " + ree + " out of 10");
        }
        else if (ree < 5){
            message.reply("Your ree is a pathetic " + ree + " out of 10 ");
        }
    
    }
}

module.exports = DiceRollCommand;