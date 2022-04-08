import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import React from 'react'
import RobotoExtralight from '../TextWrappers/RobotoExtralight'
import { black, white } from '../../Assets/Theme/theme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const PictureUpload = ({ inputStyle, label }) => {
    return (
        <View>
            <RobotoExtralight textStyle={{ color: white }} >{label}</RobotoExtralight>
            <View style={[inputStyle, styles.inputContainer]}  >
                <RobotoExtralight textStyle={{ color: black }} >filename</RobotoExtralight>
                <TouchableOpacity  >
                <AntDesign name='upload' color={black} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PictureUpload

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        backgroundColor: white,
        width: '100%',
        borderWidth: 1,
        borderColor: white,
        borderRadius: 10,
        fontFamily: 'RobotoMono-Regular',
        height: heightPercentageToDP(7),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textInput: {
        fontFamily: 'RobotoMono-Regular'
    }
})