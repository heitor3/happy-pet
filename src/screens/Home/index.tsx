import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { ButtonAction } from '../../components/ButtonAction';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Adotar Pet ❤"
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Cadastrar Pet 📝"
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Meus cadastros 📄"
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            title="Fazer doação 💸"
          />
        </View>


      </View>
    </View>
  );
}