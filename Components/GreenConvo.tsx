import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const GreenConvo = () => {
  return (
    <View style ={{

        backgroundColor:'#D9FDD3',
        padding:13,
        paddingBottom:19,
        borderRadius:10,
        borderTopRightRadius:0,
        width:'85%',
        alignSelf:'flex-end',
        borderColor:'#E4E4E4',
        borderWidth:1,
        marginBottom:25,
      
       
    }}>

       

        <Text>

        When it comes to developing mobile applications, we typically rely on using Android Emulator / iOS simulator or real devices. However, in the world of React Native mobile app development, Expo has brought innovation to a whole new level with its fascinating feature called Expo Snack.
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
<View


style={{

  
    width:13,
    height:20,
    position:'absolute',
    right:-12,
    top:-1,
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
                    borderWidth:1,
                 
                }}>


                </View>
</View>
    </View>
  )
}

export default GreenConvo