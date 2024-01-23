import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StyleProp,ButtonProps } from 'react-native';

export default function LoadingButton({Title, IsLoading, OnPress}:{Title:string, IsLoading:boolean,OnPress: () => void}) {
  return (
    <TouchableOpacity onPress={()=>{OnPress}}  >
      
      <View style={{ 
        backgroundColor:'#128C7E' ,
        height:35, width:90, 
        borderRadius:5, 
        justifyContent:'center', 
        alignItems:'center'}}>
      
        
        {IsLoading?
        <ActivityIndicator color='white'/>:
        <Text style={{color:'white'}}>

            {Title}
        </Text>
        }
        
      </View>
      
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})