import React from 'react';
import WomenScreen from './WomenScreen';
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';
import MenScreen from './MenScreen';
import ChildrenScreen from './ChildrenScreen';
import WatchesScreen from './WatchesScreen';

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
        elevation: 0, // remove tab shadow for android
        shadowOpacity: 0, // remove tab shadow for iOS
        borderBottomWidth: 0,
        marginBottom: -1,
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
