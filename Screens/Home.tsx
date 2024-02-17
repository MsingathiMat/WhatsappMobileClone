import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';
import Calls from './Calls';
import ChatsA from './Chats';
import Group from './Group';
import Updates from './Updates';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View,TouchableOpacity,Animated } from 'react-native';
import Posts from './Posts';

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (

   
    <Tab.Navigator 


    screenOptions={{
  
       
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'#B7DCD8',

        tabBarIndicatorStyle:{
            backgroundColor:'white'
        },
        tabBarStyle:{
            backgroundColor:'#128C7E',
           
        },
        tabBarLabelStyle:{
          
            textTransform:'capitalize'
        }
    }}
    >
    <Tab.Screen name="Group" component={Group} options={{

        tabBarIcon:()=><FontAwesome name="group" size={24} color="white" />,
        tabBarLabelStyle:{
            display:'none'
        }
    }}
    />
    <Tab.Screen  name="Chats" component={ChatsA} options={{


tabBarLabel:({color,focused})=>
<View style={{ flexDirection:'row', gap:4, justifyContent:'center', alignItems:'center'}}>

<Text style={{color:color}}>Chats</Text>
<View style={{
            
            backgroundColor:color,
            width:17,
            height:17,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
           
    }}>
         
        <Text style={{fontSize:10, paddingRight:2, color:'#128C7E'}}>4</Text>
        </View>

</View>,
       

       

    
        

       
    }}/>
    <Tab.Screen name="Posts" component={Posts}
    
  />
      <Tab.Screen name="Calls" component={Calls} />
 
    </Tab.Navigator>
   
  );
}

export default Home