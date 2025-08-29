import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStyle from "@/assets/style/MainStyle";
import { useNavigation } from "expo-router";

export const PostCard = ({ postTitle, postDiscription, onPress }) => {
  return (
    <Pressable style={style.card} onPress={onPress}>
      <Text style={style.cardTitle}>title: {postTitle}</Text>
      <Text style={style.cardBodyText}>body: {postDiscription}</Text>
    </Pressable>
  );
};

const PostList = () => {
  const navigation = useNavigation();
  const [postData, setPostData] = useState([]);
  const [loading, setisLoading] = useState(true);

  const fetchPostData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPostData(response.data);
      setisLoading(false);
    });
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <PostCard
        postTitle={item.title}
        postDiscription={item.body}
        onPress={() =>
          navigation.navigate("PostDetails", {
            title: item.title,
            body: item.body,
          })
        }
      />
    );
  };

  if (loading) {
    return (
      <View style={MainStyle.main}>
        <ActivityIndicator size="large" color="blue" />;
      </View>
    );
  }

  return (
    <SafeAreaView style={MainStyle.safeView}>
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListFooterComponent={<Text>End of List</Text>}
        ListFooterComponentStyle={style.footerComponent}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
  cardTitle: { color: "black", fontSize: 15 },
  cardBodyText: { color: "black", fontSize: 10 },
  footerComponent: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostList;
