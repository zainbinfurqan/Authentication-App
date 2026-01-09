import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "./AuthContext";

const AUTH_KEY = "AUTH_USER";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const json = await AsyncStorage.getItem(AUTH_KEY);
        if (json) setUser(JSON.parse(json));
      } catch (e) {
        console.log("Load user error", e);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const persistUser = async (u) => {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(u));
  };

  const login = async (email, password) => {
    if (!email.includes("@")) throw new Error("Invalid email format");
    if (password.length < 6) throw new Error("Invalid password format");

    if (email !== "test@example.com" || password !== "123456") {
      throw new Error("Incorrect credentials");
    }

    const u = { name: "Test User", email };
    setUser(u);
    await persistUser(u);
  };

  const signup = async (name, email, password) => {
    if (!name || !email || !password) throw new Error("Missing fields");
    if (!email.includes("@")) throw new Error("Invalid email format");
    if (password.length < 6)
      throw new Error("Password must be at least 6 characters");

    const u = { name, email };
    setUser(u);
    await persistUser(u);
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem(AUTH_KEY);
  };

  const value = { user, login, signup, logout };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}