import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const NewsScreen = ({ navigation }) => {
  const news = [
    {
      id: "7768hhshgghssjsjsj877w7",
      title: "Ines won a match 2-3 of ..",
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_1280.jpg",
      text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
      published: "20: 00 a.m ,  2023/07/21",
      publisher: "JMV",
    },
    {
      id: "7768hhsuiw67682jsj877w7",
      title: "Ines won a match 2-3 of ..",
      image:
        "https://cdn.pixabay.com/photo/2022/08/17/15/46/soccer-7392844_1280.jpg",
      text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
      published: "20: 00 a.m ,  2023/07/21",
      publisher: "JMV",
    },
    {
      id: "7768hhsh4432sjsj877w7",
      title: "Ines won a match 2-3 of ..",
      image:
        "https://cdn.pixabay.com/photo/2017/05/31/10/19/people-2359870_1280.jpg",
      text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
      published: "20: 00 a.m ,  2023/07/21",
      publisher: "JMV",
    },
    {
      id: "7768hhshgghwrwcdw877w7",
      title: "Ines won a match 2-3 of ..",
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_1280.jpg",
      text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
      published: "20: 00 a.m ,  2023/07/21",
      publisher: "JMV",
    },
  ];
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <ScrollView>
        <View className="flex flex-row items-center justify-center my-6 ">
          <View className="flex flex-col items-center justify-center">
            <Text className="text-xl font-bold">Trending news</Text>
          </View>
        </View>
        <View className="flex flex-col items-center justify-center top-[10px]">
          {news.map((newsItem, index) => (
            <View key={newsItem?.id} className="mb-4 px-4">
              <Text className="text-xl font-bold my-2 text-center">
                {newsItem?.title}
              </Text>
              <Text className="text-sm font-light my-2 text-center ">
                Published: {newsItem?.published} By: {newsItem?.publisher}
              </Text>
              <View>
                <Image
                  style={{
                    width: 411,
                    height: 250,
                  }}
                  resizeMode="contain"
                  source={{ uri: newsItem?.image }}
                />
              </View>
              <Text className="text-base font-medium my-2 text-[#515355] text-center">
                {newsItem?.text}
              </Text>
            </View>
          ))}

          <Text className="text-[#515355]">Ines assistant, Search ......</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
