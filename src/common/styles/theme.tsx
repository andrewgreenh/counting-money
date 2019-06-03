import css from '@emotion/css';
import { ThemeProvider } from 'emotion-theming';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ClassNames } from '../types';

const theme = {
  colors: {
    mainBackground: 'white',
    mainBackgroundNegative: '#082B26',

    main: '#2C9686',
    mainNegative: 'white',

    accent: '#CF51CF',
    accentNegative: '2C9686'
  },
  fontCss: css``
};

export type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackgroundNegative: theme.colors.mainBackground,
    mainBackground: theme.colors.mainBackgroundNegative
  }
};

export function themed(cssBuilder: (t: Theme) => ClassNames) {
  return cssBuilder;
}

const ThemeControllerContext = createContext<{ toggleDarkMode: () => void } | null>(null);

export function ThemeControllerProvider(props: { children: ReactNode }) {
  const [currentTheme, setTheme] = useState(theme);

  const contextValue = useMemo(() => {
    return {
      theme: currentTheme,
      toggleDarkMode: () => setTheme(oldTheme => (oldTheme === theme ? darkTheme : theme))
    };
  }, [theme, setTheme]);

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
