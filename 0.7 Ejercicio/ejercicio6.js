const readline = require('readline-sync');

const tamaño = parseInt(readline.question('Introduce el tamaño de la matriz cuadrada: '));

    function crearMatrizCuadrada(n) {
        let matriz = [];
        let contador = 1;

        for (let i = 0; i < n; i++) {
            let fila = [];

            for (let j = 0; j < n; j++) {
                fila.push(contador);
                contador++;
        }
        matriz.push(fila);
    }
    return matriz;
}

const matriz = crearMatrizCuadrada(tamaño);

let salida = '[\n';
for (let i = 0; i < matriz.length; i++) {
    salida += ' [ ' + matriz[i].join(', ') + ' ]';

    if (i < matriz.length - 1) {
        salida += ',\n';
    } else {
        salida += '\n';
    }
}

console.log(salida);