import React, { useState } from "react";
import Circle from "./Circle";
import ColoredButtons from "./ColorButtons";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}
const ColoredCircle = () => {
  const [circles, setCircles] = useState([]);

  const addCircle = color => {
    setCircles(circles => {
      return [...circles, { color: color, x: getRandom(), y: getRandom() }];
    });
  };
  const changePosition = i => {
    setCircles(circles => {
      // create a copy of state array
      const colorsCopy = [...circles];
      // create a copy of the object at index i,
      // then change the copy
      colorsCopy[i] = {
        ...circles[i],
        x: getRandom(),
        y: getRandom()
      };
      // return colorsCopy;
      return colorsCopy;
    });
  };
  return (
    <div>
      <ColoredButtons
        options={["pink", "lavender", "teal"]}
        addCircle={addCircle}
      />

      {circles.map(({ color, x, y }, idx) => (
        <Circle
          color={color}
          idx={idx}
          key={idx}
          y={y}
          x={x}
          changePosition={changePosition}
        />
      ))}
    </div>
  );
};
export default ColoredCircle;
