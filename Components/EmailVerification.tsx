

import {
    View,
   
    TouchableOpacity,
 
    Text,
    Image,
  
   
  } from "react-native";
  import React, {  useState } from "react";
 
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';

  import { BlurView } from "expo-blur";

  import LoadingButton from "../Components/LoadingButton";

import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';

import {  useRoute } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";
import { Navigatable, Routable } from "../Types/Types";

 



const EmailVerification = () => {
        const [InputCode, SetInputCode]=useState("")

const route:Routable<string> = useRoute()
const navigation:Navigatable = useNavigation();
const generatedVerificationCode = route.params.DataToReceive

const VerifyCode=()=>{

if(InputCode===generatedVerificationCode.trim()){

    navigation.navigate('Welcome')
}else{

 alert("incorrect code")
}

}
        return (
        
          <View
         
            
            style={{
              flex: 1,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            
            
            }}
          >
      <TouchableOpacity
        onPress={() => { navigation.goBack()}}
        style={{
          position: "absolute",
          top: 30,
          left: 30,
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
            <View>
  

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

<MaterialCommunityIcons name="email-lock" size={24} color="black" />
  
                 <Text style={{
fontWeight:'bold',
color:"#128C7E"


                }}>Verify -- {generatedVerificationCode}</Text>


              <View>
                <TextInput
                  value={InputCode}
                  onChangeText={(value) => {
                    SetInputCode(value.trim);
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
          </View>
     
        )
            }
        
        

  


export default EmailVerification