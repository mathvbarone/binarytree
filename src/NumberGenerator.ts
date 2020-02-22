export default class NumberGenerator {
  static generate(maxRange: number): number {
    return Math.floor(Math.random() * maxRange);
  }
  static generateList(length: number, maxRange: number): number[] {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const number = this.generate(maxRange);
      arr.push(number);
    }
    return arr;
  }
}
