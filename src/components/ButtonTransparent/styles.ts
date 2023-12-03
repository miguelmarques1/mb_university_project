import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
    height: 45,
    backgroundColor: 'transparet',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.grey,
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