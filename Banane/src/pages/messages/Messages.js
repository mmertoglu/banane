import React,{useState,useEffect} from "react";
import {View,Text, Button,FlatList} from 'react-native';
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import styles from './Messages.style'
import Modal from "react-native-modal";
import ModalComponent from "../../components/modal/ModalComponent";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import ParseContentData from "../../utils/ParseContentData";
import MessageCard from "../../components/MessageCard/MessageCard";

const Messages = () => {
    const [isModalVisible,setIsModalVisible] = useState(false)
    const [contentList,setContentList] = useState([]);
  
    const handleClose = () => {
       isModalVisible==false? setIsModalVisible(true) : setIsModalVisible(false)
    }
    const handleSendMessage = (content) => {
        setIsModalVisible(false)
        sendContent(content)
    }
    const sendContent = (content) =>{
        const userMail = auth().currentUser.email
        const contentObject = {
            text:content,
            username : userMail.split('@')[0],
            date : new Date().toISOString(),
        }
        database().ref('messages/').push(contentObject)
    }
    const renderMessages = ({item}) => <MessageCard message={item} />
    useEffect(()=>{},[
        database()
        .ref('messages/')
        .on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = ParseContentData(contentData)
            setContentList(parsedData)
        })
    ])
    return(
        <View>
            <FlatList
            data={contentList}
            renderItem={renderMessages}
            />
            <FloatingButton iconName='plus' onPress={handleClose}  />
            <ModalComponent isVisible={isModalVisible} onClose={handleClose} onSend={handleSendMessage} />
            <FloatingButton iconName='plus' onPress={handleClose}  />
            
        </View>
    )
}
export default Messages