const commando = require('discord.js-commando');

class Insult extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'insult', 
        group : 'random', 
        memberName: 'insult', 
        description: "If you're having much too good of a day, I'll help you by ending that."
    });//tells the command 

}



    async run(message, args){
        var insults = [
            "You rolled a critical failure in life", 
            "Your existence proves Darwin wrong.", 
            "Get your shit together degenerate.", 
            "No amount of therapy could fix this disaster, otherwise known as you.", 
            "You disappoint friends and family like no other.", 
            "Your level of idiocy never ceases to surprise me.", 
            "Your friends only talk to you out of pity.", 
            "Just because you're unique, doesn't mean that you matter.", 
            "You're about as useless as a participation award.",
            "Your parents had a custody battle and neither wanted you.", 
            "Your parents' greatest regret in life is you.", 
            "There's nothing worse than having you in my life.",
            "You're the biggest idiot I know and I'm not even sentient",
            "Stoopid", 
            "I do not want to live in a world where people like you are given the opportunity to reproduce.", 
            "I'm an atheist but I still pray, not for you, but for the rest of us.",
            "God help us all, except you.",
            "I'd mind you less if you'd stop wasting oxygen on your stupid insignificant life.", 
            "Please, leave and let the responsible people take care of what's left of the world you almost singlehandedly destroyed by existing.", 
            "Shut up you chicken bone, google chrome, no flip phone, disowned ice cream cone, garden gnome, student loan, overgrown flint stone, friend zoned, Sylvester Stallone, Sierra Leone, monotone, fiend.",
            "You're a putrescent mass, a walking vomit.",
            "You are a spineless little worm deserving nothing but the profoundest contempt.",
            "Your life is a monument to stupidity.",
            "I will never get over the embarrassment of belonging to the same universe as you.",
            "I barf at the very thought of you.",
            "You are a squeaking rat, a mistake of nature and a heavy-metal bagpipe player.",
            "Try to edit your responses of unnecessary material before attempting to impress us with your insight.",
            "You are a thick-headed trog.",
            "You are the moral equivalent of a leech.",
            "You make Quakers shout and strike Pentecostals silent.",
            "On a good day you're a half-wit.",
            "You are deficient in all that lends character.",
            "You bloody churlish boil-brained clotpole ponce.",
            "You wear strangely mismatched clothing with oddly placed stains.",
            "I feel debased just knowing that you exist.",
            "I beg for sweet death to come and remove me from a world which became unbearable when the bioterrorists designed you.",
            "You better shut your ibuprofen, overdosing, decomposing, overloading, oxytocin, unimposing, salty ocean, child groping, bum ass clothing, stupid joking, mind eroding, never growing, head ass the fuck up.",
            "You're worse than Ben Carmichael when he doesn't give us a goddamn snowday", 
            "I'd like to have a battle of wits with you, but I'd never attack an unarmed person.", 
            "You have the disappointment level of the experience of biting into an apple and it being squishy.",
            "If there's one good thing about your personality,it's that it's not as unprepossessing as your face.", 

        ]
        var random = insults[Math.floor(Math.random()* insults.length)];
        var mention = message.mentions.users.first();
    
        if (mention == undefined){
            message.channel.send("**" + random + "**");
        }
        else {
            message.channel.send("**" + random + "**" + " " + mention);
        }
    }
}
module.exports = Insult;