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
        color:'white',
        fontStyle:'italic'
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
        borderBottomWidth:1,
        paddingBottom:2,
        borderBottomColor:colors.lightpink    
    },
    bananebutton:{
        alignSelf:'flex-end',
        backgroundColor:colors.lightpink,
        paddingVertical:2,
        paddingHorizontal:15,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    bananetext:{
        color:'black',
        marginLeft:4,
        
        marginRight:6
    },
    disliketext:{
        color:colors.lightpink,
        fontSize:12
    },
    icon:{
        marginTop:2
    },
    dislikecontainer:{
        backgroundColor:colors.darkpink,
        width:40,
        alignItems:'center',
        borderRadius:80,
        padding:2,
        
    }

})