import { StyleSheet } from "react-native";
import colors from "../../../colors/colors";
export default StyleSheet.create({
    container:{
        backgroundColor:colors.normalpink,
        flex:1
    },
    image:{
        width:250,
        height:150,
        alignSelf:'center',
        marginTop:60,
        tintColor:colors.lightpink,
        marginBottom:30,
        resizeMode:'contain'
    },
    loginbutton:{
        backgroundColor:colors.darkpink,
        marginHorizontal:10,
        alignItems:'center',
        borderRadius:8,
        padding:8,
        marginTop:20
        
    }
});