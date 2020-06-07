const { Client, MessageEmbed } = require('discord.js');
const client = new Client();


client.on('ready', () => {
  console.log(`Bot ready as: ${client.user.tag}!`);
  console.log(`Bot status: ${client.user.presence.status}`)
});


client.on('message', message => {
 
  var posi = ["yes", "no", "maybe"]
  var aleatorio = Math.floor(Math.random()*(posi.length))
  

  if (message.content.startsWith(`=true`)) {
    message.reply(posi[aleatorio])
  }

  if(message.content === "=help"){
    const embed = new MessageEmbed()
    .setTitle("HELP")
    .setDescription("*Use: =true (your question) for know the true*")
    .setFooter("Dm poryx#3975 for internal support")
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    //.setThumbnail("")
    message.channel.send(embed)
  }

});

client.login(process.env.token);