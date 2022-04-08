import { StyleSheet, Text, View , TouchableOpacity , KeyboardAvoidingView , ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { purple2, white } from '../../Assets/Theme/theme'
import RobotoBold from '../../Components/TextWrappers/RobotoBold'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import RobotoRegular from '../../Components/TextWrappers/RobotoRegular'
import TextInputField from '../../Components/Inputs/TextInputField'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import { MainButton, SocialButton } from '../../Components/Buttons/Buttons'

const Register = () => {
  return (
    <SafeAreaView style={styles.mainContainer} >
        <ScrollView>
            <KeyboardAvoidingView>
        <View style={{alignItems:'center'}} >
        <RobotoBold textStyle={{color:white , fontSize: hp(10) , marginVertical: hp(5)}} >nftMAX</RobotoBold>
        <RobotoRegular textStyle={{color: white , fontSize: hp(4)}} >Let's Start</RobotoRegular>
        <View style={{width: wp(85),borderBottomWidth:1,borderBottomColor: white }} >
        <TextInputField label={'Username'} inputStyle={{marginVertical: hp(0.5)}} />
        <TextInputField label={'Email'} inputStyle={{marginVertical: hp(0.5)}} />
        <PasswordInput label={'Password'} inputStyle={{marginVertical: hp(0.5)}} />
        <PasswordInput label={'Confirm Password'} inputStyle={{marginVertical: hp(0.5)}} />
        <MainButton btnText={'Register'} />
        </View>

        <View style={{width: wp(85)}} >
            <SocialButton btnText={'Continue with Google'} btnIcon='facebook-square' />
            <SocialButton btnText={'Continue with Facebook'} btnIcon='google' />
        </View>
        <TouchableOpacity activeOpacity={0.9} >
            <RobotoRegular textStyle={{color:white , fontSize: hp(2) , marginBottom: hp(2)}} >Already have an account? Log in</RobotoRegular>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: purple2,
        alignItems:'center',
    }   
})