import { View,Text, ImageBackground, KeyboardAvoidingView, Button, TouchableOpacity, Image, StyleSheet, ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import{useEffect}   from 'react';
import { Audio } from 'expo-av';
import Animated, { useSharedValue, withSpring,Easing, FadeIn, FadeOut, withTiming } from 'react-native-reanimated';
import UploadFile from '../API/UploadFile';
import LoadingContainer from './LoadingContainer';

const AnimatedView = Animated.createAnimatedComponent(View);




const AudioProgressBar = ({ audioPosition, audioDuration }) => {
  const animatedBorderWidth = useSharedValue(0);
let progressRatio=0;
  useEffect(() => {
    // Calculate the ratio of audio position to audio duration
     progressRatio = audioPosition / audioDuration;

  }, [audioPosition, audioDuration]);

  return (
    <View
    style={{
      width:`${(audioPosition/audioDuration)*100}%`,
      height:2,
      backgroundColor:'red'
    }}
    >


    </View>
  );
};


const ChatFooter = ({CallBack,SetCaptured}:{CallBack:React.Dispatch<React.SetStateAction<string>>,SetCaptured:React.Dispatch<React.SetStateAction<boolean>>}) => {

  const navigation = useNavigation();
  const [isFirstCharacter,SetIsFirstCharacter] = useState(false);
  const [InputValue,SetInputValue] = useState("");
  const translateX = useSharedValue(0);
  const [isCameraShown,SetIsCameraShown] = useState(true);
  const [IsPlaying,SetIsPlaying] = useState(false);

 


  const [recording, setRecording] = useState<Audio.Recording | undefined>(undefined);
  const [permissionResponse, requestPermission] = Audio.usePermissions();


  const [ShowRecordingIcon,SetShowRecordingIcon] = useState(false);
  const [ShowSendRecIcon,SetShowSendRecIcon] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
const [audioPosition, setAudioPosition] = useState(0);
const [IsSending,SetIsSending] = useState(false);

  const sound = useRef<Audio.Sound | null>(null);

  const [Uri,SetUri]= useState("")


  const progress = useSharedValue(0);


  useEffect(() => {
    // Simulate progress changes for demonstration purposes
    const interval = setInterval(() => {
      progress.value = withTiming((progress.value + 0.1) % 1, { duration: 1000 });
    }, 1000);

    return () => clearInterval(interval);
  }, []);




  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
  };


  const PlaySound = async () => {
    try {
      if (!sound.current) {
        const { sound: audioSound, status } = await Audio.Sound.createAsync(
          { uri: Uri },
          { shouldPlay: IsPlaying },
          (status) => {
            // @ts-expect-error
            if (status.didJustFinish) {
         (async()=>{

          await sound.current?.stopAsync();
         })()
              SetIsPlaying(false);
            }
            // @ts-expect-error
            setAudioPosition(status.positionMillis);
          }
        );
        sound.current = audioSound;
        // @ts-expect-error
        setAudioDuration(status.durationMillis);
      }
  
      if (IsPlaying) {
        await sound.current?.pauseAsync();
      } else {
        await sound.current?.replayAsync();
      }
  
      // Invert the IsPlaying state after the play, replay, or pause operation
      SetIsPlaying(!IsPlaying);
  
    } catch (error) {
      console.error('Error playing sound: ', error);
    }
  };
  
  
  const SenddFile = async()=>{
   
    SetIsSending(true)
    let audioData="";
   
    try {
       audioData = await FileSystem.readAsStringAsync(Uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
    }catch(error){

console.error('Audio to Base64 error',error);
SetIsSending(false)
    }
   
   UploadFile({ Base64File:audioData, FileUri:'', FileType:'', EndPoint:''}).then((result)=>{

    
    if(result && result.status==200){


      ToastAndroid.show("Save Successfully", ToastAndroid.LONG);
    }else{
      console.log(result)
    }
   
   }).catch((error)=>{

    console.log(error)
    ToastAndroid.show("Failed, Please try again", ToastAndroid.LONG);
   });
  
   SetShowSendRecIcon(false)
   SetIsSending(false)
   ToastAndroid.show('Uploaded Successfully', ToastAndroid.LONG);
   
  }


  async function startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording: newRecording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HighQuality,
      
      );
      setRecording(newRecording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }



  async function stopRecording() {
    try {
      console.log('Stopping recording..');
      setRecording(undefined);
      await recording?.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recording?.getURI();
      
    
      SetUri(uri);
   
      console.log('Recording stopped and stored at', uri);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  }

 

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


    const Base64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`


    hyGupload(result.assets[0].type,result.assets[0].base64);
    return
file.append('file',Base64)
    file.append('upload_preset', 'wclone');

    const cloudName ='dzrqwm7xi';
    // const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const url = `https://api-ap-southeast-2.hygraph.com/v2/clrl7cnr105jh01up5wcgj77o/master/upload`;
  await fetch(url, {
    method: "post",
    headers:{   'Content-Type': 'multipart/form-data'},
    body: file,
    }).then((result)=>{

      console.log(result)
    }).catch(error=>{

      console.log("Cloudinary Error")

    })


CallBack(result.assets[0].uri);
SetCaptured(true);
   }
  };






  const HYGRAPH_URL = 'https://api-ap-southeast-2.hygraph.com/v2/clrl7cnr105jh01up5wcgj77o/master/upload';
