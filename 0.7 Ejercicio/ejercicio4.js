
const readline = require('readline-sync');

const num = readline.question("Introduce una lista de Numeros: ");

const numeros = num.split(',').map(function(elemento) {
    return Number(elemento);
});


let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
};

const media = suma / numeros.length;

console.log("La suma de los numeros es: " + suma);
console.log("La media aritmética de los numeros es: " + media);