import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import Tabs from "./tabs";
import AdminSreen from "../screens/admin/AdminScreen"

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={Tabs}
        options={{ headerShown: false, headerTitleAlign: "center" }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Admin" component={AdminSreen} />
    </Stack.Navigator>
  );
}
