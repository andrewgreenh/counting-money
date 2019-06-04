import css from '@emotion/css';
import { faCogs, faHome, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';
import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { Footer, Header, Main } from '../../common/Layout';
import { themed } from '../../common/styles/theme';
import { MainAddEntryScreen } from './screens/add-entry/AddEntry.screen';
import { MainHomeScreen } from './screens/home/Home.screen';
import { MainSettingsScreen } from './screens/settings/Settings.screen';

export function MainScreen() {
  const footer = (
    <Footer css={tabLinksCss}>
      {screens.map(screen => (
        <NavLink key={screen.thunk} css={tabLinkCss} to={'/' + screen.thunk} replace>
          <FontAwesomeIcon icon={screen.icon} />
          <span>{screen.tabTitle}</span>
        </NavLink>
      ))}
    </Footer>
  );

  return (
    <>
      <Switch>
        {screens.map(screen => (
          <Route
            key={screen.thunk}
            path={'/' + screen.thunk}
            render={() => (
              <>
                <Header>
                  <div css={headerContentCss}>{screen.title}</div>
                </Header>
                <Main>{screen.content()}</Main>
              </>
            )}
          />
        ))}
        <Redirect to="/home" />
      </Switch>
      {footer}
    </>
  );
}

const screens = [
  {
    title: 'Home',
    content: () => <MainHomeScreen />,
    icon: faHome,
    tabTitle: 'Home',
    thunk: 'home'
  },
  {
    title: 'Settings',
    content: () => <MainSettingsScreen />,
    icon: faCogs,
    tabTitle: 'Settings',
    thunk: 'settings'
  },
  {
    title: 'Add entry',
    content: () => <MainAddEntryScreen />,
    icon: faPlusSquare,
    tabTitle: 'Add entry',
    thunk: 'add-entry'
  }
];

const tabLinkCss = themed(
  t => css`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    justify-content: center;

    padding: 1em;

    background: transparent;
    transition: transform 0.2s;
    transform: translate3d(0, 0, 0);

    color: ${transparentize(0.5, t.colors.mainBackgroundNegative)};

    &.active {
      transform: translate3d(0, -2px, 0);
      color: ${t.colors.accentOnLayerOnMainBackground};
    }
  `
);

const tabLinksCss = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const headerContentCss = css`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  padding: 0 ${1 / 1.2}em;
`;
