import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.primaryColorBlack,
  },
  buttonIcon: {
    marginBottom: 20
  },
  dropdownLabel: {
    fontSize: 18,
    fontFamily: theme.fonts.titleMedium,
    color: theme.colors.textColorWhite,
  },
  dropdown: {
    height: 50,
    borderColor: '#fff',
    paddingHorizontal: 12,

    width: 280,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondaryColorPurple,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    lineHeight: 30,
    marginBottom: 30,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    color: '#fff',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,

  },
  placeholderStyle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'

  },
  selectedTextStyle: {
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    textAlign: 'center',
    fontSize: 16,
  },
  DropContainer: {
    borderWidth: 0,
    marginTop: -20,
    backgroundColor: '#A6A6A6',
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    textAlign: 'center',
  },
  cityContainer: {
    flexDirection: 'row',
    width: 200,
  },
  city: {
    width: '60%',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondaryColorPurple,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    lineHeight: 30,
    marginBottom: 30
  },
  uf: {
    width: '40%',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondaryColorPurple,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    lineHeight: 30,
    marginBottom: 30
  },
  description: {
    width: 280,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondaryColorPurple,
    textAlign: "justify",
    fontSize: 16,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    lineHeight: 30,
    marginBottom: 30
  },
  
});