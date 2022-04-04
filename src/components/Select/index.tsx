import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  placeholder?: string;

}

export function Select() {
  const [openModal, setOpenModal] = useState(false);
  const [texte, setTeste] = useState(false);
  return (
    <View>
      <Text style={styles.title}>Selecione</Text>
      <TouchableOpacity style={styles.container} onPress={() => setOpenModal(true)}>
        <Text style={styles.placeHolder}>Selecione</Text>
        <FontAwesome
          name="chevron-down"
          color={theme.colors.placeHoldeColorOpacityGrey}
          size={14}
        />
      </TouchableOpacity>
      <Modal
        animationType='slide'
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <SafeAreaView>
          <View>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <FontAwesome
                name="chevron-up"
                color="blue"
                size={25}
              />
            </TouchableOpacity>
            <Text>{"teste"}</Text>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>

    //https://www.youtube.com/watch?v=fCCN8j84H3M&ab_channel=Lu%C3%ADsReisDev

  );
}