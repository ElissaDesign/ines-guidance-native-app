import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const NewsScreen = ({ navigation }) => {
  const CollectionRef = collection(db, "news");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await getDocs(CollectionRef);
      const Data = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNews(Data);
    };

    getNews();

    const interval = setInterval(getNews, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // const news = [
  //   {
  //     id: "7768hhshgghssjsjsj877w7",
  //     title: "Ines won a match 2-3 of ..",
  //     image:
  //       "https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_1280.jpg",
  //     text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
  //     published: "20: 00 a.m ,  2023/07/21",
  //     publisher: "JMV",
  //   },
  //   {
  //     id: "7768hhsuiw67682jsj877w7",
  //     title: "Ines won a match 2-3 of ..",
  //     image:
  //       "https://cdn.pixabay.com/photo/2022/08/17/15/46/soccer-7392844_1280.jpg",
  //     text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
  //     published: "20: 00 a.m ,  2023/07/21",
  //     publisher: "JMV",
  //   },
  //   {
  //     id: "7768hhsh4432sjsj877w7",
  //     title: "Ines won a match 2-3 of ..",
  //     image:
  //       "https://cdn.pixabay.com/photo/2017/05/31/10/19/people-2359870_1280.jpg",
  //     text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
  //     published: "20: 00 a.m ,  2023/07/21",
  //     publisher: "JMV",
  //   },
  //   {
  //     id: "7768hhshgghwrwcdw877w7",
  //     title: "Ines won a match 2-3 of ..",
  //     image:
  //       "https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_1280.jpg",
  //     text: "Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts12. It features scrambled Latin text, which emphasizes the design over content of the layout1. It is the ",
  //     published: "20: 00 a.m ,  2023/07/21",
  //     publisher: "JMV",
  //   },
  // ];
  return (
    <ScrollView>
      <SafeAreaView className="w-[95%] mx-auto bg-[#F5F9FC] h-[100%]">
        <View className="px-4 mx-2">
          <View className="flex flex-col items-center justify-center">
            <Text className="text-xl font-bold">Trending news</Text>
          </View>
          <View className="flex flex-col items-center mx-2">
            {news.map((newsItem, index) => (
              <View key={index} className="px-4">
                <Text className="text-xl font-bold text-center">
                  {newsItem?.heading}
                </Text>
                <Text className="text-base text-[#515355] text-center px-2">
                  {newsItem?.text1}
                </Text>
                <View>
                  <Image
                    style={{
                      width: 405,
                      height: 250,
                    }}
                    resizeMode="contain"
                    source={{ uri: newsItem?.fileUrl }}
                  />
                  <Text className="text-base mt-2 text-[#515355] text-center px-2 italic">
                    {newsItem?.imageDescr}
                  </Text>
                </View>
                <Text className="text-base mt-2 text-[#515355] text-center px-2">
                  {newsItem?.text2}
                </Text>
              </View>
            ))}

            <Text className="text-[#515355]">
              Ines assistant, Search ......
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NewsScreen;
