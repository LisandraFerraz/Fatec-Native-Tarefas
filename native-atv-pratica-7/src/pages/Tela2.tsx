import { Image, Text, TouchableOpacity, View } from "react-native";
import { TelaTemplate } from "../shared/template";
const imgQ = require("./../assets/question_fav_albumpng.png");
const imgR = require("./../assets/answer_fav_album.png");

export const Tela2 = () => {
  return (
    <TelaTemplate
      picQuestion={imgQ}
      picReveal={imgR}
      title="álbum favorito"
      answer="Baekhyun - Bambi "
    />
  );
};
