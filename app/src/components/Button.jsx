import { Text, TouchableOpacity } from "react-native";
import { styles } from "../style/buttonStyle";

export default function Button({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}