import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../auth/useAuth";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user } = useAuth();

  return user ? (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}