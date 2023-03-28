import { StyleSheet, Text } from "react-native";

export default (param) => {
  return (
    <>
      <Text style={style.text}>
        O valor {param.max} é maior que o valor {param.min}.
      </Text>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
