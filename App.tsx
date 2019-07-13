import React from 'react';
import { createAppContainer } from 'react-navigation';
import useExpoAssetLoader from '@kevinwolf/use-expo-asset-loader';
import AppNavigator from './screens';
import { AppLoading } from 'expo';

const AppContainer = createAppContainer(AppNavigator);

const fonts = {
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
};

export default function App() {
  const assetLoader = useExpoAssetLoader({ fonts });

  if (!assetLoader.isReady) {
    return <AppLoading {...assetLoader.getAppLoadingProps()} />;
  }

  return <AppContainer />;
}
