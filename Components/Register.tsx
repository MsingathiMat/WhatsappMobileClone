import { View, TouchableOpacity, Modal, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";

import UseHygraph from "./Hooks/UseHygraph";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import LoadingButton from "./LoadingButton";
import { gql } from "graphql-request";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SendEmail from "../API/SendEmail";
import { HygraphDBoperationsProp, Navigatable } from "../Types/Types";
import WithHygraphDBoperations from "./HOC/WithHygraphDBoperations";
import { useNavigation } from "@react-navigation/native";
import ProfileImage from "./ProfileImage";
import { GenerateRandomDigits } from "../HelperFunctions/GenerateRandomDigits";

type Contact = {
  createdAt: string;
  id: string;
  imageUrl: string;
  lastSeen: string;
  contactName: string;
  contactNumber: string;
  hasStatus: boolean;
  publishedAt: string;
};

const PureRegister = ({
  crudOperations,
}: {
  crudOperations: HygraphDBoperationsProp;
}) => {
  const [cName, setcName] = useState<string | null>(null);
  const [contact, setContact] = useState<string | null>(null);
  const [IsLoading, SetIsLoading] = useState(false);
  const [ProfilePic, SetProfilePic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png");

  const navigation:Navigatable = useNavigation()

  const [VerificationCode, SetVerificationCode] = useState("");


useEffect(()=>{

  const VeriCode = (GenerateRandomDigits(4)).toString()

  SetVerificationCode(VeriCode)
},[])

  const GqlString = gql`
    query Contacts1 {
      contacts1 {
        id
        contactName
        contactNumber
        lastSeen
        imageUrl
      }
    }
  `;

  const verify = () => {
    const VerificationCode = (
      Math.floor(Math.random() * 9000) + 1000
    ).toString();

    SendEmail({
      Email: cName,
      Name: contact,
      VerificationCode: VerificationCode,
    })
      .then((result) => {
        console.log(result.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const CreateRecord = () => {
    const CreateRec =
      gql`
      mutation CreateContact {
        createContacts(
          data: {contactName: "` +cName +`", contactNumber:  "` +
      contact +
      `", imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png", lastSeen: "` +
      Date.now() +
      `"}
        ) {
          id
        }
        publishManyContacts1(to: PUBLISHED) {
          count
        }
      }
      `;


  


    // CreateARecord(CreateRec)
    //   .then((res) => {
    //     GqlQuery({ GqlString, SetSongData });
    //     SetIsModalShown(false);
    //     SetIsLoading(false);
    //   })
    //   .catch((error) => {
    //     alert("Error Occured");
    //   });
  };
  const SaveUser = () => {
    SetIsLoading(true);

    CreateRecord();
  };

  const saveData = () => {
    SetIsLoading(true);
    const UserName = "Msingathi Hlazo01";
    const Password = "247";
    const Email = "247";
    const ImageUrl = "247";
    

    // const GqlCreateString =
    //   gql`
    //   mutation AddUser {
    //     createAppUser(data: {userName: "`+UserName +`", password: "`+Password +`", email: "`+Email +`", imageUrl: "` +ImageUrl +`"})
    //   }
    //   `;

      const GqlCreateString =
      gql`
      mutation MyMutation {
        createAppUser(
          data: {userName: "Publish Many", password: "Boss", imageUrl: "", email: "gmail"}
        ) {
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
        if (result) {
          alert("Added");
          console.log(result);
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
        onPress={() => { navigation.navigate('Login')}}
        style={{
          position: "absolute",
          top: 30,
          left: 30,
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View>
        {/* <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            elevation: 25,
            position: "absolute",
            top: -30,
            left: 85,
            zIndex: 40,
          }}
        >
          <Image
            resizeMode="cover"
            source={{
              uri: ProfilePic,
            }}
            style={{
              height: 70,
              width: 70,
              borderRadius: 35,
              borderColor: "#57F573",
              borderWidth: 2.5,
            }}
          />
        </View> */}

    <ProfileImage Border ProfilePic={ProfilePic}/>

        <View
          style={{
            flexDirection: "column",
            gap: 30,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 30,
            borderRadius: 10,
            paddingTop: 10,
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
              value={cName}
              onChangeText={(value) => {
                setcName(value);
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
              value={contact}
              onChangeText={(value) => {
                setContact(value);
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
