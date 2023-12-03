import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { Input } from "../../../../components/Input";

export function RegisterAddress() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Para começar, insira o seu endereço</Text>
            <View style={styles.form}>
                <Input label="Email *" placeholder="Insira o seu e-mail" />
                <Input label="Nome de usuário *" placeholder="Insira o seu nome de usuário" />
                <Input label="Senha *" placeholder="Insira a sua senha" />
                <Input label="Confirme a senha *" placeholder="Insira a sua senha" />
            </View>
        </View>
    );
}