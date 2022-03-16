import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { ButtonIcon } from "../../components/ButtonIcon";
import { HeaderTitle } from "../../components/HeaderTitle/Index";
import { InputText } from "../../components/InputText";

import { styles } from "./styles";

export function CreateUser() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>

        <View style={styles.container}>
          <HeaderTitle
            title="Cadastrar usuário"
          />
          <View >
            <View>
              <InputText
                title="Nome"
              />
            </View>
            <View>
              <InputText
                title="Email"
              />
            </View>
            <View>
              <InputText
                title="Whatsapp"
              />
            </View>
            <View>
              <InputText
                title="Cidade"
              />
            </View>
            <View>
              <InputText
                title="Estado"
              />
            </View>
            <View>
              <InputText
                title="Senha"
              />
            </View>
            <View>
              <InputText
                title="Confirmar senha"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonIcon}>
          <ButtonIcon
            title="Cadastrar"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}