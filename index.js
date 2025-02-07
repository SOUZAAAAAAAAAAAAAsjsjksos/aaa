const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {

    console.clear();

    console.log(`${client.user.tag} - presença rica iniciada!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1298698242959216680') //não altere isso
    .setType('PLAYING') //isso pode ser alterado para LISTENING, PLAYING
    .setURL('https://twitch.tv/zinxinchao') //cole o link do TWITCH se o tipo acima estiver como STREAMING
    .setState('Na Minecraft 1.8.9') //status, se estiver como PLAYING ou STREAMING, ou ouvindo se for LISTENING
    .setName('Lunar Client') //nome se estiver no modo PLAYING, LISTENING
    .setDetails('Jogando no MushMC') //detalhes se estiver no modo STREAMING
    .setStartTimestamp(Date.now()) //hora de início
      .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1337238498897563699/1337432900383014973/mush.png?ex=67a76cf3&is=67a61b73&hm=d50c5a91ce906bc92b78229e54e33d34d4e74ad2d96c5acf8e14afb9f8e24da9&') //imagem grande (formato .png ou .gif)
    // .setAssetsLargeText('Cabeça nas Nuvens') //nome da imagem grande
  
.setAssetsSmallImage('https://cdn.discordapp.com/attachments/1337238498897563699/1337432890929057922/1139991643186020364.png?ex=67a76cf1&is=67a61b71&hm=b5ce1d29de80924760cef4289f5aaa5b29e5f6bac305d37c4a84a9d6a4923658&') //imagem pequena (formato .png ou .gif)
//.setAssetsSmallText('Erro 404') //nome da imagem pequena
    //A imagem pequena pode ter problemas ao ser exibida em laptops ou PCs, então não é recomendada
  
    // .addButton('Escola Avocado🥑', 'https://discord.gg/aavocadoschool') //botão 1
    // .addButton('Contato no Facebook', 'https://www.facebook.com/hi.i.am.tqv.1706') //botão 2
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" }); //status (online, dnd, idle)
})

client.login('Nzc1MzYyNDQ5NDQ0NDM4MDI3.G74crP.P6jzxHmvtRrvejxtmkOf824XJgQ9nF2_y0Ozvk')
