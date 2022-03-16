import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


type Props = RectButtonProps & {
    id: string;
    name: string;
    city: string;
    uf: string;
    uri: string;

}

export function ListItem({ name, city, uf, uri, ...rest }: Props) {
    uri = "https://s2.glbimg.com/DVfIiTGl-KnJU41UcD9Yoj33MZM=/e.glbimg.com/og/ed/f/original/2021/06/16/doge.jpg";
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View>
                <Image
                    source={{ uri }}
                    style={styles.imgPet}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.city}>{city + " - " + uf}</Text>
                </View>

                <Entypo
                    name="chevron-thin-right"
                    color={theme.colors.textColorWhite}
                    size={12}
                />
            </View>

        </RectButton>
    );
}