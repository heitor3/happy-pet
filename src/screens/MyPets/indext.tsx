import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Animated, Alert } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { HeaderTitle } from '../../components/HeaderTitle/Index';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';

import { ListItem } from '../../components/ListItem';
import api from '../../service/api';

export function MyPets() {
  const [results, setResults] = useState<PetList[]>([]);

  useEffect(() => {
    api.get("list/1").then(response => {
      setResults(response.data);
    });
  }, []);


  useEffect(() => {
    setResults(results)
  }, [results]);


  function RightAction(progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.containerDelete}>
        <Animated.Text style={[styles.messageDelete, { transform: [{ scale }] }]}>Excluir</Animated.Text>
      </View>
    )
  }

  function handleDeletePet(id: number) {
    api.delete(`delete/${id}`,)
      .then(response => {
        if (response.status === 200) {
          const list = results.filter(item => item.id != id)
          setResults(list)
        }
      })
  }

  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Meus Cadastros"
      />

      <FlatList
        data={results}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) =>
          <Swipeable
            onSwipeableRightOpen={() => { handleDeletePet(item.id) }}
            key={item.animalSpecies.id}
            renderRightActions={
              RightAction
            }
          >
            <ListItem
              icon='align-left'
              size={25}
              name={item.name}
              city={item.city}
              uf={item.uf}
              screenShot={item.animalSpecies.screenShot}
              handleRigthDelete={() => Alert.alert("oi")}
            />
          </Swipeable>
        }
      />

    </View>

  );
}