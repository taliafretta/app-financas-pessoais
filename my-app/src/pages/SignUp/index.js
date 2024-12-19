import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./../SignIn/styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.view}>
      <KeyboardAvoidingView
        style={styles.key}
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Seu e-mail" />
        <TextInput style={styles.input} placeholder="Sua senha" />

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        {/* </View> */}
      </KeyboardAvoidingView>
    </View>
  );
}
