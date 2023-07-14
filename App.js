import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import StackNavigator from "./navigation/stack";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
      <TouchableOpacity style={styles.touchableOpacity}>
        <Icon name="chatbubbles-outline" size={30} color="#FFF" />
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
    bottom: 80,
    backgroundColor: "#3287C2",
    borderRadius: 50,
  },
  floatingButton: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
export default App;
