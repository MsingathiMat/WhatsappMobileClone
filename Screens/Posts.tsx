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
import WithCrudOperations from "../Components/HOC/WithCrudOperations";


type PostProp={
  "posts": postProp[]
}


type postProp=
  {
    "category": string,
    "message": string,
    "appUser": {
      "imageUrl": string,
      "userName": string,
      "lastSeen":string
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
  crudOperations: ReturnType<typeof WithCrudOperations.GraphQl>;
})=> {

  const [posts, setPosts] = useState<postProp[] | null>(null);

const FlatListRef = useRef<FlatList<postProp>>()

const scrollToBottom=()=>{

if(FlatListRef.current){

  FlatListRef.current.scrollToEnd()
}

}
const readPosts=()=>{
  setPosts(null)

  const GetPosts = gql`
  query getPosts {
    posts(orderBy: publishedAt_ASC) {
      category
      message
      appUser {
        imageUrl
        userName
        lastSeen
      }
    }
  }
  `
    crudOperations
      .Read(GetPosts)
      .then((result) => {
     
       const data = result as PostProp;


      setPosts(data.posts)

      scrollToBottom();
   
      })
      .catch((error) => {
        console.log(error);
        alert("Post not loaded")
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
       
    paddingVertical:15
        }}
      >
       <View
        style={{
        
        
        }}
       >
       <FlatList
          data={posts}
        style={{ }}

          // onActivated={()=>{readPosts()}}
       ref={FlatListRef}
          showsVerticalScrollIndicator={false}
        
         renderItem={({item})=>(<PostCard Message={item.message} imageUrl={item.appUser.imageUrl} userName={item.appUser.userName} LastSeen={item.appUser.lastSeen}/>)}
          
        />
       </View>


   
      </View>

      <PostFooter crudOperations={crudOperations} readPosts={()=>{readPosts()}} />
    </ImageBackground>
  );
};


const Posts= WithCrudOperations(PostsPure,WithCrudOperations.GraphQl)


export default Posts;

