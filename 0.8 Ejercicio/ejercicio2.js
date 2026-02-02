const readline = require("readline-sync");

function convertirAArray(texto) {
    return texto
        .split(/[\s,.;:]+/)  
        .map(Number)          
        .filter(n => !isNaN(n)); 
}


function diferenciaArrays(a1, a2) {
    return a1.filter(num => !a2.includes(num));
}


const texto1 = readline.question("Introduce el primer array de números: ");
const texto2 = readline.question("Introduce el segundo array de números: ");

const array1 = convertirAArray(texto1);
const array2 = convertirAArray(texto2);

console.log("Array 1:", array1);
console.log("Array 2:", array2);

const resultado = diferenciaArrays(array1, array2);

console.log("La diferencia de ambos conjuntos es:", resultado);