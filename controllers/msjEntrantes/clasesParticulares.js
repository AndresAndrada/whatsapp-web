const clasesParticulares = (msj) => {
    if (msj === '3) clases particulares' || msj === '3)' || msj === '3' || msj === '3)clases particulares') return true;
    else return false;
};

module.exports = { clasesParticulares };