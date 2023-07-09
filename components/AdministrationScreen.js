import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const AdministrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="flex flex-row items-center justify-center my-14 ">
        <Text>AdministrationScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default AdministrationScreen;
