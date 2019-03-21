const commando = require('discord.js-commando');
const bot = new commando.Client();

const prefix = '!';
//WORK ON TENDIES COMMAND THING

bot.on("ready", () => {
    bot.user.setPresence({
        game: { 
            name: "3, 2, 1, let's jam!",
            type: 'PLAYING'
        },
        status: 'online'
    })
})

bot.on('message', (message)=>{

//variables 
let msg = message.content.toUpperCase();
let sender = message.author;
let args = message.content.slice(prefix.length).trim().split(' '); 
    //This variable takes the message.content, slices off the prefix from the front, then trims the blank spaces on the side, and turns it into an array by separating it by spaces
let cmd = args.shift().toLowerCase(); //takes first item from args, turns it into lowercase.

if (!msg.startsWith(prefix)) return; //don't run when no prefix.
// if (message.author.bot) return; // If the message's author is a bot, exit the code.






// if (message.content == '!ping'){
// //    message.reply('pong');
//     message.channel.send('pong');
//     }
// if (message.author.id == "258399944258355200"){//kevin
//     if (message.content == 'lol' || message.content == 'lmao'|| message.content == 'Lol'|| message.content == "Lmao" || message.content == "l m a o" || message.content == "l o l"){
//         message.reply("Your useless comments make the world a worse place.");
//     }
// }
if (message.content == 'William'){
    message.channel.send("they sent me to the mental hospital they sent me to 2 years ago the first time I attempted. And I got out today.Tbh I didn't want to leave.");
}
// if (message.content == '!commands'){
//     message.channel.send("``` ");
// };
});
// const request = require('request');

// request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

// }, function(error, response, body) {
// 	if(!error && response.statusCode == 200) {
// 		msg.channel.send(response.request.uri.href);
// 	} else {
// 		console.log(error);
// 	}
// })





bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('people', 'Personal Commands');

bot.registry.registerDefaults();//displays only the default commands 
bot.registry.registerCommandsIn(__dirname + "/commands");//displays the rest of the commands 

bot.login('NTUxMTg3NDYyOTg3MTg2MTc3.D1tZcQ.D8pZdm20Q9z3S6LUVkMtr8qtn-0');
