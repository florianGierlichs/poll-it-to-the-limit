import React from 'react';
import './Input.css';
import styled from '@emotion/styled';

const SKEW_CONTAINER = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 10px;
`;

const SKEW_BACKGROUND = styled.div`
  transform: skew(30deg);
  background-color: ${props => props.theme.colors.backgroundBox};
  position: absolute;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  z-index: -1;
  top: 0;
  left: -5px;
`;

function SkewContainer({ children }) {
  return (
    <SKEW_CONTAINER>
      <SKEW_BACKGROUND />
      {children}
    </SKEW_CONTAINER>
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

export { SkewInput, SkewOutput, SkewButton };
