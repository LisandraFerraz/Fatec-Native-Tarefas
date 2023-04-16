import { StyleSheet } from "react-native";

export const keyboardStyles = StyleSheet.create({
  layoutKeyboard: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  keyBtns: {
    maxWidth: 50,
    minHeight: 52,
    backgroundColor: "#4600ff",
    borderRadius: 8,
    marginLeft: 2,
    flex: 1,
    justifyContent: "center",
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
});
