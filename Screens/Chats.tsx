// import {
//   View,
//   Text,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   Modal,
//   ActivityIndicator,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
// import { Ionicons } from "@expo/vector-icons";
// import { useRoute } from "@react-navigation/native";
// import { chatData } from "../Components/Chats";
// import AvatarAndDetail from "../Components/AvatarAndDetail";
// import request, { gql } from "graphql-request";
// import UseHygraph from "../Components/Hooks/UseHygraph";
// import { Entypo } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { BlurView } from "expo-blur";
// import { FontAwesome5 } from "@expo/vector-icons";
// import LoadingButton from "../Components/LoadingButton";
// import Avatar from "../Components/Avatar";
// import { HygraphDBoperationsProp } from "../Types/Types";
// import WithHygraphDBoperations from "../Components/HOC/WithHygraphDBoperations";
// import { useAppProvider } from "../Store/AppContext";


// const MASTER_URL =
//   "https://api-ap-southeast-2.hygraph.com/v2/clrl7cnr105jh01up5wcgj77o/master";

// type Message = {
//   id: number;
//   WoIs: string;
//   Message: string;
//   TimeStamp: string;
//   ArivalStatus: string;
//   Date: string;
//   EmojiResponse: string;
//   MessageType: string;
// };

// type Contact = {
//   createdAt: string;
//   id: string;
//   imageUrl: string;
//   lastSeen: string;
//   contactName: string;
//   contactNumber: string;
//   hasStatus: boolean;
//   publishedAt: string;
// };

// interface CrudOperations<T> {
//   create: (data: string) => Promise<void>;
//   update: (id: string, data: T) => Promise<void>;
//   delete: (id: string) => Promise<void>;
// }

// interface WithCrudProps<T> {
//   crudOperations: CrudOperations<T>;
// }

// const PureChats = ({
//   crudOperations,
// }: {
//   crudOperations: HygraphDBoperationsProp;
// }) => {
//   const [IsModalShown, setIsModalShown] = useState(false);
//   const [IsLoading, SetIsLoading] = useState(false);
 
//   const [songData, SetSongData] = useState<Contact[] | null>(null);
//   type ContactProp = {
//     contactName: string;
//     contactNumber: string;
//     imageUrl: string;
//     lastSeen: string;
//   };

//   const { UserData } = useAppProvider();
//   const Delete = () => {
   
//     const GqlCreateString =
//       gql`
// mutation delete {
//   deleteContacts(where: {id: "cclrx3qb2gqptl0c2x17ehbmt7"}) {
//     contactName
//     contactNumber
//     imageUrl
//     lastSeen
//     publishedAt
//   }
// }
// `
//     crudOperations
//       .Delete(GqlCreateString)
//       .then((result) => {
//         console.log(result);
//         alert("Sent")
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Error")
//       });
//   };

//   const [cName, setcName] = useState<string | null>(null);
//   const [contact, setContact] = useState<string | null>(null);

//   const GqlString = gql`
//     query Contacts1 {
//       contacts1 {
//         id
//         contactName
//         contactNumber
//         lastSeen
//         imageUrl
//       }
//     }
//   `;

//   useEffect(() => {
//     // GqlQuery({ GqlString, SetSongData });

//     // console.warn(songData)
//   }, []);




// const CreateContact = () => {
//   const CreateRec =
//     gql`
//     mutation AddContact {
//       createContacts(
//         data: {appUser: {connect: {AppUser: {id: "` +
//         UserData.id+
//         `"}}}, contactName: "` +
//         cName +
//         `", contactNumber: "` +
//         contact +
//         `"}
//       )
//       publishManyContacts1 {
//         count
//       }
//     }   
// `;

//   }




//     // CreateARecord(CreateRec)
//     //   .then((res) => {
//     //     GqlQuery({ GqlString, SetSongData });
//     //     setIsModalShown(false);
//     //     SetIsLoading(false);
//     //   })
//     //   .catch((error) => {
//     //     alert("Error Occured");
//     //   });
//   };

