import React from "react";
import {
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

export function Search() {
  return (
    <View style={styles.container}>


      <View style={styles.content}>
        <View style={styles.inputTextArea}>
          <InputText
            title="Filtrar busca"
            placeholder="Exemplos: cidade, porte ou espécie"
            placeholderTextColor={theme.colors.placeHoldeColorOpacityGrey}
          />
        </View>

        <ButtonIcon
          title="Filtrar busca"
          name={"search"}
          size={20}
          color={theme.colors.textColorWhite}
        />
      </View>

      <FlatList
        data={results}
        style={styles.list}
        renderItem={({ item }) =>
          <ListItem
            name={item.name}
            city={item.city}
            uf={item.uf}
            uri={item.uri}
          />
        }
        keyExtractor={(item) => item.id}
      />



    </View>
  );
}

//video 3 - 1hr 07