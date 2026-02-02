const readline = require("readline-sync");

const input = readline.question("Introduce un año: ");

const num = parseInt(input);

if ((num % 4 === 0) && (num % 100 !== 0) || (num % 400 === 0)) {
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
};