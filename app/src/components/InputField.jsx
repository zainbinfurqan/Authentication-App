import { TextInput, View } from "react-native";

export default function InputField({
  containerStyle,
  inputStyle,
  right,
  ...props
}) {
  return (
    <View style={containerStyle}>
      <TextInput style={inputStyle} {...props} />
      {right}
    </View>
  );
}
