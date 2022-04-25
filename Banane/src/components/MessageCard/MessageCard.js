import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './MessageCard.style'
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'
import {tr} from 'date-fns/locale'
import Icon from 'react-native-vector-icons/AntDesign'

const MessageCard = ({ message,onBanane }) => {
    const formatteddate = formatDistance(parseISO(message.date), new Date(), { 
        addSuffix: true,
        locale:tr
    })
    return (
        <View style={styles.container} >
            <View style={styles.inner_container} >
                <Text  style={styles.usertext} >
                    {message.username.length<10
                    ? `${message.username}`
                    : `${message.username.substring(0,8)}...`
                
                }</Text>
                <Text style={styles.datetext} >{formatteddate}</Text>
            </View>
            <Text style={styles.messagetext} >{message.text}</Text>
            <TouchableOpacity 
            onPress={onBanane}
            style={styles.bananebutton} >
            <Icon name='dislike1' color='black' style={styles.icon} />
            <Text style={styles.bananetext} >Banane</Text>
            <View style={styles.dislikecontainer} >
            <Text style={styles.disliketext} >{message.dislike}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default MessageCard