import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatFooter from "../Components/ChatFooter";
import GreenConvo from "../Components/GreenConvo";
import WhiteConvo from "../Components/WhiteConvo";
import AudioWhiteConvo from "../Components/AudioWhiteConvo";


type RouteProps = {
  key: string;
  name: string;
  params: { data: string };
};
const ChatDetail = () => {



  const route = useRoute<RouteProps>();

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
        }}
      >
        <View
          style={{
            flex: 1,
            padding:20
          }}
        >

<View  >

<GreenConvo/>
<AudioWhiteConvo/>
<WhiteConvo/>


           
            </View>
        </View>
      </View>

      <ChatFooter />
    </ImageBackground>
  );
};

export default ChatDetail;
