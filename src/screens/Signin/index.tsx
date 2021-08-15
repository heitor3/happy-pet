import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { InputText } from '../../components/InputText';

import { styles } from './styles';

export function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <InputText title="Email" />
        <InputText title="Senha"
          secureTextEntry={true}
        />
        <View style={styles.buttonIcon}>
          <ButtonIcon
            title="Entrar"
            activeOpacity={0.7}
          />
        </View>

        <Text style={styles.text}>
          Esqueceu seus dados de login?
        </Text>
        <Text style={styles.textBold}>
          Obtenha ajuda para entrar
        </Text>

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