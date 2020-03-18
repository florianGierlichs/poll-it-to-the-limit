import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          height: 100vh;
          margin: 0;
          background-image: ${theme.colors.backgroundPrimary};
          font-family: 'Poller One', cursive;
        }
      `}
    />
  );
}

export default GlobalStyles;
