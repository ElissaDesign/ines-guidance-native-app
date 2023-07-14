import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="justify-center my-2 px-4 ">
        <View>
          <Text className="text-center text-xl my-2 ">MenuScreen</Text>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Administration
            </Text>
          </View>
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
          <View className="flex items-center justify-center">
            <TouchableOpacity
              className="w-16 mt-20 bg-[#3287C2] rounded-lg shadow-md py-[10px]"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="justify-center text-center text-base text-white">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
