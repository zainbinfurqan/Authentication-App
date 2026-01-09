import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../auth/useAuth";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { styles } from "../style/loginStyle";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secure, setSecure] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const onLogin = async () => {
    try {
      setError("");
      await login({ email: email.trim(), password });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <InputField
        inputStyle={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        containerStyle={styles.row}
        inputStyle={[styles.input, { flex: 1 }]}
        placeholder="Password"
        secureTextEntry={secure}
        value={password}
        onChangeText={setPassword}
        right={
          <TouchableOpacity
            style={{ position: "absolute", right: 10, top: 10 }}
            onPress={() => setSecure(!secure)}
          >
            <Ionicons name={secure ? "eye-off" : "eye"} size={22} />
          </TouchableOpacity>
        }
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button title="Login" onPress={() => void onLogin()} />

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

