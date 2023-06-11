import { Image, Text, TouchableOpacity, View } from "react-native";
import { TelaTemplate } from "../shared/template";
const imgQ = require("./../assets/question_fav_hobby.png");
const imgR = require("./../assets/answer_question_fav_hobby.png");

export const Tela3 = () => {
  return (
    <TelaTemplate
      picQuestion={imgQ}
      picReveal={imgR}
      title="hobby favorito"
      answer="OUVIR MÚSICA"
    />
  );
};
