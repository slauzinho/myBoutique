import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const Sell = () => (
  <View>
    <Text>Sell me</Text>
  </View>
);

Sell.navigationOptions = {
  tabBarIcon: () => <Icon active name="card" style={{ fontSize: 23 }} />,
};

export default Sell;
