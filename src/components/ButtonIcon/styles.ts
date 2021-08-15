import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 50,
    backgroundColor: theme.colors.secondaryColorPurple,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: theme.fonts.title,
    color: theme.colors.textColorWhite,
  }
});