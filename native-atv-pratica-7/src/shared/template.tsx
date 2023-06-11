import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styleTemplate } from "./styles";

interface ITemplate {
  title: string;
  answer: string;
  picQuestion: any;
  picReveal: any;
}

export const TelaTemplate = (comp: ITemplate) => {
  const [reveal, setReveal] = useState<boolean>(false);

  const picQ = comp.picQuestion;
  const picR = comp.picReveal;
  return (
    <View style={styleTemplate.layout_template}>
      <Text style={styleTemplate.layout_title}>{comp.title}</Text>
      <Image style={styleTemplate.layout_image} source={reveal ? picR : picQ} />
      {reveal ? (
        <Text style={styleTemplate.layout_answer}>{comp.answer}</Text>
      ) : (
        <></>
      )}
      <TouchableOpacity
        style={styleTemplate.layout_button}
        onPress={() => setReveal(true)}
      >
        <Text style={styleTemplate.layout_button_txt}>REVELAR</Text>
      </TouchableOpacity>
    </View>
  );
};
