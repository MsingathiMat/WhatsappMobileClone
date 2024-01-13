import { View, Text } from 'react-native'
import React from 'react'
import ChatDetailTopBar from './ChatDetailTopBar'
import MoreOptions from './MoreOptions'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const ChatDetailHeader = () => {
    const navigation=useNavigation();
  return (
    <SafeAreaView>
    <View style={{  backgroundColor: '#128C7E', position:'relative',
    
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10
    
    }}>
<ChatDetailTopBar />
<MoreOptions/>

    </View>
    </SafeAreaView>
  )
}

export default ChatDetailHeader