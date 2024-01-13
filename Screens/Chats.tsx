import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { chatData } from '../Components/Chats';
import AvatarAndDetail from '../Components/AvatarAndDetail';



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


type chatDataProp=Contact[];

const Chats = ({navigation}) => {

  
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

  <AvatarAndDetail Contact={item} width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={item.HasStatus} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title={item.ContactName} TitleMessage={item.Conversation[item.Conversation.length-1].Message} ImageUrl={item.ImageUrl}/>

)}
/>




</View>
  )
}

export default Chats




 
