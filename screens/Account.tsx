import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const Account = () => (
  <View>
    <Text>My Account</Text>
  </View>
);

Account.navigationOptions = {
  tabBarIcon: () => <Icon active name="person" style={{ fontSize: 23 }} />,
};

export default Account;
