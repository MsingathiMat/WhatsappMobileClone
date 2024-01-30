import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import ChatFooter from "../Components/ChatFooter";
import GreenConvo from "../Components/GreenConvo";
import WhiteConvo from "../Components/WhiteConvo";
import AudioWhiteConvo from "../Components/AudioWhiteConvo";
import { FlatList } from "react-native-gesture-handler";
import GreenImageCard from "../Components/GreenImageCard";
import ChatImage from "../Components/ChatImage";
import { ContactProps } from "../Types/Types";
import ChatDetailHeader from "../Components/ChatDetailHeader";
import HOCscreen from "../Components/HOC/HOCscreen";



type Message = {
  id: number;
  WoIs: string;
  Message: string;
  TimeStamp: string;
  ArivalStatus: string;
  Date: string;
  EmojiResponse: string;
  MessageType: string;
};

type Contact = {
  id: number;
  ImageUrl: string;
  ContactName: string;
  ContactNumber: string;
  HasStatus: boolean;
  Conversation: Message[];
};

type RouteProps = {
  key: string;
  name: string;
  params: { SelectedContactIndex: number };
};


const ChatDetailPure = ({ChatData}:{ChatData:ContactProps[]})=> {
  const [ImageUri, setImageUri] = useState(null);
  const flatListRef = useRef<FlatList<Message>>();

  const [IsImageCaptured, setIsImageCaptured] = useState(false);
  const route = useRoute<RouteProps>();

  // const ArrayOmessages = route.params.Contact.Conversation;
  const SelectedContactIndex = route.params.SelectedContactIndex;
  const ArrayOmessages = ChatData[2].Conversation;

  const [Conversations, setConversations] = useState<Message[] | null>(null);

  const SendImage = (ChatImage: string) => {
    setConversations([
      ...Conversations,
      {
        id: Conversations.length + 1,
        WoIs: "Me",
        Message: ChatImage,

        TimeStamp: "13:06",
        ArivalStatus: "sent",
        Date: "07/09/2024",
        EmojiResponse: "",
        MessageType: "Image",
      },
    ]);

    setIsImageCaptured(false);
  };
  useEffect(() => {
    setConversations(ArrayOmessages);
  }, []);


  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="cover"
      source={require("../assets/appAssets/bg.jpg")}
    >

<ChatDetailHeader ConatctData={ChatData[2]}  />
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <FlatList
          data={Conversations}
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            item.WoIs == "Me" && item.MessageType == "Text" ? (
              <GreenConvo Message={item.Message} />
            ) : item.MessageType == "Text" ? (
              <WhiteConvo TimeStamp={item.TimeStamp} Message={item.Message} />
            ) : item.MessageType != "Audio" ? (
              <ChatImage igamgeUri={ImageUri} />
            ) : (
              <AudioWhiteConvo
                ImageUrl={ChatData[SelectedContactIndex].ImageUrl}
              />
            )
          }
        />

        {IsImageCaptured ? (
          <GreenImageCard
            CallBack={() => SendImage(ImageUri)}
            igamgeUri={ImageUri}
          />
        ) : (
          ""
        )}
      </View>

      <ChatFooter CallBack={setImageUri} SetCaptured={setIsImageCaptured} />
    </ImageBackground>
  );
};


const ChatDetail= HOCscreen(ChatDetailPure)


export default ChatDetail;
