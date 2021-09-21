const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "rate",
  aliases: ["mark"],
  description: "Bot Rate Your Given Thing!",
  usage: "Rate <Text>",
  run: async (client, message, args) => {
    //Start
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Please Give Me Something To Rate!`);

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`I Rate`)
      .setThumbnail("https://media.giphy.com/media/Pr8gkPaFlGKNnd8OcW/giphy.gif?cid=790b76110f46ce849de29d1f7b1c471c763a23c10c810333&rid=giphy.gif&ct=g")
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
