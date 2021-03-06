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
       setIsModalVisible(!isModalVisible)
    }
    const handleSendMessage = (content) => {
        setIsModalVisible(!isModalVisible)
        sendContent(content)
    }
    const sendContent = (content) =>{
        const userMail = auth().currentUser.email
        const contentObject = {
            text:content,
            username : userMail.split('@')[0],
            date : new Date().toISOString(),
            dislike : 0 
        }
        database().ref('messages/').push(contentObject)
    }
    const handleBanane = (item) => {
        database().ref(`messages/${item.id}`).update({dislike : item.dislike +1})
    }
    const renderMessages = ({item}) => <MessageCard message={item} onBanane={()=> handleBanane(item)} />
    useEffect(()=>{
        database()
        .ref('messages/')
        .on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = ParseContentData(contentData)
            setContentList(parsedData)
        })
    },[])
    return(
        <View style={styles.container} >
            <FlatList
            data={contentList}
            renderItem={renderMessages}
            />
             <FloatingButton iconName='plus' onPress={handleClose}  />
            <ModalComponent isVisible={isModalVisible} onClose={handleClose} onSend={handleSendMessage} />
           
            
        </View>
    )
}
export default Messages