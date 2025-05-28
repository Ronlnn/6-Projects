import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-gray-400">Счетчик:</h1>
      <h2 className="mt-5 text-gray-500 text-6xl">{counter}</h2>
      <div className="flex gap-5 mt-5 ">
        <button onClick={() => setCounter(counter - 1)} className="!bg-red-500 !shadow-lg !rounded-xl w-30">
          - Минус
        </button>
        <button
          onClick={() => setCounter(counter + 1)}
          className="!bg-blue-500 !rounded-xl shadow-lg w-30"
        >
          Плюс +
        </button>
      </div>
    </div>
  );
};

export default Counter;
