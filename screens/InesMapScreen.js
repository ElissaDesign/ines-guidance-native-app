import React from "react";
import { View, Text, Button } from "react-native";
import MapComponent from "../components/MapComponent";

const InesMapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <MapComponent />
    </View>
  );
};

export default InesMapScreen;
