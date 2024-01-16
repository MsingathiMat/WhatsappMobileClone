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
const ChatDetail = ({Contacts}:{Contacts:ContactProps[]}) => {

const [ImageUri,setImageUri]=useState(null);
const flatListRef = useRef<FlatList<Message>>();


const [IsImageCaptured,setIsImageCaptured]=useState(false);
  const route = useRoute<RouteProps>();

  // const ArrayOmessages = route.params.Contact.Conversation;
  const SelectedContactIndex=route.params.SelectedContactIndex
  const ArrayOmessages = Contacts[2].Conversation;
  

const [Conversations, setConversations]=useState<Message[] | null>(null);


const SendImage = (ChatImage:string)=>{

  
  setConversations([...Conversations,
    {
      id:Conversations.length+1 ,
      WoIs: "Me",
      Message: ChatImage,
    
      TimeStamp: "13:06",
      ArivalStatus: "sent",
      Date: "07/09/2024",
      EmojiResponse: "",
      MessageType: "Image"
    }
 
  ])

  setIsImageCaptured(false);

}
  useEffect(()=>{

    setConversations(ArrayOmessages)
  },[])

  useEffect(() => {
    // Use scrollToEnd method to scroll to the bottom when the component mounts or when data changes
   
  //  if(ImageUri){
  //   if(flatListRef.current){
  //     // flatListRef.current?.scrollToEnd({ animated: true });
  //     flatListRef.current?.scrollToIndex({ index:Conversations.length-1,animated: true });
  //    }

  //  }
   
  }, [Conversations]);

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
       



<FlatList data={Conversations}
 ref={flatListRef}
showsVerticalScrollIndicator={false}
renderItem={({item})=>(



   ( item.WoIs=="Me"&& item.MessageType=='Text')? <GreenConvo  Message={item.Message}/>:(item.MessageType=='Text')?<WhiteConvo TimeStamp={item.TimeStamp} Message={item.Message}/>:(item.MessageType!='Audio')?<ChatImage  igamgeUri={ImageUri}/>:<AudioWhiteConvo ImageUrl={Contacts[SelectedContactIndex].ImageUrl}/>



)}

/>

{

IsImageCaptured?<GreenImageCard CallBack={()=>SendImage(ImageUri)} igamgeUri={ImageUri}/>:''
}



           
          
       
      </View>

      <ChatFooter CallBack={setImageUri} SetCaptured={setIsImageCaptured} />
    </ImageBackground>
  );
};

export default ChatDetail;
