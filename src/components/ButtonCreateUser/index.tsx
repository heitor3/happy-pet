import React from "react";
import { Image, ImageProps } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from "./styles";

type Props = RectButtonProps & ImageProps & {
  source?: any;
  width: number;
  height: number;
  resizeMode: string;
}
export function ButtonCreateUser({ source, width, height, resizeMode, ...rest }: Props) {
  return (
    <RectButton style={styles.container}>
      <Image
        source={source}
        style={styles.image}
        width={width}
        height={height}
        resizeMode={resizeMode}
      />
    </RectButton>
  );
}