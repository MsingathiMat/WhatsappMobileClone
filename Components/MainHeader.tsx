import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather, Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ChatsMenu from './ChatsMenu';


const MainHeader=({navigation}) => {
    const [isMenuShown, setisMenuShown] = useState(false);
    return(
    <View style={{}}>
      <View
        style={{
          height: 90,
          width: '100%',
          paddingHorizontal: 20,
          paddingTop: 30,
          backgroundColor: '#128C7E',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <SafeAreaView
          style={{
            width: '100%',
            top: -10,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Whatsapp</Text>
          <View style={{ flexDirection: 'row', gap: 20 }}>
          
          <TouchableOpacity onPress={() => navigation.navigate('BarcodeScanner')}>
          <Ionicons name="barcode-outline" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
            <Feather name="camera" size={20} color="white" />
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Feather name="search" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setisMenuShown(!isMenuShown)}>
              <Entypo name="dots-three-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>
          {isMenuShown ? <ChatsMenu /> : ''}
        </SafeAreaView>
      </View>
    </View>
  )}

export default MainHeader