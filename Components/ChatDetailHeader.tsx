import { View, Text } from 'react-native'
import React from 'react'
import ChatDetailTopBar from './ChatDetailTopBar'
import MoreOptions from './MoreOptions'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'



type Message = {
  id: number;
  WoIs: string;
  Message: string;
  TimeStamp: string;
  ArivalStatus: string;
  Date: string;
  EmojiResponse: string;
  MessageType: string;
};

type Contact = {
  id: number;
  ImageUrl: string;
  ContactName: string;
  ContactNumber: string;
  HasStatus: boolean;
  Conversation: Message[];
};

// type RouteProps = {
//   key: string;
//   name: string;
//   params: { Messages: Contact };
// };
const ChatDetailHeader = () => {
    // const navigation=useNavigation();

    // const route = useRoute<RouteProps>();

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