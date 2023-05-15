import { SafeAreaView } from "react-native";
import { View, Button } from "react-native";

export default (comp) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {comp.avancar ? (
        <Button
          title="Avançar"
          onPress={() => {
            comp.navigation.navigate(comp.avancar, {
              numero: parseInt(Math.random() * 10),
            });
          }}
        />
      ) : (
        false
      )}
      {comp.voltar ? (
        <Button
          title="voltar"
          onPress={() => {
            comp.navigation.goBack();
          }}
        />
      ) : (
        false
      )}
    </View>
    <View style={{ flex: 1 }}>{comp.children}</View>
  </SafeAreaView>
  //   <View>
  //     <View style={{ flex: 1 }}></View>
  //     <View style={{ flex: 1 }}></View>
  //   </View>
);
