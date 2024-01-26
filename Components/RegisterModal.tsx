

import {
    View,
   
    TouchableOpacity,
    Modal,
    Text,
    Image,
   
  } from "react-native";
  import React, { useEffect, useState } from "react";
 
  import UseHygraph from "../Components/Hooks/UseHygraph";

  import { Feather } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { BlurView } from "expo-blur";
  import { FontAwesome5 } from "@expo/vector-icons";
  import LoadingButton from "../Components/LoadingButton";
import { gql } from "graphql-request";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


  const MASTER_URL =
    "https://api-ap-southeast-2.hygraph.com/v2/clrl7cnr105jh01up5wcgj77o/master";
  
  type Message = {
    id: number;
    WoIs: string;
    Message: string;
    TimeStamp: string;
    ArivalStatus: string;
    Date: string;
    EmojiResponse: string;
    MessageType: string;
  };
  
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
  
  interface ContactProps {
    contacts1: Contact[];
  }
  
  type chatDataProp = Contact[];
  
  
   


    const RegisterModal = ({SetIsLoading,IsModalShown,SetIsModalShown}:{IsModalShown:boolean,SetIsModalShown:React.Dispatch<React.SetStateAction<boolean>>,SetIsLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
     

        const { GqlQuery, CreateARecord } = UseHygraph();
        const [songData, SetSongData] = useState<Contact[] | null>(null);
        type ContactProp = {
          contactName: string;
          contactNumber: string;
          imageUrl: string;
          lastSeen: string;
        };
      
        const [cName, setcName] = useState<string | null>(null);
        const [contact, setContact] = useState<string | null>(null);
      
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
      
      
        const CreateRecord = () => {
          const CreateRec =
            gql`
      mutation CreateContact {
        createContacts(
          data: {contactName: "` +
            cName +
            `", contactNumber:  "` +
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
      `
          CreateARecord(CreateRec)
            .then((res) => {
              GqlQuery({ GqlString, SetSongData });
              SetIsModalShown(false);
              SetIsLoading(false);
            })
            .catch((error) => {
              alert("Error Occured");
            });
      
        }
        const SaveData = () => {
          SetIsLoading(true);
      
          CreateRecord();
        };
      
        return (
          <Modal visible={IsModalShown} animationType="slide">
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
                SetIsModalShown(false);
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
                paddingTop:60,
                height:350,
                overflow:'hidden',
                width:250
              }}
            >


  
                 <Text style={{
fontWeight:'bold',
color:"#128C7E"


                }}>Register</Text>

<FontAwesome name="camera" size={24} color="black" />
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
                  keyboardType="numeric"
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
              <TouchableOpacity onPress={SaveData}>
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

  


export default RegisterModal