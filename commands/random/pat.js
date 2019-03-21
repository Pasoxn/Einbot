const commando = require('discord.js-commando');

class Pat extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'pat', 
        group : 'random', 
        memberName: 'pat', 
        description: "Hand over the good pats and no one gets hurt.",
    });//tells the command 

}



    async run(message, args){//code will run if !hug
        var patpat = [
        "*Ein likes pleasant pats.*", 
        "*Ein is happy because he got the good pat.*", 
        "*Ein is delighted because he got the best pat.*", 
        "*Ein wants more pats.*", 
        "*Ein loves soft pats.*", 
        "<:heart:55196731751320781> <:dog:551968808009728020>", 
        "Yes. Ein wants an infinite amount of pats.", 

        ]


        var mention = message.mentions.users.first();

        if (mention == undefined){
            var random = patpat[Math.floor(Math.random()* patpat.length)];
            message.reply(random);

            // var i = 0;
            //     if (i == 0){
            //         message.channel.send("*Ein likes pleasant pats.*");
            //         i++;
            //     }
            //     else if (i == 1){
            //         message.channel.send("*Ein is happy because he got the good pat.*");
            //         i++;
            //     }
            //     else if (i == 2){
            //         message.channel.send("*Ein is delighted because he got the best pat.*");
            //         i++;
            //     }
            //     else if (i > 3){
            //         message.channel.send("*Ein is annoyed by your incessant patting.*");
            //         i++;
            //     }
            
        }
        
        else {
            message.channel.send('*'+"pats" + '*'+" " + mention);
        }
    }
}
module.exports = Pat;