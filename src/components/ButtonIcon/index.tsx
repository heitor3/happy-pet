import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  name?: any;
  color?: string;
  size?: number;
}

export function ButtonIcon({ title, name, color, size, ...rest }: Props) {
  return (
    <TouchableOpacity
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
    </TouchableOpacity>
  );
}