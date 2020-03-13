import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <>
      <button className="button" {...props}>
        <div className="skew-background"></div>
        <div className="btntext">{props.btntext}</div>
      </button>
    </>
  );
}

export default Button;
