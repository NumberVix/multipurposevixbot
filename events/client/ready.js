const { ErelaClient, Utils } = require("erela.js")
const { nodes } = require("../../botsettings.json")

const botsettings = require("../../botsettings.json")

module.exports = async bot => {

     console.log(`${bot.user.username} is online and ready for action.`)


    bot.levels = new Map()
        .set("none", 0.0)
        .set("low", 0.10)
        .set("medium", 0.15)
        .set("high", 0.25);

    let statuses = [
        `CS Bot | ${botsettings.prefix}help`,
        `GTA VI`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: ""});

    }, 10000)

}
