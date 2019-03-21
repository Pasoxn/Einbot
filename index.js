//requirements 
const commando = require('discord.js-commando');
const bot = new commando.Client();


//what to do when the bot turns on 
bot.on("ready", () => {
    
    //sets the status, aka "now playing", of the bot 
    bot.user.setPresence({
        game: { 
            name: "3, 2, 1, let's jam!",
            type: 'PLAYING'
        },
        status: 'online'
    })
})


//do x when a message is sent 
bot.on('message', (message) => {
if (message.author.id == "insert_user_id"){
    if (message.content == 'lol' || message.content == 'lmao'|| message.content == 'Lol'|| message.content == "Lmao" || message.content == "l m a o" || message.content == "l o l"){
        message.reply("Your useless comments make the world a worse place.");
    }
}


});

//makes sure the groups show up as recognized groups
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('people', 'Personal Commands');


//sets up the original commands from commando 
bot.registry.registerDefaults();//displays only the default commands 
bot.registry.registerCommandsIn(__dirname + "/commands");//displays the rest of the commands 


//login for the bot 
bot.login('insert bot token');
