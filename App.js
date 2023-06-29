import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import Tabs from "./navigation/tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      <TouchableOpacity style={styles.touchableOpacity}>
        <Icon name="chatbubbles-outline" size={30} color="#515355" />
      </TouchableOpacity>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 140,
    backgroundColor: "#DCEBF5",
    borderRadius: 50,
  },
  floatingButton: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
export default App;
