import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import { ButtonIcon } from "../../components/ButtonIcon";
import { HeaderTitle } from "../../components/HeaderTitle/Index";
import { InputText } from "../../components/InputText";
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function CreatePet() {

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2222222222222', value: '2' },
    { label: 'Item 3', value: '3' },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <>

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
              <Text style={styles.dropdownLabel}>Espécie</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                containerStyle={styles.DropContainer}
                data={data}
                maxHeight={200}
                labelField="label"
                valueField="value"
                activeColor={theme.colors.secondaryColorPurple}
                placeholder={!isFocus ? 'Select item' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>

            <View>
              <Text style={styles.dropdownLabel}>Porte</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                containerStyle={styles.DropContainer}
                data={data}
                maxHeight={200}
                labelField="label"
                valueField="value"
                activeColor={theme.colors.secondaryColorPurple}
                placeholder={!isFocus ? 'Select item' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
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
      </>
    </KeyboardAvoidingView>
  );
}