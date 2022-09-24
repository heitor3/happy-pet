import React from 'react';
import {
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonAction } from '../../components/ButtonAction';

import { Header } from '../../components/Header';

import { styles } from './styles';


export function Home() {
  const { navigate } = useNavigation();

  function handleSearchPet() {
    navigate('search')
  }

  function handleCreatePet() {
    navigate('createPet')
  }

  function handleMyPets() {
    navigate('myPets')
  }

  function handleDonation() {
    navigate('donation')
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Adotar Pet ❤"
            onPress={handleSearchPet}
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Cadastrar Pet 📝"
            onPress={handleCreatePet}
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Meus cadastros 📄"
            onPress={handleMyPets}
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Fazer doação 💸"
            onPress={handleDonation}
          />
        </View>


      </View>
    </View>
  );
}