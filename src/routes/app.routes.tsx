import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { CreatePet } from '../screens/CreatePet';
import { DetailsPet } from '../screens/DetailsPet';
import { MyPets } from '../screens/MyPets/indext';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name="home"
          component={Home}
        />
        <Screen
          name="search"
          component={Search}
        />

        <Screen
          name="detailsPet"
          component={DetailsPet}
        />

        <Screen
          name="createPet"
          component={CreatePet}
        />
        <Screen
          name="myPets"
          component={MyPets}
        />
      </Navigator>
    </NavigationContainer>
  );
}