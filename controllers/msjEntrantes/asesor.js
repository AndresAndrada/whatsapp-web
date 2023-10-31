const asesor = (msj) => {
    if (msj === '4) contactar con un asesor' || msj === '4)contactar con un asesor' || msj === '4)' || msj === '4' || msj === '1d' || msj === '1d)' || msj === '1d) Contactar con un asesor' || msj === '1d)Contactar con un asesor' || msj === '3d' || msj === '3d ' || msj === '3d)' || msj === '3d) ' || msj === '3d) contactar con un asesor' || msj === '3d)contactar con un asesor') return true;
    else return false;
};

module.exports = { asesor };