import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { LogBox } from "react-native";
import { Button, TouchableOpacity } from "react-native";
import { SafeAreaView, TextInput, View } from "react-native";
import ContatoCard from "./src/componens/contato-card";
import { listaDeAlunos } from "./src/utils/alunos-list";

var styles = require("./styles");

export default function App() {
  const teste = "BoLLS";

  const [alunoList, setAlunoList] = useState(listaDeAlunos);
  const [aluno, setAluno] = useState("");

  function adicionarAluno() {
    console.log(aluno);
    const newAlunoList = {
      nome: aluno,
    };
    setAlunoList((old) => [...old, newAlunoList]);
    console.log(alunoList);
  }
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Lista de alunos</Text>
      <View style={styles.search_section}>
        <TextInput
          placeholderTextColor="#8a8a8a"
          style={styles.inputText}
          placeholder="Insira um novo aluno..."
          value={aluno}
          onChangeText={(value) => setAluno(value)}
        />
        <TouchableOpacity style={styles.btnAdd} onPress={adicionarAluno}>
          <Text style={styles.btnTxt}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text>
          <ContatoCard data={alunoList} />;
        </Text>
      </ScrollView>
    </View>
  );
}
