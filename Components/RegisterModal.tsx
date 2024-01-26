

import {
    View,
   
    TouchableOpacity,
    Modal,
    Text,
   
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
  
  
   


    const RegisterModal = ({SetIsRegisterLoading,IsRegisterLoading,SetIsLoading,IsModalShown,SetIsModalShown}:{SetIsRegisterLoading:React.Dispatch<React.SetStateAction<boolean>>,IsRegisterLoading:boolean,IsModalShown:boolean,SetIsModalShown:React.Dispatch<React.SetStateAction<boolean>>,SetIsLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
     

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
            intensity={95}
            
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
              <Feather name="x" size={24} color="green" />
            </TouchableOpacity>
      
            <View
              style={{
                flexDirection: "column",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:'white',
                padding:20,
                borderRadius:10
              }}
            >

                <Text style={{
fontWeight:'bold',
color:"#128C7E"


                }}>Register</Text>
              <View>
                <TextInput
                  value={cName}
                  onChangeText={(value) => {
                    setcName(value);
                  }}
                  placeholder="Contact Name"
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
                  name="user-o"
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
                  placeholder="Contact Number"
                  style={{
                    borderBottomColor: "#128C7E",
                    borderBottomWidth: 1,
                    width: 200,
                    paddingLeft: 30,
                    padding: 3,
                  }}
                />
                <FontAwesome5
                  style={{ position: "absolute", top: 8, left: 0 }}
                  name="phone"
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
            </View>
          </BlurView>
        </Modal>
        )
              } 

  


export default RegisterModal