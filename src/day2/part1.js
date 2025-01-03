const fs = require("fs");

let input = fs.readFileSync("day2/input.txt", "utf8");

// bring input into a usable format
let reports = [];
input
    .trim()
    .split("\n")
    .forEach((line) => {
        reports.push(line.trim().split(" ").map(Number));
    });

// count safe reports
let safeReports = 0;
reports.forEach((report) => {
    if (isReportSafe(report)) {
        safeReports = safeReports + 1;
    }
});
console.log(safeReports);

function isReportSafe(report) {
    const isReportIncreasing = report[0] < report[1];

    for (let i = 0; i < report.length - 1; i++) {
        const level = report[i];
        const nextLevel = report[i + 1];
        const isLevelIncreasing = level < nextLevel;

        if (isLevelIncreasing !== isReportIncreasing) {
            return false;
        }

        const levelDifference = Math.abs(level - nextLevel);
        if (levelDifference < 1 || levelDifference > 3) {
            return false;
        }
    }
    return true;
}
