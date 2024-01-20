import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { chatData } from '../Components/Chats';
import AvatarAndDetail from '../Components/AvatarAndDetail';
import request, { gql } from 'graphql-request';
import UseHygraph from '../Components/Hooks/UseHygraph';


const MASTER_URL ='https://api-ap-southeast-2.hygraph.com/v2/clrl7cnr105jh01up5wcgj77o/master';


const CreateRec = gql`
 mutation CrateRecord {
  createSong(
    data: {artistName: "No header now", description: "Buchule Now to", genre: "Gospel", imageUrl: "https://images.pexels.com/photos/4132776/pexels-photo-4132776.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", songTitle: "Hlalasik"}
  ) {
    id
  }
}
`

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
  createdAt:string,
  id: string;
  imageUrl: string;
  lastSeen: string,
  contactName: string;
  contactNumber: string;
  hasStatus: boolean;
  publishedAt:string
};

interface ContactProps {
  contacts1: Contact[];
}


type chatDataProp=Contact[];

const Chats = ({navigation}) => {

  const {GqlQuery}=UseHygraph();
  const [songData,SetSongData]=useState<Contact[] | null>(null)
  useEffect(()=>{
    const GqlString = gql`
    query Contacts1 {
      contacts1 {
      id
    contactName
    contactNumber
    lastSeen
    imageUrl
  }
}`

    GqlQuery({ GqlString,SetSongData})

    console.warn(songData)


  },[])
  
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
data={songData}

renderItem={({item})=>(

  <AvatarAndDetail  width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={item.hasStatus} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title={item.contactName} LastSeen={item.lastSeen}  ImageUrl={item.imageUrl}/>

)}
/>




</View>
  )
}

export default Chats




 
