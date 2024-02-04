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
import { HygraphDBoperationsProp } from '../Types/Types';
import WithHygraphDBoperations from './HOC/WithHygraphDBoperations';
import { gql } from 'graphql-request';
import { useAppProvider } from '../Store/AppContext';

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



const PurePostFooter = ({reloadPosts,
    crudOperations,
  }: {
    crudOperations: HygraphDBoperationsProp,reloadPosts:any
  }) => {

  const navigation = useNavigation();
  const [isFirstCharacter,SetIsFirstCharacter] = useState(false);
  const [InputValue,SetInputValue] = useState("");
  const translateX = useSharedValue(0);
  const [isCameraShown,SetIsCameraShown] = useState(true);
  const [IsPlaying,SetIsPlaying] = useState(false);

  const [recording, setRecording] = useState<Audio.Recording | undefined>(undefined);
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const { UserData } = useAppProvider();

  const [ShowRecordingIcon,SetShowRecordingIcon] = useState(false);
  const [ShowSendRecIcon,SetShowSendRecIcon] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
const [message, setMessage] = useState("");
const [IsSending,SetIsSending] = useState(false);

  const sound = useRef<Audio.Sound | null>(null);

  const [Uri,SetUri]= useState("")


  const progress = useSharedValue(0);




  const saveData = () => {
    // SetIsLoading(true);

    
  

      const addPost =
      gql`
      mutation addPost {
        createPost(
          data: {category: "", message: "SOL NOW", appUser: {connect: {id: "` +UserData.id +`"}}}
        ) {
          id
        }
publishManyPosts {
          count
        }
      }
      `;

     
     

    crudOperations
      .Create(addPost)
      .then((result) => {

        const returnedData =result;
     
        if (result ) {
      
          console.log(result);
          reloadPosts()
        //   navigation.navigate('EmailVerification',{DataToReceive:VerificationCode})
        } else {
          alert("Failed");
        }
        // SetIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // SetIsLoading(false);
      });
  };






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


<TextInput value={message} onChangeText={(value)=>{
    setMessage(value) 
    SetIsFirstCharacter(true)}} style={{
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

 
<TouchableOpacity onPress={() => {}}>
<FontAwesome5 name="camera" size={23} color="gray" />
</TouchableOpacity>}
</Animated.View>
</View>

<TouchableOpacity onPress={ ()=>{saveData()}}>
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



<View style={{
  width:40,
  bottom:-2
  }}>

</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{ }} style={{
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

<TouchableOpacity onPress={()=>{

  
  }}  >
<FontAwesome name="microphone" size={20} color="white" />

</TouchableOpacity>
}


</View>
</TouchableOpacity>

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

const PostFooter= WithHygraphDBoperations(PurePostFooter );
export default PostFooter