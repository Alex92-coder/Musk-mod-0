const readline = require('readline-sync');

const text = readline.question('Introduce un texto: ');

function esPalindromo(text) {
    
    let limpio = text
        .normalize("NFC")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}]/gu, '')

    
    
    limpio = limpio.replace(/\s+/g, '').trim();

    let inversion = limpio
        .split("")
        .reverse()
        .join("");

    console.log("Texto limpio:    ", limpio);
    console.log("Texto invertido: ", inversion);

    if (limpio === inversion) {
        console.log("Es Palíndromo");
    } else {
        console.log("No es Palíndromo");
    }
}

esPalindromo(text);
