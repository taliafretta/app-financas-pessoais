import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#F0F4FF"
  },

  key: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  img: {
    marginBottom: 25 // Corrigido para um número, não string
  },

  input: {
    backgroundColor: "#FFF",
    width: "90%",
    fontSize: 17,
    padding: 10,
    borderRadius: 8,
    color: "#121212",
    marginBottom: 15
    // color: "red"
  },

  button: {
    width: "90%",
    height: 45,
    borderRadius: 8,
    backgroundColor: "#3b3bdf",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  textButton: {
    fontSize: 20,
    // color: "FFF"
    color: "#FFF"
  },

  link: {
    marginTop: "2%",
    marginBottom: "2%"
  },

  linkText: {
    color: "#171717"
  }
});

export default styles; // Certifique-se de que o 'styles' esteja exportado corretamente
