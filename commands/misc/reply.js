const Discord = require("discord.js")

module.exports = {
  config: {
    name: "hi",
    aliases: ["hello", "sup", "yo", "yoo",]
  },
  run: async (bot, message, args) => {

    message.channel.send("hello")

    console.log('testreplyformat1');
}
};

// console.log()
