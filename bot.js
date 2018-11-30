const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';

var insultResponses = [" You inferrior being.", " You piece of shit.", " You Cock Muppet.", " You Script-Kiddie, learn how to program.", " You are the Cumm-Shot your mother should have swallowed.", " You are the sad mistake of a Cumm-Shot that fell out your mums' asshole and trickled in her pussy."];





client.login(token);

client.on('message', message => { 

    if (message.content.toLowerCase() === '!succ')
        message.channel.send("Hey, " + message.author + " Fuck you. You can Succ S.W.I.M's dick");

    if (message.content.toLowerCase() === '!wattfucc')
        message.channel.send("Hey, " + message.author + " how about you go wattfucc yourself!");

    if (message.content.toLowerCase() === '!help')
        message.channel.send("ALright " + message.author + ", Here you go idiot... oh there's nothing. goto the help channel fucko.");

    if (message.content.toLowerCase() === '!')
        message.channel.send("Oh " + message.author + ", You Poor fuck");

    if (message.content.toLowerCase() === '@everyone')
        message.channel.send("I swear " + message.author + ", if you ghost ping everyone I will fuck you in the ass!");

    if (message.content.toLowerCase() === '!letsplayagame')
        message.channel.send("Lmfao " + message.author + ", Fuck no you faggot. I have real shit to do right now.");

    if (message.content.toLowerCase() === '!swimusucc')
        message.channel.send("Hey " + message.author + ", Don't ping the bot asshole");

    if (message.content.toLowerCase() === '!bot')
        message.channel.send("Hey " + message.author + ", Don't ping the bot asshole");

    if (message.content.toLowerCase() === '!ping')
        message.channel.send("Hey " + message.author + ", Don't ping the bot asshole");

    if (message.content.toLowerCase() === '!games')
        message.channel.send("Alright " + message.author + ", Only if you stop fucking bothering me...");

    if (message.content.toLowerCase() === '!sex')
        message.channel.send(message.author + ", how about no?");

    if (message.content.toLowerCase() === '!insult')
        message.channel.send("Of course " + message.author + insultResponses[Math.floor(Math.random() * insultResponses.length)]);



   


});