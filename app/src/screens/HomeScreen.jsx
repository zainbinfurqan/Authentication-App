import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../auth/useAuth";
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

      <TouchableOpacity style={styles.btn} onPress={logout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
