import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatFooter from "../Components/ChatFooter";

type RouteProps = {
  key: string;
  name: string;
  params: { data: string };
};
const ChatDetail = () => {
  const route = useRoute<RouteProps>();

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="cover"
      source={require("../assets/appAssets/bg.jpg")}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            padding:20
          }}
        >

<View  >


<View


style={{

  
    width:13,
    height:20,
    position:'absolute',
    right:-11,
    top:0,
    zIndex:5,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
   
    borderTopColor:'#E4E4E4',
    borderBottomColor:'rgba(0,0,0,0)',
    borderLeftColor:'rgba(0,0,0,0)',
    borderRightColor:'rgba(0,0,0,0)',
    borderWidth:1
  
}}
> 

<View
                
                style={{

                    backgroundColor:'#D9FDD3',
                    width:20,
                    height:20,
                    position:'absolute',
                   top:-10,
                   left:-13,
                    zIndex:1,
                    transform:[{rotate:'45deg'}],
                    borderColor:'#E4E4E4',
                    borderWidth:1
                }}>


                </View>
</View>

            <View style ={{

                backgroundColor:'#D9FDD3',
                padding:10,
                borderRadius:10,
                borderTopRightRadius:0,
                width:'85%',
                alignSelf:'flex-end',
                borderColor:'#E4E4E4',
                borderWidth:1
               
            }}>

               

                <Text>

                When it comes to developing mobile applications, we typically rely on using Android Emulator / iOS simulator or real devices. However, in the world of React Native mobile app development, Expo has brought innovation to a whole new level with its fascinating feature called Expo Snack.
                </Text>
            </View>
            </View>
        </View>
      </View>

      <ChatFooter />
    </ImageBackground>
  );
};

export default ChatDetail;
