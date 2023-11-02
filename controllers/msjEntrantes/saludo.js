const saludo = (msj) => {
    console.log(msj, 'MSJ');
    if (msj === 'hi' || msj === 'hola' || msj === 'hol' || msj === 'ola' || msj === 'hello' || msj === 'hola, por favor información para *clases particulares*.') return true;
    else return false;
};

const chau = (msj) => {
    if (msj === 'adios' || msj === 'adiós' || msj === 'muchas gracias') return true;
    else return false;
};

module.exports = { saludo, chau };