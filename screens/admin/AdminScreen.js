import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="justify-center my-2 px-4 ">
        <View>
          <Text className="text-center text-xl my-2 ">Add Information</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Administration")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Administration
            </Text>
          </TouchableOpacity>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Finance
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Programs
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Registration
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Departments
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Sponsorship
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Student Union
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Status
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
