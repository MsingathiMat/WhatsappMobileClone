import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ChatsMenu from './ChatsMenu'
import { Feather, Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MoreOptions = () => {

    const navigation =useNavigation();
    const [isMenuShown, setisMenuShown] = useState(false);
  return (
    <View>



          <View style={{ flexDirection: 'row',gap:15}}>
{/*           
          eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-expect-error */}
            <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
            <FontAwesome name="video-camera" size={20} color="white" />
            </TouchableOpacity>
           
           {/*           
          eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-expect-error */}
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Ionicons name="call" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setisMenuShown(!isMenuShown)}>
              <Entypo name="dots-three-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>
          {isMenuShown ? <ChatsMenu /> : ''}
    </View>
  )
}

export default MoreOptions