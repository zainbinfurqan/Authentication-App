import { useFonts } from 'expo-font';
import React from "react";
import 'react-native-reanimated';
import AuthProvider from "./src/auth/AuthProvider";
import RootNavigator from "./src/navigation/RootNavigator";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
        <RootNavigator />
    </AuthProvider>
  );
}
