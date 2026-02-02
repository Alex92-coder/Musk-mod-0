const readline = require("readline-sync");

const numero = parseInt(readline.question("Introduce un número: "));


function esPrimo(n) {
    if (n <= 1) return false;              
    
    if (n === 2) return true;             
    
    if (n % 2 === 0) return false;         
    

    
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;                 
            
        }
    }

    return true;                           
    
}

if (esPrimo(numero)) {
    console.log(`${numero} es primo.`);
} else {
    console.log(`${numero} NO es primo.`);
}
