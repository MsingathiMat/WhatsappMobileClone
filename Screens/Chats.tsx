import { View, Text, Image, Dimensions } from 'react-native'
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

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Nasty C" TitleMessage='Please subscribe to my channel' ImageUrl='https://www.okayafrica.com/media-library/nasty-c.jpg?id=50521178&width=1245&height=700&quality=85&coordinates=0%2C0%2C0%2C192'/>

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Msingathi" TitleMessage='Please subscribe to my channel' ImageUrl='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600'/>

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Msingathi" TitleMessage='Please subscribe to my channel' ImageUrl='https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Msingathi" TitleMessage='Please subscribe to my channel' ImageUrl='https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'/>

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Trevor-Noah" TitleMessage='Please subscribe to my channel' ImageUrl='https://variety.com/wp-content/uploads/2023/11/Trevor-Noah.jpg'/>

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Msingathi" TitleMessage='Please subscribe to my channel' ImageUrl='https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Msingathi" TitleMessage='Please subscribe to my channel' ImageUrl='https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'/>

<AvatarAndDetail width={Dimensions.get('screen').width} RightComponent={true} AvatarRing={true} Icon={<Ionicons name="checkmark-done" size={18} color="gray" />} Title="Msingathi" TitleMessage='Please subscribe to my channel' ImageUrl='https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

</ScrollView>
</View>
  )
}

export default Chats




 
