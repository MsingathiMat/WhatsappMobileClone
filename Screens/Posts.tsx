import { View, Text, ImageBackground } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import ChatFooter from "../Components/ChatFooter";
import GreenConvo from "../Components/GreenConvo";
import WhiteConvo from "../Components/WhiteConvo";
import AudioWhiteConvo from "../Components/AudioWhiteConvo";
import { FlatList } from "react-native-gesture-handler";
import GreenImageCard from "../Components/GreenImageCard";
import ChatImage from "../Components/ChatImage";
import {  HygraphDBoperationsProp, PosItemProp } from "../Types/Types";
import ChatDetailHeader from "../Components/ChatDetailHeader";
import HOCscreen from "../Components/HOC/HOCscreen";
import PostCard from "../Components/PostCard";
import withPOSTS from "../Components/HOC/withCHATS";
import WithHygraphDBoperations from "../Components/HOC/WithHygraphDBoperations";
import { gql } from "graphql-request";
import PostFooter from "../Components/PostFooter";


type PostProp={
  "posts": postProp[]
}


type postProp=
  {
    "category": string,
    "message": string,
    "appUser": {
      "imageUrl": string,
      "userName": string
    }
  }

type RouteProps = {
  key: string;
  name: string;
  params: { SelectedContactIndex: number };
};



const PostsPure = ({
  crudOperations,
}: {
  crudOperations: HygraphDBoperationsProp;
})=> {

  const [posts, setPosts] = useState<postProp[] | null>(null);


const readPosts=()=>{


  const GetPosts = gql`
  query getPosts {
    posts(orderBy: publishedAt_ASC) {
      category
      message
      appUser {
        imageUrl
        userName
      }
    }
  }
  `
    crudOperations
      .Read(GetPosts)
      .then((result) => {
     
       const data = result as PostProp;

      console.log(data.posts)
      setPosts(data.posts)
   
      })
      .catch((error) => {
        console.log(error);
        alert("Error")
      });
  };

  useEffect(()=>{

    readPosts();

  },[])



  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="cover"
      source={require("../assets/appAssets/bg.jpg")}
    >
{/* 
<ChatDetailHeader ConatctData={ChatData[2]}  /> */}
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <FlatList
          data={posts}
          // ref={flatListRef}
          showsVerticalScrollIndicator={false}
        
         renderItem={({item})=>(<PostCard Message={item.message} />)}
          
        />


      <PostFooter crudOperations={crudOperations} readPosts={()=>{readPosts()}} />
      </View>

      {/* <ChatFooter CallBack={setImageUri} SetCaptured={()=>{}} /> */}
    </ImageBackground>
  );
};


const Posts= WithHygraphDBoperations(PostsPure)


export default Posts;

