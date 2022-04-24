import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style'

const FloatingButton = ({iconName,onPress}) => {
    return(
        <TouchableOpacity
        style={styles.container}
        onPress={onPress} >
            <Icon name={iconName} color='white' size={36}  />
        </TouchableOpacity>
    )
}
export default FloatingButton