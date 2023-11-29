import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../../assets/app-name-small.png";
import apple from "../../../assets/apple.png";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import linha from "../../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input";
import { Toggle } from "../../components/Toggle";
import { useState } from "react";
import { AppBar } from "../../components/AppBar";

export function ForgotPass() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <AppBar />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Esqueceu a senha? {"\n"}
                </Text>
                <Text style={styles.subtitle}>
                    Digite o seu e-mail abaixo para receber as instruções de redefinição de senha {"\n"}
                </Text>

                <Input
                    label="E-mail"
                    placeholder="Insira seu e-mail"
                    keyboardType="email-address"
                    maxLength={20}
                />

                <View style={styles.spacing} />

                <Button title="Recuperar senha" />

            </View>
        </View>
    );
}