import { View, Text, Dimensions, Image } from 'react-native'
import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const AvatarAndDetail = ({width,colorWhite=false,RightComponent=false,RingScale=1,AvatarScale=1,AvatarRing=false ,Icon,ImageUrl,MessageIconShown=false,Title, TitleMessage}:{ImageUrl:string,Title:string, TitleMessage:string,MessageIconShown?:boolean,Icon?:ReactNode, AvatarRing?:boolean,RingScale?:number,AvatarScale?:number,RightComponent?:boolean,colorWhite?:boolean,width?:number}) => {

  const navigation = useNavigation();
  return (
   
  //   eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error 
<TouchableOpacity onPress={()=>{navigation.navigate('ChatDetail',{data:"More over"})}}>

<View style={{
  
  width:width?width-20:'auto',
  height:60,
  justifyContent:'flex-start',
  alignItems:'center',
  flexDirection:'row',
gap:8,
 
 

}}> 

{AvatarRing?


<View 
 
 style={{

  width:48,
  height:48,
  borderRadius:25,
  borderColor:'#25D38A',
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

<View >

<View style={{flexDirection:'row',justifyContent:'space-between',
width:RightComponent?width-78:'auto'

}}>


<Text style={{fontWeight:'bold',color:colorWhite?'white':'black'}}>{Title}</Text>

{RightComponent?
<Text style={{fontSize:12, color:'#B4B3B3', position:'absolute', right:5}}>12:00</Text>:""

}

</View>

<View style={{flexDirection:'row', gap:5, alignItems:'center'}}>

{Icon?Icon:''}

<Text style={{fontSize:12,color:colorWhite?'white':'gray'}}>
  {TitleMessage} </Text>
  
</View>

</View>

</View>

</TouchableOpacity>
  
     
 
  )
}

export default AvatarAndDetail