const readline = require('readline-sync');


let texto = readline.question('Escribe una matriz (por ejemplo [[0,1,2],[3,4,5],[6,7,8]]): ');


let matriz = JSON.parse(texto);


let transpuesta = [];


for (let j = 0; j < matriz[0].length; j++) {
    

    let nuevaFila = [];


    for (let i = 0; i < matriz.length; i++) {

    nuevaFila.push(matriz[i][j]);
    }


    transpuesta.push(nuevaFila);
}


console.log("Matriz original:");
console.table(matriz);

console.log("Matriz traspuesta:");
console.table(transpuesta);
