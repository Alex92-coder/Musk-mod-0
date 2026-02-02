const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let multiplicados = [];

for (let i = 0; i < fibonacci.length; i++) {
  multiplicados.push(fibonacci[i] * 2);
}

console.log("Fibonacci multiplicado por 2:", multiplicados);
