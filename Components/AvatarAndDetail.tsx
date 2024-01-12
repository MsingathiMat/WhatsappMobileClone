import { View, Text, Dimensions, Image } from 'react-native'
import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const AvatarAndDetail = ({RightComponent=false,RingScale=1,AvatarScale=1,AvatarRing=false ,Icon,ImageUrl,MessageIconShown=false,Title, TitleMessage}:{ImageUrl:string,Title:string, TitleMessage:string,MessageIconShown?:boolean,Icon?:ReactNode, AvatarRing?:boolean,RingScale?:number,AvatarScale?:number,RightComponent?:boolean}) => {

  const navigation = useNavigation();
  return (
   
<TouchableOpacity onPress={()=>{navigation.navigate('ChatDetail',{data:"More over"})}}>

<View style={{
  
  width:Dimensions.get('screen').width-20,
  height:60,
  justifyContent:'flex-start',
  alignItems:'center',
  flexDirection:'row',
gap:8,
 
  position:'relative'

}}> 

{AvatarRing?


<View 
 
 style={{

  width:48,
  height:48,
  borderRadius:25,
  borderBlockColor:'#128C7E',
  borderWidth:2,
  justifyContent:'center',
  alignItems:'center',
  transform: [{ scale:RingScale}]
  }}
 >

 

  <Image style={{

width:40,
height:40,
borderRadius:30,
transform: [{ scale:AvatarScale}]
}} resizeMode='cover' source={{uri:ImageUrl}}/>
  </View> :

<Image style={{

  width:40,
  height:40,
  borderRadius:30,
  transform: [{ scale:AvatarScale}]
  }} resizeMode='cover' source={{uri:ImageUrl}}/>

}

<View style={{width:'100%'}}>

<View style={{flexDirection:'row',justifyContent:'space-between',
width:Dimensions.get('screen').width-78

}}>


<Text style={{fontWeight:'bold'}}>{Title}</Text>

{RightComponent?
<Text style={{fontSize:12, color:'#B4B3B3', position:'absolute', right:5}}>12:00</Text>:""

}

</View>

<View style={{flexDirection:'row', gap:5, alignItems:'center'}}>

{Icon?Icon:''}

<Text style={{fontSize:12,color:'gray'}}>
  {TitleMessage} </Text>
  
</View>

</View>

</View>

</TouchableOpacity>
  
     
 
  )
}

export default AvatarAndDetail