import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    dropdown: {
        color: theme.colors.purple,
        marginBottom: 20,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.grey,
    },
    prefixIcon: {
        color: theme.colors.grey,
        marginRight: 15
    },
    itemTextStyle: {
        color: theme.colors.purple
    }
});