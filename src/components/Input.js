import React from 'react';
import './Input.css';

function SkewContainer({ children }) {
  return (
    <div className="skew-container">
      <div className="skew-background"></div>
      {children}
    </div>
  );
}

function SkewInput(props) {
  return (
    <SkewContainer>
      <input className="skew-input" {...props} />
    </SkewContainer>
  );
}

function SkewButton(props) {
  return (
    <SkewContainer>
      <button className="skew-button" {...props} />
    </SkewContainer>
  );
}

function SkewOutput(props) {
  return (
    <SkewContainer>
      <div {...props} />
    </SkewContainer>
  );
}

export default Input;
