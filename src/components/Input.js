import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <>
      <label className="inputWrapper">
        <input
          className="input"
          placeholder={props.placeholder}
          id={props.id}
        />
      </label>
    </>
  );
}

export default Input;
