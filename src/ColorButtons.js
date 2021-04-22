import React, { useState } from "react";
import "./ColorButtons.css";
const ColoredButtons = props => {
  return (
    <div>
      {props.options.map(color => (
        <button
          className="ColorButtons-button"
          style={{ backgroundColor: color }}
          onClick={() => props.addCircle(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColoredButtons;
