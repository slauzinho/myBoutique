import React, { useRef } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Dimensions, Platform, StyleSheet } from 'react-native';

interface ICategory {
  title: string;
  thumbnail: string;
}

const { width: viewportWidth } = Dimensions.get('window');

const MyCarousel = () => {
  const carouselRef = useRef(null);
  const renderItem = (
    { item }: { item: ICategory; index: number },
    parallaxProps: any
  ) => (
    <View style={styles.item}>
      <ParallaxImage
        source={{ uri: item.thumbnail, cache: 'force-cache' }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <View
        style={{
          position: 'absolute',
          bottom: '30%',
          backgroundColor: 'white',
          width: '100%',
          paddingHorizontal: 10,
          marginHorizontal: 30,
        }}
      >
        <Text style={{ fontSize: 60 }}>{item.title}</Text>
      </View>
    </View>
  );
  return (
    <Carousel
      ref={carouselRef}
      data={[
        {
          title: 'Handbags',
          thumbnail:
            'https://www.myprivateboutique.ch/var/media/images/dressing_banners/banner190.jpg',
        },
        {
          title: 'Ready-To-Wear',
          thumbnail:
            'https://www.myprivateboutique.ch/var/media/images/dressing_banners/banner111.jpg',
        },
        {
          title: 'Accesories',
          thumbnail:
            'https://www.myprivateboutique.ch/var/media/images/dressing_banners/banner116.jpg',
        },
        {
          title: 'Shoes',
          thumbnail:
            'https://www.myprivateboutique.ch/var/media/images/dressing_banners/banner109.jpg',
        },
        {
          title: 'Jewellery',
          thumbnail:
            'https://www.myprivateboutique.ch/var/media/images/dressing_banners/banner118.jpg',
        },
        {
          title: 'Watches',
          thumbnail:
            'https://www.myprivateboutique.ch/var/media/images/dressing_banners/banner105.jpg',
        },
      ]}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth - 60}
      slideStyle={{
        backgroundColor: 'white',
      }}
      containerCustomStyle={{
        backgroundColor: 'white',
      }}
      activeSlideAlignment="center"
      hasParallaxImages={true}
    />
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  item: {
    width: viewportWidth - 60,
    height: viewportWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    resizeMode: 'cover',
  },
});
