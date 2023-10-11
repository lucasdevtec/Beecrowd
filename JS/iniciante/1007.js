var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const w = parseInt(lines[0]);
const x = parseInt(lines[1]);
const y = parseInt(lines[2]);
const z = parseInt(lines[3]);

console.log(`DIFERENCA = ${w * x - y * z}`);
