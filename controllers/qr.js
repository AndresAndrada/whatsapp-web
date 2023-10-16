const qrcode = require('qrcode-terminal');


const qr = qr => qrcode.generate(qr, { small: true });

module.exports = { qr };