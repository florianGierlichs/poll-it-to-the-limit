import React from 'react';
import './Output.css';

function Output(props) {
  return (
    <>
      <label className={props.wrapperclass}>
        <div className="skew-background" style={props.backgroundcolor}></div>
        <div {...props}></div>
      </label>
    </>
  );
}

export default Output;
