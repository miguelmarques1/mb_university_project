import React from "react";
import { View, Image, Text } from 'react-native';
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import logoSmall from "../../../assets/app-name-small.png"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { BackButton } from "../BackButton";
import { useNavigation } from "@react-navigation/native";

type Props = {
    onPressBack?: () => void
}

export function AppBar({onPressBack}: Props) {
    const navigation = useNavigation();

    const handleNavigateBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <BackButton onPress={onPressBack ?? handleNavigateBack} />
            <Image source={logoSmall} resizeMode="stretch" />
            <Text></Text>
        </View>
    );
}