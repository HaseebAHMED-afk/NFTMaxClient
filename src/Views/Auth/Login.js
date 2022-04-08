import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { purple2, white } from '../../Assets/Theme/theme'
import RobotoBold from '../../Components/TextWrappers/RobotoBold'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import RobotoRegular from '../../Components/TextWrappers/RobotoRegular'
import TextInputField from '../../Components/Inputs/TextInputField'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import { MainButton, SocialButton } from '../../Components/Buttons/Buttons'

const Login = () => {
  return (
    <SafeAreaView style={styles.mainContainer} >
        <RobotoBold textStyle={{color:white , fontSize: hp(10) , marginVertical: hp(5)}} >nftMAX</RobotoBold>
        <RobotoRegular textStyle={{color: white , fontSize: hp(4)}} >Welcome Back</RobotoRegular>
        <View style={{width: wp(85),borderBottomWidth:1,borderBottomColor: white }} >
        <TextInputField label={'Email'} inputStyle={{marginVertical: hp(0.5)}} />
        <PasswordInput label={'Password'} inputStyle={{marginVertical: hp(0.5)}} />
        <TouchableOpacity activeOpacity={0.9} >
            <RobotoRegular textStyle={{color:white , fontSize: hp(2)}} >Forgot Password?</RobotoRegular>
        </TouchableOpacity>

        <MainButton btnText={'Login'} />
        </View>

        <View style={{width: wp(85)}} >
            <SocialButton btnText={'Continue with Google'} btnIcon='facebook-square' />
            <SocialButton btnText={'Continue with Facebook'} btnIcon='google' />
        </View>
        <TouchableOpacity activeOpacity={0.9} >
            <RobotoRegular textStyle={{color:white , fontSize: hp(2)}} >Don't have an account? Create One</RobotoRegular>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: purple2,
        alignItems:'center',
    }
})