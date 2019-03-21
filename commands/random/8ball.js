const commando = require('discord.js-commando');

class Ball extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : '8ball', 
        group : 'random', 
        memberName: '8ball', 
        description: "I'll predict your future."
    });//tells the command 

}



    async run(message, args){
        var options = [
            "It is certain.", 
            "It is decidedly so.", 
            "Without a doubt.", 
            "Yes - definitely.", 
            "You may rely on it.",
            "As I see it, yes.", 
            "Most likely.", 
            "Outlook good.", 
            "All signs point to yes.", 
            "Yes.", 
            "Reply hazy, try again.", 
            "Ask again later.", 
            "Better not tell you now.", 
            "Cannot predict now.", 
            "Concentrate and ask again", 
            "Don't count on it.", 
            "My reply is no.", 
            "My sources say no.", 
            "Outlook not so good.", 
            "Very doubtful."
        ]
        var random = options[Math.floor(Math.random()* options.length)];
        var mention = message.mentions.users.first();
        
            message.channel.send(random + " " + message.author);
    }
}
module.exports = Ball;