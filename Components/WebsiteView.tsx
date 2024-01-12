import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';



import { useRoute } from '@react-navigation/native';
const WebsiteView = () => {

 
  type RouteProps = {
    key: string;
    name: string;
    path?: string;
    params: {
        url: string;
    };
};
const route = useRoute<RouteProps>()
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <WebView 
      source={{ uri:route.params.url}} 
    />
  </SafeAreaView>
  )
}

export default WebsiteView