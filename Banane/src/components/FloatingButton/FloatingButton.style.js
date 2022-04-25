import { StyleSheet } from "react-native";
import colors from "../../../colors/colors";

export default StyleSheet.create({
    container:{
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:50,
        width:60,
        height:60,
        backgroundColor:colors.normalpink,
        alignItems:'center',
        justifyContent:'center',
        elevation:8
    }
})