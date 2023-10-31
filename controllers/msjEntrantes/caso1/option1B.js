const option1B = (msj) => {
    if (msj === '1b' || msj === '1b)' || msj === '1b) ' || msj === 'llevé el curso y deseo certificarme' || msj === 'lleve el curso y deseo certificarme' || msj === '1b) llevé el curso y deseo certificarme' || msj === '1b) lleve el curso y deseo certificarme' || msj === '1b)llevé el curso y deseo certificarme' || msj === '1b)lleve el curso y deseo certificarme') return true;
    else false;
};

module.exports = { option1B };