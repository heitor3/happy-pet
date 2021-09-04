import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.primaryColorBlack,
  },
  content: {
    marginTop: 66,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
  },
  text2: {
    fontSize: 18,
    fontFamily: theme.fonts.textRegular,
    color: theme.colors.textColorWhite,
    marginTop: 10,
  },
  buttonArea: {
    width: '100%',
    marginTop: 82,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  contentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.textBold,
    color: theme.colors.textColorWhite,
  }


});