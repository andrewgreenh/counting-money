import React from 'react';
import { Frame } from './Frame';
import { GlobalStyles } from './GlobalStyles';
import { ThemeControllerProvider } from './theme';

export function App() {
  return (
    <ThemeControllerProvider>
      <GlobalStyles />
      <Frame />
    </ThemeControllerProvider>
  );
}
