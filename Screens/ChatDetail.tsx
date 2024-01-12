import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

type RouteProps={
key:string,
name:string,
params:{data:string}

}
const ChatDetail = () => {

    const route = useRoute<RouteProps>();

  return (
    <View>
      <Text>ChatDetail</Text>
    
    </View>
  )
}

export default ChatDetail