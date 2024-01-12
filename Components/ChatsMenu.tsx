import { View, Text } from 'react-native'
import React from 'react'

const ChatsMenu = () => {
  return (
    <View style={{

        backgroundColor:'white',
        padding:20,
        width:160,
        position:'absolute',
        top:60,
        right:0,
        borderRadius:10,
        height: 'auto',
        gap:23
    }}>
    <Text>New group</Text>
     <Text>New broadcast</Text>
    <Text>Linked devices</Text>
 <Text>Starred messages</Text>
 <Text>Messages</Text>
    </View>
  )
}

export default ChatsMenu