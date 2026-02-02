
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}

rl.question("¿Cuántos números aleatorios quieres ordenar? ", (cantidad) => {
    cantidad = Number(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Introduce un número válido.");
        rl.close();
        return;
    }

    const arr = Array.from({ length: cantidad }, () =>
        Math.floor(Math.random() * 100000)
    );

    console.time("BubbleSort");
    bubbleSort(arr);
    console.timeEnd("BubbleSort");

    console.log("Ordenación completada.");
    rl.close();
});