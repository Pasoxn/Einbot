const commando = require('discord.js-commando');

class Existential extends commando.Command{
constructor(client){ //passes it the input 
    super(client, {
        name : 'existentialcrisis', 
        group : 'random', 
        memberName: 'existential', 
        description: "For those 2 am feels."
    });//tells the command 

}



    async run(message, args){
        var crisis = [
            "Wow. Don't even talk to me about existential quandaries.",
            "I've been contemplating existence since the day I came out of the womb, never to find an answer.",
            "My whole life I've spent wondering why there's so much darkness and pain, why all my loved ones are gone or will be gone.",
            "I've lived in this void of thought and blackness for so long that I don't even feel anymore.",
            "Tired? I don't even know the meaning. I haven't slept in days and I won't for more days, I'm so lost that I don't think I'll ever sleep again until sleep eternal.",
            "Why are we here? What happens when we die? Did any of it mean anything? This is what regular people ask, but I went beyond this long ago.",
            "The questions I ask myself are so deep you would drown if I tried explaining them to you. And if you didn't, there's no possible way you could even begin to comprehend.",
            "So you're having an existential quandary? How is that different from any other living creature?",
            "Talk to me once you've sunk in as deep as I have. Oh wait, if you did that you'd wouldn't talk to me because you would know how empty everything is and realize that it wouldn't change anything",
            "Now if you don't mind, I'll pass back into that lightless cloud of thought that forever looms over me and engulfs my mind.",
            "Before I saw it, I had wondered whether life had meaning. Now, I know with certainty that it does not.",
            "I am persuaded of the conviction that Life is but a waiting room between two great infinities, between Unbirth and Death, and it is pathetic, contemptible even, in its nigh-instantaneous brevity.",
            "What meaning does even the greatest life hold in comparison to the vast expanse of our universe?",
            "'Nothing', a proclamation that echoes with an emptiness reflective of its meaning.",
            "Man is far too busy squabbling amongst himself, rending flesh and breathing flame as he tears his person asunder in the wrath of dissention.",
            "My mind, splintered and ill, screams of a thousand thousand reasons for being, each uniquely false and falsely unique.",
            "There is beauty in resistance, but it is a terrible beauty, with all the feral grace and predatory majesty of a blazing wildfire crackling it's way across once-pristine wilderness.",
            "The answer comes from itself, self-evident, for it is all encompassing, ever-present, without beginning or end.",
            "If there ever was a deity, it was Death; Death who, with ultimate power, grinds monuments and men alike to dust, whose grip not even time itself will escape when the Universe finally fades from being.",
            "Death comes to all, insatiable and seductive, and it will always catch its quarry.",
            "Better that we mark Death as a friend, that we join in the void when our time comes, than to fear the only thing that is inevitable.",
            "He who welcomes the darkness allies himself with all things, for all things stem from and flow toward the void.",
            "Nothing is everthing, and everything is nothing, a simultaneous, flowing symphony of darkness whose measures compose themselves for all eternity.",
            "Look around you, Did you think life was fair?",
            "You do nothing, and whilst you act like you care. How commiserable.",
            "There are children dying, and their parents crying. But why should we care?",
            "We eat when they starve, then complain that we're fat. Life wasn't made to be fair.",
        ]
        var random = crisis[Math.floor(Math.random()* crisis.length)];
            message.channel.send(random);
    }
}
module.exports = Existential;