const readline = require("readline-sync");

const num = readline.question("Introduce un radio: ");

if (isNaN(num)) {
    console.log("Error: Debes ingresar un número válido.");
    process.exit();
}

const radio = parseInt(num);

function calcularCircunferencia(radio) {
    return Math.PI * 2 * radio;
}

const circunferencia = calcularCircunferencia(radio);

console.log("La circunferencia es", circunferencia);

