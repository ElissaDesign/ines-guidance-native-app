import React from "react";
import { View, Text, SafeAreaView, ScrollView, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default function () {
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView className="bg-white h-[100%]">
      <SafeAreaView className="bg-white">
        <View className="w-[95%] mx-auto my-4 px-2">
          <Text className="text-xl font-bold text-center">
            INES Ruhengeri partners
          </Text>
          <Text className="text-base my-2 text-[#515355]">
            The vision is to engage and form partnerships, interact with
            stakeholders and reach out and contribute towards the sustainable
            development of the communities that INES serves. These actions are
            directed at making the INES a transparent and user-friendly
            institution that extends itself effectively to those who seek access
            to its knowledge resources, products and expertise.
          </Text>
          <Text className="text-base my-2 text-[#515355]">
            In its orientation, being an applied sciences institution,
            INES-Ruhengeri needs professional bodies which help internship,
            research and other practical experience for students.
          </Text>
          <Text className="text-base my-2 text-[#3287C2]">
            KEY PARTNERS ARE LISTED BELOW{" "}
          </Text>
          <Text className="text-base my-2 text-[#515355]">
            Currently, the sponsoring institutions are the following:
          </Text>
          <Text className="text-base my-[2px] text-[#515355]">
            - MINUBUMWE{" "}
          </Text>
          <Text className="text-base my-[2px] text-[#515355]">
            - FAWE-Rwanda{" "}
          </Text>
          <Text className="text-base my-[2px] text-[#515355]">- New Life </Text>
          <Text className="text-base my-[2px] text-[#515355]">
            - Direct aid{" "}
          </Text>
          <Text className="text-base my-[2px] text-[#515355]">- MINADEF</Text>
          <Text className="text-base my-[2px] text-[#515355]">- Red Cross</Text>
          <Text className="text-base my-[2px] text-[#515355]">
            - CHANCEN International-Rwanda
          </Text>
          <Text className="text-base my-[2px] text-[#515355]">- IUCEA. </Text>
          <Text className="text-base my-4 text-[#515355]">
            The figures show the growing trust of parents and partners.
          </Text>
          <Text className="text-base my-4 text-[#515355]">
            For more information of Ines Ruhengeri partners and sponsors click
            here:{" "}
          </Text>
          <TouchableOpacity
            className="mx-2"
            onPress={() => {
              handleOpenLink("https://www.ines.ac.rw/partners/");
            }}
          >
            <Text className="text-[#3287C2]">Our partners (ines.ac.rw)</Text>
          </TouchableOpacity>

          <Text className="text-base my-4 text-[#515355]">
            Visit Ines Ruhengeri and check the reopening scholarship and meet
            with sponsorships and start decorate your future through the Ines
            Ruhengeri quality education ever. (https://www.ines.ac.rw)
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
