import React from 'react';
import { SubCats } from '../Categories';
import { View } from 'react-native';
import Category from '../Category';

interface IProps {
  subcats: SubCats[];
}

const SubCategories: React.FC<IProps> = props => (
  <View style={{ marginLeft: 10 }}>
    {props.subcats.map(cat => (
      <Category name={cat.name} key={cat.id} />
    ))}
  </View>
);

export default SubCategories;
