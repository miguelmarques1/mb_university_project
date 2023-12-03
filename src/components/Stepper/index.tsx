import React from "react"
import { View } from "react-native";
import { styles } from "./style";
import Box from '@mui/material/Box';
import { Stepper as MuiStepper } from "@mui/material";
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

type Props = {
    activeStep: number,
    components: JSX.Element[],
    onFinish: () => void,
    onBack: () => void
}

export function Stepper({activeStep, components, onFinish, onBack}: Props) {
    const dots = [];
    
    for(let i = 0; i < components.length; i++) {
        dots.push(
            <View style={i == activeStep ? styles.active : styles.inactive}></View>
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.dots}>
                {dots}
            </View>
            <View style={styles.page}>
                {components[activeStep]}
            </View>
        </View>
    );
}