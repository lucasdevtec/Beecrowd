var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const x = parseInt(lines[0]);
const y = parseInt(lines[1]);
const z = parseFloat(lines[2]);

const salario = y * z;

console.log(`NUMBER = ${x}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
