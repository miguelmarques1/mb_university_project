import React from 'react';
import { SwitchProps } from 'react-native';
import { View, Switch, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = SwitchProps & {
    value: boolean,
    label: string,
}

export function Toggle({value, label, ...rest}: Props) {
    return(
        <View style={styles.container}>
            <Switch 
                value={value}
                thumbColor={theme.colors.purple}
                trackColor={{false: 'transparent', true: theme.colors.pink}}
                style={styles.switch}
                {...rest}
            />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}