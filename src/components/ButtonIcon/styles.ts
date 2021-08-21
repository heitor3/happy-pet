import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 50,
    backgroundColor: theme.colors.secondaryColorPurple,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
  }
});