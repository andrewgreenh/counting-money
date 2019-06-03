import css from '@emotion/css';
import { faCog, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken, transparentize } from 'polished';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer, Header, Main } from '../../common/Layout';
import { themed } from '../../common/styles/theme';

export function MainScreen() {
  return (
    <>
      <Header>Hi</Header>
      <Main>Main</Main>
      <Footer css={tabLinksCss}>
        <NavLink css={tabLinkCss} to="/" exact replace>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink css={tabLinkCss} to="/settings" replace>
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </NavLink>
        <NavLink css={tabLinkCss} to="/add-entry" replace>
          <FontAwesomeIcon icon={faPlus} />
          <span>Add entry</span>
        </NavLink>
      </Footer>
    </>
  );
}

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

    &:active {
      background: ${darken(0.2, t.colors.main)};
    }

    color: ${transparentize(0.3, t.colors.mainNegative)};

    &.active {
      color: ${transparentize(0.1, t.colors.mainNegative)};
    }
  `
);

const tabLinksCss = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
