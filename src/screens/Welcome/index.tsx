import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Welcome() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content} >
        <Text style={styles.text} >
          Bem-vindo(a) ao Happy Pet
        </Text>
        <Text style={styles.text2}>
          Cadastre-se e ajude-nos a encontrar
        </Text>
        <Text style={styles.text}>
          um novo lar para os pets
        </Text>
      </View>

      <View style={styles.buttonArea}>
        <View style={styles.contentButton}>
          <Text style={styles.title}>
            Usuário
          </Text>
          {/* component button choice? */}
        </View>

        <View style={styles.contentButton}>
          <Text style={styles.title}>
            ONG
          </Text>
          {/* component button choice? */}
        </View>
      </View>

    </View>
  );
}