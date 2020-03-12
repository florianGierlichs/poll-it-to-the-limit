import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button className="button" {...props}>
        <div className="btntext">{props.btntext}</div>
      </button>
    </>
  );
}

export default Button;
