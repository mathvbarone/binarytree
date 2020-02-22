import React from "react";
import List from "../../List";
import NumberGenerator from "../../NumberGenerator";

let randomList: number[];

beforeEach(() => {
  randomList = NumberGenerator.generateList(100, 1000);
});

describe("Search engine performance", () => {
  it("it should search for all elements iterating less or equals than the List size", () => {
    const list = new List();
    list.addAll(randomList);

    randomList.forEach(item => {
      list.contains(item);
      expect(list.getIterationCount()).toBeLessThanOrEqual(list.getSize());
    });
  });

  it("it should search for all elements iterating less than the Tree size", () => {});
});
