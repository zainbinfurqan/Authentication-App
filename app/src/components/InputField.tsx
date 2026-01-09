import React from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

type InputFieldProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: TextInputProps["style"];
  right?: React.ReactNode;
};

export default function InputField({
  containerStyle,
  inputStyle,
  right,
  ...props
}: InputFieldProps) {
  return (
    <View style={containerStyle}>
      <TextInput style={inputStyle} {...props} />
      {right}
    </View>
  );
}
