const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");


module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  run: async(message) =>{

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using PANDA BOII? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('PANDA BOII','https://cdn.discordapp.com/attachments/778600026280558617/781024479623118878/ezgif.com-gif-maker_1.gif')
      //.setThumbnail(message.author.displayAvatarURL())
      .addField(`Use the following link to add PANDA BOII to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=882910260124352562&permissions=8&scope=bot', true)

    .setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
