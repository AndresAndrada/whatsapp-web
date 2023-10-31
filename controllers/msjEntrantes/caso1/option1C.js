const option1C = (msj) => {
    if (msj === '1c)' || msj === '1c' || msj === '1c) consultar por el estado de mi certificación' || msj === '1c)consultar por el estado de mi certificación' || msj === '1c-consultar por el estado de mi certificación' || msj === '1c- consultar por el estado de mi certificación' || msj === 'consultar por el estado de mi certificación') return true;
    else return false;
};

module.exports = { option1C };