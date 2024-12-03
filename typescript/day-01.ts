import { getInput } from "./utils";

const INPUT_FILE = "../inputs/day-01-1.txt";

const input = getInput(INPUT_FILE);

// PART 1
//------------------------------------------------------------------------------
const parsedInput = input.split("\n").map((x) => x.split(" ").filter((y) => y));
const list1 = parsedInput.map((x) => parseInt(x[0])).sort();
const list2 = parsedInput.map((x) => parseInt(x[1])).sort();

// console.log(list1);
// console.log(list2);

const diffList = list1.map((x, i) => Math.abs(x - list2[i]));

// console.log(diffList);

const total = diffList.reduce((acc, x) => acc + x, 0);

console.log(total);

// PART 2
//------------------------------------------------------------------------------

const counts = new Map<number, number>();
let totalSimilarityScore = 0;

list1.forEach((x) => {
  let count = counts.get(x) ?? 0;
  if (!counts.get(x)) {
    count = list2.filter((y) => y === x).length;
    counts.set(x, count);
  }
  totalSimilarityScore += count * x;
});

console.log(totalSimilarityScore);
