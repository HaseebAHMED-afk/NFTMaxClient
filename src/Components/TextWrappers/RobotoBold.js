import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RobotoBold = ({children , textStyle}) => {
  return (
      <Text style={[styles.text , textStyle]} >{children}</Text>
  )
}

export default RobotoBold

const styles = StyleSheet.create({
    text:{
        fontFamily:'RobotoMono-Bold'
    }
})