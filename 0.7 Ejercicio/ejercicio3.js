const readline = require("readline-sync");

const entrada = readline.question("Introduce un radio: ");

const num = parseInt(entrada);

function calcularCircunferencia(num) {
    return Math.PI * num * 2;
}

function calacularArea(num) {
    return Math.PI * num ** 2;
}

const circunferencia = calcularCircunferencia(num);
const area = calacularArea(num);

console.log("La Circunferencia es ", circunferencia);
console.log("El area del circulo es ", area)