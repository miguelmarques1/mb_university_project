import React from 'react';
import { Text, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = TextInputProps & {
    placeholder: string,
    label: string
}

export function Input({ placeholder, label, ...rest }: Props) {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                {...rest}
            />
        </>
    );
}