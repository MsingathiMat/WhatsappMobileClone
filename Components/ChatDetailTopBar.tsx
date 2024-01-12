import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Entypo } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AvatarAndDetail from './AvatarAndDetail';
const ChatDetailTopBar = () => {

    const navigation=useNavigation();
  return (

    <SafeAreaView>
    <View style={{

  
        height: 60,
       
        top:-15,
    paddingLeft:8,

        flexDirection:'row',
     
   justifyContent:'center',
        alignItems:'center'
    }}>

<TouchableOpacity onPress={()=>{navigation.goBack()}}>

<AntDesign name="arrowleft" size={24} color="gray" />
</TouchableOpacity>
      <View style={{
    
        justifyContent:'center',
        alignItems:'center',
   
      }}>

      <View style={{
        position:'relative'
      }}>



<AvatarAndDetail AvatarScale={0.8} MessageIconShown={true} Title="Zanele" TitleMessage='Please subscribe to my channel'  ImageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg'/>

     
      </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default ChatDetailTopBar


