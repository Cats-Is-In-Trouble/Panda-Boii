const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: ["pi"],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`<:panda_bot:889714369863237652>  Pong - ${client.ws.ping}`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
