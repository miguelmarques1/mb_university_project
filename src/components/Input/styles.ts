import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    input: {
        color: theme.colors.grey,
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        textAlign: 'left',
        fontWeight:'bold',
        borderBottomColor: theme.colors.grey,
        borderBottomWidth: 2,
        marginBottom: 20,
        marginTop: 3
      },
      label: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold'
      }
});