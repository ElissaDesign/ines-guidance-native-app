import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const FindScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    Alert.alert("Search", `You searched for: ${searchText}`);
    // Perform your search logic here
  };
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="flex flex-row items-center justify-center my-14 ">
        <View className="flex flex-row items-center justify-center">
          <TextInput
            style={{
              height: 40,
              width: "80%",
              borderColor: "#3287C2",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
            placeholder="Ines assistant search . . ."
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          <Button
            title="Search"
            onPress={handleSearch}
            style={{
              height: 40,
              width: "20%",
              borderColor: "#3287C2",
              marginBottom: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>
      </View>
      <View className="flex flex-col items-center justify-center top-[20px]">
        <Icon
          name="alert-outline"
          size={30}
          color="#515355"
          className={`container w-[25px] h-25px 
            `}
        />
        <Text className="text-[#515355]">Ines assistant, Search ......</Text>
      </View>
    </SafeAreaView>
  );
};

export default FindScreen;
