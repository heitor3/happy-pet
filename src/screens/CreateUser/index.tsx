import React from "react";
import { View, Text } from 'react-native';
import { HeaderTitle } from "../../components/HeaderTitle/Index";
import { InputText } from "../../components/InputText";

import { styles } from "./styles";

export function CreateUser() {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Cadastro usuário"
      />
      <View style={styles.content}>
        <View style={styles.input}>
          <InputText
            title="Nome"
          />
        </View>
        <View style={styles.input}>
          <InputText
            title="Email"
          />
        </View>
        <View style={styles.input}>
          <InputText
            title="Celular"
          />
        </View>
        <View style={styles.input}>
          <InputText
            title="Cidade"
          />
        </View>
        <View style={styles.input}>
          <InputText
            title="Estado"
          />
        </View>
        <View style={styles.input}>
          <InputText
            title="Senha"
          />
        </View>
        <View style={styles.input}>
          <InputText
            title="Confirmar senha"
          />
        </View>
      </View>

    </View>
  );
}