import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Entypo } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const TopSearch = ({navigation}) => {
  return (

    <SafeAreaView>
    <View style={{

        width:'100%',
        height: 60,
    
        paddingHorizontal:10,
        flexDirection:'row',
        gap:20,
   justifyContent:'space-between',
        alignItems:'center'
    }}>

<TouchableOpacity onPress={()=>{navigation.goBack()}}>

<AntDesign name="arrowleft" size={24} color="gray" />
</TouchableOpacity>
      <View style={{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
      
        paddingRight:20
      }}>

      <View style={{
        position:'relative'
      }}>

<TextInput placeholder='Search' style={{
    width:250,
    height:40,
    backgroundColor:'#E6E6E6',
    borderRadius:20,
    paddingHorizontal:15,
    paddingLeft:45

}}/>
      <Feather style={{
        position:'absolute',
        top:10,
        left:10
      }} name="search" size={20} color="gray" />
      </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default TopSearch