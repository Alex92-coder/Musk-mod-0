const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function frecuenciaCaracteres(texto) {
    texto = texto.toLowerCase();
    const mapa = new Map();

    for (let caracter of texto) {
        if (mapa.has(caracter)) {
            mapa.set(caracter, mapa.get(caracter) + 1);
        } else {
            mapa.set(caracter, 1);
        }
    }

    return mapa;
}

rl.question("Introduce un texto: ", function(texto) {
    console.log("Mapa de frecuencias:");
    console.log(frecuenciaCaracteres(texto));
    rl.close();
});
