import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Text } from "react-native";
import TelaA from "./src/views/TelaA";
import TelaB from "./src/views/TelaB";
import TelaC from "./src/views/TelaC";
import PassoStack from "./src/components/PassoStack";
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
        title="Segunda Tela - verde"
        onPress={() => navigation.navigate("Detalhes")}
      />
    </View>
  );
}

function TelaDescricao({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "cemter",
        backgroundColor: "#0F9",
      }}
    >
      <Text style={{ color: "#000", fontSize: 25 }}>
        Tela dos botões para navegação
      </Text>
      <Button title="Para: Tela A" onPress={() => navigation.push("TelaA")} />
      <Button title="Para: Tela B" onPress={() => navigation.push("TelaB")} />
      <Button title="Para: Tela C" onPress={() => navigation.push("TelaC")} />
      <Button
        title="Tela Principal - tela azul"
        onPress={() => navigation.navigate("Principal")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Principal" component={TelaPrincipal} />
        <Stack.Screen name="Detalhes" component={TelaDescricao} />
        <Stack.Screen
          name="TelaA"
          options={{ title: "Tela A" }}
          screenOptions={{ headerShown: false }}
        >
          {(COMP) => (
            <PassoStack {...comp} avancar="TelaB" voltar>
              <TelaA />
            </PassoStack>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="TelaB"
          options={{ title: "Tela B" }}
          component={TelaB}
        />
        <Stack.Screen name="TelaC" options={{ title: "Tela C" }}>
          {(comp) => (
            <PassoStack {...comp} avancar="TelaC" voltar>
              <TelaC {...comp} />
            </PassoStack>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default (comp) => (
//   <SafeAreaView style={{ flex: 1 }}>
//     <TelaA />
//     <TelaB />
//     <TelaC />
//   </SafeAreaView>
// );

export default App;
