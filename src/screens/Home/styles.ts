import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.primaryColorBlack,
  },
  content: {
    flex: 1,
    marginTop: 80,

  },
  buttonAction: {
    marginBottom: 37
  }

});