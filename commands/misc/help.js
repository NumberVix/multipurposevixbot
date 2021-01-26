const Discord = require ("discord.js");
const botsettings = require ("./botsettings.json")







module.exports = {
  config: {
    name: "help",
    aliases: []
  },
  run: async (bot, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setTitle(":radioactive: __CS Bot__:")
  .setColor(0xff00f3)
  .setDescription("Version: " + botsettings.version + "\n\nPrefix: " + "`" + botsettings.prefix + "`" + "\n\n__Command list__:\nFor a list of commands, type " + "`" + botsettings.prefix + "commands" + "`")
  .setFooter(`Developed by CS#1479`)
  message.channel.send(embed);






    //const embed = new Discord.MessageEmbed();
    //.setTitle("CS' Staging Bot Help")
    //.setColor(0xff0000)
    //.setDescription("Version: " + versiondetails.version);
//  message.channel.send(embed);
  }
};
