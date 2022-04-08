import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import RobotoRegular from '../TextWrappers/RobotoRegular'
import { black, navy, purple1, purple2, white } from '../../Assets/Theme/theme'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const MainButton = ({btnText, btnTextStyle  , btnContainerStyle}) => {
  return (
    <TouchableOpacity style={[btnContainerStyle , styles.btnContainer]} activeOpacity={0.9} >
            <RobotoRegular textStyle={[btnTextStyle , styles.btnText]} >{btnText}</RobotoRegular>
    </TouchableOpacity>
  )
}


export const SocialButton = ({btnText, btnTextStyle  , btnContainerStyle , btnIcon}) => {
    return (
      <TouchableOpacity style={[btnContainerStyle , styles.socialBtnContainer]} activeOpacity={0.9} >
                <AntDesign name={btnIcon} size={25} color={purple2} />
              <RobotoRegular textStyle={[btnTextStyle , styles.socialBtnText]} >{btnText}</RobotoRegular>
      </TouchableOpacity>
    )
  }


const styles = StyleSheet.create({
    btnContainer:{
        width:'100%',
        backgroundColor:navy,
        borderRadius:10,
        height:heightPercentageToDP(7),
        alignItems:"center",
        justifyContent:'center',
        marginVertical: heightPercentageToDP(2)
    },
    btnText:{
        color: white,
        fontSize:heightPercentageToDP(3)
    },
    socialBtnContainer:{
        width:'100%',
        backgroundColor:white,
        borderRadius:10,
        height:heightPercentageToDP(7),
        alignItems:"center",
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginVertical: heightPercentageToDP(2),
    },
    socialBtnText:{
        color: black,
        fontSize:heightPercentageToDP(3)
    }
})