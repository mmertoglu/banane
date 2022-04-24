import React from "react";
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import styles from './ModalComponents.style'
import Modal from 'react-native-modal';
import Button from '../Button/Button'
import ButtonStyle from "../Button/Button.style";
import colors from "../../../colors/colors";
const ModalComponent = ({isVisible,onClose,onSend}) => {
    const [text,setText] = React.useState(null);
    function handleSend () {
        if (!text) {
            return;
        }
        onSend(text)
        setText(null)
    }
    return(
        <Modal
        swipeDirection='down'
        animationInTiming={600}
        animationOutTiming={600}
        style={styles.modal}
        onBackdropPress={onClose} 
        onSwipeComplete={onClose} 
        onBackButtonPress={onClose} 
        isVisible={isVisible} >
        <View style={styles.container} >
           <View style={styles.inputcontainer} >
           <TextInput 
           value={text}
           onChangeText={setText}
           placeholder="Yaz bakalım derdini..." style={styles.input}
           multiline />
           </View>
           <Button 
           onPress={handleSend}
           text='Gönder' theme='primary' iconName='send' iconColor={colors.lightpink} />
        </View>
        </Modal>
    )
}
export default ModalComponent