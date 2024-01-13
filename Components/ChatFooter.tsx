import { View, Text, ImageBackground, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Animated, { useSharedValue, withSpring,Easing, FadeIn, FadeOut } from 'react-native-reanimated';
const ChatFooter = () => {

  const navigation = useNavigation();
  const [isFirstCharacter,SetIsFirstCharacter] = useState(false);
  const [InputValue,SetInputValue] = useState("");
  const translateX = useSharedValue(0);
  const [isCameraShown,SetIsCameraShown] = useState(true);

 

  const handlePress = (value:string) => {

    SetInputValue(value);

    if(value.trim().length==1 &&translateX.value<=0){
      SetIsCameraShown(false);
      translateX.value = withSpring(translateX.value + 10);
    }

    if(value.trim().length==0){
      SetIsCameraShown(true);
      translateX.value = withSpring(translateX.value =0);
    }

  };

  return (
    <ImageBackground
    style={{

      backgroundColor:'#F1F6EC',
      
      height:60,
    justifyContent:'center' ,
  alignItems:'center'   }}
    resizeMode='cover'
    source={require("../assets/appAssets/bg1.jpg")}
    >
    
 
    
<View style={{

  padding:10,
  flexDirection:'row',
  gap:10
}}>
 


 <View style={{

  flexDirection:'row',
  flex:1,
  position:'relative'
 }}>


<TextInput value={InputValue} onChangeText={(value)=>{handlePress(value)}} style={{
padding:10,
  backgroundColor:'white',
  borderRadius:30,
  paddingLeft:45,
  width:'100%',
  flex:1,  
  height:50
}} placeholder='Message'/>

<SimpleLineIcons style={{

  position:'absolute',
  left:10,
  top:12
}} name="emotsmile" size={25} color="gray" />


   
<Animated.View style={[{
  flexDirection:'row',
  gap:10,
  position:'absolute',
  top:13,
  right:20
},{ transform: [{ translateX }] }]}>
 <MaterialIcons name="attach-file" size={23} color="gray" />
{isCameraShown&&

         
//           eslint-disable-next-line @typescript-eslint/ban-ts-comment
//  @ts-expect-error 
 
<TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
<FontAwesome5 name="camera" size={23} color="gray" />
</TouchableOpacity>}
</Animated.View>
</View>
<View style={[{

  justifyContent:'center',
  alignItems:'center',
  backgroundColor: '#128C7E',
  height:45,
  width:45,
  borderRadius:26,
}]}>

{isFirstCharacter?<FontAwesome5 name="telegram-plane" size={22} color="white" />:<FontAwesome5 name="microphone" size={22} color="white" />}


</View>
</View>
    </ImageBackground>
  )
}

export default ChatFooter