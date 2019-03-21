const commando = require('discord.js-commando');

class Grade extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'grade', 
        group : 'random', 
        memberName: 'grade', 
        description: "Are you going to fail your next test? Ask me, you won't."
    });//tells the command 

}


    async run(message, args){
        var grade1 = Math.ceil(Math.random()*100);
        var grade2 = Math.ceil(Math.random(10,100)*100);
        var finalgrade = grade1+"."+grade2;

        var mention = message.mentions.users.first();
    





        if (mention == undefined){
            message.channel.send("Your next grade will be " + finalgrade + "%.");
        }
        else {
            message.channel.send(mention + " will get a " + finalgrade + "% on their next test.");
        }
    }
}
module.exports = Grade;