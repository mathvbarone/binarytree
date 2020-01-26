import React from "react";
import Node from "./Node";
import NumberGenerator from "./NumberGenerator";

function App() {
  const node = new Node(1);
  const list = NumberGenerator.generateList(24, 100);

  console.log(list);

  const { value } = node;
  return (
    <div className="App">
      <div>{value}</div>
    </div>
  );
}

export default App;
