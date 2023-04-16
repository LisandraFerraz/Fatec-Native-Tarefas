import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { PTBRAlphabet } from "../utils/pt-br_alphabet";
import { useEffect } from "react";
const keyboardStyles = require("./styles");

export default function KeyboardLayour({ letter }) {
  useEffect(() => {
    console.log(PTBRAlphabet.length);
  });
  return (
    <View style={keyboardStyles.layoutKeyboard}>
      <Button title={letter} />
    </View>
  );
}
