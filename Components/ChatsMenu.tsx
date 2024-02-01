import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Navigatable } from '../Types/Types'


const ChatsMenu = ({setisMenuShown}:{setisMenuShown:React.Dispatch<React.SetStateAction<boolean>>}) => {

  const navigation:Navigatable = useNavigation();

  const LogOut = ()=>{

    setisMenuShown(false);

    navigation.navigate('Login')
  }
  return (
    <View style={{

        backgroundColor:'white',
        padding:20,
        width:160,
        position:'absolute',
        top:60,
        right:0,
        borderRadius:10,
        height: 'auto',
        gap:23
    }}>
    <Text>New group</Text>
     <Text>New broadcast</Text>
    <Text>Linked devices</Text>
 <Text>Starred messages</Text>
 <Text>Messages</Text>
 <TouchableOpacity  onPress={()=>{LogOut()}}>

  <Text>Logout</Text>
 </TouchableOpacity>
    </View>
  )
}

export default ChatsMenu