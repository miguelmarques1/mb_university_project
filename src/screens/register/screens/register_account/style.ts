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
        marginBottom: 5,
        fontFamily: theme.fonts.title700,
    },
    form:{
        paddingTop: 30,
        justifyContent: 'space-evenly',
        height: "85%"
    }
});