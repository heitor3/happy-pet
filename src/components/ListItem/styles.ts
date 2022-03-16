import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 363,
        height: 115,
        margin: 2,
        borderRadius: 10,
        backgroundColor: theme.colors.cardColorGrey,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 9
    },
    imgPet: {
        width: 100,
        height: 100,
        borderColor: theme.colors.secondaryColorPurple,
        borderWidth: 2.5,
        borderRadius: 50,
    },
    content: {
        flex:1,
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    name: {
        fontFamily: theme.fonts.textBold,
        fontSize: 20,
        color: theme.colors.textColorWhite
    },
    city: {
        fontFamily: theme.fonts.textRegular,
        fontSize: 14,
        color: theme.colors.textColorWhite
    }

}); 