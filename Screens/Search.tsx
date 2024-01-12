import { View, Text, ScrollView } from 'react-native'
import React from 'react'


import AvatarAndDetail from '../Components/AvatarAndDetail'

const Search = ({navigation}) => {
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


<AvatarAndDetail MessageIconShown={true} Title="Zanele" TitleMessage='Please subscribe to my channel'  ImageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg'/>



</ScrollView>
</View>
  )
}

export default Search