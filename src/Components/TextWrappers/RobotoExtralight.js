import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RobotoExtralight = ({children , textStyle}) => {
  return (
    <Text style={[styles.text , textStyle]} >{children}</Text>
  )
}

export default RobotoExtralight

const styles = StyleSheet.create({
    text:{
        fontFamily:'RobotoMono-ExtraLight'
    }
})