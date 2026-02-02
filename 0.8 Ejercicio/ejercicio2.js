/*const readline = require("readline-sync");

const array1 = readline.question("Introduce una matriz de numeros: ");
const array2 = readline.question("Introduce otra matriz de numeros: ");


function diferenciaArrays(array1, array2) {
    
    const set2 = new Set(array2);
    const resultado = [];

    
    for (let numero of array1) {
        if (!set2.has(numero)) {
            resultado.push(numero);
        }
    }

    return resultado;
}
const diferencias = diferenciaArrays(array1, array2);

if (diferencias.length === 0) {
    console.log("No hay diferencias entre ambos conjuntos");
} else {
console.log("La diferencia de ambos conjuntos es", diferencias);
} */

const readline = require("readline-sync");

// Función para convertir texto a array numérico
function convertirAArray(texto) {
    return texto
        .split(/[\s,.;:]+/)   // separa por coma, punto, espacio, etc.
        .map(Number)          // convierte a número
        .filter(n => !isNaN(n)); // elimina valores no numéricos
}

function diferenciaArrays(array1, array2) {
    const set2 = new Set(array2);
    const resultado = [];

    for (let numero of array1) {
        if (!set2.has(numero)) {
            resultado.push(numero);
        }
    }

    return resultado;
}

// Preguntar si quiere usar valores aleatorios
const modo = readline.question("¿Quieres usar valores aleatorios? (s/n): ");

let array1, array2;

if (modo.toLowerCase() === "s") {
    const cantidad = Number(readline.question("¿Cuántos números aleatorios?: "));

    array1 = Array.from({ length: cantidad }, () => Math.floor(Math.random() * 100));
    array2 = Array.from({ length: cantidad }, () => Math.floor(Math.random() * 100));

    console.log("Array 1:", array1);
    console.log("Array 2:", array2);

} else {
    const texto1 = readline.question("Introduce una matriz de números: ");
    const texto2 = readline.question("Introduce otra matriz de números: ");

    array1 = convertirAArray(texto1);
    array2 = convertirAArray(texto2);
}

const diferencias = diferenciaArrays(array1, array2);

if (diferencias.length === 0) {
    console.log("No hay diferencias entre ambos conjuntos");
} else {
    console.log("La diferencia de ambos conjuntos es:", diferencias);
}