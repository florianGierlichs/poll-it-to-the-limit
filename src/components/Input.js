import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <>
      <label className={props.wrapperClass}>
        <input
          className={props.class}
          placeholder={props.placeholder}
          id={props.id}
        />
      </label>
    </>
  );
}

export default Input;
