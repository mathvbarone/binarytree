export default class Node {
  constructor(value: number) {
    this.value = value;
  }
  value: number;
  left: Node | undefined;
  right: Node | undefined;
}
