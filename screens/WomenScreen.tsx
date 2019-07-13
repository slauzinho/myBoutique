import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CategoriesCarousel from '../components/CategoriesCarousel';
import NewIn from '../components/NewIn';

const WomenScreen = () => (
  <ScrollView style={{ marginTop: 20 }}>
    <CategoriesCarousel />
    <Text
      style={{
        fontSize: 25,
        textTransform: 'uppercase',
        marginLeft: 15,
        marginTop: 40,
      }}
    >
      New In
    </Text>
    <NewIn />
  </ScrollView>
);

export default WomenScreen;
