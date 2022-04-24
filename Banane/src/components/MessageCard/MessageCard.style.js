import { StyleSheet } from "react-native";
import colors from "../../../colors/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.normalpink,
        margin:10,
        padding:10,
        borderTopEndRadius:16,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        elevation:8
        
    },
    usertext:{
        color:'white'
    },
    messagetext:{
        color:'white',
        marginTop:5
    },
    datetext:{
        color:colors.lightpink
    },
    inner_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    }

})