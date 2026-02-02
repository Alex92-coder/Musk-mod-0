const readline = require("readline-sync");

const input = readline.question("Introduce una frase: ");

const esNumero = !isNaN(input) && isFinite(input);

if (esNumero) {
    console.log("Por favor, introduce una frase válida, no un número.");
    process.exit(1);
} else {
const texto = input.toLowerCase();
const vocales = "aeiouáéíóú";
let contador = 0;

for (let letra of texto) 
    if (vocales.includes(letra)) {
        contador++;
    }

console.log("El numero de vocales es: " + contador)
}