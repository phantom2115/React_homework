import { useState } from "react";
import Counter from "./Counter";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="countBox">
        <div>{count}</div>
        <Counter btn={plus} str="+" />
        <Counter btn={reset} str="reset" />
        <Counter btn={minus} str="-" />
      </div>
    </>
  );
};

export default App;
