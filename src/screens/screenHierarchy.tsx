import { faCogs, faHome, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { MainAddEntryScreen } from './main/screens/add-entry/AddEntry.screen';
import { MainHomeScreen } from './main/screens/home/Home.screen';
import { MainSettingsScreen } from './main/screens/settings/Settings.screen';

export const mainScreens = [
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
    thunk: 'add-entry',
    childScreens: [
      {
        thunk: 'amount',
        content: () => <h1>Hello World</h1>
      }
    ]
  }
];
