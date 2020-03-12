import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <>
      <label className={props.wrapperclass}>
        <div className="skew-background"></div>
        <input {...props} />
      </label>
    </>
  );
}

export default Input;
