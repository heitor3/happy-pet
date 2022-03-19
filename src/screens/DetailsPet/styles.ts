import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryColorBlack,
    alignItems: 'center',
  },
  card: {
    height: 614,
    width: 363,
    borderRadius: 10,
    marginTop: 46,
    marginHorizontal: 6,
    alignItems: 'center',
    backgroundColor: theme.colors.cardColorGrey,
  },
  name: {
    fontFamily: theme.fonts.titleMedium,
    fontSize: 20,
    color: theme.colors.textColorWhite,
    marginTop: 39,
    marginBottom: 19
  },
  imgPet: {
    height: 240,
    width: 350,
    borderRadius: 10,
    
  },
  info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 42,
    marginBottom: 26,
  },
  infoContent: {
    fontFamily: theme.fonts.textBold,
    fontSize: 10,
    color: theme.colors.textColorWhite,
  },
  descriptionContent: {
    width: '100%',
    maxHeight: 100,
    marginVertical: 10,
    textAlign: 'justify',
  },
  descriptionTitle: {
    marginBottom: 10,
    fontFamily: theme.fonts.titleMedium,
    fontSize: 12,
    color: theme.colors.textColorWhite,
    textAlign: "center"
  },
  descriptionText: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 10,
    color: theme.colors.textColorWhite,
    marginHorizontal: 43.5
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginVertical: 20
  },
});
