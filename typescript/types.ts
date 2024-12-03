export interface ISolution<T1, T2> {
  part1: (input: T1) => void;
  part2: (input: T2) => void;
}
