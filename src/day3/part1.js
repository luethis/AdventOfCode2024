const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

let match;
let totalSum = 0;

// Iterate through all matches
while ((match = regex.exec(input)) !== null) {
    totalSum += parseInt(match[1]) * parseInt(match[2]);
}

console.log(totalSum);
