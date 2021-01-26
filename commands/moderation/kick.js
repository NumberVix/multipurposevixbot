const Discord = require("discord.js");


//KICK
module.exports = {
  config: {
    name: "kick",
    aliases: []
  },
  run: async (bot, message, args) => {

    if (!message.guild) return;

if (message.member.hasPermission(['ADMINISTRATOR'])) {

    const user = message.mentions.users.first();
    // If there's a mention
    if (user) {

        const member = message.guild.member(user);

        if (member) {

            member
                .kick('Kicked by')
                .then(() => {
                    // Reply confirmation
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`${user.tag} was kicked.`)
                    .setColor(0xff00f3)
                    .setDescription('<:wasted1:706901503331532842><:wasted2:706901459073106051><:wasted3:706901459333283901><:wasted4:706901459018711102>')
                    .setFooter(`Kicked by ${message.author.tag}`)
                    .setTimestamp(Date.now())
                  message.channel.send(embed);
                  //Log action
                  console.log(`User: '${user.tag}' was kicked by ${message.author.tag}`)
                })
                .catch(err => {
                    // Error

                    message.reply('I was unable to kick this member');
                    // Log error
                    console.error(err);
                });
        } else {
            // User isn't in the server
            message.reply("That user isn't in the server...");
        }
        // No member mentioneed
    } else {
        message.reply("You didn't mention the user to kick dumbass!");
    }
  }
else {
    message.channel.send("You're not an admin stupid");
  }

//Log embed-
const user = message.mentions.users.first();
let embed = new Discord.MessageEmbed()
.setColor(0xff00f3)
.setAuthor(`${message.guild.name} Log`, message.guild.iconURL)
.addField("Action", "Kick")
.addField("Kicked user", user)
.addField("Admin:", message.author.tag)
.setTimestamp(Date.now())

let sChannel = message.guild.channels.cache.find(c => c.name === "log")
sChannel.send(embed)
  }
};
