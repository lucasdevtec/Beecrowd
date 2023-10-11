const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const linhaUm = lines[0].split(" ");
const linhaDois = lines[1].split(" ");

const totalLinUm = parseFloat(linhaUm[1]) * parseFloat(linhaUm[2]);
const totalLinDois = parseFloat(linhaDois[1]) * parseFloat(linhaDois[2]);

const total = totalLinDois + totalLinUm;

console.log("VALOR A PAGAR: R$", total.toFixed(2));
