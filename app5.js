"use strict";
const OPCIONES = '';
let mensaje = "hola";
if (true) {
    let mensaje = 'adios';
}
console.log(mensaje);
let nombre = 'hola';
let edad = 123;
let cajas = [];
cajas.push('hola');
console.log(cajas);
// dato js puro para usarlo comunmente lo hacemos con js y no ts
let cualquiera;
// parametros opcionales se usan el ?, los parametros obligatorios iempre al principio y no al final
function activar(quien, opcional = 'batiseñal', momento) {
    let mensaje;
    if (momento) {
        mensaje = `${quien} activo la ${opcional} en la ${momento}`;
    }
    else {
        mensaje = `${quien} activo la ${opcional}`;
    }
    console.log(mensaje);
}
activar('Rene');
//# sourceMappingURL=app5.js.map