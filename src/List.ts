import Collection from "./Collection";

export default class List implements Collection {
  private arr: Array<number> = [];
  private size: number = 0;
  private iterationCount: number = 0;

  add(value: number) {
    this.arr.push(value);
    this.size++;
  }

  addAll(values: number[]): void {
    for (let i = 0; i < values.length; i++) {
      this.add(values[i]);
    }
  }

  contains(value: number) {
    this.iterationCount = 0;
    for (let i = 0; i < this.size; i++) {
      this.iterationCount++;
      if (this.arr[i] === value) {
        return true;
      }
    }
    return false;
  }

  getIterationCount(): number {
    return this.iterationCount;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}
