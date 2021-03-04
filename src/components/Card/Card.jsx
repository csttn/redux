import React from "react";

import "./styles.css";

function getColors(props) {
  if (props.red) return "Red";
  if (props.green) return "Green";
  if (props.blue) return "Blue";
  if (props.purple) return "Purple";
  return "";
}

function Card({ title, children, ...props }) {
  return (
    <div className={`Card ${getColors(props)}`}>
      <div className="Header">
        <span className="Title">{title}</span>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
}

export default Card;
