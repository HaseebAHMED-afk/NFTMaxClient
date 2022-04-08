import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../Views/Auth/Login'
import Register from '../../Views/Auth/Register'
import CreateProfile from '../../Views/Auth/CreateProfile'

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
  return (
   <Stack.Navigator initialRouteName='CreateProfile' >
       <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
       <Stack.Screen name='Register' component={Register} options={{headerShown:false}} />
       <Stack.Screen name='CreateProfile' component={CreateProfile} options={{headerShown:false}} />
   </Stack.Navigator>
  )
}

export default NavigationStack

const styles = StyleSheet.create({})