import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Text } from "react-native";
import TelaA from "./src/views/TelaA";
import TelaB from "./src/views/TelaB";
import TelaC from "./src/views/TelaC";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";

function TelaPrincipal({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "cemter",
        backgroundColor: "#0AF",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 30 }}>
        Primeira Tela - Principal
      </Text>
      <Button
        title="Segunda Tela- verde"
        onPress={() => navigation.navigate("Detalhes")}
      />
    </View>
  );
}

export default (comp) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>a</Text>
    <TelaA />
    <TelaB />
    <TelaC />
  </SafeAreaView>
);
