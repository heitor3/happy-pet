import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
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
});