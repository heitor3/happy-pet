import React from 'react';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { DMSerifText_400Regular } from '@expo-google-fonts/dm-serif-text';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Signin } from './src/screens/Signin';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifText_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Home />
  );
}