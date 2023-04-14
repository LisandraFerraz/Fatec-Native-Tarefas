import React, { useState } from "react";
import { Button } from "react-native";
import { Text } from "react-native";
import estilo from "./estilo";

export default (comp) => {
  //   let mult = comp.inicialMult;
  const [numero, setNumero] = useState(comp.inicial);
  const [numeroMult, setNumeroMult] = useState(comp.inicialMult);

  const inc = () => {
    setNumero(numero + 25);
  };
  const dec = () => {
    setNumero(numero - 25);
  };

  const incMult = () => {
    if (numeroMult % 2 == 0) {
      setNumeroMult(numeroMult + 2);
    } else {
      setNumeroMult(numeroMult + 1);
    }
  };

  const decMult = () => {
    if (numeroMult % 2 == 0) {
      setNumeroMult(numeroMult - 2);
    } else {
      setNumeroMult(numeroMult - 1);
    }
  };

  return (
    <>
      <Text style={estilo.FontGrande}>{numero}</Text>
      <Button title="+" onPress={inc}></Button>
      <Button title="-" onPress={dec}></Button>

      <Text style={estilo.FontGrande}>{numeroMult}</Text>
      <Button title="+" onPress={incMult}></Button>
      <Button title="-" onPress={decMult}></Button>
    </>
  );
};
