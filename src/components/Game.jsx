import { useState } from "react";
import { questions } from "./questions";

const Game = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="progress"></div>
      <div>
        {questions.map((item, index) => (
          <h1 className="text-black" key={index}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Game;
