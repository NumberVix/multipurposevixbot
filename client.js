const settings = require("./botsettings.json");
const { Client, Collection } = require("discord.js");
const fs = require('fs');
const { token } = require("./botsettings.json")
const bot = new Client({disableEveryone: true});

["commands", "aliases"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot))



// hello
// Command handler
//fs.readdir("./commands/", (err, files) => {

    //if (err) return console.log(err);

    //let cmdFiles = files.filter(f => f.split(".").pop() === "js")
    //if (cmdFiles.length <= 0) {
    //    console.log("Couldn't find commands.");
      //  return;
  //  }

  //  cmdFiles.forEach((f, i) => {
  //      let props = require(`./commands/${f}`);
  //      console.log(`${i + 1}: ${f} loaded!`);
  //      bot.commands.set(props.help.name, props);
  //  })

//})

//Log-in Console Logs / Ready event
bot.on("ready", () => {
    console.log('[LOG] Logged in as: ' + bot.user.username);
    console.log('[LOG] Bot ID: ' + bot.user.id);
    console.log('[LOG] Time: ' + bot.readyAt);
});

// Avatar Request
//bot.on("message", (message) => {

  //  let messageArray = message.content.split(" ");
  //  let cmd = messageArray[0];
  //  let args = messageArray.slice(1);

  //  if (!cmd.startsWith(prefix)) return;

  //  let cmdFiles = bot.commands.get(cmd.slice(prefix.length));
  //  if (cmdFiles) {
    //    cmdFiles.run(bot, message, args);
    //}

//});

//F Replyd
//bot.on("message", (message) => {
  //  if (message.content == 'F') {
    //    if (message.author.bot) return;
    //    message.channel.send('F');
  //  }
//});


//Token log-in
bot.login(settings.token.(get.command2));
