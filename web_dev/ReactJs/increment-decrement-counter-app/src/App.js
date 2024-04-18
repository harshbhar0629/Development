import { useState } from "react";
import "./App.css";

function App() {
  const [val, setCount] = useState(0);
  function decreaseHandler() {
    setCount(val - 1);
  }

  function increaseHandler() {
    setCount(val + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="container flex w-[100vw] h-[100vh] justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>
      <div className="flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] bg-white">
        <button onClick={decreaseHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold gap-12 text-5xl">
          {val}
        </div>
        <button onClick={increaseHandler} className=" border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg">
        Reset
      </button>
    </div>    
  );
}

export default App;
