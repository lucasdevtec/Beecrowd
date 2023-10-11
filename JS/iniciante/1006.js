var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

const x = parseFloat(lines[0]);
const y = parseFloat(lines[1]);
const z = parseFloat(lines[2]);
const res = (2 * x + y * 3 + z * 5) / 10;

console.log(`MEDIA = ${res.toFixed(1)}`);
