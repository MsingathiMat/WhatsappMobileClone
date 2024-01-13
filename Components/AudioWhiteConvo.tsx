import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const AudioWhiteConvo = () => {
  return (
    <View style ={{

        backgroundColor:'white',
        padding:13,
        paddingBottom:19,
        borderRadius:10,
        borderTopLeftRadius:0,
        width:'85%',
        alignSelf:'flex-start',
        borderColor:'#E4E4E4',
        borderWidth:1,
        marginBottom:25,
        height:65
      
       
    }}>

       

      <View style={{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
      }}>

      <Entypo name="controller-play" size={32} color="gray" />

<View>

<View style={{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
}}>

<View style={{

    backgroundColor:'#34B7F1',
    width:10,
    height:10,
    borderRadius:8
}}> 


</View>

<View style={{

    backgroundColor:'#D3D3D3',
    height:3,
    width:140,
    borderRadius:3
}}>


</View>
</View>
</View>
      <Image style={{

width:40,
height:40,
borderRadius:30,

}} resizeMode='cover' source={{uri:'https://www.billboard.com/wp-content/uploads/2023/08/nicki-minaj-World-Premiere-Of-Barbie-Arrivals-billboard-1548.jpg?w=1024'}}/>
      </View>

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

        <Text>{String.fromCodePoint(0x1F44D)}</Text>
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






</View>   
<View


style={{

  
    width:13,
    height:20,
    position:'absolute',
    left:-12,
  
    top:-1,
    zIndex:5,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
   
    borderTopColor:'#E4E4E4',
    borderBottomColor:'rgba(0,0,0,0)',
    borderLeftColor:'rgba(0,0,0,0)',
    borderRightColor:'rgba(0,0,0,0)',
    borderWidth:1,
    transform:[{ scaleX: -1 }]
  
}}
> 

<View
                
                style={{

                    backgroundColor:'white',
                    width:20,
                    height:20,
                    position:'absolute',
                   top:-10,
                   left:-13,
                    zIndex:1,
                    transform:[{rotate:'45deg'}],
                    borderColor:'#E4E4E4',
                    borderWidth:1,
                 
                }}>


                </View>
</View>
    </View>
  )
}

export default AudioWhiteConvo