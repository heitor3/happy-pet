import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { CreatePet } from '../screens/CreatePet';
import { DetailsPet } from '../screens/DetailsPet';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Search"
          component={Search}
        />
        <Screen
          name="CreatePet"
          component={CreatePet}
        />
        <Screen
          name="DetailsPet"
          initialParams={{ list : Object }}
          component={DetailsPet}
        />
      </Navigator>
    </NavigationContainer>
  );
}