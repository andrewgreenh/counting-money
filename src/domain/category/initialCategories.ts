import {
  faCarCrash,
  faGamepad,
  faGlassCheers,
  faHome,
  faShoppingBasket,
  faTshirt
} from '@fortawesome/free-solid-svg-icons';
import { Category } from './category';

export const initialCategories: Category[] = [
  {
    name: 'Food',
    iconName: faShoppingBasket
  },
  {
    name: 'Fun',
    iconName: faGamepad
  },
  {
    name: 'Dates',
    iconName: faGlassCheers
  },
  {
    name: 'Clothes',
    iconName: faTshirt
  },
  {
    name: 'Home',
    iconName: faHome
  },
  {
    name: 'Insurance',
    iconName: faCarCrash
  }
];
