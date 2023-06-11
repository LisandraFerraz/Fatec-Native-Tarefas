import { Image, Text, TouchableOpacity, View } from "react-native";
import { TelaTemplate } from "../shared/template";
const imgQ = require("./../assets/question_fav_artistpng.png");
const imgR = require("./../assets/answer_fav_artist.png");

export const Tela5 = () => {
  return (
    <TelaTemplate
      picQuestion={imgQ}
      picReveal={imgR}
      title="artista favorito"
      answer="BYUN BAEK-HYUN (EXO)"
    />
  );
};
