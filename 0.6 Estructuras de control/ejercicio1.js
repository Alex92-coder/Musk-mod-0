const readline = require("readline-sync");

const input = readline.question("Introduce un numero: ");

const num = parseInt(input, 10);

if (isNaN(num)) {
    console.log("No has introducido un número válido.");
} else if (num % 2 === 0 && num >= 0) {
    console.log("El número es par y positivo.");
} else if (num % 2 !== 0 && num >= 0) {
    console.log("El número es impar y positivo.");
} else if (num % 2 === 0 && num < 0) {
    console.log("El número es par y negativo.");
} else {
    console.log("El número es impar y negativo.");
}
