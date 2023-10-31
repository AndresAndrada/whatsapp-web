const cambioClimatico = (msj) => {
    if (msj === '2' || msj === '2)' || msj === '2) información sobre la conferencia "cambio climático y sostenibilidad"' || msj === '2) informacion sobre la conferencia "cambio climatico y sostenibilidad"' || msj === '2) "cambio climático y sostenibilidad"' || msj === '"cambio climático y sostenibilidad"') return true;
    else false;
};

module.exports = { cambioClimatico };