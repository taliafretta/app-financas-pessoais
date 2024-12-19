import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles"; 
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <KeyboardAvoidingView 
      style={styles.key}
      behavior={Platform.OS === 'ios' ? 'padding' : '' }
      >
        <Image // Corrigido para 'Image'
          style={styles.img}
          source={require("../../assets/Logo.png")}
          enable
        />

        {/* <View style={{
                    flexDirection: 'row',
                }}> */}
        <TextInput style={styles.input} placeholder="Seu e-mail" />
        <TextInput style={styles.input} placeholder="Sua senha" />

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.link} 
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Crie uma conta!</Text>
        </TouchableOpacity>
        {/* </View> */}
      </KeyboardAvoidingView>
    </View>
  );
}
