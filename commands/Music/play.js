const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');


class Play extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'play', 
        group : 'music', 
        memberName: 'play', 
        description: "Play a song of your choosing."
    });//tells the command 

}

// exports.run = async (bot, message,) {

// }



// }
// module.exports = Play;

exports.run = async (bot, message, args, ops) => {
    //check if person is in vc
    if (!message.member.voiceChannel){
        return message.reply('Connect to a voice channel first you imbecile.');
    }

    //check if bot is already connected 
    if (message.guild.me.voiceChannel){
        return message.reply("Can't you tell that I'm in another voice channel? People these days.");
    }

    //check if a url was sent  
    if(!args[0]){
        return message.reply("I need a url to work, not whatever you just sent.");
    }

    //check if url is valid 
    let validate = await ytdl.validateURL(args[0]); //bool of link sent = or != valid url
    if (!validate){
        return message.reply("Send me something I can work with please.");
    }
    //validate will contain a bool if the url is valid or not 

    //fetch video info 
    let info = await ytdl.getInfo(args[0]);

    //store author's guild channel 
    let connection = await message.member.voiceChannel.join();

    //play song 
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));

    //output now playing 
    message.channel.send('Now Playing: ' + '${info.title}');


};