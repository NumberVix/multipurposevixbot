const Discord = require("discord.js");

module.exports = {
  config: {
    name: "ping",
    aliases: ["latency", "speed", "Test", "connection", "ms"]
  },
  run: async (bot, message, args) => {

message.channel.send("Pinging bot...").then(m =>{
    let ping = m.createdTimestamp - message.createdTimestamp
    let choices = ["Superspeed", "Faster than a snail", "I hope I'm not slow", "Lightspeed", "Godspeed"] // "I'm jesus", "@Rexy#7785 Pog"];
    let response = choices[Math.floor(Math.random() * choices.length)]

    m.edit(`${response}: Bot Latency: ${ping}ms, API Latency: ${Math.round(bot.ws.ping)}ms`)
    })


  }
};
