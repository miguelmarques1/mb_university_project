import React from "react";
import { styles } from "./style";
import { Dropdown as ElementDropdown } from 'react-native-element-dropdown';
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";
import { Image } from "react-native";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type Props = DropdownProps<any> & {
    placeholder: string,
    items: any[],
    onItemSelected: () => void
}

export function Dropdown({placeholder, items, onItemSelected, ...rest}: Props) {
    return (
        <ElementDropdown
            iconStyle={{display: 'none'}}
            placeholder={placeholder}
            style={styles.dropdown}
            selectedTextStyle={styles.itemTextStyle}
            itemTextStyle={styles.itemTextStyle}
            renderLeftIcon={() => {
                return <FontAwesomeIcon style={styles.prefixIcon} icon={faPaperPlane}/>
            }}
            {...rest}
        />
    );
}