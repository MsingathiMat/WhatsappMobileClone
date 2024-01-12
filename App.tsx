import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Screens/StackNavigator';



function Index() {


  return (
    
    <NavigationContainer>
     <StackNavigator/>
     </NavigationContainer>
  );
}

export default Index;
