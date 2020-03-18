import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          height: 100vh;
          margin: 0;
          background-image: linear-gradient(to bottom right, #f7e2c9, #c6d64b);
          font-family: 'Poller One', cursive;
        }
      `}
    />
  );
}

export default GlobalStyles;