//   const SaveData = () => {
//     SetIsLoading(true);

//     CreateRecord();
//   };

//   return (
//     <View
//       style={{
//         backgroundColor: "#F1F6EC",
//         width: "100%",
//         height: "100%",

//         justifyContent: "flex-start",
//         alignItems: "flex-start",
//         paddingHorizontal: 10,

//         paddingVertical: 20,
//       }}
//     >
//       <FlatList
//         data={songData}
//         renderItem={({ item }) => (
//           <>
//             <Avatar DeleteContact={Delete}>
//               <Avatar.AvatarImage
//                 RingScale={1}
//                 AvatarRing={true}
//                 AvatarScale={1}
//                 ImageUrl={item.imageUrl}
//               ></Avatar.AvatarImage>

//               <Avatar.LabelSection
//                 width={Dimensions.get("screen").width}
//                 RightComponent={true}
//                 colorWhite={false}
//                 LastSeen="12:00"
//               >
//                 <Avatar.LabelSection.Title
//                   Title={item.contactName}
//                   Color="gray"
//                 />
//               </Avatar.LabelSection>
//             </Avatar>
//           </>
//         )}
//       />

//       <TouchableOpacity
//         onPress={() => {
//           setIsModalShown(true);
//         }}
//         style={{
//           bottom: 40,
//           right: 40,
//           position: "absolute",
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: "#128C7E",
//             width: 45,
//             height: 45,

//             borderRadius: 25,

//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Entypo name="plus" size={24} color="white" />
//         </View>
//       </TouchableOpacity>

//       <Modal visible={IsModalShown} animationType="slide">
//         <BlurView
//           intensity={20}
//           style={{
//             flex: 1,
//             padding: 20,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               setIsModalShown(false);
//             }}
//             style={{
//               position: "absolute",
//               top: 30,
//               right: 30,
//             }}
//           >
//             <Feather name="x" size={24} color="green" />
//           </TouchableOpacity>

//           <View
//             style={{
//               flexDirection: "column",
//               gap: 30,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <View>
//               <TextInput
//                 value={cName}
//                 onChangeText={(value) => {
//                   setcName(value);
//                 }}
//                 placeholder="Contact Name"
//                 style={{
//                   borderBottomColor: "#128C7E",
//                   borderBottomWidth: 1,
//                   width: 200,
//                   paddingLeft: 30,
//                   padding: 3,
//                 }}
//               />

//               <FontAwesome
//                 style={{ position: "absolute", top: 8, left: 0 }}
//                 name="user-o"
//                 size={15}
//                 color="black"
//               />
//             </View>

//             <View>
//               <TextInput
//                 value={contact}
//                 onChangeText={(value) => {
//                   setContact(value);
//                 }}
//                 keyboardType="numeric"
//                 placeholder="Contact Number"
//                 style={{
//                   borderBottomColor: "#128C7E",
//                   borderBottomWidth: 1,
//                   width: 200,
//                   paddingLeft: 30,
//                   padding: 3,
//                 }}
//               />
//               <FontAwesome5
//                 style={{ position: "absolute", top: 8, left: 0 }}
//                 name="phone"
//                 size={15}
//                 color="black"
//               />
//             </View>
//             <TouchableOpacity onPress={SaveData}>
//               <LoadingButton
//                 IsLoading={IsLoading}
//                 OnPress={() => {}}
//                 Title="Save"
//               />
//             </TouchableOpacity>
//           </View>
//         </BlurView>
//       </Modal>
//     </View>
//   );
// };




// const ChatsA = WithHygraphDBoperations(PureChats);
// export default ChatsA;


import { View, Text } from 'react-native'
import React from 'react'

const Chats = () => {
  return (
    <View>
      <Text>Chats</Text>
    </View>
  )
}

export default Chats