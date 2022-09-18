import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.primaryColorBlack,
  },
  containerDelete: {
    flex: 1,
    height: 115,
    backgroundColor: "#F33C3C",
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    margin: 2,
  },
  messageDelete: {
    fontFamily: theme.fonts.textBold,
    fontSize: 14,
    marginHorizontal: 30
  }

});