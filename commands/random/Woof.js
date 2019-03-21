const commando = require('discord.js-commando');

class Woof extends commando.Command{
    
constructor(client){ //passes it the input 
    super(client, {
        name : 'woof', 
        group : 'random', 
        memberName: 'woof', 
        description: 'Sometimes I get the urge to bark. That just happens to coincide with when you type the command.', 
    });//tells the command 

}

    async run(message, args){//code will run if !roll
        var oes = Math.floor(Math.random()*200);
        var final = "w";

        var add = function(oes) {
            for (var i = 0; i < oes; i++){
                final += "o";
                i++;
            };
            return final;
        };
        message.reply("*" + add(2 + oes)+"f" + "*");
    };
};

module.exports = Woof;