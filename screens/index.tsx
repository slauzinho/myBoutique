import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from './Home';
import Search from './Search';
import Sell from './Sell';
import Account from './Account';

const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Search: {
    screen: Search,
  },
  Sell: {
    screen: Sell,
  },
  Account: {
    screen: Account,
  },
});

export default AppNavigator;
