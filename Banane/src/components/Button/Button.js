import React from "react";
import { TouchableOpacity,Text, ActivityIndicator } from "react-native";
import styles from './Button.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Button = ({text,theme,iconColor,iconName,onPress,loading}) => {
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={styles[theme].container} >
           {loading? <ActivityIndicator/> : 
           <>
           <Icon name={iconName} color={iconColor} size={30} style={styles[theme].icon} /> 
            <Text style={styles[theme].title} >{text}</Text></>}
        </TouchableOpacity>
    )
}
export default Button