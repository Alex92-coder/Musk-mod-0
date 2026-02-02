const readline = require("readline-sync");

const altura = parseInt(readline.question("Altura: "), 10);
const anchura = parseInt(readline.question("Anchura: "), 10);

if (Number.isNaN(altura) || Number.isNaN(anchura)) {
    console.log("Error: introduce números válidos.");
    process.exit(1);
}

if (altura < 1 || anchura < 1) {
    console.log("Error: la altura y la anchura deben ser al menos 1.");
    process.exit(1);
}
if (anchura === 1) {
    for (let i = 0; i < anchura; i++) {
        console.log("*");
    }
    process.exit(0);
}

if (altura === 1) {
    for (let i = 0; i < altura; i++) {
    console.log("*".repeat(anchura));
    process.exit(0);
    }
}

const filaCompleta = "*".repeat(anchura);
const filaIntermedia = "*" + " ".repeat(anchura - 2) + "*";

console.log(filaCompleta);
for (let i = 1; i < altura - 1; i++) {
    console.log(filaIntermedia);
}
console.log(filaCompleta);