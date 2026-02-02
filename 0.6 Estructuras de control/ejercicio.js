const readline = require("readline-sync");

const input = readline.question("Introduce un numero: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.log("No has introducido un numero");
} else {
console.log("El numero introducido es:" + num);
}