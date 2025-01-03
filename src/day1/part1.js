const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

let list1 = [];
let list2 = [];

input.split("\n").forEach((line) => {
    const split = line.split("   ");
    list1.push(split[0]);
    list2.push(split[1]);
});

part1(list1, list2);

function part1(list1, list2) {
    list1 = list1.sort();
    list2 = list2.sort();

    let counter = 0;

    list1.map((num, index) => {
        counter = counter + Math.abs(num - list2[index]);
    });

    console.log(counter);
}
