const Discord = require("discord.js")
const botsettings = require ("./botsettings.json")




module.exports = {
  config: {
    name: "commands",
    aliases: []
  },
  run: async (bot, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setTitle(":radioactive: Command List:")
  .setColor(0xff00f3)
  .setDescription("Full command list for CS Bot Version " + botsettings.version)
  .setFooter(`Developed by CS#1479`)
  .addField("__**Main**__", "Help - Information about the bot\nCommands - Full Command List\nPing - View the bot and Discord API's latency.\nAvatar - Request your avatar.")
  .addField("__**Fun**__", "Meme - Grab a random meme from Reddit.\nUrban - Gives the urban dictionary definition of the searched word.")
  .addField("__**Music**__", "Temporarily removed.\n")
  .addField("__**Admin**__", "Kick - Kick a user from the server\nBan - Ban a user from the server\nMute - Mute a user in the server\nUnmute - Unmute a user in the server\nPurge - Deletes x amount of messages in a channel\nSay - Send a message from the bot in any channel")
message.channel.send(embed);
}

}









//const embed = new Discord.MessageEmbed();
//.setTitle("Commmand List:")
//.setColor(0xff0000)
//.setDescription("__Main__\n ** - Commands: Get a full list of commands.")
//.SetFooter(`Developed by CS#1479`)
//message.channel.send(embed);
