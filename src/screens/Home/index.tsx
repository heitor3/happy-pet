import React from 'react';
import {
  View
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
            activeOpacity={0.7}
            title="Adotar Pet ❤"
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            activeOpacity={0.7}
            title="Cadastrar Pet 📝"
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            activeOpacity={0.7}
            title="Meus cadastros 📄"
          />
        </View>

        <View style={styles.buttonAction}>
          <ButtonAction
            activeOpacity={0.7}
            title="Fazer doação 💸"
          />
        </View>


      </View>
    </View>
  );
}


//rotas video 2