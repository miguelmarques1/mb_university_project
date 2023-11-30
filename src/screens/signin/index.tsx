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

export function SignIn() {
  const [ rememberMe, setRemeberMe ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ pass, setPass ] = useState("");

  const navigation = useNavigation<any>();

  const handleSetRemeberMe = () => setRemeberMe(!rememberMe);

  const handleNavigateForgotPass = () => {
    navigation.navigate("ForgotPass");
  }

  const handleLogin = () => {

  }

  

  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.content}>
        <Text style={styles.title}>
          Bem Vindos de Volta {"\n"}
          Sentimos sua Falta {"\n"}
        </Text>

        <Input
          label="E-mail"
          placeholder="Insira seu e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          maxLength={20}
        />
        
        <Input
          label="Senha"
          placeholder="Insira senha (apenas numeros)"
          keyboardType="number-pad"
          maxLength={6}
          value={pass}
          onChangeText={setPass}
          secureTextEntry={true}
        />

        <View style={styles.controls}>
          <Toggle value={rememberMe} label="Lembrar de Mim" onChange={handleSetRemeberMe}></Toggle>
          <Text style={styles.subtitle} onPress={handleNavigateForgotPass}>Esqueci Minha Senha</Text>
        </View>
      </View>

      <View style={styles.controlsbutons}>
        <Button title="Fazer login" onPress={handleLogin} />
      </View>
      <Image source={linha} style={styles.linha} />
      <View style={styles.socialControls}>
        <Image source={google} style={styles.linha} />
        <Image source={facebook} style={styles.linha} />
        <Image source={apple} style={styles.linha} />
      </View>
    </View>
  );
}
