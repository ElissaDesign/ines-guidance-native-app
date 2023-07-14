import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import ActionSheet from "react-native-actions-sheet";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import FindScreen from "../screens/FindScreen";
import MenuScreen from "../screens/MenuScreen";
import InesMapScreen from "../screens/InesMapScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: 0,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#3287C2",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 6,
            right: 20,
            left: 20,
            elevation: 0,
            backgroundColor: "#DCEBF5",
            borderRadius: 15,
            height: 60,
            ...styles.shadow,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 150, height: 50 }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center top-[6px] bottom-[6px]">
              <Icon
                name="home-outline"
                size={30}
                color={focused ? "#3287C2" : "#515355"}
                className={`container w-[25px] h-25px ${
                  focused ? "text-[#3287C2]" : ""
                }`}
              />
              <Text
                className={`${focused ? "text-[#3287C2]" : "text-[#515355]"} `}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 150, height: 50 }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center top-[6px] bottom-[6px]">
              <Icon
                name="newspaper-outline"
                size={30}
                color={focused ? "#3287C2" : "#515355"}
                className={`container w-[25px] h-25px ${
                  focused ? "text-[#3287C2]" : ""
                }`}
              />
              <Text
                className={`${focused ? "text-[#3287C2]" : "text-[#515355]"} `}
              >
                News
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 150, height: 50 }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          tabBarIcon: ({ focused }) => (
            <View className="w-[30px] h-[30px]">
              <Icon
                name="grid-outline"
                size={30}
                color={focused ? "#FFFFFF" : "#DCEBF5"}
                className={`container w-[25px] h-25px ${
                  focused ? "text-[#3287C2]" : "text-[#DCEBF5]"
                }`}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 150, height: 50 }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center top-[6px] bottom-[6px]">
              <Icon
                name="search-outline"
                size={30}
                color={focused ? "#3287C2" : "#515355"}
                className={`container w-[25px] h-25px ${
                  focused ? "text-[#3287C2]" : ""
                }`}
              />
              <Text
                className={`${focused ? "text-[#3287C2]" : "text-[#515355]"} `}
              >
                Find
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={InesMapScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 150, height: 50 }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center top-[6px] bottom-[6px]">
              <Icon
                name="map-outline"
                size={30}
                color={focused ? "#3287C2" : "#515355"}
                className={`container w-[25px] h-25px ${
                  focused ? "text-[#3287C2]" : "text-[#515355]"
                }`}
              />
              <Text
                className={`${focused ? "text-[#3287C2]" : "text-[#515355]"} `}
              >
                Map
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
