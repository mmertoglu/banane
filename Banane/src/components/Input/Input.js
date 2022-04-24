import React from "react";
import {View,Text,TextInput} from 'react-native';
import styles from './Input.style'

const Input = ({text,onChangeText,placeHolder,value,isSecure}) => {
    return(
        <View style={styles.container} >
            <Text style={styles.text} >{text}</Text>
            <TextInput
            secureTextEntry={isSecure}
            autoCapitalize="none"
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeHolder}
            />
        </View>
    )
}
export default Input