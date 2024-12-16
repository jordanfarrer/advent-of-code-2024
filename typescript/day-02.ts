import { getInput } from "./utils";

// const INPUT_FILE = "../inputs/day-02-example.txt";
const INPUT_FILE = "../inputs/day-02-1.txt";

const input = getInput(INPUT_FILE);

const isSafe2 = (inputLevels: number[], allowedErrorCount = 0) => {
  if (inputLevels.length === 0) {
    return false;
  }

  const getLevelChecks = (levels: number[]) =>
    levels.map((x, i) => {
      const shouldIncrease = (levels.at(0) ?? 0) < (levels.at(-1) ?? 0);
      const shouldDecrease = (levels.at(0) ?? 0) > (levels.at(-1) ?? 0);
      let isValid = shouldIncrease || shouldDecrease;
      const prev = i > 0 ? levels[i - 1] : undefined;
      const next = i < levels.length - 1 ? levels[i + 1] : undefined;
      if (shouldIncrease && prev && x < prev) {
        isValid = false;
      }
      if (shouldDecrease && prev && x > prev) {
        isValid = false;
      }

      if (isValid && prev) {
        isValid = Math.abs(x - prev) >= 1 && Math.abs(x - prev) <= 3;
      }

      if (isValid && next) {
        isValid = Math.abs(x - next) >= 1 && Math.abs(x - next) <= 3;
      }

      return isValid;
    });

  const originalChecks = getLevelChecks(inputLevels);

  if (originalChecks.every((x) => x)) {
    return true;
  }

  if (allowedErrorCount > 0) {
    let isValid = false;
    for (let i = 0; i < inputLevels.length; i++) {
      const withoutInvalid = inputLevels.filter((_y, j) => j !== i);
      if (isSafe2(withoutInvalid, allowedErrorCount - 1)) {
        isValid = true;
        break;
      }
    }
    return isValid;
  }

  return false;
};

// PART 1
//------------------------------------------------------------------------------

const reports = input
  .split("\n")
  .map((x) => x.split(" ").map((y) => parseInt(y)));

const safeReports = reports.filter((x) => isSafe2(x, 0));

console.log(safeReports.length);

// PART 2
//------------------------------------------------------------------------------

const safeReports2 = reports.filter((x) => isSafe2(x, 1));

// console.log(safeReports2);
console.log(safeReports2.length);
