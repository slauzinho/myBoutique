import React from 'react';
import { View, Image } from 'react-native';
import { IProduct } from '../NewIn';
import { CardItem, Text, Button, Body } from 'native-base';

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => (
  <View style={{ width: 250, display: 'flex' }}>
    <View>
      <CardItem cardBody>
        <Image
          source={{
            uri: `https://www.myprivateboutique.ch/images/dressing_product/list/${
              product.id
            }.jpg`,
            cache: 'force-cache',
          }}
          style={{ height: 250, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Button
            transparent
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Text style={{ color: 'black' }}>{product.name}</Text>
            <Text style={{ color: 'red', fontWeight: '700' }}>
              CHF {product.price}
            </Text>
          </Button>
        </Body>
      </CardItem>
    </View>
  </View>
);

export default Product;
