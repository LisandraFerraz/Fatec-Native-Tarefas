import { Image, Text, TouchableOpacity, View } from "react-native";
import { TelaTemplate } from "../shared/template";
const imgQ = require("./../assets/question_fav_movie.png");
const imgR = require("./../assets/answer_fav_movie.png");

export const Tela4 = () => {
  return (
    <TelaTemplate
      picQuestion={imgQ}
      picReveal={imgR}
      title="filme favorito"
      answer="HARRY POTTER E O CÁLICE DE FOGO"
    />
  );
};
