import React from "react";
import { View, Text, Button } from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <View>
      <Text>MenuScreen</Text>
      <Button title="Click here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default MenuScreen;
