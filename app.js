const { qr } = require('./controllers/qr');
const { ready } = require('./controllers/ready');
const { sendMessages } = require('./controllers/sendMessage');
// const client = new Client();
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" })
});
// console.log(client);
client.on('qr', qr);
client.on('ready', ready);
client.on('message', (message) => {
    sendMessages(client, message);
});

client.initialize();