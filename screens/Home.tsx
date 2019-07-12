import * as React from 'react';
import WomenScreen from './WomenScreen';

import { createMaterialTopTabNavigator } from 'react-navigation';
import MenScreen from './MenScreen';
import ChildrenScreen from './ChildrenScreen';
import WatchesScreen from './WatchesScreen';
import { Icon } from 'native-base';

const HomeStack = createMaterialTopTabNavigator(
  {
    Women: WomenScreen,
    Men: MenScreen,
    Children: ChildrenScreen,
    Watches: WatchesScreen,
  },
  {
    initialRouteName: 'Women',
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        marginTop: 50,
      },
      labelStyle: {
        color: 'black',
      },
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      indicatorStyle: {
        backgroundColor: 'black',
      },
    },
  }
);

HomeStack.navigationOptions = {
  tabBarIcon: () => <Icon active name="home" style={{ fontSize: 23 }} />,
};
export default HomeStack;
