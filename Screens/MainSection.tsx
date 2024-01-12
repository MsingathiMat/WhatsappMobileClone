
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Entypo } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import ChatsMenu from '../Components/ChatsMenu';
import Home from './Home';
const MainSection = ({navigation}) => {
    
    const [isMenuShown, setisMenuShown] = useState(false);
  return (
    <>

            <Home/>
    </>
  )
}

export default MainSection