import React from "react";
import {
  View,
  Text,
  Image
} from 'react-native';
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";

import results from "../../../results";
//https://app.rocketseat.com.br/node/mission-react-native/group/nlw-together-react-native/lesson/aula-03-in-orbit-2

export function DetailsPet() {
  const uri = "https://s2.glbimg.com/DVfIiTGl-KnJU41UcD9Yoj33MZM=/e.glbimg.com/og/ed/f/original/2021/06/16/doge.jpg"
  return (
    <View>
      <Header />
      <View>
        <Text>

        </Text>
        <View>
          <Image
            source={{uri}}
          />
          <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
        <ButtonIcon
          title="Entrar em contato"
          name={"whatsapp"}
          size={20}
          color={"#7CFC00"}
        />
      </View>
    </View>
  );
}