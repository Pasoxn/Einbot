const commando = require('discord.js-commando');
// const request = require('node-superfetch');
const discord = require('discord.js');
const querystring = require('query-string');
const r2 = require('r2');

const CAT_API_URL  = 'https://api.thecatapi.com/';
const CAT_API_KEY = '88d41382-62e8-4a7a-a0ad-e11c4c2305c0';


module.exports = class Cats extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'cat', 
        group : 'search', 
        memberName: 'cat', 
        description: "gives you a picture of a cat.",
    });//tells the command 

}


    async run(message, args){
        try {
            var images = await this.loadImage(message.author.username);
            var image = images[0];

            console.log('message processed', 'showing image.id:', image.id)
            message.channel.send({files: [ image.url] });
        }

        catch(error){
            console.log(error);
        }
    }

    async loadImage(sub_id){
        var headers = {
            'X-API-KEY': CAT_API_KEY, 
        }

        var query_params = {
            'mime_types': 'jpg, png', 
            'size' :'med', 
            'sub_id': '4ohdom', 
            'limit': 1
        }

        let queryString = querystring.stringify(query_params);

        try {
            let _url = CAT_API_URL + `v1/images/search?${queryString}`;
            var response = await r2.get(_url, {headers} ).json;
        }

        catch(e){
            console.log(e);
        }

        return response;
    }
}