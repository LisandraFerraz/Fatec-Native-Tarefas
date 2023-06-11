import { Image, Text, TouchableOpacity, View } from "react-native";
import { TelaTemplate } from "../shared/template";
const imgQ = require("./../assets/question_fav_song.png");
const imgR = require("./../assets/answer_fav_song.png");

export const Tela1 = () => {
  return (
    <TelaTemplate
      picQuestion={imgQ}
      picReveal={imgR}
      title="MINHA MÚSICA DO MOMENTO"
      answer="TAEYONG - BACK TO THE PAST"
    />
  );
};
