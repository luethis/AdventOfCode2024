const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

let list1 = [];
let list2 = [];

input.split("\n").forEach((line) => {
    const split = line.split("   ");
    list1.push(split[0]);
    list2.push(split[1]);
});

part2(list1, list2);

function part2(list1, list2) {
    let score = 0;

    list1.forEach((num1) => {
        const count = list2.filter((num) => num === num1).length;
        score = score + count * num1;
    });

    console.log(score);
}
