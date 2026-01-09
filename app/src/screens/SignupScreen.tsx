import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../auth/useAuth";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { styles } from "../style/signupStyle";

export default function SignupScreen({ navigation }: { navigation: any }) {
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [error, setError] = useState<string>("");

  const onSignup = async () => {
    try {
      setError("");
      await signup({ name: name.trim(), email: email.trim(), password });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <InputField
        inputStyle={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

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

      {error && <Text style={styles.error}>{error}</Text>}

      <Button title="Signup" onPress={onSignup} />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

