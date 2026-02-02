const readline = require("readline-sync");
const radio = parseInt(readline.question("Introduce un numero: "));

if (isNaN(radio)) {
    console.log("Error: Debes ingresar un número válido.");
    process.exit();
}

function calacularArea(radio) {
    return Math.PI * radio **2
}

const area = calacularArea(radio);

console.log("El area del circulo es ", area);