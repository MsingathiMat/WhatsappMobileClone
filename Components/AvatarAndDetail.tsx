import { View, Text, Dimensions, Image } from 'react-native'
import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



type Message = {
  id: number;
  WoIs: string;
  Message: string;
  TimeStamp: string;
  ArivalStatus: string;
  Date: string;
  EmojiResponse: string;
  MessageType: string;
};



type Contact = {
  createdAt:string,
  id: string;
  imageUrl: string;
  lastSeen: string,
  ContactName: string;
  ContactNumber: string;
  HasStatus: boolean;
  publishedAt:string
};

interface ContactProps {
  contacts1: Contact[];
}
const AvatarAndDetail = ({ LastSeen,width,colorWhite=false,RightComponent=false,RingScale=1,AvatarScale=1,AvatarRing=false ,Icon,ImageUrl,MessageIconShown=false,Title}:{ImageUrl:string,Title:string,MessageIconShown?:boolean,Icon?:ReactNode, AvatarRing?:boolean,RingScale?:number,AvatarScale?:number,RightComponent?:boolean,colorWhite?:boolean,width?:number,LastSeen:string}) => {


  const navigation = useNavigation();
  return (
   
  //   eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error 
<TouchableOpacity onPress={()=>{navigation.navigate('ChatDetail',{SelectedContactIndex:0})}}>

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
<Text style={{fontSize:12, color:'#B4B3B3', position:'absolute', right:5}}>{LastSeen}</Text>:""

}

</View>

<View style={{flexDirection:'row', gap:5, alignItems:'center'}}>

{Icon?Icon:''}

<Text style={{fontSize:12,color:colorWhite?'white':'gray'}}>
  MSG Example </Text>
  
</View>

</View>

</View>

</TouchableOpacity>
  
     
 
  )
}

export default AvatarAndDetail