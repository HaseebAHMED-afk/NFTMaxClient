import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RobotoRegular = ({children , textStyle}) => {
  return (
    <Text style={[styles.text , textStyle]} >{children}</Text>
  )
}

export default RobotoRegular

const styles = StyleSheet.create({
    text:{
        fontFamily:'RobotoMono-Regular'
    }
})