import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <>
      <label className={props.wrapperclass}>
        <input {...props} />
      </label>
    </>
  );
}

export default Input;
