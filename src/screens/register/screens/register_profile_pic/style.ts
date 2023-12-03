import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 20
    },
    title: {
        color: theme.colors.text,
        textAlign: 'left',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: theme.fonts.title700,
    },
    form:{
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "85%"
    },
    label: {
        color: theme.colors.primary,
        paddingTop: 10
    }
});