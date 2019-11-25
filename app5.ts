
const OPCIONES = ''

let mensaje = "hola"

if (true){
    let mensaje = 'adios';
}

console.log(mensaje);

let nombre:string = 'hola';

let edad:Number = 123

let cajas:Array<string> = [];

cajas.push('hola')

console.log(cajas);

// dato js puro para usarlo comunmente lo hacemos con js y no ts
let cualquiera:any;

// parametros opcionales se usan el ?, los parametros obligatorios iempre al principio y no al final
function activar( quien:string, opcional:string = 'batiseñal', momento?:string ){
    let mensaje:string;

    if(momento){
        mensaje = `${quien} activo la ${opcional} en la ${momento}`;    
    }else{
        mensaje = `${quien} activo la ${opcional}`;
    }

    console.log(mensaje);
}

activar('Rene');