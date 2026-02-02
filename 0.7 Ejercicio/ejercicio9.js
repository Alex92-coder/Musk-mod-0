// const readline = require("readline-sync");

// const n = readline.question("Introduce el tamaño de la matriz cuadrada: ");

const n = 3;

function matrizDeProductos(n) {
    let matriz = [];


    for (let i = 0; i < n; i++) {
        let fila = [];
        for (let j = 0; j < n; j++){
            fila.push( i * j);
        }
        matriz.push(fila);
    }

        return matriz;
}

const matriz = matrizDeProductos(n);

let salida = '[\n';
for (let i = 0; i < matriz.length; i++) {
    salida += ' [ ' + matriz[i].join(', ') + ' ]';

    if (i < matriz.length - 1) {
        salida += ',\n';
    } else {
        salida += '\n';
    }
}
    salida += ']';

console.log(salida);