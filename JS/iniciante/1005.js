var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const x = parseFloat(lines[0]);
const y = parseFloat(lines[1]);
const res = (x * 3.5 + y * 7.5) / 11;

console.log(`MEDIA = ${res.toFixed(5)}`);
