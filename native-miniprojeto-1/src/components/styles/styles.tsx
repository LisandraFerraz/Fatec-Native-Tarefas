import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const styles = StyleSheet.create({
  btnOrange: {
    width: 70,
    height: 72,
    borderRadius: 100,
    backgroundColor: myColors.btnOrange,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  btnDark: {
    width: 70,
    height: 72,
    borderRadius: 100,
    backgroundColor: myColors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },

  btnGray: {
    width: 70,
    height: 72,
    borderRadius: 100,
    backgroundColor: myColors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.white,
  },
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 95,
    color: myColors.btnDark,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondtNumber: {
    fontSize: 40,
    color: myColors.btnDark,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
