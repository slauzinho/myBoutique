import React from 'react';
import { View, Text } from 'react-native';

interface IProps {
  name: string;
}

const Category: React.FC<IProps> = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default Category;
