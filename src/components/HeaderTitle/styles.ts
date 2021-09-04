import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 170,
    paddingTop: getStatusBarHeight(),
    backgroundColor: theme.colors.primaryColorBlack,
  },
  title: {
    fontSize: 36,
    fontFamily: theme.fonts.titleHeader,
    color: theme.colors.secondaryColorPurple,
  },
});