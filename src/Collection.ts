export default interface Collection {
  add(value: number): void;
  addAll(values: Array<number>): void;
  contains(value: number): Boolean;
  getSize(): number;
  isEmpty(): Boolean;
  getIterationCount(): number;
}
