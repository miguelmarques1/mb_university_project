import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    content: {
        width: '65%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        color: theme.colors.secondary100,
        paddingBottom: 5
    },
    message: {
        fontSize: 14,
        textAlign: 'center',
        color: theme.colors.primary,
        paddingBottom: "35%",
    },
    control: {
        width: "80%"
    }
});
