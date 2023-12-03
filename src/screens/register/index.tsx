import React, { useState } from "react";
import { Text, View } from "react-native";
import { Stepper } from "../../components/Stepper";
import { styles } from "./styles";
import { AppBar } from "../../components/AppBar";
import { RegisterAccount } from "./screens/register_account";
import { RegisterAddress } from "./screens/register_address";
import { RegisterProfile } from "./screens/RegisterProfile";
import { RegisterProfilePic } from "./screens/register_profile_pic";
import { Button } from "../../components/Button";

export function Register() {
    const [ activeStep, setActiveStep ] = useState(0);

    const components = [
        RegisterAccount(),
        RegisterProfile(),
        RegisterAddress(),
        RegisterProfilePic()
    ];

    const handleNext = () => {
        if(activeStep != (components.length - 1)) {
            setActiveStep(activeStep + 1);
        }
    }

    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.content}>
                <Stepper activeStep={activeStep} components={components} onBack={() => {}} onFinish={() => {}}/>
            </View>
            <View style={styles.control}>
                <Button title="Continuar" onPress={handleNext} />
            </View>
        </View>
    );
}