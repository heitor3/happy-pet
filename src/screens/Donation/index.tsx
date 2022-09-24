import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { HeaderTitle } from '../../components/HeaderTitle/Index';
import { InfoDonation } from '../../components/InfoDonation';
import Clipboard from '@react-native-community/clipboard';
import { DonationOng } from '../../@types/navigation';

import address from '../../../address';

import { styles } from './styles';

export function Donation() {
  // const [pixCode, setPixCode] = useState('');
  // const copy = Clipboard.
  return (

    <View style={styles.container}>
      <HeaderTitle
        title="Fazer Doação"
      />

      <FlatList
        data={address}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <InfoDonation
            name={item.name}
            street={item.street}
            number={item.number}
            district={item.district}
            city={item.city}
            uf={item.uf}
            donationCode={item.donationCode}
          />
        }
      />

    </View>

  );
}