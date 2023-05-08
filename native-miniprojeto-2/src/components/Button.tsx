import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/styles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isOrange?: boolean;
  isGrey?: boolean;
  isDefault?: boolean;
}

export default function Button({
  title,
  onPress,
  isOrange,
  isGrey,
  isDefault,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        isOrange
          ? styles.btnOrange
          : isGrey
          ? styles.btnDark
          : isDefault
          ? styles.btnGray
          : styles.btnGray
      }
      onPress={onPress}
    >
      <Text style={styles.smallTextDark}> {title}</Text>
    </TouchableOpacity>
  );
}
