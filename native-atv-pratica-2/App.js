import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Valores from "./src/valores";

export default function App() {
  const [numberMin, setNumberMin] = useState();
  const [numberMax, setNumberMax] = useState();

  useEffect(() => {
    var random1 = Math.floor(Math.random() * 5) + 1;
    var random2 = Math.floor(Math.random() * 5) + 1;

    if (random1 > random2) {
      setNumberMax(random1);
      setNumberMin(random2);
    } else {
      setNumberMax(random2);
      setNumberMin(random1);
    }
  }, []);

  return (
    <View style={styles.container}>
      {numberMax === numberMin ? (
        <Text>
          Os valores {numberMax} e {numberMin} são os mesmos.
        </Text>
      ) : (
        <Valores max={numberMax} min={numberMin} />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17161c",
    alignItems: "center",
    justifyContent: "center",
  },
});
