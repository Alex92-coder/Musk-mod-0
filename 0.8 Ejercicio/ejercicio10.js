const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function secuenciaValida(texto) {
    const pila = [];

    const pares = {
    ')': '(',
    ']': '[',
    '}': '{'
    };

    for (let caracter of texto) {
        
    if (caracter === '(' || caracter === '[' || caracter === '{') {
        pila.push(caracter);
    }
    
    
    else if (caracter === ')' || caracter === ']' || caracter === '}') {
        const ultimo = pila.pop();

        if (ultimo !== pares[caracter]) {
        return false;
        }
    }
    }

    return pila.length === 0;   

}

rl.question("Introduce una secuencia: ", (texto) => {
    if (secuenciaValida(texto)) {
    console.log("Secuencia correcta.");
    } else {
    console.log("Secuencia incorrecta.");
    }
    rl.close();
});
