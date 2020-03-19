import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const SwitchThemeButton = styled.button`
  border: none;
  background: none;
  font-size: 80px;
  top: 5px;
  right: 5px;
`;

function Header({ onSwitchThemeButtonClick }) {
  return (
    <header className="header">
      <h1 className="h1">
        <Link to="/AddPoll">poll it to the limit</Link>
      </h1>
      <SwitchThemeButton onClick={onSwitchThemeButtonClick}>
        <span role="img" aria-label="Switch theme">
          🃏
        </span>
      </SwitchThemeButton>
    </header>
  );
}

export default Header;
