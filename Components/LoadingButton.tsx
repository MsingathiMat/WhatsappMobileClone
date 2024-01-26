import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StyleProp,ButtonProps } from 'react-native';
import LoadingContainer from './LoadingContainer';

export default function LoadingButton({IndicatorColor,BtnColor,BakcgroundColor,BorderColor,Title, IsLoading, OnPress}:{IndicatorColor?:string,BtnColor?:string,Title:string, IsLoading:boolean,BorderColor?:string,BakcgroundColor?:string,OnPress: () => void}) {
  return (
    <TouchableOpacity onPress={()=>{OnPress()}}  >
        
      <View style={{ 
        backgroundColor: BakcgroundColor?BakcgroundColor:'blue' ,
        height:35, width:90, 
        borderRadius:5, 
        justifyContent:'center', 
        borderColor:BorderColor?BorderColor:'rgba(0,0,0,0)',
        borderWidth:BorderColor?1:0,
        alignItems:'center'}}>
      
        
     <LoadingContainer IndicatorColor={IndicatorColor} IsLoading={IsLoading} OnPress={()=>{OnPress()}}>

     <Text style={{color:BtnColor?BtnColor:'white'}}>

{Title}
</Text>
     </LoadingContainer>
        
      </View>
      
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})