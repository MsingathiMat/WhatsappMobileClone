import { View, Text, Image } from 'react-native'
import React from 'react'

import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

import AvatarAndDetail from '../Components/AvatarAndDetail';


const Chats = ({navigation}) => {
  return (
    <View style={{

   
      backgroundColor:'#F1F6EC',
      width:'100%',
      height:'100%',
      
      justifyContent:'flex-start',
      alignItems:'flex-start',
      paddingHorizontal:10,
    
     
    }}>
  <ScrollView showsVerticalScrollIndicator={false} horizontal={false} style={{

    flex:1
  }}>


<AvatarAndDetail RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Msingathi" TitleMessage='Please subscribe to my channel' ImageUrl='https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'/>


</ScrollView>
</View>
  )
}

export default Chats




 
