import React from 'react';
import { BottomSheetProps } from '@gorhom/bottom-sheet';
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Button } from '../Button';
import { styles } from './styles';

type Props = BottomSheetProps & {
    image: ImageSourcePropType,
    title: string,
    message: string,
    buttonLabel: string,
    onButtonPressed: () => void
}

export function BottomSheetModal ({image, title, message, buttonLabel, onButtonPressed, ...rest}: Props) {
    return(
        <BottomSheet
            {...rest}
        >
            <View style={styles.container}>
                <Image source={image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <Button title={buttonLabel} onPress={onButtonPressed} />
            </View>
        </BottomSheet>
    );
}