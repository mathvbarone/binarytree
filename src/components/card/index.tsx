import React from "react";
import NumberGenerator from "../../NumberGenerator";

export default function Card() {
  const list = NumberGenerator.generateList(24, 100);

  console.log(list);

  const getElement = (number: number): boolean =>
    list.some(item => console.log(item === number));

  return <div>{getElement(2)}</div>;
}
