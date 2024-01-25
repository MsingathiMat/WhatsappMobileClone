import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

  import { FontAwesome } from "@expo/vector-icons";

  import { FontAwesome5 } from "@expo/vector-icons";
  import LoadingButton from "../Components/LoadingButton";
import UseHygraph from '../Components/Hooks/UseHygraph';

import TabBarTop from '@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import {useAppProvider} from '../Store/AppContext';
import { gql } from 'graphql-request';


const Register = () => {

  const { GqlQuery, GqlQuery1 } = UseHygraph();

  const [Password, SetPassword] = useState<string | null>(null)
  const [UserName, SetUserName] = useState<string | null>(null)
  const [Contact, SetContact] = useState<string | null>(null)



  

    type Contact ={

      contacts1:[{ contactNumber:string}];
    }

 



const AuthenticateUser = ()=>{

  const GqlString = gql`
query getContact {
  contacts1(where: { contactName: "Tokoza Bhele"}) {
    contactNumber
  }
}
`;

 GqlQuery1<Contact>({ GqlString,  }).then(results=>{

  const ContactNumber=results.contacts1[0].contactNumber

  if (ContactNumber===Contact){
alert("Correct Number")

  }else{

    alert('wrong number');
  }

 });


}

    

const {UserData,SetUserData} = useAppProvider()
  const sendEmail = async()=>{
    try {
      const response = await fetch('http://localhost:3000/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
       
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('Error during fetch:', error.message);
    }
  }
  return (
   <View style={{flex:1}}>
      <StatusBar hidden={true}/>


<ImageBackground
    style={{

     
 flex:1,
      paddingBottom:15,
    justifyContent:'center' ,
  alignItems:'center',
  padding:10

}}

    resizeMode='cover'
    source={(require("../assets/appAssets/model.jpeg"))}
>

      <View style={{flex:1}}>

      </View>
    
     <LinearGradient
    colors={['#269B71','#008069']}
   
  locations={[0.1, 0.9]}

  style={{flex:1,
     borderTopLeftRadius:200,
     borderTopRightRadius:50,
     borderBottomLeftRadius:20,
     borderBottomRightRadius:20,
     justifyContent:'center',
     alignItems:'center',
    width:'100%',
position:'relative',

padding:40,
    }}
  >

<Image source={(require("../assets/appAssets/logoWhite.png"))} style={{marginTop:30}}/> 
 <View
            style={{
              flexDirection: "column",
              gap: 30,
              justifyContent: "center",
              alignItems: "center",
              flex:1,
              borderTopLeftRadius:30
            }}
          >





            <View>
              <TextInput
                value={UserName}
                onChangeText={(value) => {
                  SetUserName(value)
                }}
                placeholder="User Name"
                style={{
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  width: 200,
                  paddingLeft: 30,
                  padding: 3,
                }}
              />

              <FontAwesome
                style={{ position: "absolute", top: 8, left: 0 }}
                name="user-o"
                size={15}
                color="white"
              />
            </View>

            <View>
              <TextInput
                value={Contact}
                onChangeText={(value) => {
                  SetContact(value);
                }}
                keyboardType="numeric"
                placeholder="Password"
                style={{
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  width: 200,
                  paddingLeft: 30,
                  padding: 3,
                  color:'gray'
                }}
              />
              

<Entypo   style={{ position: "absolute", top: 8, left: 0 }}
                name="lock"
                size={15}
                color="white" />
            </View>
           
              <LoadingButton
                IsLoading={false}
                OnPress={() => {AuthenticateUser()}}
                Title={UserData}
              />
          
          </View>
 
    </LinearGradient>
</ImageBackground>
   </View>
  )
}

export default Register

const styles = StyleSheet.create({})