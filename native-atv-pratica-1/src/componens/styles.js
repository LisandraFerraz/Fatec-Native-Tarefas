"use strict";

import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#26232e",
    padding: 20,
    width: 350,
    elevation: 2,
    color: "#fff",
    borderRadius: 8,
    margin: 10,
    color: "#fff",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  imageCard: {
    height: 50,
    width: 50,
  },
  cardText: {
    color: "#fff",
    fontSize: 14,
  },
});

module.exports = cardStyles;
