import React from "react"
import { View, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "./style";
import PagerView from "react-native-pager-view";

type Props = {
    activeStep: number,
    components: JSX.Element[],
    onFinish: () => void,
    onBack: () => void
}

export function Stepper({activeStep, components, onFinish, onBack}: Props) {
    const dots = [];
    
    for(let index = 0; index < components.length; index++) {
        dots.push(
            <View key={index} style={index == activeStep ? styles.active : styles.inactive}></View>
        );
    }

    return(
         <KeyboardAvoidingView keyboardVerticalOffset={0}>
            <View style={styles.container}>
                <View style={styles.page} >
                    {components[activeStep]}
                </View>
                <View style={styles.dots}>
                    {dots}
                </View>
            </View>
         </KeyboardAvoidingView>
    );
}