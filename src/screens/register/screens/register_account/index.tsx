import React from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./style";
import { Input } from "../../../../components/Input";

export function RegisterAccount() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Insira os dados da sua conta</Text>
            <View style={styles.form}>
                <Input label="Email *" placeholder="Insira o seu e-mail" />
                <Input label="Nome de usuário *" placeholder="Insira o seu nome de usuário" />
                <Input label="Senha *" placeholder="Insira a sua senha" />
                <Input label="Confirme a senha *" placeholder="Insira a sua senha" />
            </View>
        </ScrollView>
    );
}