import React from "react";
import { View, Text } from "react-native";

export default (comp) => (
  <View
    stlye={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: comp.corFundo || "#000",
    }}
  >
    <Text style={{ fontSioze: 50, color: comp.corTexto || "#fff" }}>
      {comp.children}
    </Text>
  </View>
);
