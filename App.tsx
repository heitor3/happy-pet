import React from 'react';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { DMSerifText_400Regular } from '@expo-google-fonts/dm-serif-text';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';
import { Search } from './src/screens/Search';
import { Welcome } from './src/screens/Welcome';
import { CreateUser } from './src/screens/CreateUser';
import { CreateOng } from './src/screens/CreateOng';
import { CreatePet } from './src/screens/CreatePet';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

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
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <CreatePet />
      {/* <Routes /> */}
      {/* terminar a navegação apos criar as telas finais */}
    </>
  );
}