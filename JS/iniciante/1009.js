var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const x = lines[0];
const salario = parseFloat(lines[1]);
const vendas = parseFloat(lines[2]);

const adicional = (vendas * 15) / 100;
const novoSalario = salario + adicional;

console.log(`TOTAL = R$ ${novoSalario.toFixed(2)}`);
