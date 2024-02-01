import { Image, ImageBackground, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import LoadingButton from "../Components/LoadingButton";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useAppProvider } from "../Store/AppContext";
import { gql } from "graphql-request";
import { useNavigation } from "@react-navigation/native";
import EmailVerification from "../Components/EmailVerification";
import { HygraphDBoperationsProp, Navigatable } from "../Types/Types";
import WithHygraphDBoperations from "../Components/HOC/WithHygraphDBoperations";

const PureLogin = ({
crudOperations
}: {
  crudOperations: HygraphDBoperationsProp;
}) => {
  const navigation: Navigatable = useNavigation();

  interface Item {
    id: string;
    name: string;
  }

  const [UserName, SetUserName] = useState<string | null>(null);
  const [Contact, SetContact] = useState<string | null>(null);
  const [IsLoginLoading, SetIsLoginLoading] = useState(false);
  const [IsRegisterLoading, SetIsRegisterLoading] = useState(false);
  const [IsVerificationModal, SetIsVerificationModal] = useState(false);
  const [VerificationCode, SetVerificationCode] = useState("");
 

 
  type Contact = {
    contacts1: [{ contactNumber: string }];
  };

  const AuthenticateUser = () => {
    SetIsLoginLoading(true);
    const GqlString =
      gql`
query getContact {
  contacts1(where: { contactName:"` +
      UserName +
      `"}) {
    contactNumber
  }
}
`;

    crudOperations
      .Read(GqlString)
      .then((results) => {
        const ReceivedData = results as Contact;
        SetIsLoginLoading(false);

        // console.log(results.contacts1[0]);
        if (ReceivedData.contacts1[0]) {
          const ContactNumber = ReceivedData.contacts1[0].contactNumber;

          if (ContactNumber === Contact) {
            navigation.replace("Welcome");
          } else {
            alert("wrong number");
          }
        } else {
          alert("User does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { UserData, SetUserData } = useAppProvider();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />

      <ImageBackground
        style={{
          flex: 1,
          paddingBottom: 15,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
        resizeMode="cover"
        source={require("../assets/appAssets/model.jpeg")}
      >
        <View style={{ flex: 1 }}></View>

        <LinearGradient
          colors={["#269B71", "#008069"]}
          locations={[0.1, 0.9]}
          style={{
            flex: 1,
            borderTopLeftRadius: 200,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "relative",

            padding: 40,
          }}
        >
          <Image
            source={require("../assets/appAssets/logoWhite.png")}
            style={{ marginTop: 10 }}
          />

          {/* <WithDBOperations /> */}

          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Login
          </Text>
          <View
            style={{
              flexDirection: "column",
              gap: 30,
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderTopLeftRadius: 30,
            }}
          >
            <View>
              <TextInput
                value={UserName}
                onChangeText={(value) => {
                  SetUserName(value);
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
                }}
              />

              <Entypo
                style={{ position: "absolute", top: 8, left: 0 }}
                name="lock"
                size={15}
                color="white"
              />
            </View>

            <View style={{ flexDirection: "row", gap: 5 }}>
              <LoadingButton
                IsLoading={IsLoginLoading}
                OnPress={() => {
                  AuthenticateUser();
                }}
                Title="Login"
                BakcgroundColor="white"
                BtnColor="#128C7E"
                IndicatorColor="#128C7E"
              />

              <LoadingButton
                IsLoading={IsRegisterLoading}
                // OnPress={() => {SetIsModalShown(true)}}
                OnPress={() => {
                  navigation.navigate("Register");
                }}
                Title="Register"
                BorderColor="white"
                BakcgroundColor="transparent"
                BtnColor="white"
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      <EmailVerification
        VerificationCode={VerificationCode}
        SetIsVerificationModal={SetIsVerificationModal}
        IsVerificationModal={IsVerificationModal}
      />
    </View>
  );
};

const Login = WithHygraphDBoperations(PureLogin);
export default Login;