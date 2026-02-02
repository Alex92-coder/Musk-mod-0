const readline = require('readline-sync');

const entrada = readline.question("Introduce una lista de elementos separados por comas: ");


const listaDeElementos = entrada.split(',');

verificarElementosUnicos(listaDeElementos);

function verificarElementosUnicos(lista) {
const elementosVistos = [];
const elementosRepetidos = [];

for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i].trim();

    if (elementosVistos.includes(elemento)) {
    if (!elementosRepetidos.includes(elemento)) {
        elementosRepetidos.push(elemento);
    }
    } else {
    elementosVistos.push(elemento);
    }
}

if (elementosRepetidos.length === 0) {
    console.log("Todos los elementos son únicos.");
} else {
    console.log("Hay elementos repetidos.");
    console.log("Elementos repetidos: " + elementosRepetidos.join(', '));
}
};