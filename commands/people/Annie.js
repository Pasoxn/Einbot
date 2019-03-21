const commando = require('discord.js-commando');

class Annie extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'annie', 
        group : 'people', 
        memberName: 'annie', 
        description: "All the energies."
    });//tells the command 

}



    async run(message, args){
        var annie = [
            "YEET", 
            "big soft energy", 
            "big mood energy", 
            "slam your head against a pole"
        ]
        var random = annie[Math.floor(Math.random()* annie.length)];
        var mention = message.mentions.users.first();
    
        if (mention == undefined){
            message.channel.send(random);
        }
        else {
            message.channel.send(random + " " + mention);
        }
    }
}
module.exports = Annie;