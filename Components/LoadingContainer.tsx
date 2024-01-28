import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StyleProp,ButtonProps } from 'react-native';

export default function LoadingContainer({children, IsLoading, IndicatorColor, OnPress}:{children:React.ReactNode,IndicatorColor:string, IsLoading:boolean,OnPress: () => void}) {
  



  return (
    <TouchableOpacity onPress={()=>{OnPress()}}  >
      
      <View style={{ 
        
        justifyContent:'center', 
        alignItems:'center'}}>
      
        
        {IsLoading?
        <ActivityIndicator color={IndicatorColor}/>:
      children
        }
        
      </View>
      
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})