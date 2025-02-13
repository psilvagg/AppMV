import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./src/Screens/Cadastro"; 
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from "react-native";

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://www.minhasvacinas.online/assets/img/logo-img.png",
            }}
            alt="Logo"
            style={styles.headerImg}
          />
          <Text style={styles.title}>Entre no Minhas Vacinas</Text>
          <Text style={styles.subtitle}>[ Subtítulo ]</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="email@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              secureTextEntry
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity onPress={() => {
            Alert.alert('Sucesso!')
          }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ marginTop: "auto" }}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.formFooter}>
            Não tem uma conta?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Registre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 26,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#1e1e1e",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  form: {
    marginBottom: 10,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  btn: {
    backgroundColor: "#077bff",
    borderRadius: 8,
    borderWidth: 1,
    borderBlockColor: "#075eec",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
