const readline = require("readline-sync");

const texto = readline.question("Introduce un texto: ");



function palabrasRepetidas(texto) {

    texto = texto.toLowerCase().replace(/[.,;:¡!¿?]/g, '');
    const palabras = texto.split(/\s+/);
    const contador = new Map();
    const repetidas = [];

    for (let palabra of palabras) {
        if (contador.has(palabra)) {
            contador.set(palabra, contador.get(palabra) + 1);
        } else {
            contador.set(palabra, 1);
        }
    }

    for (let [palabra, cuenta] of contador.entries()) {
        if (cuenta > 1) {
            repetidas.push(palabra);
        }
    }

    return repetidas;
}

const resultado = palabrasRepetidas(texto);

if (resultado.length === 0) {
    console.log("No se repiten palabras.");
} else {
console.log("Se repiten las siguientes palabras:", resultado);
};

