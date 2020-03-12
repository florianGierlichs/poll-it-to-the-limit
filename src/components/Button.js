import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button className="button" {...props}>
        <div className="btn-text">{props.btnText}</div>
      </button>
    </>
  );
}

export default Button;
