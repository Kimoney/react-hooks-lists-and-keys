import React from "react";

function ColorList() {
  const colors = [
    "red",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "yellowgreen",
    "hotpink",
    "firebrick",
    "yellow"
  ];
  const specificColor = colors.map((color) => {
    return <li key={color} style={{color: color}} >{color}</li>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {specificColor}
      </ol>
    </div>
  );
}

export default ColorList;
