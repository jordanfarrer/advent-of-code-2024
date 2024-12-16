import { getInput } from "./utils";

const INPUT_FILE = "../inputs/day-03-1.txt";

const input = getInput(INPUT_FILE);

// part 1

const mulMatch = new RegExp(/mul\((\d{1,3}),(\d{1,3})\)/gm);
const matches = [...input.matchAll(mulMatch)].map((match) => [
  parseInt(match[1]),
  parseInt(match[2]),
]);

const sum = matches.reduce((acc, [a, b]) => acc + a * b, 0);

console.log({ sum });

// part 2
const conditionalMulMatch = new RegExp(
  /(?:do\(\))|(?:don\'t\(\))|(?:mul\((\d{1,3}),(\d{1,3})\))/gm
);
const matches2 = [...input.matchAll(conditionalMulMatch)];
let isEnabled = true;
const enabledCalcs: [number, number][] = [];
for (const match of matches2) {
  if (match[0] === "do()") {
    isEnabled = true;
  } else if (match[0] === "don't()") {
    isEnabled = false;
  } else {
    if (!isEnabled) continue;
    enabledCalcs.push([parseInt(match[1]), parseInt(match[2])]);
  }
}

const sum2 = enabledCalcs.reduce((acc, [a, b]) => acc + a * b, 0);

console.log({ sum2 });
