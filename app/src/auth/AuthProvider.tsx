import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "./AuthContext";

const AUTH_KEY = "AUTH_USER";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ name: string; email: string, password: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  const persistUser = async (u: { name: string; email: string }) => {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(u));
  };

  const login = async ({email, password}: {email: string; password: string}) => {
    if (!email.includes("@")) throw new Error("Invalid email format");
    if (password.length < 6) throw new Error("Invalid password format");
        const json = await AsyncStorage.getItem(AUTH_KEY);
        const user = json ? JSON.parse(json) : null;
    if (user?.email !== email || user?.password !== password) {
      throw new Error("Incorrect credentials");
    }

    const u = { name: user.name, email, password };
    setUser(u);
    await persistUser(u);
  };

  const signup = async ({name, email, password}: {name: string; email: string; password: string}) => {
    if (!name || !email || !password) throw new Error("Missing fields");
    if (!email.includes("@")) throw new Error("Invalid email format");
    if (password.length < 6)
      throw new Error("Password must be at least 6 characters");

    const u = { name, email, password };
    setUser(u);
    await persistUser(u);
  };

  const logout = async () => {
    setUser(null);
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