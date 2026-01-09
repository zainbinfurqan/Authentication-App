import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../auth/useAuth";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { styles } from "../style/loginStyle";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [error, setError] = useState("");

  const onLogin = async () => {
    try {
      setError("");
      await login(email.trim(), password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <InputField
        inputStyle={styles.input}
        placeholder="Email"
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
          <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10 }} onPress={() => setSecure(!secure)}>
            <Ionicons name={secure ? "eye-off" : "eye"} size={22} />
          </TouchableOpacity>
        }
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Button title="Login" onPress={onLogin} />

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

