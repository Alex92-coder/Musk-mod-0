const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function estanBalanceados(texto) {
    let contador = 0;

    for (let caracter of texto) {

    if (caracter === "(") {
        contador++;
    } else if (caracter === ")") {
        contador--;

    
        
        if (contador < 0) {
        return false;
        }
    }
    }

    
    return contador === 0;
}

rl.question("Introduce un texto: ", (texto) => {
    if (estanBalanceados(texto)) {
    console.log("Están balanceados.");
    } else {
    console.log("NO están balanceados.");
    }
    rl.close();
});
