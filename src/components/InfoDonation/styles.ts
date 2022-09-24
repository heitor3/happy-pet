import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 340,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: theme.colors.cardColorGrey,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondaryColorPurple,
  },
  title: {
    marginVertical: 20,
    color: theme.colors.textColorWhite,
    fontFamily: theme.fonts.textBold,
    textTransform: 'uppercase',
    fontSize: 16,
  },
  info: {
    height: '50%',
    width: '90%',
  },
  infoText: {
    color: theme.colors.textColorWhite,
    fontFamily: theme.fonts.textRegular,
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 12,
    fontSize: 12,
  },
  donationCode: {
    justifyContent: 'center',
    marginTop: 10,
  },
  donationText: {
    color: theme.colors.textColorWhite,
    fontFamily: theme.fonts.textRegular,
    fontSize: 12,
    lineHeight: 20,
  },
  containerPix:{
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 10
  }
});