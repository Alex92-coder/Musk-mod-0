const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce una palabra: ", function (palabra) {
const stack = [];


    for (let char of palabra) {
    stack.push(char);
    }


let invertida = "";
while (stack.length > 0) {
    invertida += stack.pop();
}

console.log(`La palabra invertida es "${invertida}".`);
rl.close();
});