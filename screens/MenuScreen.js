import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="justify-center my-2 px-4 ">
        <View>
          <Text className="text-center text-xl my-2 ">MenuScreen</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Administration")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Administration
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Finance")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Finance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Programs")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Programs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Registration")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Registration
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Departments")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Departments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Partners")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Partnership
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Student Union")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Student Union
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Status Images")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Status
            </Text>
          </TouchableOpacity>
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
