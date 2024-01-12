import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Group = ({navigation}) => {
  return (
    <View style={{

      backgroundColor:'#F1F6EC',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:30,
      gap:20,
      paddingBottom:120
    }}>
     

     <Image style={{

      width:300,
      height:300
     }} resizeMode='contain' source={require('../assets/appAssets/image1.png')}/>

     <Text style={{fontSize:18, fontWeight:'bold'}}>About communities</Text>
     <Text style={{textAlign:'center'}}>

     Communities on WhatsApp bring members together in topic-based groups. Anyone can create a WhatsApp community. You can create new topic-based groups or add existing WhatsApp groups.
     </Text>

<TouchableOpacity onPress={()=>{navigation.navigate('WebsiteView',{url:'https://faq.whatsapp.com/495856382464992'})}}> 

<View style={{gap:5, flexDirection:'row', alignItems:'center'}}>
<Text style={{color:'#128C7E'}}>See example community </Text>
<FontAwesome name="angle-right" size={24} color="#128C7E" />
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate('WebsiteView',{url:'https://www.matthewmsingathi.co.za/'})}}>

<View style={{

backgroundColor:'#128C7E',

width:'auto',
height:40,
borderRadius:20,
justifyContent:'center',
alignItems:'center',
paddingHorizontal:30
}}>

<Text style={{

color:'white'
}}>Subscribe to Coded Design</Text>
</View>

</TouchableOpacity>


  
    </View> 
  )
}

export default Group