const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");

const result = omniSearch(input, /XMAS/g) + omniSearch(input, /SAMX/g);
console.log(result);

function omniSearch(input, regex) {
    let total = 0;
    const normal = input.match(regex).length;
    total += normal;
    console.log("normal", normal);

    // shift 45
    const rotated45 = readDiagonal(input).match(regex).length;
    total += rotated45;
    console.log("rotated 45", rotated45);

    // shift 90
    const rotated90 = rotate90(input).match(regex).length;
    total += rotated90;
    console.log("rotated 90", rotated90);

    // shift 135
    const rotated135 = readDiagonal(mirror(input)).match(regex).length;
    total += rotated135;
    console.log("rotated 135", rotated135);

    return total;
}

function readDiagonal(input) {
    const lines = input.split("\n");
    const lineLength = lines[0].length;

    let diagonal = [];

    // read diagonal from top right
    for (let i = 0; i < lineLength; i++) {
        let line = "";
        for (let i2 = lineLength - i; i2 <= lineLength; i2++) {
            const lineIndex = i2 - (lineLength - i);
            line += lines[lineIndex][i2 - 1];
        }
        diagonal.push(line);
    }

    for (let i = 1; i < lines.length; i++) {
        let line = "";
        for (let i2 = 0; i2 < lineLength; i2++) {
            const nextLine = lines[i + i2];
            if (nextLine) {
                line += nextLine[i2];
            }
        }
        diagonal.push(line);
    }

    return diagonal.join("\n");
}

function rotate90(input) {
    const lines = input.split("\n");
    let rotated = [];
    for (let i = 0; i < lines[0].length; i++) {
        rotated.push(lines.map((line) => line[i]).join(""));
    }
    return rotated.join("\n");
}

function mirror(input) {
    return input
        .split("\n")
        .map((line) => line.split("").reverse().join(""))
        .join("\n");
}
