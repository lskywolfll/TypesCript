export {};

const avenger = {
    nombre: 'Steve',
    clave: 'Capitan America',
    poder: 'Droga'
};

// TS no te deja poner por alguna razon el nombre nombre de variable que este en otro archivo, seguramente es por alguna cosa 
// Se soluciona exportando {}, al inicio para redeclarar variables repetidas en diferentes archivos ya que esta funcionalidad ya esta por defecto en ts
let { nombre, clave, poder} = avenger;

console.log(nombre, clave, poder);

let avengers:string[] = ["thor", "Steve", "Tony"];

let [ thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);