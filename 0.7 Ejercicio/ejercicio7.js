const readline = require("readline-sync");

const entrada = readline.question("Introduce un texto: ");

function TextoDeMatriz(entrada) {
    const palabras = entrada.split(/\s+/);
    const ancho = 5;
    const matriz = [];

    for (let i = 0; i < palabras.length; i += ancho) {
        const fila = palabras.slice(i, i + ancho);
        matriz.push(fila);
    }
    return matriz;
} 


const resultado = TextoDeMatriz(entrada);

console.log(resultado);