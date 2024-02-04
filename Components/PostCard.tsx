import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Avatar from './Avatar';
import { Dimensions } from 'react-native';
const PostCard = ({Message, userName}:{Message:string,userName:string}) => {
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
                ImageUrl={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I&psig=AOvVaw2PDsFj8iEFTuCd9CFkR10A&ust=1706551979856000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi07tbXgIQDFQAAAAAdAAAAABAE'}
              ></Avatar.AvatarImage>

<Avatar.LabelSection
                width={Dimensions.get("screen").width-90}
                RightComponent={true}
                colorWhite={false}
                LastSeen="WORK"
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