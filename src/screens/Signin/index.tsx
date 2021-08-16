import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { InputText } from '../../components/InputText';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Signin() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <View style={styles.content}>
        <InputText title="Email"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <InputText title="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <View style={styles.buttonIcon}>
          <ButtonIcon
            title="Entrar"
            activeOpacity={0.7}
          />
        </View>

        <View style={styles.contentText}>
          <Text style={styles.text}>
            Esqueceu seus dados de login?
          </Text>
          <Text style={styles.textBold}>
            Obtenha ajuda para entrar
          </Text>
        </View>
      </View>
      <View style={styles.footer}>

        <Text style={styles.text}>
          Não tem uma conta?
        </Text>
        <Text style={styles.textBold}>
          Cadastre-se.
        </Text>

      </View>

    </View>

  );
}