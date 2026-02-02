const redaline = require('readline-sync');

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let intentos = 0;
let adivinado = false;

do {
    const numeroUsuario = redaline.question("Adivina el número entre 1 y 10: ");
    const numero = parseInt(numeroUsuario, 10);

    if (isNaN(numero) || numero < 1 || numero > 10) {
        console.log("Por favor, ingresa un número válido entre 1 y 10.");
        continue;
    }

    intentos++;

    if (numero === numeroAleatorio) {
        adivinado = true;
        console.log(`¡Felicidades! Has adivinado el número ${numeroAleatorio} en ${intentos} intentos.`);
    } else if (numero < numeroAleatorio) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else {
        console.log("El número es menor. Intenta de nuevo.");
    }
} while (!adivinado);