const HYGRAPH_ASSET_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDYwMDc3OTgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbHJsN2NucjEwNWpoMDF1cDV3Y2dqNzdvL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LWFwLXNvdXRoZWFzdC0yLmh5Z3JhcGguY29tLyIsInN1YiI6ImJlOTM1OWY5LWEyYzYtNDQ0Yy1iNzRmLWJiMTdiNDQ4MTJiYSIsImp0aSI6ImNscnE4enVieTBxc2UwMTJvZTE0ODZ0OXUifQ.agcR6Bg0cW4tirHFBhoAetBDnCsVsQgqJvP2H0hju8YsuVMqF4tC3a_EWDdbj60KwVjII_A6JdfmroSMRGQ3j_Zs-rqVf9CgrwlvtwyF-R0lK5f4Jm9aHJ8ISDhlvpOOZE8TlYPEz905gZiy_G--5DJdBYQ_wcooYGAQBdU0wMTQ_pUzz71650thysnu84o8erUfQKEtfiRJ4cFQxWbRP_PWuu3sBp8XC3RSPU4RkxeqpxBL4Jxb-fpMfsa1SHwvsnfaQ_dCl3FmzfOFX8MKUhkWtURAZ1A7kfZIwsiwhLENAPDZTON0aQvMs1WCwZ6VMw8K1D6A8Xx3MOYJXLlblIzYOFWEIqu1WD9CorjhSUk3hOFSmDxB9hy7ON-zWPkjGn9OVaWO5ymJqrNgj16azWfAXoquoGc3n1Rhv2aQl9vbI76ZNlGaQY1xWJ2ZZ1DvHfxEN6NwbZ5WrafNcmqyN_O8e5zhDk59c0WfcaXf6ETOMf4vU1hzs4p72XISs5m0On4wWdB3sbX4SUP97OSYMrFIkuCw-xATBgCM3YLYgN3kZgXM5fjWA0vP-kWBfnIb77M_Ctd9j1y9caMV1jTeFZ4Cqy722LnGuElqjGyGPK0nIOFuR-zklEy9HXoSC8lezX_0yai7ZR9GDnXAMc4mabt9z7ShC37mp6xptwbizBs';

async function hyGupload(type:string, base64:string) {
  // const input = document.getElementById('fileUpload');
  // const file = input.files[0];



  // form.append('fileUpload', file);

  const file = new FormData();


  const Base64 = `data:${type};base64,${base64}`

file.append

  // It is not recommended to use the HYGRAPH_ASSET_TOKEN in the Front-End.
  // In this example we're using it, but in a real application you should
  // use a backend to upload the file and use the HYGRAPH_ASSET_TOKEN there.
  const response = await fetch(`${HYGRAPH_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HYGRAPH_ASSET_TOKEN}`,
    },
    body: file,
  });

  console.log(response);
  // const data = await response.json();
  // console.log(JSON.stringify(data, null, 2));
}







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

{ShowRecordingIcon&& <View style={{
  backgroundColor:'white',
  borderRadius:5,


  justifyContent:'center',
  alignItems:'center',
  position: 'absolute',
  top:-50,
  overflow:'hidden',
  height:40,
  width:40,
  elevation:3
  }}>



<Image  resizeMode='contain' source={(require('../assets/appAssets/recording.gif'))}
style={{width:80, height:80}}

/>

</View>}

{ShowSendRecIcon&&

<View style={{

position: 'absolute',
top:-100,
flexDirection:'column',
gap:5
}}>



<TouchableOpacity onPress={()=>{ 
  
  PlaySound()
 

}} style={{
  backgroundColor:'white',
  borderRadius:5,


  justifyContent:'center',
  alignItems:'center',

  overflow:'hidden',
  height:40,
  width:40,
  elevation:3
  }}>



{IsPlaying?
  <MaterialCommunityIcons name="pause" size={24} color="black" />:
<Ionicons name="play" size={24} color="green" />
  


}

{formatTime(audioPosition)&&<Text style={{fontSize:6}}>{formatTime(audioPosition)} / {formatTime(audioDuration)}</Text>
}

<View style={{
  width:40,
  bottom:-2
  }}>
<AudioProgressBar audioPosition={audioPosition} audioDuration={audioDuration} />
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{  SenddFile()}} style={{
  backgroundColor:'white',
  borderRadius:5,


  justifyContent:'center',
  alignItems:'center',

  overflow:'hidden',
  height:40,
  width:40,
  elevation:3
  }}>



<LoadingContainer IndicatorColor='red' OnPress={()=>{}} IsLoading={IsSending}>
<FontAwesome name="paper-plane" size={18} color="red" />
</LoadingContainer>
</TouchableOpacity>


</View>

}

{isFirstCharacter?<FontAwesome name="paper-plane" size={18} color="white" />:

<TouchableOpacity  onLongPress={()=>{
  
  startRecording()
  SetShowRecordingIcon(true)

}} onPressOut={()=>{
  stopRecording();
  SetShowRecordingIcon(false)
  SetShowSendRecIcon(true)
  
  }}  >
<FontAwesome name="microphone" size={20} color="white" />

</TouchableOpacity>
}


</View>
</View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  circularProgress: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'blue',
    borderStyle: 'solid',
    position: 'absolute',
  },
});

export default ChatFooter