import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // Corrigido
// import Routes from './src/routes/index'; // Verifique se o caminho está correto
// import  Routes from "./src/routes";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}