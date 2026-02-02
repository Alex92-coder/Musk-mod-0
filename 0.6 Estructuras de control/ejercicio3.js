const readline = require("readline-sync");

const input = readline.question("Introduce un numero: ");

const num = parseInt(input);

if (isNaN(num)) {
    console.log("Por favor, introduce un número válido.");
    process.exit(1);
}

if (num < 0) {
    console.log("El factorial no está definido para números negativos.");
    process.exit(1);
}

let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("El factorial de " + num + " es: " + factorial);