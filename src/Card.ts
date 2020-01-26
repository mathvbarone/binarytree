import Player from "./Player";

export default class Card {
  constructor(player: Player, numbers: Number[]) {
    this.player = player;
    this.numbers = numbers;
  }
  player: Player;
  numbers: Number[];
}
