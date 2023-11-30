import React from 'react';
import { BottomSheetProps } from '@gorhom/bottom-sheet';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Button } from '../Button';
import { styles } from './styles';
import BottomSheet  from '@gorhom/bottom-sheet';

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
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            snapPoints={[1, '80%']}
            backgroundStyle={{backgroundColor: "#F8F8FF", borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            {...rest}
        >
            <View style={styles.container}>
                <Image source={image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <View style={styles.control}>
                    <Button title={buttonLabel} onPress={onButtonPressed} />
                </View>
            </View>
        </BottomSheet>
    );
}