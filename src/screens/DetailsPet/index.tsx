import React from "react";
import {
  View,
  Text,
  Image
} from 'react-native';
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";

import results from "../../../results";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
//https://app.rocketseat.com.br/node/mission-react-native/group/nlw-together-react-native/lesson/aula-03-in-orbit-2

export function DetailsPet() {
  const uri = "https://s2.glbimg.com/DVfIiTGl-KnJU41UcD9Yoj33MZM=/e.glbimg.com/og/ed/f/original/2021/06/16/doge.jpg"
  return (

    <View >
      <Header />
      <View style={styles.container}>

        <View style={styles.card}>
          <Text style={styles.name}>
            {"TESTE"}
          </Text>
          <View>
            <Image
              style={styles.imgPet}
              source={{ uri }}
              resizeMode="cover"
            />
            <View style={styles.info}>
              <Text style={styles.infoContent}>{"teste"}</Text>
              <Text style={styles.infoContent}>Porte: {"teste"}</Text>
              <Text style={styles.infoContent}>Idade: {"teste"}</Text>
              <Text style={styles.infoContent}>{"teste"}</Text>
            </View>
          </View>
          <ScrollView style={styles.descriptionContent}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
            <Text style={styles.descriptionText}>{"teste"}</Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <ButtonIcon
              title="Entrar em contato"
              name={"whatsapp"}
              size={20}
              color={"#7CFC00"}
            />
          </View>
        </View>
      </View>
    </View>
  );
}