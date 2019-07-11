import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default AppNavigator;
