const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

const regex = /mul\((\d{1,3}),(\d{1,3})\)|don't\(\)|do\(\)/g;

let match;
let totalSum = 0;
let enabled = true;

// Iterate through all matches
while ((match = regex.exec(input)) !== null) {
    if (match[0] === "do()") {
        enabled = true;
    } else if (match[0] === "don't()") {
        enabled = false;
    } else if (enabled) {
        totalSum += parseInt(match[1]) * parseInt(match[2]);
    }
}

console.log(totalSum);
