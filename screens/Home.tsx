import React from 'react';
import { View, Text } from 'react-native';
import Categories from '../components/Categories';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Categories />
  </View>
);
export default HomeScreen;
