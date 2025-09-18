import React, { useState } from "react";
import "./styles/ChantCounter.css";

function ChantCounter() {
  const [count, setCount] = useState(0);
  const MAX_CHANTS = 108;

  const handleChant = () => {
    if (count + 1 === MAX_CHANTS) {
      alert("🙏 108 Chants Completed!");
      setCount(0); // reset after 108
    } else {
      setCount(count + 1);
    }
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Chant Counter</h1>
      <p className="chant-display">{count} / {MAX_CHANTS}</p>
      <button className="chant-btn" onClick={handleChant}>Chant 🙏</button>
      <button className="reset-btn" onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default ChantCounter;
