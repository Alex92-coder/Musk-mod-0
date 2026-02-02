const readline = require("readline-sync");

const input = readline.question("Introduce la altura del triangulo: ");

const altura = parseInt(input, 10);

if (Number.isNaN(altura) || altura <= 0) {
    console.log("No has introducido un numero valido");
    process.exit(1);
}

for (let i = 1; i <= altura; i++) {
    const espacios = altura - i; 
    const asteriscos = 2 * i - 1;
    const linea = " ".repeat(espacios) + "*".repeat(asteriscos);
    console.log(linea);
}

