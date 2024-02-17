import { View, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";


import { AntDesign } from '@expo/vector-icons';
import LoadingButton from "./LoadingButton";
import { gql } from "graphql-request";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SendEmail from "../API/SendEmail";
import { AppUserProp, HygraphDBoperationsProp, Navigatable, UserObjectProp } from "../Types/Types";
import WithHygraphDBoperations from "./HOC/WithHygraphDBoperations";
import { useNavigation } from "@react-navigation/native";
import ProfileImage from "./ProfileImage";
import { GenerateRandomDigits } from "../HelperFunctions/GenerateRandomDigits";
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import { useAppProvider } from "../Store/AppContext";
type SavedUserProps={
  "createAppUser": UserObjectProp
}





const PureRegister = ({
  crudOperations,
}: {
  crudOperations: HygraphDBoperationsProp;
}) => {
  const [UserName, setUserName] = useState<string | null>(null);
  const [Email, setEmail] = useState<string | null>(null);
  const [Password, setPassword] = useState<string | null>(null);
  const [IsLoading, SetIsLoading] = useState(false);
  const [ProfilePic, SetProfilePic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png");

  const navigation:Navigatable = useNavigation()

  const [VerificationCode, SetVerificationCode] = useState("");
  const [Base64ImageData, SetBase64ImageData] = useState(null);

  const { UserData, SetUserData } = useAppProvider();
   
useEffect(()=>{

  const VeriCode = (GenerateRandomDigits(4)).toString()

  SetVerificationCode(VeriCode)
},[])

  // const GqlString = gql`
  //   query Contacts1 {
  //     contacts1 {
  //       id
  //       contactName
  //       contactNumber
  //       lastSeen
  //       imageUrl
  //     }
  //   }
  // `;


  const verify = () => {
 

    SendEmail({
      Email: Email,
      Name: UserName,
      VerificationCode: VerificationCode,
    })
      .then((result) => {
        console.log("EMAIL SENT ");
      })
      .catch((error) => {
        alert('Something went wrong')
        console.log(error);
      });
  };





  const saveData = () => {








    SetIsLoading(true);
 



    

      const GqlCreateString =
      gql`
      mutation MyMutation {
        createAppUser(data: {userName: "`+UserName.trim() +`", password:"` +Password.trim() +`",imageUrl: "`+ProfilePic+`", email: "` +Email.trim() +`", lastSeen: "` +
        moment() +
        `" isVerified:false }) {
          email
          imageUrl
          lastSeen
          password
          userName
          id
        }
        publishManyAppUsers {
          count
        }
      }
      `;



     
   

    crudOperations
      .Create(GqlCreateString)
      .then((result) => {

        const returnedData =result as SavedUserProps;
     
        if (result && returnedData.createAppUser) {
      
  

          const ReceivedData = result as SavedUserProps



SetUserData(ReceivedData.createAppUser)
          navigation.navigate('EmailVerification',{DataToReceive:VerificationCode})
        } else {
          alert("Failed");
        }
        SetIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        SetIsLoading(false);
      });
  };

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
      
    <TouchableOpacity style={{zIndex:4}} onPress={()=>{}}>
    <ProfileImage Border ProfilePic={Base64ImageData?Base64ImageData:ProfilePic}/>
    </TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            gap: 25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 30,
            borderRadius: 10,
            paddingTop: 60,
            height: 350,
            overflow: "hidden",
            width: 250,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#128C7E",
            }}
          >
            Register
          </Text>

         
          <View>
            <TextInput
              value={UserName}
              onChangeText={(value) => {
                setUserName(value);
              }}
              placeholder="User Name"
              style={{
                borderBottomColor: "#128C7E",
                borderBottomWidth: 1,
                width: 200,
                paddingLeft: 30,
                padding: 3,
              }}
            />

<FontAwesome
              style={{ position: "absolute", top: 8, left: 0 }}
              name="user"
              size={15}
              color="black"
            />
          </View>
          <View>
            <TextInput
              value={Email}
              onChangeText={(value) => {
                setEmail(value);
              }}
              placeholder="Your email"
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


          <View>
            <TextInput
              value={Password}
              onChangeText={(value) => {
                setPassword(value);
              }}
              placeholder="Password"
              style={{
                borderBottomColor: "#128C7E",
                borderBottomWidth: 1,
                width: 200,
                paddingLeft: 30,
                padding: 3,
              }}
            />

            <Entypo
              style={{ position: "absolute", top: 8, left: 0 }}
              name="lock"
              size={15}
              color="black"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              verify();
            }}
          >
            <LoadingButton
              IsLoading={IsLoading}
              OnPress={() => {saveData()}}
              Title="Save"
              BakcgroundColor="#128C7E"
            />
          </TouchableOpacity>

          <View
            style={{
              width: "150%",
              height: 7,
              backgroundColor: "#57F573",
              position: "absolute",
              bottom: -1,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};

const Register = WithHygraphDBoperations(PureRegister);

export default Register;
