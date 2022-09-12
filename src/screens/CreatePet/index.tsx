import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { ButtonIcon } from "../../components/ButtonIcon";
import { HeaderTitle } from "../../components/HeaderTitle/Index";
import { InputText } from "../../components/InputText";
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import api from "../../service/api";

export function CreatePet() {
  const [name, setName] = useState('');
  const [valueSpecie, setValueSpecie] = useState(null);
  const [isFocusSpecie, setIsFocusSpecie] = useState(false);
  const [valueSize, setValueSize] = useState(null);
  const [isFocusSize, setIsFocusSize] = useState(false);
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [description, setDescription] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const dataSpecie = [
    { label: 'Cachorro', value: 1 },
    { label: 'Gato', value: 2 },
    { label: 'Outro', value: 3 },
  ];

  const dataSize = [
    { label: 'Pequeno', value: 'Pequeno' },
    { label: 'Médio', value: 'Médio' },
    { label: 'Grande', value: 'Grande' },
  ];

  function handleCreatePet() {
    const postObject = {
      name: name,
      id_animalSpecies: valueSpecie,
      size: valueSize,
      age: age,
      city: city,
      uf: uf,
      description: description,
      whatsapp: whatsapp,
      user: 1
    }

    let checkValue = true;

    for (let [key, value] of Object.entries(postObject)) {
      if (value === "") {
        checkValue = false;
        break
      }
    }

    if (checkValue === false) {
      alert("Preencha todos os campos corretamente! 🥰")
    } else {
      api.post("createpet", postObject)
        .then(function (response) {
          if (response.status == 201) {
            alert("Pet cadastrado ❤️")
            setName("")
            setValueSpecie(null)
            setValueSize(null)
            setAge("")
            setCity("")
            setUf("")
            setDescription("")
            setWhatsapp("")
          } else {
            alert("Erro inesperado tente novamente mais tarde 😢")
          }
        }).catch((error) => {
          console.log(error);
        })
    }
  }

  return (

    <View style={styles.container}>
      <HeaderTitle
        title="Cadastrar PET"
      />
      <ScrollView>
        <View >
          <View>
            <InputText
              title="Nome"
              value={name}
              onChangeText={value => setName(value)}
            />
          </View>

          <View>
            <Text style={styles.dropdownLabel}>Espécie</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              containerStyle={styles.DropContainer}
              data={dataSpecie}
              maxHeight={200}
              labelField="label"
              valueField="value"
              activeColor={theme.colors.secondaryColorPurple}
              placeholder={!isFocusSpecie ? 'Selecione' : '...'}
              value={valueSpecie}
              onFocus={() => setIsFocusSpecie(true)}
              onBlur={() => setIsFocusSpecie(false)}
              onChange={item => {
                setValueSpecie(item.value);
                setIsFocusSpecie(false);
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
              data={dataSize}
              maxHeight={200}
              labelField="label"
              valueField="value"
              activeColor={theme.colors.secondaryColorPurple}
              placeholder={!isFocusSize ? 'Selecione' : '...'}
              value={valueSize}
              onFocus={() => setIsFocusSize(true)}
              onBlur={() => setIsFocusSize(false)}
              onChange={item => {
                setValueSize(item.value);
                setIsFocusSize(false);
              }}
            />
          </View>

          <View>
            <InputText
              title="Idade"
              value={age}
              maxLength={2}
              onChangeText={value => setAge(value)}
            />
          </View>

          <View style={styles.cityContainer}>
            <InputText
              title="Cidade"
              value={city}
              style={styles.city}
              onChangeText={value => setCity(value)}
            />
            <InputText
              title="UF"
              value={uf}
              style={styles.uf}
              onChangeText={value => setUf(value.toLocaleUpperCase())}
              maxLength={2}
              placeholder="SP"
              placeholderTextColor={theme.colors.placeHoldeColorOpacityGrey}
            />
          </View>

          <View>
            <InputText
              title="Descrição"
              value={description}
              style={styles.description}
              scrollEnabled={true}
              numberOfLines={3}
              multiline={true}
              onChangeText={value => setDescription(value)}
            />
          </View>

          <View>
            <InputText
              title="Whatsapp"
              value={whatsapp}
              onChangeText={value => setWhatsapp(value)}
              maxLength={11}
              placeholder="(00)00000-0000"
              placeholderTextColor={theme.colors.placeHoldeColorOpacityGrey}
            />
          </View>

        </View>

        <View style={styles.buttonIcon}>
          <ButtonIcon
            title="Cadastrar"
            onPress={handleCreatePet}
          />
        </View>
      </ScrollView>
    </View>

  );
}