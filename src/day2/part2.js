const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf8");
let reports = [];

input
    .trim()
    .split("\n")
    .forEach((line) => {
        reports.push(line.trim().split(" ").map(Number));
    });

let safeReports = 0;
reports.forEach((report) => {
    if (isReportSafe(report, true)) {
        safeReports = safeReports + 1;
    }
});
console.log(safeReports);

function isReportSafe(report, allowBadLevel) {
    for (let i = 0; i < report.length - 1; i++) {
        const currentLevel = report[i];
        const nextLevel = report[i + 1];
        const isLevelIncreasing = currentLevel < nextLevel;
        const difference = Math.abs(currentLevel - nextLevel);

        if (
            isLevelIncreasing !== isReportIncreasing(report) ||
            difference < 1 ||
            difference > 3
        ) {
            if (allowBadLevel) {
                const reportVariations = [
                    [...report.slice(0, i), ...report.slice(i + 1)],
                    [...report.slice(0, i + 1), ...report.slice(i + 2)],
                ];
                return reportVariations.some((adjusted) =>
                    isReportSafe(adjusted, false),
                );
            } else {
                return false;
            }
        }
    }

    return true;
}

function isReportIncreasing(numbers) {
    // Calculate differences between consecutive numbers
    const differences = [];
    for (let i = 1; i < numbers.length; i++) {
        differences.push(numbers[i] - numbers[i - 1]);
    }

    // Count positive and negative differences
    let positiveCount = 0;
    let negativeCount = 0;

    for (const diff of differences) {
        if (diff > 0) positiveCount++;
        else if (diff < 0) negativeCount++;
    }

    // Decide whether the report is increasing or not
    if (positiveCount > negativeCount) return true;
    else if (negativeCount > positiveCount) return false;
}
