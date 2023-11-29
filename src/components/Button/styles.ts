import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: 'white',
    fontFamily: theme.fonts.text500,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  }
});