import React from "react";
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  name?: any;
  color?: string;
  size?: number;
}

export function ButtonIcon({ title, name, color, size, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
        {" "}
        <Feather
          name={name}
          color={color}
          size={size}
        />
      </Text>
    </RectButton>
  );
}