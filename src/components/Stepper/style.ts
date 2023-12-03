import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center'
    },
    inactive: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.grey,
    },
    active: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    dots: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-evenly'
    },
    page: {
        flex: 1
    }
});