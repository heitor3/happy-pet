import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { DonationOng } from '../../@types/navigation';

type props = DonationOng

export function InfoDonation({ name, street, number, district, city, uf, donationCode }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.info}>
        <Text style={styles.infoText}>Logradouro: {street},  {number}</Text>
        <Text style={styles.infoText}>Bairro: {district}</Text>
        <Text style={styles.infoText}>Cidade: {city + " - " + uf}</Text>
        <TouchableOpacity style={styles.donationCode}>
          <View style={styles.containerPix}>
            <Text style={styles.donationText}>Chave-PIX:</Text>
            <Entypo
              name="copy"
              size={30}
              color={theme.colors.secondaryColorPurple}
            />
          </View>
          <Text style={styles.donationText}>{donationCode}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}