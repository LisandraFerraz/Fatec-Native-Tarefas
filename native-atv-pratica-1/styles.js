"use strict";

import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19181f",
    alignItems: "center",
    paddingTop: 80,
  },
  search_section: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 25,
    // alignItems: "center",
  },
  inputText: {
    height: 60,
    width: 300,
    padding: 20,
    elevation: 2,
    backgroundColor: "#322e3b",
    borderRadius: 8,
    color: "#fff",
  },
  btnAdd: {
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
  appTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

module.exports = appStyles;
