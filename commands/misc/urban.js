const urban = require("urban")
const { MessageEmbed } = require("discord.js")
const { stripIndents } = require("common-tags")
const botsettings = require("../../botsettings.json")

module.exports = {
  config: {
    name: "urban",
    aliases: []
  },
  run: async (bot, message, args) => {
    //if(!message.channel.nsfw) return message.channel.send("Please only use this command in NSFW channels.");
    if(args <1 || !["random", "search"].includes(args[0])) return message.channel.send(`Usage: ${botsettings.prefix}urban <search|random> (query)`);
    let image = "https://www.pngkey.com/png/full/345-3457791_master-call-of-duty-bo2-prestige-master.png"
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
      try {
          search.first(res => {
              if(!res) return message.reply("No results found for this word / topic, try another word!")
              let { word, definition, example, thumbs_up, thumbs_down, permalink, author } = res

                  let embed = new MessageEmbed()
                    .setColor(0xff00f3)
                    .setAuthor(`Urban Dictionary | ${word}`, image)
                    .setThumbnail(image)
                    .setDescription(stripIndents`**Definition** ${definition || "No definition"}
                    **Example** ${example || "No example"}
                    **Upvotes:** ${thumbs_up || 0}
                    **Downvotes:** ${thumbs_down || 0}
                    **Link** [link to ${word}](${permalink || "https://www.urbandictionary.com/"})`)
                    .setTimestamp(Date.now())
                    .setFooter(`Written by ${author || "unknown"}`);

                    message.channel.send(embed)
          })
      } catch(e) {
        console.log(e)
        return message.channel.send("I broke somehow. Try again...")

      }

  }
}
