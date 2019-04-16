const commando = require('discord.js-commando');

class Ein extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'ein', 
        group : 'random', 
        memberName: 'ein', 
        description: "List of availiable commands"
    });//tells the command 

}

    async run(message, args){
        const embed = {
            "title": "Einbot",
            "description": "Einbot is an open source chat bot with a variety of commands, made for no reason other than boredom. ",
            "url": "https://github.com/Pasoxn/Einbot",
            "color": 16756952,

            "author": {
              "name": "WSLD'S",
            },

            "fields": [
              {
                "name": "!8ball",
                "value": "I'll predict your future.",
              },
              {
                "name": "!annie",
                "value": "All the energies."
              },
              {
                "name": "!cat",
                "value": "sends image of a cat"
              },
              {
                "name": "!ein",
                "value": "Ever wanted to know how ein works?",
              },
              {
                "name": "!emmanuel",
                "value": "The Big Depresso. TBD.",
              },
              {
                "name": "!existentialcrisis",
                "value": "For those 2am feels.",
              },
              {
                "name": "!grade",
                "value": "Are you going to fail your next test? Ask me, you won't.",
              },
              {
                "name": "!insult",
                "value": "If you're having much too good of a day, I'll help you by ending that.",
              },
              {
                "name": "!kevin",
                "value": "Mongoloid.",
              },
              {
                "name": "!money",
                "value": "Find out how poor you are.",
              },
              {
                "name": "!olivia",
                "value": "[lesbian description]",
              },
              {
                "name": "!ratemyree",
                "value": "I'll rate your ree, you fucking idiot.",
              },
              {
                "name": "!ree",
                "value": "It's not like I ree because you told me so. Or anything. Baka.",
              },
              {
                "name": "!sleep",
                "value": "Sleep is a precious thing.",
              },
              {
                "name": "!woof",
                "value": "Sometimes I get the urge to bark. That just happens to coincide with when you type the command.",
              },
              
            ]
          };

          message.channel.send({ embed });

    };
}
module.exports = Ein;