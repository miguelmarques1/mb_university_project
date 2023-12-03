import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { Input } from "../../../../components/Input";

export function RegisterProfile() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Insira seus dados pessoais</Text>
            <View style={styles.form}>
                <Input label="Nome *" placeholder="Insira o seu nome" />
                <Input label="Sobrenome *" placeholder="Insira o seu sobrenome" />
                <Input label="Celular *" placeholder="Insira a seu celular" />
                <Input label="Telefone *" placeholder="Insira a seu telefone" />
            </View>
        </View>
    );
}