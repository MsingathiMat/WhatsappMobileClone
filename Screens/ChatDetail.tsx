import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatFooter from "../Components/ChatFooter";
import GreenConvo from "../Components/GreenConvo";
import WhiteConvo from "../Components/WhiteConvo";
import AudioWhiteConvo from "../Components/AudioWhiteConvo";
import { FlatList } from "react-native-gesture-handler";



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
    params: { Contact: Contact };
  };
const ChatDetail = () => {



  const route = useRoute<RouteProps>();

  const ArrayOmessages = route.params.Contact.Conversation;
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="cover"
      source={require("../assets/appAssets/bg.jpg")}
    >
      <View
       style={{
        flex: 1,
        padding:20,
       
      }}
      >
       



<FlatList data={ArrayOmessages}

showsVerticalScrollIndicator={false}
renderItem={({item})=>(



    item.WoIs=="Me"?<GreenConvo  Message={item.Message}/>:<WhiteConvo TimeStamp={item.TimeStamp} Message={item.Message}/>



)}

/>

{/* <AudioWhiteConvo/> */}



           
          
       
      </View>

      <ChatFooter />
    </ImageBackground>
  );
};

export default ChatDetail;
