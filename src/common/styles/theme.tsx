import css from '@emotion/css';
import { ThemeProvider } from 'emotion-theming';
import { darken, lighten } from 'polished';
import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ClassNames } from '../types';

const theme = {
  name: 'Default',
  colors: {
    mainBackground: '#efefef',
    mainBackgroundNegative: '#333',

    layerOnMainBackground: darken(0.08, '#eee'),
    layerOnMainBackgroundNegative: lighten(0.2, '#333'),

    accent: '#2C9686',
    accentNegative: '#eee',

    accentOnLayerOnMainBackground: '#2C9686'
  },
  fontCss: css``
};

export type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  name: 'Dark',
  colors: {
    mainBackground: '#333',
    mainBackgroundNegative: '#eee',

    layerOnMainBackground: darken(0.1, '#333'),
    layerOnMainBackgroundNegative: darken(0.1, '#eee'),

    accent: lighten(0.1, '#2C9686'),
    accentNegative: '#eee',

    accentOnLayerOnMainBackground: lighten(0.2, '#2C9686')
  }
};

export function themed(cssBuilder: (t: Theme) => ClassNames) {
  return cssBuilder;
}

const ThemeControllerContext = createContext<{
  toggleDarkMode: () => void;
  darkModeActive: boolean;
} | null>(null);

export function ThemeControllerProvider(props: { children: ReactNode }) {
  const [currentTheme, setTheme] = useState(theme);

  const contextValue = useMemo(() => {
    return {
      theme: currentTheme,
      toggleDarkMode: () => setTheme(oldTheme => (oldTheme === theme ? darkTheme : theme)),
      darkModeActive: currentTheme.name === 'Dark'
    };
  }, [currentTheme, setTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeControllerContext.Provider value={contextValue}>
        {props.children}
      </ThemeControllerContext.Provider>
    </ThemeProvider>
  );
}

export function useThemeController() {
  const contextValue = useContext(ThemeControllerContext);

  if (contextValue === null) {
    throw new Error('Add ThemeControllerProvider into the tree.');
  }

  return contextValue;
}
