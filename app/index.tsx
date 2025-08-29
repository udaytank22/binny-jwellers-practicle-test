import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@react-navigation/elements";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, SetLoginError] = useState("");

  const onLoginButtonPress = () => {
    if (email === "" || password === "") {
      SetLoginError("Please Enter the Valid Details");
      return;
    }
    SetLoginError("");
    Alert.alert("Login", `Email: ${email} and Password: ${password}`);
  };

  return (
    <SafeAreaView style={style.safeView}>
      <View style={style.main}>
        <Text style={style.header}>LOGIN</Text>
        {loginError ? <Text style={style.error}>{loginError}</Text> : null}
        <Text style={style.title}>Email</Text>
        <TextInput
          value={email}
          placeholder="enter the email"
          onChangeText={(text) => setEmail(text)}
          style={style.textInput}
        />
        <Text style={style.title}>Password</Text>
        <TextInput
          value={password}
          placeholder="enter the password"
          onChangeText={(text) => setPassword(text)}
          style={style.textInput}
          secureTextEntry={true}
        />
        <Pressable onPress={() => onLoginButtonPress()} style={style.button}>
          <Text style={style.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeView: { flex: 1, padding: 20 },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
  },
  title: {
    fontSize: 15,
    textAlign: "left",
  },
  textInput: {
    height: "5%",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
  },
  button: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
  error: {
    color: "red",
    fontSize: 15,
  },
});

export default Login;
