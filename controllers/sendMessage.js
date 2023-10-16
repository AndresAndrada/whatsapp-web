const { MessageMedia } = require("whatsapp-web.js");

const sendMessages = ({ from, to, body }) => {
  console.log(from, 'FROM', body, 'MENSAJEEEEEEECAECEA');
  // client.sendMessage(from, 'Hola! Buen día!')
  if (body.toLocaleLowerCase() === 'hola') {
    client.sendMessage(from, 'Te envio mensaje desde la app');
  }
  if (body.toLocaleLowerCase() === 'quiero info') {
    console.log('MEDIA');
    const msjMedia = MessageMedia.fromFilePath('./multimedia/img.jpeg');
    console.log('MEDIA2');
    client.sendMessage(from, 'Te envio la info')
    client.sendMessage(from, msjMedia);
  };
}

module.exports = { sendMessages };