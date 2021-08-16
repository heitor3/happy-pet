import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.primaryColorBlack,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 37,
  },
  buttonIcon: {
    marginTop: 5
  },
  contentText: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: theme.fonts.text,
    color: theme.colors.textColorWhite,
    marginBottom: 10
  },
  textBold: {
    fontSize: 12,
    fontFamily: theme.fonts.textBold,
    color: theme.colors.textColorWhite
  },


  footer: {
    flex: 1,
    width: '100%',
    borderTopColor: theme.colors.secondaryColorPurple,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }

});