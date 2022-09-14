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

type PetList = {
  id: number;
  name: string;
  id_animalSpecies: number;
  size: string;
  age: string;
  city: string;
  uf: string;
  description: string;
  whatsapp: string;
  user: string;
  animalSpecies: {
    id: number;
    name: string;
    screenShot: string;
  }
}

export function DetailsPet({ ...rest }: PetList) {
  const uri = "https://s2.glbimg.com/DVfIiTGl-KnJU41UcD9Yoj33MZM=/e.glbimg.com/og/ed/f/original/2021/06/16/doge.jpg"
  return (

    <>
      {/* <Header /> */}
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.name}>
            {"TESTE"}
          </Text>

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

          <Text style={styles.descriptionTitle}>Descrição</Text>
          <ScrollView style={styles.descriptionContent}>
            <Text style={styles.descriptionText}>{"teste teste teste  teste teste teste teste teste teste testeteste testeteste teste teste testeteste testeteste teste te dwa çiug loaiukgd loawiudy lawiudhlawkdjhwald kijhawldiu khawlidkhalwdkjhwaldkjhawdlkjwhalkdjhawldkjawhdlawkjdhawlkj hlkawjhdlka jhdlwkjahdlawkjdhawlkjste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testeteste teste teste testeteste testetesteteste testeteste teste teste testeteste testeteste teste teste testeteste testetesteteste teste"}</Text>
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
    </>
  );
}