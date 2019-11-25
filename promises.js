"use strict";
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promesa terminada");
        // resolve();
        reject();
    }, 1500);
});
prom1
    .then(() => console.log("Ejecutarme cuando se termine bien!"))
    .catch(err => console.error(err));
//# sourceMappingURL=promises.js.map