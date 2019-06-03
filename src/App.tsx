import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './common/styles/GlobalStyles';
import { ThemeControllerProvider } from './common/styles/theme';
import { MainScreen } from './screens/main/Main.Screen';

export function App() {
  return (
    <Router>
      <ThemeControllerProvider>
        <GlobalStyles />
        <Switch>
          <Route path="/" render={() => <MainScreen />} />
        </Switch>
      </ThemeControllerProvider>
    </Router>
  );
}
