import { Global } from '@emotion/core';
import css from '@emotion/css';
import React from 'react';
import { themed } from './theme';

const globalCss = themed(
  t => css`
    * {
      box-sizing: border-box;
      font: inherit;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      overflow: hidden;
    }

    html,
    body,
    #root {
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;

      ${t.fontCss}
    }

    body {
      background: ${t.colors.mainBackground};
      color: ${t.colors.mainBackgroundNegative};
    }
  `
);

export function GlobalStyles() {
  return <Global styles={globalCss} />;
}
