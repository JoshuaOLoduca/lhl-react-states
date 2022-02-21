import React, { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState(0);

  const changeAnger = () => {
    if (anger > 1) return setAnger(0);
    setAnger(anger + 0.1);
  };

  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="AngryButton"
      onClick={changeAnger}
    >
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger >= 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;
