const { MessageMedia } = require("whatsapp-web.js");
const { saludo, chau } = require("./msjEntrantes/saludo");
const { metAgiles } = require("./msjEntrantes/metAgiles");
const { cambioClimatico } = require("./msjEntrantes/cambioClimatico");
const { clasesParticulares } = require("./msjEntrantes/clasesParticulares");
const { asesor } = require("./msjEntrantes/asesor");
const { option1A } = require("./msjEntrantes/caso1/option1A");
const { option1B } = require("./msjEntrantes/caso1/option1B");
const { option1C } = require("./msjEntrantes/caso1/option1C");
const { option3A } = require("./msjEntrantes/caso3/option3A");
const { option3B } = require("./msjEntrantes/caso3/option3B");
const { option3C } = require("./msjEntrantes/caso3/option3C");

const sendMessages = (client, { from, to, body }) => {
  const msj = body.toLowerCase();
  // console.log(msj, 'MENSAJE');

  /////////////////////////////////  CASO HOLA /////////////////////////////////////// 

  if (saludo(msj)) {
    client.sendMessage(from, `🙋 Hola, gracias por comunicarte con Personal Class. Por favor, indícanos como podemos ayudarte seleccionando una de las opciones (1, 2, 3 o 4): 
    *1)* Información sobre el curso "Metodologías Ágiles" 
    *2)* Información sobre la conferencia "Cambio climático y sostenibilidad" 
    *3)* Clases particulares 
    *4)* Contactar con un asesor`);
  };

  /////////////////////////////////  CASO 1 /////////////////////////////////////// 

  if (metAgiles(msj)) {
    client.sendMessage(from, `Claro, ¿qué tipo de información requieres sobre "Metodologías Ágiles"? 
    *1A)* Quiero acceder al curso 
    *1B)* Llevé el curso y deseo certificarme 
    *1C)* Consultar por el estado de mi certificación
    *1D)* Contactar con un aseso`);
  };

  if (option1A(msj)) client.sendMessage(from, `Claro, aquí le paso los accesos al curso de "Metodologías Ágiles", de momento solo tenemos de 
  forma asíncrona. 👉🔗 https://bit.ly/InscripcionMetodologiasAgiles
  Si desea recibir información sobre un nuevo inicio, puede unirse al grupo y mantenerse al tanto.
  👉🔗 https://bit.ly/UneteAlGrupoAgile`);
  if (option1B(msj)) client.sendMessage(from, `¡Muy buena decisión! Estos son los pasos a seguir: 
  👉🔗 https://bit.ly/PasosCertificacionAgile
󾠮 Realizar el pago por derecho de certificación 
💳 BCP:35531303682017 
💳 CCI: 00235513130368201769 
🏫 Coorporacion Edhec S.A.C | 20573897022
➖➖➖➖➖➖
 PLIN y YAPE: 921 776 591  
 🧑‍💼Edinson R. Gonzales Pérez 
 ➖➖➖➖➖➖
💰 El precio de la certificación dependerá de la opción que elija:
📃 Si es a nombre de Personal Class 
🔖 Por cualquiera de los 4 módulos (32 horas) <> S/. 60
🔖 Por los 4 módulos (128 horas) <> S/. 200 
📃 Si es a nombre de Personal Class y avalado por el Colegio de Ingenieros del Perú
🔖 Por cualquiera de los 4 módulos (32 horas) <> S/. 80
🔖 Por los 4 módulos (128 horas) <> S/. 280 
➖➖➖➖➖➖
📅 La fecha de cierre ya venció, pero aún puedo enviar la lista hasta hoy lunes 23oct  antes del mediodía 
󾠯 Enviar comprobante de transferencia a uno de los medios:
📧 edinson.gonzales@personalclass.edu.pe
📲 +51 921 776 591 
󾠰 Esperar emisión del certificado 
Una vez verificado su pago y sus datos, procesaremos su certificación y le enviaremos
su certificado según corresponda:
 El certificado a nombre de Personal Class será entregado dentro de las 48h.
 El certificado con el aval del Colegio de Ingenieros del Perú será entregados dentro de las 3 a 4 semanas siguientes después de realizar el pago`);

  if (option1C(msj)) client.sendMessage(from, `Claro que si, en breve le indicamos el estado de su certificado, me brinda su número de DNI por 
 favor.
 `);

  if (asesor(msj)) return client.sendMessage(from, `¡Por supuesto! 
 En seguida le contactamos con un asesor.`)

  /////////////////////////////////  CASO 2 /////////////////////////////////////// 

  if (cambioClimatico(msj)) client.sendMessage(from, 'Claro, aquí te paso la información sobre la conferencia "Cambio climático y sostenibilidad" 👉🔗 https://bit.ly/InscripcionCambioClimatico');

  /////////////////////////////////  CASO 3 /////////////////////////////////////// 

  if (clasesParticulares(msj)) client.sendMessage(from, `Genial, ¿para qué nivel requiere la información? 
  *3A)* Escolar 
  *3B)* Preuniversitario
  *3C)* Universitario
  *3D)* Contactar con un asesor`);

  if (option3A(msj)) client.sendMessage(from, `Claro, aquí le paso la información para clases particulares para el nivel escolar:
  👉🔗 https://wa.me/p/4380388702066378/51966660663`);

  if (option3B(msj)) client.sendMessage(from, `Claro, aquí le paso la información para clases particulares para el nivel preuniversitario:
  👉🔗 https://wa.me/p/4457215311073015/51966660663`);

  if (option3C(msj)) client.sendMessage(from, `Claro, aquí le paso la información para clases particulares para el nivel universitario:
  👉🔗 https://wa.me/p/6983117651700203/51966660663`);

  /////////////////////////////////  CASO 4 /////////////////////////////////////// 

  if (asesor(msj)) return client.sendMessage(from, `Por supuesto!
  En seguida le contactamos con un asesor. 👌`);


  if (particular(msj)) client.sendMessage(from, ``)
  if (msj === 'quiero info') {
    const msjMedia = MessageMedia.fromFilePath('./multimedia/img.jpeg');
    client.sendMessage(from, 'Te envio la info')
    client.sendMessage(from, msjMedia);
  };
  if (chau(msj)) client.sendMessage(from, 'Hasta pronto!');
}

module.exports = { sendMessages };