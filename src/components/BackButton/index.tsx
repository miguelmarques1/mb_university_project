import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
    onPress?: () => void;
}

export function BackButton({onPress}: Props) {
    return (
        <TouchableOpacity onPress={onPress}>
            <FontAwesomeIcon icon={ faChevronLeft } size={20}/>
        </TouchableOpacity>
    );
}