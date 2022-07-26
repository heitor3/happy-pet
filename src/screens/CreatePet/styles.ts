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
  dropdownLabel:{
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
    margin: -14,

  },
  selectedTextStyle: {
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    textAlign: 'center',
    fontSize: 16,
  },
  DropContainer: {
    borderWidth: 0,
    backgroundColor: theme.colors.primaryColorBlack
  }
});


/**
 * import { theme } from '../../global/styles/theme';
 * 
 * title: {
    fontSize: 18,
    fontFamily: theme.fonts.titleMedium,
    color: theme.colors.textColorWhite,
  },
  input: {
    width: 280,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondaryColorPurple,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    lineHeight: 30,
    marginBottom: 30
  },
 * 
 * 
 */