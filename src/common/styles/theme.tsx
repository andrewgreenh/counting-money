import css from '@emotion/css';
import { ThemeProvider } from 'emotion-theming';
import { darken, lighten } from 'polished';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ClassNames } from '../types';

const theme = {
  name: 'Default',
  colors: {
    mainBackground: 'white',
    mainBackgroundNegative: '#082B26',
    mainBackgroundLayeringFunction: darken,

    main: '#2C9686',
    mainNegative: 'white',
    mainLayeringFunction: darken
  },
  fontCss: css``
};

export type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  name: 'Dark',
  colors: {
    ...theme.colors,
    mainBackgroundNegative: theme.colors.mainBackground,
    mainBackground: theme.colors.mainBackgroundNegative,
    mainBackgroundLayeringFunction: lighten
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
