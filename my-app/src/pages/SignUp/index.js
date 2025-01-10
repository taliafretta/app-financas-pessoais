import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert
} from "react-native";
import styles from "./../SignIn/styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const { user, signUp } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSignUp(){
    signUp(name, email, password);
  }

  return (
    <View style={styles.view}>
      <KeyboardAvoidingView
        style={styles.key}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <TextInput 
        style={styles.input} 
        placeholder="Nome"
        value={name}
        onChangeText={ (text) => setName(text)}
        />
        <TextInput 
        style={styles.input} 
        placeholder="Seu e-mail" 
        value={email}
        onChangeText={ (text) => setEmail(text)}
        />
        <TextInput 
        style={styles.input} 
        placeholder="Sua senha" 
        value={password}
        onChangeText={ (text) => setPassword(text)}
        secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleSignUp}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        {/* </View> */}
      </KeyboardAvoidingView>
    </View>
  );
}
