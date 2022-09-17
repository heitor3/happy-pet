import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import { useRoute } from '@react-navigation/native'
import { PetDetailsParams } from "../../@types/navigation";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";

import results from "../../../results";
import { styles } from "./styles";



export function DetailsPet({ ...rest }: PetList) {
  const route = useRoute()
  const pet = route.params as PetDetailsParams;

  return (

    <>
      {/* <Header /> */}
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.name}>
            {pet.name}
          </Text>

          <Image
            style={styles.imgPet}
            source={{ uri: pet.animalSpecies.screenShot }}
            resizeMode="cover"
          />
          <View style={styles.info}>
            <Text style={styles.infoContent}>{pet.name}</Text>
            <Text style={styles.infoContent}>Porte: {pet.size}</Text>
            <Text style={styles.infoContent}>Idade: {pet.age}</Text>
            <Text style={styles.infoContent}>{`${pet.city} - ${pet.uf}`}</Text>
          </View>

          <Text style={styles.descriptionTitle}>Descrição</Text>
          <ScrollView style={styles.descriptionContent}>
            <Text style={styles.descriptionText}>{pet.description}</Text>
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