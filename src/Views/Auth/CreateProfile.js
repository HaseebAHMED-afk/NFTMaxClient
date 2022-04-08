import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { purple2, white } from '../../Assets/Theme/theme'
import RobotoBold from '../../Components/TextWrappers/RobotoBold'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import RobotoRegular from '../../Components/TextWrappers/RobotoRegular'
import TextInputField from '../../Components/Inputs/TextInputField'
import PasswordInput from '../../Components/Inputs/PasswordInput'
import { MainButton, SocialButton } from '../../Components/Buttons/Buttons'
import PictureUpload from '../../Components/Inputs/PictureUpload'

const CreateProfile = () => {
    return (
        <SafeAreaView style={styles.mainContainer} >
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={{ alignItems: 'center' }} >
                        <RobotoRegular textStyle={{ color: white, fontSize: hp(5) , textAlign:'center' , marginVertical: hp(1) }} >Let's Create A Profile</RobotoRegular>
                        <View style={{ width: wp(85) }} >
                            <TextInputField label={'First Name'} inputStyle={{ marginVertical: hp(0.5) }} />
                            <TextInputField label={'Last Name'} inputStyle={{ marginVertical: hp(0.5) }} />
                            <PasswordInput label={'Country'} inputStyle={{ marginVertical: hp(0.5) }} />
                            <PasswordInput label={'Phone Number'} inputStyle={{ marginVertical: hp(0.5) }} />
                            <PictureUpload inputStyle={{ marginVertical: hp(0.5) }} label={'Upload a Profile Picture'} />
                            <MainButton btnText={'Build Profile'} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateProfile

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: purple2,
        alignItems: 'center',
    }
})