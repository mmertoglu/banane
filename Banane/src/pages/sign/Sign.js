import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './Sign.style'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Formik } from "formik";
import { showMessage, hideMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth'

const initialFormValues = {
    email: '',
    password: '',
    passwordagain: ''
}
const Sign = ({ navigation }) => {
    const handleLogin = () => {
        navigation.goBack();
    }
    const handleSign = async (values) => {
        if ( values.password !== values.passwordagain) {
            showMessage({
                message: 'Şifreler Aynı olmalıdır',
                type: 'danger'   
        })
    return;
    }
        
        try {
            await auth().createUserWithEmailAndPassword(values.email, values.password)
            showMessage({
                message:'Başarılı',
                type:'success'
            })
            navigation.navigate('LoginPage')
        }
        catch (error) {
            showMessage({
                message: error.message,
                type: 'danger'
        })
    }}
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/dislike-141-889579.png' }}
            />
            <Formik initialValues={initialFormValues} onSubmit={handleSign} >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            value={values.email}
                            onChangeText={handleChange('email')}
                            text='E-Posta'
                            placeHolder='E-postanızı giriniz...'
                        />
                        <Input
                        isSecure={true}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            text='Şifre'
                            placeHolder='Şifrenizi giriniz...'
                        />
                        <Input
                        isSecure={true}
                            value={values.passwordagain}
                            onChangeText={handleChange('passwordagain')}
                            text='Şifre Tekrar'
                            placeHolder='Şifrenizi tekrar giriniz...'
                        />
                        <Button
                            onPress={handleSubmit}
                            iconName='human-greeting-variant'
                            iconColor='white'
                            text='Kayıt Ol'
                            theme='primary'
                        />
                    </>
                )}

            </Formik>
            <Button
                onPress={handleLogin}
                iconName='keyboard-backspace'
                iconColor='#78002e'
                text='Geri    '
                theme='secondary'

            />
        </View>
    )
}
export default Sign