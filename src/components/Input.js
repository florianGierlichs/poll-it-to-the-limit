import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <>
      <input className="input" placeholder={props.placeholder} />
    </>
  );
}

export default Input;
