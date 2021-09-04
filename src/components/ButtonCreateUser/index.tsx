import React from "react";
import { Image, ImageProps } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from "./styles";

type Props = RectButtonProps & ImageProps & {
  source?: any;
}
export function ButtonCreateUser({ source, ...rest }: Props) {
  return (
    <RectButton style={styles.container}>
      <Image
        {...rest}
        source={source}
        style={styles.image}
      />
    </RectButton>
  );
}