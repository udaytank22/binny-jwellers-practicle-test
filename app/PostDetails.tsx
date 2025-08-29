import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MainStyle from "@/assets/style/MainStyle";

const PostDetails = () => {
  const route = useRoute();
  const { title, body } = route.params;

  return (
    <SafeAreaView style={[MainStyle.safeView, { margin: 20 }]}>
      <Text style={style.title}>Title</Text>
      <Text style={style.description}> {title}</Text>
      <Text style={style.title}>Body</Text>
      <Text style={style.description}> {body}</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  description: {
    fontSize: 13,
  },
});

export default PostDetails;
