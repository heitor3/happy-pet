import React from 'react';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { DMSerifText_400Regular } from '@expo-google-fonts/dm-serif-text';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Signin } from './src/screens/Signin';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifText_400Regular,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Signin />
  );
}