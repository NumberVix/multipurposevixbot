const Discord= require("discord.js")
const botsettings = require("./botsettings.json")
const fetch = require("node-fetch");

module.exports = {
  config: {
    name: "meme",
    aliases: []
  },
  run: async (bot, message, args) => {

  let msg = await message.channel.send("Getting a meme...");
  console.log("Meme requested...")

  fetch('https://apis.duncte123.me/meme')
    .then(res => res.json())
    .then(body => {

  if(!body){

   return message.channel.send("Couldn't find an meme. Try again!")
   console.log("Failed to get meme") };

    let mEmbed = new Discord.MessageEmbed()
    .setColor(0xff00f3)
    .setAuthor(body.data.title)
    .setImage(body.data.image)
    .setTimestamp(Date.now())
    .setFooter("CS Bot", bot.user.displayAvatarURL)
    message.channel.send({embed: mEmbed});

    msg.delete();
    console.log("Meme posted")

    });
  }
}
