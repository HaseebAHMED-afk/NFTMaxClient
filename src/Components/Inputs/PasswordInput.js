import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import RobotoExtralight from '../TextWrappers/RobotoExtralight'
import { white } from '../../Assets/Theme/theme'

const PasswordInput = ({label , inputStyle , value , onChangeFn }) => {
  return (
    <View style={[inputStyle , styles.inputContainer]} >
      <RobotoExtralight textStyle={{color: white}} >{label}</RobotoExtralight>
      <View style={styles.textInput} >
          <TextInput value={value} onChangeText={onChangeFn} secureTextEntry={true} />
      </View>
    </View>
  )
}

export default PasswordInput

const styles = StyleSheet.create({
    inputContainer:{
        width:'100%',
        
    },
    textInput:{
        backgroundColor: white,
        width:'100%',
        borderWidth:1 , 
        borderColor: white,
        borderRadius:10,
        fontFamily:'RobotoMono-Regular'
    }
})