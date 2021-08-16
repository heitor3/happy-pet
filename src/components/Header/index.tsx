import React from 'react';
import {
  View,
  Image
} from 'react-native';

import HappyPetLogo from '../../assets/happy-pet-logo.png';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={HappyPetLogo}
        style={styles.image}
      />
    </View>
  );
}