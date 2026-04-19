require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content === '!ping') {
    message.reply('Pong! 🏓');
  }
});

client.login(process.env.TOKEN)
  .then(() => console.log('Login bem sucedido!'))
  .catch(err => console.error('Erro no login:', err.message));

const http = require('http');
const PORT = process.env.PORT || 8080;
http.createServer((req, res) => res.end('Bot online!')).listen(PORT);
