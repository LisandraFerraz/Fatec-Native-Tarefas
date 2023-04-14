import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Contador from "./src/Contador";

export default () => (
  <View style={style.App}>
    <Contador inicial={500} inicialMult={3} />
  </View>
);

const style = StyleSheet.create({
  App: {
    backgroundColor: "#AC9",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
