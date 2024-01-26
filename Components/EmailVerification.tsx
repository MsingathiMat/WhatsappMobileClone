

import {
    View,
   
    TouchableOpacity,
    Modal,
    Text,
    Image,
    ToastAndroid,
   
  } from "react-native";
  import React, { useEffect, useState } from "react";
 
  import UseHygraph from "../Components/Hooks/UseHygraph";

  import { Feather } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { BlurView } from "expo-blur";
  import { FontAwesome5 } from "@expo/vector-icons";
  import LoadingButton from "../Components/LoadingButton";

import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';

import { NavigationProp, useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

 
type RouteParams ={
    key:string,
    name:string,
    path:string
    params:{Code:string}
}

type extended = NavigationProp<ReactNavigation.RootParamList>&{
    navigate:(screen:string)=>void
    }
const EmailVerification = ({VerificationCode,IsVerificationModal,SetIsVerificationModal}:{VerificationCode:string,IsVerificationModal:boolean,SetIsVerificationModal:React.Dispatch<React.SetStateAction<boolean>>}) => {
        const [InputCode, SetInputCode]=useState("")

const route:RouteParams = useRoute()
const navigation:extended = useNavigation();
// const Code = route.params.Code

const VerifyCode=()=>{

if(InputCode===VerificationCode.trim()){

    navigation.navigate('Welcome')
}else{

 alert("incorrect code")
}

}
        return (
          <Modal visible={IsVerificationModal} animationType="slide">
          <BlurView
            intensity={10}
            
            style={{
              flex: 1,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            
            
            }}
          >
            <TouchableOpacity
              onPress={() => {
                SetIsVerificationModal(false);
              }}
              style={{
                position: "absolute",
                top: 30,
                right: 30,
              }}
            >
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <View style ={{
     height:70,
     width:70, 
     borderRadius:35,
     justifyContent:'center',
     alignItems:'center',
    elevation:25,
    position:'absolute',
    top:-30,
    left:85,
    zIndex:40
    }}>

<Image resizeMode="cover"  source={({uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"})} style={{
   
    height:70,
    width:70, 
    borderRadius:35,
    borderColor:'#57F573',
    borderWidth:2.5,
    
    }}/> 
  
</View>

            <View
              style={{
                flexDirection: "column",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:'white',
                padding:30,
                borderRadius:10,
                paddingTop:10,
                height:350,
                overflow:'hidden',
                width:250
              }}
            >


  
                 <Text style={{
fontWeight:'bold',
color:"#128C7E"


                }}>Verify</Text>


              <View>
                <TextInput
                  value={InputCode}
                  onChangeText={(value) => {
                    SetInputCode(value);
                  }}
                  placeholder="Verification Code"
                  style={{
                    borderBottomColor: "#128C7E",
                    borderBottomWidth: 1,
                    width: 200,
                    paddingLeft: 30,
                    padding: 3,
                  }}
                />

                <MaterialIcons
                  style={{ position: "absolute", top: 8, left: 0 }}
                  name="email"
                  size={15}
                  color="black"
                />
              </View>
      
             
              <TouchableOpacity onPress={()=>{VerifyCode()}}>
                <LoadingButton
                  IsLoading={false}
                  OnPress={() => {}}
                  Title="Save"
                  BakcgroundColor="#128C7E"
                />
              </TouchableOpacity>

              <View style={{
                width:'150%',
               height:7,
               backgroundColor:'#57F573',
               position:'absolute',
               bottom:-1
               
               }}>

              </View>
            </View>
            </View>
          </BlurView>
        </Modal>
        )
            }
        
        

  


export default EmailVerification