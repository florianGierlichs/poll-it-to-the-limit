import React from 'react';
import './Output.css';

function Output(props) {
  return (
    <>
      <label className={props.wrapperclass}>
        <div className="skew-background"></div>
        <output {...props}></output>
      </label>
    </>
  );
}

export default Output;
