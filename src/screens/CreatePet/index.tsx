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

export function CreatePet() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>

        <View style={styles.container}>
          <HeaderTitle
            title="Cadastrar PET"
          />
          <View >
            <View>
              <InputText
                title="Nome"
              />
            </View>
            <View>
              <InputText
                title="Idade"
              />
            </View>
            <View>
              <InputText
                title="Descrição"
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