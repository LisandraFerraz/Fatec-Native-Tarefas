import { StyleSheet, Text, View } from "react-native";
import { PTBRAlphabet } from "./src/utils/pt-br_alphabet";
import { FlatList } from "react-native";
import { Button } from "react-native";
import { useEffect, useState } from "react";
const keyboardStyles = require("./src/components/styles");

export default function App() {
  const [letterDesc, setLetterDesc] = useState("");

  function setLetter(letra) {
    setLetterDesc(letra);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.meaningView}>
        {letterDesc || "Toque em uma letra!"}
      </Text>

      <FlatList
        numColumns={6}
        style={styles.keyboardLayout}
        data={PTBRAlphabet}
        renderItem={({ item }) => (
          <View style={styles.keyLetter}>
            <Button
              title={item.letter}
              onPress={() => setLetter(item.content)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  keyboardLayout: {
    marginTop: 100,
  },
  keyLetter: {
    margin: 2,
    width: 60,
  },
  meaningView: {
    marginVertical: 80,
    marginTop: 220,
    fontSize: 23,
    fontWeight: 600,
    color: "#2196f3",
  },
});
