import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const Search = () => (
  <View>
    <Text>Search Tab</Text>
  </View>
);

Search.navigationOptions = {
  tabBarIcon: () => <Icon name="search" style={{ fontSize: 23 }} />,
};
export default Search;
