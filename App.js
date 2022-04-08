import { StyleSheet, Text, View } from 'react-native'
import React , {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/Components/Navigation/NavigationStack';
import { lockToPortrait } from 'react-native-orientation';


const App = () => {

  useEffect(()=>{
    lockToPortrait()
  },[])

  return (
   <NavigationContainer>
     <NavigationStack />
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})