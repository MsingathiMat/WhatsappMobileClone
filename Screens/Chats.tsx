import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

import { chatData } from '../Components/Chats';
import AvatarAndDetail from '../Components/AvatarAndDetail';


type MessageType = "Text"; // Add more types as needed

type Message = {
  id: number;
  WoIs: string;
  Message: string;
  TimeStamp: string;
  ArivalStatus: string;
  Date: string;
  EmojiResponse: string;
  MessageType: MessageType;
};

type Contact = {
  id: number;
  ImageUrl: string;
  ContactName: string;
  ContactNumber: string;
  HasStatus: boolean;
  Conversation: Message[];
};


type chatDataProp=Contact[];

const Chats = ({navigation}) => {
console.warn(chatData[2].Conversation[0].Message)
  
  return (
    <View style={{

   
      backgroundColor:'#F1F6EC',
      width:'100%',
      height:'100%',
      
      justifyContent:'flex-start',
      alignItems:'flex-start',
      paddingHorizontal:10,
    
     paddingVertical:20
    }}>
 


<FlatList
data={chatData}

renderItem={({item})=>(

  <AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={item.HasStatus} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title={item.ContactName} TitleMessage={item.Conversation[item.Conversation.length-1].Message} ImageUrl={item.ImageUrl}/>

)}
/>




</View>
  )
}

export default Chats




 
