import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { styles } from "./style";
import { Input } from "../../../../components/Input";
import profileImage from '../../../../assets/ImagemPerfil.png';
import picBackground from '../../../../assets/pic_bg.png';

export function RegisterProfilePic() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Para finalizar, insira uma foto de perfil</Text>
            <View style={styles.form}>
                <ImageBackground source={picBackground} >
                    <Image source={profileImage} />
                </ImageBackground>
                <Text style={styles.label}>Selecione a foto de perfil</Text>
            </View>
        </View>
    );
}