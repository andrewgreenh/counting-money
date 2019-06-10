import React from 'react';
import { MainPadding } from '../../../../common/Layout';
import styled from '../../../../common/styles/styled';
import { useThemeController } from '../../../../common/styles/theme';
import { Toggle } from '../../../../common/Toggle';

export function MainSettingsScreen() {
  const theme = useThemeController();
  return (
    <>
      <MainPadding />
      <SettingsRow>
        <label htmlFor="main-settings-screen-darkmode-toggle">Darkmode</label>
        <Toggle
          id="main-settings-screen-darkmode-toggle"
          type="checkbox"
          checked={theme.darkModeActive}
          onChange={theme.toggleDarkMode}
        />
      </SettingsRow>
    </>
  );
}

const SettingsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 1px solid ${p => p.theme.colors.layerOnMainBackground};
`;
