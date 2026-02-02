const readline = require("readline");


function quicksort(arr) {
    if (arr.length <= 1) return arr;

    const pivote = arr[arr.length - 1];
    const menores = [];
    const mayores = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivote) {
            menores.push(arr[i]);
        } else {
            mayores.push(arr[i]);
        }
    }

    return [...quicksort(menores), pivote, ...quicksort(mayores)];
}


function generarArray(tamano) {
    const arr = [];
    for (let i = 0; i < tamano; i++) {
        arr.push(Math.floor(Math.random() * 100000));
    }
    return arr;
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántos números aleatorios quieres ordenar? ", (input) => {
    const N = Number(input);

    if (isNaN(N) || N <= 0) {
        console.log("Introduce un número válido.");
        rl.close();
        return;
    }

    const array = generarArray(N);
    console.log(`Ordenando ${N} elementos...`);

    const inicio = Date.now();
    quicksort(array);
    const fin = Date.now();

    const tiempo = ((fin - inicio) / 1000).toFixed(3);

    console.log(`El algoritmo quicksort ha tardado ${tiempo} segundos en ordenar ${N} elementos.`);

    rl.close();
});