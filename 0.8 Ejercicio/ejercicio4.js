const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sonAnagramas(p1, p2) {
    
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();

    
    p1 = p1.replace(/\s+/g, "");
    p2 = p2.replace(/\s+/g, "");

    
    if (p1.length !== p2.length) return false;

    
    const mapa = new Map();

    
    for (let letra of p1) {
    mapa.set(letra, (mapa.get(letra) || 0) + 1);
    }

    
    for (let letra of p2) {
    if (!mapa.has(letra)) return false; 
    
    mapa.set(letra, mapa.get(letra) - 1);
    if (mapa.get(letra) < 0) return false; 
    
    }

    return true;
}

rl.question("Introduce una palabra: ", (p1) => {
    rl.question("Introduce otra palabra: ", (p2) => {
    if (sonAnagramas(p1, p2)) {
        console.log("Las palabras son anagramas.");
    } else {
        console.log("Las palabras NO son anagramas.");
    }
    rl.close();
    });
});
