"use strict";
let miFuncion = function (a) {
    return a;
};
let miFundionF = (a) => a;
let miFuncion2 = function (a, b) {
    return a + b;
};
let miFuncion2F = (a, b) => a + b;
let miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
let miFuncion3F = (nombre) => nombre.toUpperCase();
const hulk = {
    nombre: 'Bruce',
    smash() {
        setTimeout(() => console.log(this.nombre + " smash!!"), 1500);
    }
};
hulk.smash();
//# sourceMappingURL=arrowFuntions.js.map