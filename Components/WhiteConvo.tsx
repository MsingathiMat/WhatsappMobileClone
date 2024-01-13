import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const WhiteConvo = () => {
  return (
    <View style ={{

        backgroundColor:'white',
        padding:13,
        paddingBottom:19,
        borderRadius:10,
        borderTopLeftRadius:0,
        width:'85%',
        alignSelf:'flex-end',
        borderColor:'#E4E4E4',
        borderWidth:1,
        marginBottom:25,
      
       
    }}>

       

        <Text>

        When it comes to developing mobile applications
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

export default WhiteConvo