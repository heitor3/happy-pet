import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View
} from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
  title: string,
}

export function InputText({ title, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}