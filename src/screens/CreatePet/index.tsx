import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { ButtonIcon } from "../../components/ButtonIcon";
import { HeaderTitle } from "../../components/HeaderTitle/Index";
import { InputText } from "../../components/InputText";
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from "./styles";

export function CreatePet() {
  const [value, setValue] = useState(null);
  const species = [
    { label: 'Cachorro', value: '1' },
    { label: 'Gato', value: '2' },
    { label: 'Outro', value: '3' },
  ]
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
              <Dropdown
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={species}
                search
                maxHeight={280}
                labelField="label"
                valueField="value"
                placeholder="uai"
                searchPlaceholder="Selecione"
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
                renderLeftIcon={() => (
                  <FontAwesome 
                  style={styles.icon} 
                  name="chevron-down" 
                  size={14} />
                )}
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