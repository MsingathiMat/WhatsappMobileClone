import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { Easing, FadeIn, FadeOut, SlideInLeft } from 'react-native-reanimated';


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
     
  
     <Animated.Image entering={FadeIn.springify().duration(1000).easing(Easing.ease)} style={{

      width:300,
      height:300
     }} resizeMode='contain' source={require('../assets/appAssets/image1.png')}/>
 

     <Animated.Text entering={FadeIn.springify().duration(1000).delay(200).easing(Easing.ease)} style={{fontSize:18, fontWeight:'bold'}}>About communities</Animated.Text>
     <Animated.Text entering={FadeIn.springify().duration(1000).delay(400).easing(Easing.ease)} style={{textAlign:'center'}}>

     Communities on WhatsApp bring members together in topic-based groups. Anyone can create a WhatsApp community. You can create new topic-based groups or add existing WhatsApp groups.
     </Animated.Text>
<Animated.View entering={FadeIn.springify().duration(1000).delay(600).easing(Easing.ease)}>

<TouchableOpacity onPress={()=>{navigation.navigate('WebsiteView',{url:'https://faq.whatsapp.com/495856382464992'})}}> 

<View style={{gap:5, flexDirection:'row', alignItems:'center'}}>
<Text style={{color:'#128C7E'}}>See example community </Text>
<FontAwesome name="angle-right" size={24} color="#128C7E" />
</View>
</TouchableOpacity>
</Animated.View>
<Animated.View entering={FadeIn.springify().duration(100).delay(800).easing(Easing.ease)}>

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

</Animated.View>
  
    </View> 
  )
}

export default Group