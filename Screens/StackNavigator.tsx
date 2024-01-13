
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, Entypo } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import ChatsMenu from '../Components/ChatsMenu';
import Home from './Home';
import Search from './Search';
import MainSection from './MainSection';
import TopSearch from '../Components/TopSearch';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Camera } from 'expo-camera';
import CameraScreen from '../Components/Camera';
import BarcodeScanner from '../Components/BarcodeScanner';
import { Ionicons } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import WebsiteView from '../Components/WebsiteView';
import ChatDetail from './ChatDetail';
import AvaterAndDetail from '../Components/AvatarAndDetail';
import ChatDetailTopBar from '../Components/ChatDetailTopBar';
import MainHeader from '../Components/MainHeader';
import MoreOptions from '../Components/MoreOptions';
import ChatDetailHeader from '../Components/ChatDetailHeader';
const StackNavigator = () => {

    const [isMenuShown, setisMenuShown] = useState(false);
    const Stack = createStackNavigator();
  
  return (
   
    <Stack.Navigator
        screenOptions={{
        
        }}
      >
        <Stack.Screen name="Welcome" component={MainSection} 
        
        options={{

            header: ({navigation})=>(<MainHeader navigation ={navigation}/>)

            
        }}
        
        />
        <Stack.Screen name="Search" component={Search}
        
        
        options={{
            header: ({navigation})=><TopSearch navigation={navigation}/>
           
        }}/>

<Stack.Screen name="CameraScreen" component={CameraScreen}
        
       options={{

        headerShown:false,
       }} 
     />

{/* <Stack.Screen name="BarcodeScanner">
  {(props) => <BarcodeScanner {...props}  />}
</Stack.Screen> */}

<Stack.Screen name="BarcodeScanner" component={BarcodeScanner}
        
        options={{
 
         headerShown:false,
        }} 
      />

<Stack.Screen name="WebsiteView" component={WebsiteView}
        
        options={{
 
         headerShown:false,
        }} 
      />

<Stack.Screen name="ChatDetail" component={ChatDetail}
        
        
        options={{
       
          header:(navigation)=>(<ChatDetailHeader />)

        }}
      
      />
      </Stack.Navigator>

      
   
  )
}

export default StackNavigator