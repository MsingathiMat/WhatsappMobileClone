import { View,Text, ImageBackground,  TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {  useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


import { SimpleLineIcons } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';



import LoadingContainer from './LoadingContainer';
import { HygraphDBoperationsProp } from '../Types/Types';

import { gql } from 'graphql-request';
import { useAppProvider } from '../Store/AppContext';




const PostFooter = ({
    crudOperations,readPosts
  }: {
    crudOperations: HygraphDBoperationsProp,readPosts:()=>void
  }) => {


  const [isFirstCharacter,SetIsFirstCharacter] = useState(false);




  const { UserData } = useAppProvider();

  const [ShowRecordingIcon,SetShowRecordingIcon] = useState(false);
  const [ShowSendRecIcon,SetShowSendRecIcon] = useState(false);

const [message, setMessage] = useState("");
const [IsSending,SetIsSending] = useState(false);




  const saveData = () => {
    // SetIsLoading(true);

    
  SetIsSending(true);

      const addPost =
      gql`
      mutation addPost {
        createPost(
          data: {category: "", message: "` +message +`", appUser: {connect: {id: "` +UserData.id +`"}}}
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
      
            readPosts()
            setMessage("");
    
    SetIsSending(false)
        } else {
          SetIsSending(false)
          alert("Failed");
        }
     
      })
      .catch((error) => {
        console.log(error);
      
        SetIsSending(false)
      });
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
  paddingTop:15,
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




</TouchableOpacity>


</View>

}

{isFirstCharacter?


<LoadingContainer IndicatorColor='white' OnPress={()=>{}} IsLoading={IsSending}>
<FontAwesome name="paper-plane" size={18} color="white" />
</LoadingContainer>
:

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


export default PostFooter