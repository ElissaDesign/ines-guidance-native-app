import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="justify-center my-2 px-4 ">
        <View>
          <Text className="text-center text-xl my-2 ">MenuScreen</Text>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Administration
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Finance
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Faculties
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Registration
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Departments
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Sponsorship
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">INES CU</Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Associations
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Learning
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Culture and Sports
            </Text>
          </View>
          <View className="w-full my-2 bg-[#3287C2] rounded-lg shadow-md py-[2px]">
            <Text className=" text-center text-base text-white">
              INES Social Lives
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
