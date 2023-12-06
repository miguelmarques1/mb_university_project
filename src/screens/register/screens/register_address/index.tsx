import React from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./style";
import { Input } from "../../../../components/Input";
import { Dropdown } from "../../../../components/Dropdown";
import { states } from "./helpers/states";

export function RegisterAddress() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Para começar, insira o seu endereço</Text>
            <View style={styles.form}>
                <Dropdown 
                    items={states}
                    data={states}
                    labelField="nome"
                    onChange={() => {}}
                    onItemSelected={() => {}}
                    placeholder="Selecione o estado"
                    valueField="sigla"
                />
                <Input label="CEP *" placeholder="Insira o seu e-mail" />
                <Input label="Endereço *" placeholder="Insira o seu e-mail" />
                <Input label="Número *" placeholder="Insira o seu nome de usuário" />
                <Input label="Complemento *" placeholder="Insira a sua senha" />
            </View>
        </ScrollView>
    );
}