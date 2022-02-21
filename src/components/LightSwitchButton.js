import React, { useState } from "react";

function LightSwitchButton(prop) {
  const { light, toggleLight } = prop;

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
