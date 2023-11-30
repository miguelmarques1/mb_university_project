import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

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
    control: {
        alignItems: 'center'
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
    subtitle: {
        color: theme.colors.primary,
        textAlign: 'left',
        fontSize: 16,
        marginBottom: 5,
        fontFamily: theme.fonts.title500,
    },
    spacing: {
        height: 45,
    }
});