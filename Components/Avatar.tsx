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
const Avatar = ({children, LastSeen,width,colorWhite=false,RightComponent=false,RingScale=1,AvatarRing=false ,Icon,MessageIconShown=false}:{children?:ReactNode,MessageIconShown?:boolean,Icon?:ReactNode, AvatarRing?:boolean,RingScale?:number,RightComponent?:boolean,colorWhite?:boolean,width?:number,LastSeen:string}) => {


let AvatarImage: React.ReactNode= null;
let TitleElement: React.ReactNode = null;

const arrayC = React.Children.toArray(children);

arrayC.forEach(child => {

let ComponentName="";
let ElementName="";
  if (React.isValidElement(child)) {
    const componentType = child.type as React.ComponentType<any>;

    if (componentType.displayName) {
      ElementName=(componentType.displayName);

    } else if (componentType.name) {
     
      ComponentName=(componentType.name);
   
    } else {
      console.warn('Unable to determine component name');
    }
  }
if(ComponentName=="AvatarImage"){
  AvatarImage=child
}

if(ComponentName=="Title"){
  TitleElement=child
}
 

});

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


(AvatarImage?AvatarImage:'') :

<Image style={{

  width:40,
  height:40,
  borderRadius:30,
  transform: [{ scale:1}]
  }} resizeMode='cover' source={{uri:'data:image/jpeg;base64,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'}}/>

}

<View >

<View style={{flexDirection:'row',justifyContent:'space-between',
width:RightComponent?width-78:'auto'

}}>


<Text style={{fontWeight:'bold',color:colorWhite?'white':'black'}}>{TitleElement?TitleElement:<></>}</Text>

{RightComponent?
<Text style={{fontSize:12, color:'#B4B3B3', position:'absolute', right:5}}>{LastSeen}</Text>:""

}

</View>

<View style={{flexDirection:'row', gap:5, alignItems:'center'}}>

{Icon?Icon:''}

<Text>Last Messsage</Text>
  
</View>

</View>

</View>

</TouchableOpacity>
  
     
 
  )
}

Avatar.AvatarImage=AvatarImage
Avatar.Title=Title
function AvatarImage({RingScale,AvatarScale,ImageUrl}){

return (

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
  </View>
)
}

function Title({Title, Color}:{Title:string, Color:string}){

  return (

    <Text style={{fontWeight:'bold',color:Color}}>{Title}</Text>
  )
}
export default Avatar