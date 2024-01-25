import { View,Text, ImageBackground, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import{useEffect}   from 'react';
import { Audio } from 'expo-av';
import Animated, { useSharedValue, withSpring,Easing, FadeIn, FadeOut } from 'react-native-reanimated';
const ChatFooter = ({CallBack,SetCaptured}:{CallBack:React.Dispatch<React.SetStateAction<string>>,SetCaptured:React.Dispatch<React.SetStateAction<boolean>>}) => {

  const navigation = useNavigation();
  const [isFirstCharacter,SetIsFirstCharacter] = useState(false);
  const [InputValue,SetInputValue] = useState("");
  const translateX = useSharedValue(0);
  const [isCameraShown,SetIsCameraShown] = useState(true);

 

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64:true,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    
   if(result.assets[0].uri){

  
       


    const file = new FormData();

    const HYGRAPH_ASSET_TOKEN ='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDYwOTk3MDEsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbHJsN2NucjEwNWpoMDF1cDV3Y2dqNzdvL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LWFwLXNvdXRoZWFzdC0yLmh5Z3JhcGguY29tLyIsInN1YiI6Ijg0NTRkNmI0LTk0MDUtNDllNC04NWE1LTk2YzIyZGYxN2NhMSIsImp0aSI6ImNscnJycG12OTBlaGEwMTFmY2pyYzQxOWkifQ.5Yv5W8oSP-YLMDurSNVh9k5vKf6do_6586FrTsCxcv3pZeWEqqoYeIWHysDTfxx2Y_mOZh21-8GC5ssKdd_YSjk9RG-KsWfsB8b1soPjkmeKsEhxwhp2vk_wy1fD5QAahgAyRLiVwyQDJ534wO3mgt-E4xyalzkRIpY-zJ9PTygc4w-pVUXZ_6iLXABLyyrWm5R2rBPBx99FttxA2BAX0zgsV41hHgQFU5ToPedS-vjkMwHe2Q4U2by8Szxaod3nD8ndSeqlVF8jfwH5Lwa_DIkr1UN5MtMwYBCdlP_OPKUJm3F2paMjA1NzVe4QC3bzvzbHspQotVTV6SDqcl1oSTurdh5V015Iypq50wpNpr8E7skwPSJ3ay-cRtfFmYfD9JBgOFRI7GChxiHMbIID_eMjy0huiAdCsRp9ziJ4T4wayumDcHNAe8yg0vPgr_wJ74M2256ImCtrG3kI4kGlyNgfGR_rJGisVmnFO0-oK-eFyRQ_kH9EhqA2x7jGuM2Ev5VuPSeZKyYivR5r93tEulajlj5FUAqlhyizBo_ti9WJ4Tz2zbnYzPC90OyYGgZjaImX3dpkX7Q9rMYMnmreo-8LNWx_oDyxndZdLA-_UojrOkyWcfOiSMw7vUxQDMAIR1Z1Fl85ReWbbibMWdk9CaChnjWlKpORkBQn2zTQbcE';
    const Base64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`

file.append('fileUpload',Base64,'JPG')
    // file.append('Authorization', `Bearer ${HYGRAPH_ASSET_TOKEN}`);


    const url = 'https://api-ap-southeast-2.hygraph.com/v2/clrl7cnr105jh01up5wcgj77o/master/upload';
 
  //   await fetch(url, {method: "post",
  //   headers:{   
  //   'Authorization': `Bearer ${HYGRAPH_ASSET_TOKEN}`,
  
  // },

  //   body: file,
  //   }).then((result)=>{

  //     console.log(result)
  //   }).catch(error=>{

  //     console.log(error)

  //   })

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HYGRAPH_ASSET_TOKEN}`,
    },
    body: file,
  });

  const data = await response.json();
  console.log(data);
   
   

//     const file = new FormData();

  
//     const Base64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`

// file.append('file',Base64)
//     file.append('upload_preset', 'wclone');

//     const cloudName ='dzrqwm7xi';
//     const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
//   await fetch(url, {
//     method: "post",
//     headers:{   'Content-Type': 'multipart/form-data'},
//     body: file,
//     }).then((result)=>{

//       console.log(result.ok)
//     }).catch(error=>{

//       console.log("Cloudinary Error")

//     })

  
CallBack(result.assets[0].uri);
SetCaptured(true);
   }
  };



  // END HERE -------------------------
  const handlePress = (value:string) => {

    SetInputValue(value);

    if(value.trim().length==1 &&translateX.value<=0){
      SetIsCameraShown(false);
      translateX.value = withSpring(translateX.value + 10);
      SetIsFirstCharacter(true);
    }

    if(value.trim().length==0){
      SetIsCameraShown(true);
      translateX.value = withSpring(translateX.value =0);
      SetIsFirstCharacter(false)
    }

  };

  return (
    <ImageBackground
    style={{

      backgroundColor:'#F1F6EC',
      
      height:60,
      paddingBottom:15,
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

         

 
<TouchableOpacity onPress={() => {pickImage()}}>
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

{isFirstCharacter?<FontAwesome name="paper-plane" size={18} color="white" />:<FontAwesome name="microphone" size={20} color="white" />}


</View>
</View>
    </ImageBackground>
  )
}

export default ChatFooter