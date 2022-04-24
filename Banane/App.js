import React from 'react';
import { View, Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FlashMessage from "react-native-flash-message";  
import Login from './src/pages/login/Login';
import Messages from './src/pages/messages/Messages';
import Sign from './src/pages/sign/Sign';
const Stack = createNativeStackNavigator();

function App() {

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator 
       screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='AuthPage' component={AuthStack} />
        <Stack.Screen name='MessagesPage' component={Messages} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}
export default App;