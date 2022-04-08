import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RobotoMedium = ({children , textStyle}) => {
  return (
    <Text style={[styles.text , textStyle]} >{children}</Text>
  )
}

export default RobotoMedium

const styles = StyleSheet.create({
    text:{
        fontFamily:'RobotoMono-Medium'
    }
})