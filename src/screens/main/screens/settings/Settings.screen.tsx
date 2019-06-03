import React from 'react';
import { useThemeController } from '../../../../common/styles/theme';

export function MainSettingsScreen() {
  const theme = useThemeController();
  return (
    <>
      <h1>Settings</h1>
      <input
        id="main-settings-screen-darkmode-toggle"
        type="checkbox"
        checked={theme.darkModeActive}
        onChange={theme.toggleDarkMode}
      />
      <label htmlFor="main-settings-screen-darkmode-toggle">Use Darkmode</label>
    </>
  );
}
