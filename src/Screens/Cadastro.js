import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Cadastro Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar para a tela de Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
