const option1A = (msj) => {
    if (msj === '1a) quiero acceder al curso' || msj === '1a)quiero acceder al curso' || msj === '1aquiero acceder al curso' || msj === '1a- quiero acceder al curso' || msj === '1a-quiero acceder al curso' || msj === '1a)' || msj === 'quiero acceder al curso' || msj === '1a') return true;
    else return false;
};

module.exports = { option1A };