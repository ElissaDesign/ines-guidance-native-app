import React from "react";
import { View, Text, Button } from "react-native";

const ChatScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ChatScreen</Text>
      <Button title="Click here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default ChatScreen;
