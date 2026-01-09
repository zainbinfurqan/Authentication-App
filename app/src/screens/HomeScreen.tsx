import React from "react";
import { Text, View } from "react-native";
import { useAuth } from "../auth/useAuth";
import Button from "../components/Button";
import { styles } from "../style/homeStyle";

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>

      <Button title="Logout" onPress={() => void logout()} style={styles.btn} textStyle={styles.btnText} />
    </View>
  );
}
