import css from '@emotion/css';
import React from 'react';
import { themed } from './theme';

export function Frame() {
  return (
    <>
      <header css={headerCss}>Hi</header>
      <main css={mainCss}>main</main>
      <footer css={footerCss}>Footer</footer>
    </>
  );
}

const headerHeight = 60;
const footerHeight = 60;
const headerCss = themed(
  t => css`
    height: ${headerHeight}px;
    background: ${t.colors.main};
    color: ${t.colors.mainNegative};
    position: sticky;
    top: 0;
  `
);

const footerCss = themed(
  t => css`
    height: ${footerHeight}px;
    background: ${t.colors.main};
    color: ${t.colors.mainNegative};
    position: sticky;
    bottom: 0;
  `
);

const mainCss = themed(
  t => css`
    min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);
  `
);
