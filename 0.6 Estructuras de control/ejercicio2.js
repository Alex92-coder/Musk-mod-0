const readline = require("readline-sync");

const input = readline.question("Introduce un numero: ");

const input2 = readline.question("Introduce otro numero: ");

const input3 = readline.question("Introduce otro numero mas: ");

const num = parseInt(input);
const num2 = parseInt(input2);
const num3 = parseInt(input3);

if (num % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log("Hay al menos un número par");
} else {
    console.log("No hay números pares");
};
