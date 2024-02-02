import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

const ProfileImage = ({Border,ProfilePic}:{Border?:boolean,ProfilePic:string}) => {

  return (
 
    <View
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
     source={{uri:ProfilePic}}

     
      style={{
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: "#57F573",
        borderWidth: Border?2.5:0,
      }}
    />
  </View>
  )
}

export default ProfileImage