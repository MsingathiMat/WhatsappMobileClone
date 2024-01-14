import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ChatImage = ({igamgeUri}:{igamgeUri:string}) => {


 
  return (
    <View style ={{

        backgroundColor:'#D9FDD3',
        padding:13,
        paddingBottom:19,
        borderRadius:10,
        borderTopRightRadius:10,
        width:'85%',
        alignSelf:'flex-end',
        borderColor:'#E4E4E4',
        borderWidth:1,
        marginBottom:25,
        marginHorizontal:10
      
       
    }}>

       

 

        <View style={{

            backgroundColor:'white',
            width:26,
            height:26,
            borderRadius:25,
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            bottom:-20,
            right:0,
          
        }}>

        <Text>{String.fromCodePoint(0x1F604)}</Text>
        </View>

        <Image source={{uri:igamgeUri}}
  
  resizeMode='cover'
  style={{

    width:'100%',
    height:200,
    borderRadius:10,
    marginBottom:10,
    zIndex:-3
  }}
  /> 
<View style={{

bottom:110,
right:110,
position:'absolute',
flexDirection:'row',
gap:5,
justifyContent:'center',
alignItems:'center',
zIndex:5
}}>



<TouchableOpacity onPress={()=>{}}>


</TouchableOpacity>


</View>   

    </View>
  )
}

export default ChatImage