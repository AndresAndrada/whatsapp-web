// const qrcode = require('qrcode-terminal');

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const { qr } = require('./controllers/qr');
const { ready } = require('./controllers/ready');
const { sendMessages } = require('./controllers/sendMessage');
const client = new Client();
// const client = new Client({
//     authStrategy: new LocalAuth()
// });

client.on('qr', qr);
client.on('ready', ready);
client.on('message', message => {
    const { from, to, body } = message;
    console.log(from, 'FROM', body, 'MENSAJEEEEEEECAECEA');
    // client.sendMessage(from, 'Hola! Buen día!')
    if (body.toLocaleLowerCase() === 'hi') {
        client.sendMessage(from, '🙋 Hola, te saluda *Edinson* de *Personal Class*'); 
    }
    if (body.toLocaleLowerCase() === 'quiero info') {
        const msjMedia = MessageMedia.fromFilePath('./multimedia/img.jpeg');
        client.sendMessage(from, 'Te envio la info')
        client.sendMessage(from, msjMedia);
    };
});
client.initialize();