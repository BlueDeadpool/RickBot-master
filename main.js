const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
  return msg.content.toLowerCase().startsWith("!" + str);
}

function pluck(array) {
  return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
  if(pluck(mem.roles).includes(role)){
    return true;
  } else {
    return false;
  }
}

client.on('ready', () => {
    console.log('WUBBA LUBBA DUB DUB!');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    if(commandIs("ping", message)){
      message.channel.sendMessage("D-don't ever fucking ping me, Morty.");
    }
    if(commandIs("rick", message)){
      if(hasRole(message.member, "Ricktastic")){
        if(args.length === 1){
          message.channel.sendMessage("Say something, you-you little Morty.");
        } else {
        message.channel.sendMessage(args.join(" ").substring(5));
      }
    }
  }
});

client.login('MjkwMzAxNjg1MTYxNzg3Mzkz.C6ZBBA.bCgnY8LWqYf1B9SHO9YH6_ab0tQ');
