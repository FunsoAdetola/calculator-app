import React from "react";

import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val=== "=" ;
};

const Button = (props) => {
  return (
    <div
      className={`Button ${isOperator(props.name) ? null : "operator" }`}
      onClick={()=> props.onButtonClick(props.name)}
    >
      {props.children}
    </div>
  );
};

export default Button;