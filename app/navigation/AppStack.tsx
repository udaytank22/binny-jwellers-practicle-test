import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppStack = () => {
  const [authToken, setAuthToken] = useState("");

  const getToken = () => {
    const token = AsyncStorage.getItem("token");
    setAuthToken(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Stack>
      {authToken ? (
        <Stack.Screen name="index" options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="Home" options={{ headerShown: false }} />
          <Stack.Screen name="PostList" options={{ headerShown: false }} />
          <Stack.Screen name="PostDetails" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </>
      )}
    </Stack>
  );
};

export default AppStack;
