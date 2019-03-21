const commando = require('discord.js-commando');

class Ree extends commando.Command{
    
constructor(client){ //passes it the input 
    super(client, {
        name : 'ree', 
        group : 'random', 
        memberName: 'ree', 
        description: "It's not like I ree because you told me so. Or anything. Baka.", 
    });//tells the command 

}

    async run(message, args){//code will run if !roll
        var eee = Math.floor(Math.random()*200);
        var final = "r";

        var add = function(eee) {
            for (var i = 0; i < eee; i++){
                final += "e";
                i++;
            };
            return final;
        };
        message.reply("*" + add(eee) + "*");
    };
};

module.exports = Ree;