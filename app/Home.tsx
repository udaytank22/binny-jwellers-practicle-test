import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStyle from "@/assets/style/MainStyle";
import { useNavigation } from "expo-router";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={MainStyle.safeView}>
      <View style={[MainStyle.main, { gap: 20 }]}>
        <Pressable
          style={style.button}
          onPress={() => navigation.navigate("PostList")}
        >
          <Text style={style.buttonText}>Post List</Text>
        </Pressable>
        <Pressable
          style={style.button}
          onPress={() => navigation.navigate("Count")}
        >
          <Text style={style.buttonText}>Count App</Text>
        </Pressable>
      </View>
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
