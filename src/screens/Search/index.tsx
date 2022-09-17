import React, { useEffect, useState } from "react";
import {
  Alert,
  View
} from 'react-native';


import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { theme } from "../../global/styles/theme";


import { styles } from "./styles";
import { InputText } from "../../components/InputText";
import { FlatList } from "react-native-gesture-handler";
import { ListItem } from "../../components/ListItem";

import results from "../../../results";

import { useNavigation } from "@react-navigation/native";

import api from "../../service/api";



export function Search() {
  const { navigate } = useNavigation();
  // const [results, setResults] = useState<PetList[]>([]);
  // const [list, setList] = useState<PetList[]>(results);
  const [list, setList] = useState(results);
  const [searchInputValue, setSearchInputValue] = useState("");

  // useEffect(() => {
  //   console.log("REQUEST")
  //   api.get("list").then(response => {
  //     setResults(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log("LIST ", list)
  //   setList(results)
  // }, [results]);

  function handleDetailsPet({ name, size, age, city, uf, animalSpecies, description, whatsapp }: PetList) {
    navigate('detailsPet', {
      name,
      size,
      age,
      city,
      uf,
      animalSpecies,
      description,
      whatsapp
    })
  }

  function searchPet() {
    const filter = searchInputValue.toLowerCase()

    if (filter === '') {
      setList(results)
    } else {
      setList(
        results.filter(
          (item) =>
            item.city.toLowerCase().indexOf(filter) > -1
        )
      )
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <View style={styles.inputTextArea}>
          <InputText
            title="Filtrar busca"
            value={searchInputValue}
            onChangeText={(value) => { setSearchInputValue(value) }}
            placeholder="Exemplos: cidade, porte ou espécie"
            placeholderTextColor={theme.colors.placeHoldeColorOpacityGrey}
          />
        </View>

        <ButtonIcon
          title="Filtrar busca"
          name={"search"}
          onPress={searchPet}
          size={20}
          color={theme.colors.textColorWhite}
        />
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) =>
          <ListItem
            name={item.name}
            city={item.city}
            uf={item.uf}
            screenShot={item.animalSpecies.screenShot}
            onPress={() => { handleDetailsPet(item) }}
          />
        }
      />

    </View>
  );
}