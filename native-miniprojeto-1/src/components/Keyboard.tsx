import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { myColors } from "./styles/Colors";
import { styles } from "./styles/styles";

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondtNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<any | null>(null);

  const handleNumberPressed = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPressed = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondtNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondtNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 9999
              ? [styles.screenFirstNumber, { color: myColors.white }]
              : [
                  styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.white },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={styles.screenFirstNumber}>{firstNumber} </Text>;
    }
    if (firstNumber === "") {
      return <Text style={styles.screenFirstNumber}>{"0"} </Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }

    if (firstNumber.length > 7) {
      return (
        <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };
  return (
    <View style={styles.viewBottom}>
      <View
        style={{
          height: 128,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={styles.screenSecondtNumber}>{secondNumber}</Text>
        <Text style={{ color: "white", fontSize: 50, fontWeight: "500" }}>
          {operation}
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={styles.row}>
        <Button isGrey title="AC" onPress={clear} />
        <Button
          isGrey
          title="+/-"
          onPress={() => handleOperationPressed("+/-")}
        />
        <Button isGrey title="%" onPress={() => handleOperationPressed("%")} />
        <Button
          title="÷"
          onPress={() => handleOperationPressed("/")}
          isOrange
        />
      </View>
      <View style={styles.row}>
        <Button isDefault title="7" onPress={() => handleNumberPressed("7")} />
        <Button isDefault title="8" onPress={() => handleNumberPressed("8")} />
        <Button isDefault title="9" onPress={() => handleNumberPressed("9")} />
        <Button
          title="x"
          onPress={() => handleOperationPressed("*")}
          isOrange
        />
      </View>
      <View style={styles.row}>
        <Button isDefault title="4" onPress={() => handleNumberPressed("4")} />
        <Button isDefault title="5" onPress={() => handleNumberPressed("5")} />
        <Button isDefault title="6" onPress={() => handleNumberPressed("6")} />
        <Button
          title="-"
          onPress={() => handleOperationPressed("-")}
          isOrange
        />
      </View>
      <View style={styles.row}>
        <Button isDefault title="1" onPress={() => handleNumberPressed("1")} />
        <Button isDefault title="2" onPress={() => handleNumberPressed("2")} />
        <Button isDefault title="3" onPress={() => handleNumberPressed("3")} />
        <Button
          title="+"
          onPress={() => handleOperationPressed("+")}
          isOrange
        />
      </View>
      <View style={styles.row}>
        <Button isDefault title="." onPress={() => handleNumberPressed(".")} />
        <Button isDefault title="0" onPress={() => handleNumberPressed("0")} />
        <Button
          isDefault
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" onPress={() => getResult()} isOrange />
      </View>
    </View>
  );
}
