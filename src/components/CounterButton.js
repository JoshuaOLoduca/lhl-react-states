import React, { useState } from "react";

function CounterButton() {
  const [clickAmount, setClickAmount] = useState(0);

  const addClickToCount = () => setClickAmount(clickAmount + 1);

  return (
    <button className="CounterButton" onClick={addClickToCount}>
      You clicked me {clickAmount} times
    </button>
  );
}

export default CounterButton;
