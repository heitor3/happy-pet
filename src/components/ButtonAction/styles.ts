import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 60,
    backgroundColor: theme.colors.secondaryColorPurple,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: theme.fonts.textBold,
    color: theme.colors.textColorWhite,
  }
});