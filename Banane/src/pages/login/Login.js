import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Login.style'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import buttonstyles from '../../components/Button/Button.style'
import { showMessage, hideMessage } from "react-native-flash-message";
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import colors from "../../../colors/colors";

const initialFormValues = {
    email: '',
    password: ''
}

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    function handleSignUp() {
        navigation.navigate('SignPage')
    }
    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.email, formValues.password)
            setLoading(false)    
            navigation.navigate('MessagesPage')
        } 
        catch (error) {
            console.log(error)
            showMessage({
                message: error.message,
                type: "danger",
              });
            setLoading(false)
        }


    }
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/dislike-141-889579.png' }}
            />
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input onChangeText={handleChange('email')} value={values.email} text='E-Posta' placeHolder='E-postanızı giriniz...' />
                        <Input isSecure={true} onChangeText={handleChange('password')} value={values.password} text='Şifre' placeHolder='Şifrenizi giriniz...' />
                        <Button
                        loading={loading}
                            iconName='login'
                            iconColor='white'
                            text='Giriş Yap'
                            theme='primary'
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            <Button
                onPress={handleSignUp}
                iconName='human-greeting-variant'
                iconColor='#78002e'
                text='Kayıt Ol '
                theme='secondary'

            />
        </View>
    )
}
export default Login