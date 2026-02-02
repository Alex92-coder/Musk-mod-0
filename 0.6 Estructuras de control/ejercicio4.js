const readline = require("readline-sync");

const input = readline.question("Introduce un numero: ");

const num = parseInt(input);

if (Number.isNaN(num)) {
    console.log("No has introducido un numero");
    process.exit(1);
}

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

