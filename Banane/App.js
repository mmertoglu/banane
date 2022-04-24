import React from 'react';
import { View, Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FlashMessage from "react-native-flash-message";  
import Login from './src/pages/login/Login';
import Messages from './src/pages/messages/Messages';
import Sign from './src/pages/sign/Sign';
import auth from '@react-native-firebase/auth';
import colors from './colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
  const [userSession,setUserSession] = React.useState();
  React.useEffect(()=>{
    auth().onUserChanged(user => {
      setUserSession(!!user)
    })
  },[])
  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator >
        {!userSession? <Stack.Screen name='AuthPage' component={AuthStack} /> 
        :  <Stack.Screen name='MessagesPage' component={Messages} options={{
          title:'Dertler',
          headerTitleAlign:'center',
          headerTintColor:colors.darkpink,
          headerRight: () => 
            <Icon
            name='logout' size={30} color={colors.darkpink}
            onPress={()=> auth().signOut()}
            />
          
        }} />
      }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}
export default App;