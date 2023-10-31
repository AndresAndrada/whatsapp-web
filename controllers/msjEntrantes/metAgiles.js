const metAgiles = (msj) => {
    if (msj === '1)' || msj === '1) información sobre el curso "metodologías agiles"' || msj === 'metodologías ágiles' || msj === '1' || msj === 'información sobre el curso "metodologías ágiles"' || msj === 'información sobre el curso metodologías ágiles') return true;
    else false;
};

module.exports = { metAgiles };