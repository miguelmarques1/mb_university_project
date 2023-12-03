import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        width: '100%',
        paddingBottom: 10
    },
    content: {
        paddingTop: 20,
        flex: 2
    },
    control: {
        width: "80%"
    }
});