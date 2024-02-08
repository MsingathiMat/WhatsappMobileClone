import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Avatar from './Avatar';
import { Dimensions } from 'react-native';
const PostCard = ({imageUrl,Message,LastSeen, userName}:{Message:string,userName:string,LastSeen:string,imageUrl:string}) => {
  return (
    <View style ={{

        backgroundColor:'#CCEFFF',
        padding:13,
        paddingBottom:19,
        borderRadius:10,
        borderTopRightRadius:0,
        width:'95%',
     
        borderColor:'#E4E4E4',
        borderWidth:1,
        marginBottom:25,
        marginHorizontal:10
      
    }}>

       <Avatar DeleteContact={()=>{}}>

       <Avatar.AvatarImage
                RingScale={1}
                AvatarRing={true}
                AvatarScale={1}
                ImageUrl={imageUrl}
              ></Avatar.AvatarImage>

<Avatar.LabelSection
                width={Dimensions.get("screen").width-90}
                RightComponent={true}
                colorWhite={false}
                LastSeen={LastSeen}
              >
                <Avatar.LabelSection.Title
                  Title={userName}
                  Color="gray"
                />
              </Avatar.LabelSection>

       </Avatar>

        <Text>

     {Message}
        </Text>

        <View style={{

            backgroundColor:'white',
            width:26,
            height:26,
            borderRadius:25,
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            bottom:-20,
            right:0
        }}>

        <Text>{String.fromCodePoint(0x1F604)}</Text>
        </View>
<View style={{

bottom:6,
right:8,
position:'absolute',
flexDirection:'row',
gap:5,
justifyContent:'center',
alignItems:'center'
}}>



<Text style={{
fontSize:11,
            color:'gray',
         
        }}>12:00</Text>

<Ionicons style={{

}} name="checkmark-done" size={18} color="blue" />


</View>   

    </View>
  )
}

export default PostCard