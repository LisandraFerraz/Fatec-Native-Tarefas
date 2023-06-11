import { StyleSheet } from "react-native";

export const styleTemplate = StyleSheet.create({
  layout_template: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  layout_title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700",
    marginVertical: 20,
    fontSize: 20,
    color: "#262626",
  },
  layout_image: {
    height: 320,
    width: 320,
  },
  layout_button: {
    width: 320,
    height: 55,
    backgroundColor: "#ED2F2F",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  layout_button_txt: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  layout_answer: {
    marginTop: 20,
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: 18,
    color: "#262626",
  },
});
