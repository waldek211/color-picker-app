import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const colorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="color-box">
      <h1>Color picker! 🎨</h1>
      <p>Pick your color.</p>
      <div className="color-picked" style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>
      </div>
      <h3>Select a color: </h3>
      <input type="color" value={color} onChange={colorChange}></input>
    </div>
  );
}
export default ColorPicker;
