// import { View, Text, ImageBackground } from "react-native";
// import React, { useEffect, useRef, useState } from "react";
// import { useRoute } from "@react-navigation/native";
// import ChatFooter from "../Components/ChatFooter";
// import GreenConvo from "../Components/GreenConvo";
// import WhiteConvo from "../Components/WhiteConvo";
// import AudioWhiteConvo from "../Components/AudioWhiteConvo";
// import { FlatList } from "react-native-gesture-handler";
// import GreenImageCard from "../Components/GreenImageCard";
// import ChatImage from "../Components/ChatImage";
// import {  PosItemProp } from "../Types/Types";
// import ChatDetailHeader from "../Components/ChatDetailHeader";
// import HOCscreen from "../Components/HOC/HOCscreen";
// import PostCard from "../Components/PostCard";
// import withPOSTS from "../Components/HOC/withCHATS";



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
//   id: number;
//   ImageUrl: string;
//   ContactName: string;
//   ContactNumber: string;
//   HasStatus: boolean;
//   Conversation: Message[];
// };

// type RouteProps = {
//   key: string;
//   name: string;
//   params: { SelectedContactIndex: number };
// };



// const PostsPure = ({posts}:{posts:{posts:PosItemProp[]}})=> {

//   return(<View><Text>Mathhew</Text></View>)
// //   const flatListRef = useRef<FlatList<PosItemProp>>();

 

// //   return (
// //     <ImageBackground
// //       style={{
// //         flex: 1,
// //       }}
// //       resizeMode="cover"
// //       source={require("../assets/appAssets/bg.jpg")}
// //     >
// // {/* 
// // <ChatDetailHeader ConatctData={ChatData[2]}  /> */}
// //       <View
// //         style={{
// //           flex: 1,
// //           padding: 20,
// //         }}
// //       >
// //         <FlatList
// //           data={posts?.posts}
// //           ref={flatListRef}
// //           showsVerticalScrollIndicator={false}
        
// //          renderItem={({item})=>(<PostCard Message={item.message} />)}
          
// //         />


      
// //       </View>

// //       {/* <ChatFooter CallBack={setImageUri} SetCaptured={()=>{}} /> */}
// //     </ImageBackground>
// //   );
// };


// const Posts= withPOSTS(PostsPure)


// export default Posts;

import { View, Text } from 'react-native'
import React from 'react'

import { WithC } from '../Components/HOC/withCHATS'

const Posts = () => {
  return (
    <View>
    {/* <WithC/> */}
    </View>
  )
}

export default Posts
