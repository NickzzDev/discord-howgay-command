const discord = require('discord.js')


exports.run = async (client, message, args) => {
    var member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.reply("Please Mention a User!!");

    let gay = Math.floor(Math.random() * 101);

    const howgayembed = new discord.MessageEmbed()
    .setTitle('Gay Calculator')
    .setDescription(`${member} is ${gay}% Gay 🌈\n\nCreated by [Nickzz](https://github.com/NickzzDev/)`)
    .setColor("GREEN");

    message.channel.send({ embeds: [howgayembed] })
  
}
