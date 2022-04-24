import React from "react";
import { View, Text } from 'react-native';
import styles from './MessageCard.style'

const MessageCard = ({ message }) => {
    return (
        <View style={styles.container} >
            <View style={styles.inner_container} >
                <Text  style={styles.usertext} >
                    {message.username.length<10
                    ? `${message.username}`
                    : `${message.username.substring(0,8)}...`
                
                }</Text>
                <Text style={styles.datetext} >{message.date}</Text>
            </View>
            <Text style={styles.messagetext} >{message.text}</Text>
        </View>

    )
}
export default MessageCard