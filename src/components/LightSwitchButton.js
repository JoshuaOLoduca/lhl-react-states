import React, { useState } from "react";

function LightSwitchButton() {
  const [light, setLight] = useState("off");

  const toggleLight = () => setLight(light === "on" ? "off" : "on");

  return (
    <button className="LightSwitchButton" onClick={toggleLight}>
      {light === "on" && (
        <span>
          <i>💡</i> I'm on!
        </span>
      )}
      {light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
    </button>
  );
}

export default LightSwitchButton;
