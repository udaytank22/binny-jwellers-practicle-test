import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStyle from "@/assets/style/MainStyle";
import { useNavigation } from "expo-router";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={MainStyle.safeView}>
      <Pressable
        style={style.button}
        onPress={() => navigation.navigate("PostList")}
      >
        <Text style={style.buttonText}>Post List</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "blue",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
});

export default Home;
