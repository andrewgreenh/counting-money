import { Global } from '@emotion/core';
import css from '@emotion/css';
import { themed } from './theme';

const globalCss = themed(
  t => css`
    * {
      box-sizing: border-box;
      font: inherit;
      user-select: none;
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
