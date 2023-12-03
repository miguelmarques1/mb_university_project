import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  content: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  controlsbutons: {
    marginTop: 60,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center'
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5
  },
  socialControls: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '80%',
    paddingHorizontal: 5
  },
  title: {
    color: theme.colors.text,
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15
  },
  linha: {
    marginTop: 5,
    marginBottom: 5
  },
  subtitle: {
    color: theme.colors.purple,
    fontSize: 12,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
  register: {
    flexDirection: 'row',
    flex: 1,
    alignItems: "flex-end",
    paddingBottom: 20
  },
  createAccountText: {
    color: theme.colors.purple,
  }
});