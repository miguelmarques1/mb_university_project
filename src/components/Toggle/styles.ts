import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    switch: {
        height: 10,
    },
    label: {
        fontSize: 12,
        color: theme.colors.primary
    }
});