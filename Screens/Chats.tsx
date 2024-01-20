import { View, Text, Image, Dimensions, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'

import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { chatData } from '../Components/Chats';
import AvatarAndDetail from '../Components/AvatarAndDetail';
import request, { gql } from 'graphql-request';
import UseHygraph from '../Components/Hooks/UseHygraph';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { FontAwesome5 } from '@expo/vector-icons';




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

  const [IsModalShown,setIsModalShown] = useState(false);
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

    // console.warn(songData)


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


<TouchableOpacity onPress={()=>{setIsModalShown(true)}} style={{
   bottom:40,
   right:40,
   position: 'absolute',
}}>

<View style={{
  backgroundColor:'#128C7E',
  width:45,
  height:45,

  borderRadius:25,
 
  justifyContent:'center',
  alignItems:'center'
  }}>

<Entypo name="plus" size={24} color="white" />
</View>
</TouchableOpacity>

<Modal visible={IsModalShown} animationType='slide' >



<BlurView intensity={20} style={{
flex:1,
padding:20,
justifyContent:'center',
alignItems:'center'  }}>

<TouchableOpacity onPress={()=>{setIsModalShown(false)}} style={{

  position:'absolute',
  top:30,
  right:30
}} >

<Feather name="x" size={24} color="green" />
</TouchableOpacity>



<View style={{flexDirection:'column', gap:30}}>


<View > 

  <TextInput placeholder="Contact Name"style={{

    borderBottomColor:'green',
    borderBottomWidth:1,
    width:200,
    paddingLeft:30,
    padding:3
  }}/>

<FontAwesome style={{position:'absolute', top:8, left:0}} name="user-o" size={15} color="black" />
</View>

<View>

  <TextInput placeholder="Contact Number"style={{

    borderBottomColor:'green',
    borderBottomWidth:1,
    width:200,
    paddingLeft:30,
    padding:3
  }}/>
<FontAwesome5 style={{position:'absolute', top:8, left:0}} name="phone" size={15} color="black" />

</View>

<TouchableOpacity onPress={()=>{setIsModalShown(false)}}  >

<View style={{ 
  backgroundColor:'#128C7E' ,
  height:35, width:90, 
  borderRadius:5, 
  justifyContent:'center', 
  alignItems:'center'}}>

  <Text style={{color:'white'}}>Save</Text>
</View>

</TouchableOpacity>
</View>


</BlurView>

</Modal>
</View>
  )
}

export default Chats




 
