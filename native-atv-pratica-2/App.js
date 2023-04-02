import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";

export default function App() {
  let numbers = [
    {
      key: 14,
      number: 42,
    },
  ];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const Item = ({ title }) => (
    <View style={styles.text}>
      <Text style={styles.color}>O número aleatório é: {title}</Text>
    </View>
  );

  useEffect(() => {
    for (let i = 1; i < 10; i++) {
      numbers.push({
        number: getRandom(10, 100),
        key: getRandom(10, 100),
      });
    }
    console.log(numbers);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <Item title={item.number} />}
        keyExtractor={(item) => item.key}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 27,
  },
});
