import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import Product from '../Product';
import Carousel from 'react-native-snap-carousel';

export interface IProduct {
  brand_id: string;
  id: string;
  name: string;
  path: string;
  price: string;
  retail_price: string;
  seller_id: string;
}

const NewIn = () => {
  const [bags, setBags] = useState<IProduct[]>([]);
  const carouselRef = useRef(null);

  const renderItem = ({ item, index }: { item: IProduct; index: number }) => (
    <View>
      <Product key={item.id} product={item} />
    </View>
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        'https://www.myprivateboutique.ch/en/api/v2/dressing/catalogue/102/page/1'
      );
      setBags(response.data.products);
    };
    fetchProducts();
  }, []);

  if (bags.length === 0) {
    return null;
  }

  return (
    <Carousel
      ref={carouselRef}
      data={bags}
      renderItem={renderItem}
      sliderWidth={500}
      itemWidth={250}
      activeSlideAlignment="start"
    />
  );
};

export default NewIn;
