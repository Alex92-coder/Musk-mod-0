const readline = require("readline-sync");

const inputAltura = readline.question("Introduce la altura del rectangulo: ");
const inputAnchura = readline.question("Introduce la anchura del rectangulo: ");

const altura = parseInt(inputAltura, 10);
const anchura = parseInt(inputAnchura, 10);

if (Number.isNaN(altura) || Number.isNaN(anchura)) {
    console.log("Error: Debes introducir números válidos para la altura y la anchura.")
    process.exit(1);
}

if (anchura === 1) {
    for (let i = 0; i < altura; i++) {
        console.log("*");
    }
    process.exit(0);
}

if (altura === 1) {
    console.log("*".repeat(anchura));
    process.exit(0);
}

const filaCompleta = "*".repeat(anchura);
const filaIntermedia = "*" + " ".repeat(anchura - 2) + "*";

console.log(filaCompleta);
for (let i = 0; i < altura -2; i++) {
    console.log(filaIntermedia);
}
console.log(filaCompleta);