const Discord = require("discord.js");

module.exports = {
  config: {
    name: "avatar",
    aliases: []
  },
  run: async (bot, message, args) => {

    if (message.author.avatar.startsWith('a_')) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`__@${message.author.tag}__ Here's your avatar!`)
            .setImage(message.author.displayAvatarURL({
                format: 'gif'
            }))
            .setColor(0xff00f3)
            .setFooter(`Requested by ${message.author.tag}`)
            .setTimestamp(Date.now())
        message.channel.send(embed);
    } else {
    const embed = new Discord.MessageEmbed()
        .setTitle(`__@${message.author.tag}__ Here's your avatar!`)
        .setImage(message.author.displayAvatarURL())
        .setColor(0xff00f3)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp(Date.now())
    message.channel.send(embed);
    }
  }
};
