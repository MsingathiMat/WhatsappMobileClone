import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Screens/StackNavigator';
import { TabBar } from 'react-native-tab-view';
import { StatusBar } from 'expo-status-bar';



function Index() {


  return (
    <>     
   <StatusBar  backgroundColor='#128C7E' />
    <NavigationContainer>
     <StackNavigator/>
     </NavigationContainer>
     </>
  );
}

export default Index;
