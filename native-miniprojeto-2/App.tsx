import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { myColors } from "./src/components/styles/Colors";
import Button from "./src/components/Button";
import Keyboard from "./src/components/Keyboard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button title="3" onPress={() => console.log("hello")} /> */}
      <Keyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.black,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
