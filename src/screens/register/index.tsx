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
import { useNavigation } from "@react-navigation/native";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { BottomSheetModal } from "../../components/BottomSheetModal";
import RegisterConfirmed from "../../assets/Cadastro_Confirmado.png";

export function Register() {
    const [activeStep, setActiveStep] = useState(0);
    const [ isModalVisible, setModalVisibility ] = useState(false);
    const navigation = useNavigation();

    const components = [
        RegisterAccount(),
        RegisterProfile(),
        RegisterAddress(),
        RegisterProfilePic()
    ];

    const handleEnter = () => {
        setModalVisibility(true);
        navigation.goBack();
    }

    const handleNext = () => {
        if (activeStep != (components.length - 1)) {
            setActiveStep(activeStep + 1);
        } else {
            setModalVisibility(true);
        }
    }

    const handleBack = () => {
        if (activeStep != 0) {
            setActiveStep(activeStep - 1);
        } else {
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <AppBar onPressBack={handleBack} />
            <View style={styles.content}>
                <Stepper activeStep={activeStep} components={components} onBack={() => { }} onFinish={() => { }} />
            </View>
            <View style={styles.control}>
                {activeStep == components.length - 1 ?
                    <><ButtonTransparent title="Pular esta etapa" onPress={handleNext} /></> : null
                }
                <Button title="Continuar" onPress={handleNext} />
            </View>
            <BottomSheetModal
                 buttonLabel={isModalVisible ? "Entrar" : "Sair"}
                 image={RegisterConfirmed}
                 title="Seu perfil foi criado com sucesso"
                 message="Realize o login com as credenciais inseridas anteriormente"
                 onButtonPressed={handleEnter}
                 children={null}
                 index={isModalVisible ? 1 : 0}
            ></BottomSheetModal>
        </View>
    );
}