import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Entypo } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AvatarAndDetail from './AvatarAndDetail';
import AvatarSimple from './AvatarSimple';
import { ContactProps } from '../Types/Types';


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
const ChatDetailTopBar = ({ConatctData}:{ConatctData:ContactProps}) => {

    const navigation=useNavigation();

   const route = useRoute<RouteProps>()
  return (

  
    <View style={{

  
        height: 60,
     
 
     
   

        flexDirection:'row',
     
   justifyContent:'center',
        alignItems:'center'
    }}>

<TouchableOpacity onPress={()=>{navigation.goBack()}}>

<AntDesign name="arrowleft" size={24} color="white" />
</TouchableOpacity>
      <View style={{
    
        justifyContent:'center',
        alignItems:'center',
   
      }}>

      <View style={{
     
      }}>



<AvatarSimple colorWhite={true} AvatarScale={0.8} MessageIconShown={true} Title={ConatctData.ContactName} TitleMessage='Last seen at 19:00'  ImageUrl={ConatctData.ImageUrl}/>

     
      </View>
      </View>
    </View>
   
  )
}

export default ChatDetailTopBar


