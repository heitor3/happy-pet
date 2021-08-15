import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryColorBlack,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
  },
  buttonIcon: {
    marginTop: 8
  },
  text: {
    fontSize: 12,
    fontFamily: theme.fonts.text,
    color: theme.colors.textColorWhite
  },
  textBold: {
    fontSize: 12,
    fontFamily: theme.fonts.textBold,
    color: theme.colors.textColorWhite
  },


  footer: {
    width: '100%',
    borderTopColor: theme.colors.secondaryColorPurple,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }

});