import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStyle from "@/assets/style/MainStyle";

const Count = () => {
  const [count, SetCount] = useState(0);

  const inc = useCallback(() => SetCount((c) => c + 1), []);
  const dec = useCallback(() => SetCount((c) => Math.max(0, c - 1)), []);
  return (
    <SafeAreaView style={MainStyle.safeView}>
      <View style={[MainStyle.main, { alignItems: "center" }]}>
        <Text style={style.title}>{count}</Text>
        <View style={style.buttonRow}>
          <Text style={style.textButton} onPress={inc}>
            +
          </Text>
          <Text style={style.textButton} onPress={dec}>
            -
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  textButton: {
    fontSize: 40,
    padding: 30,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default Count;
