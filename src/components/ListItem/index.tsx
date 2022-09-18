import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton, RectButtonProps, } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


type Props = RectButtonProps & {
    name: string;
    city: string;
    uf: string;
    screenShot: string;
    size: number;
    icon?: any;
    handleRigthDelete?: () => void;
}

export function ListItem({ name, city, uf, screenShot, size, icon, handleRigthDelete, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
            activeOpacity={0.7}
        >
            <View>
                <Image
                    source={{ uri: screenShot }}
                    style={styles.imgPet}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.city}>{city + " - " + uf}</Text>
            </View>
            <View>
                <Entypo
                    name={icon}
                    color={theme.colors.textColorWhite}
                    size={size}
                />
            </View>

        </RectButton>
    );
}