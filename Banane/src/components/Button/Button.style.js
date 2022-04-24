import { StyleSheet } from "react-native";
import colors from "../../../colors/colors";
const base_style = StyleSheet.create({
        container:{
            marginHorizontal:10,
            justifyContent:'center',
            borderRadius:8,
            padding:8,
            height:45,
            flexDirection:'row',
            alignItems:'center'
        },
        title:{
            fontSize:16,
            fontWeight:'bold' ,
            
        },
        icon:{
                marginRight:10
               }
    })


export default {
    
        primary : StyleSheet.create({
                ...base_style,
                container:{
                ...base_style.container,
                backgroundColor:colors.darkpink,
                marginTop:30
                },
                title:{
                ...base_style.title,
                color:'white',
                },
                
        }),
        secondary : StyleSheet.create({
                ...base_style,
                container:{
                ...base_style.container,
                backgroundColor:colors.lightpink,
                marginTop:10
                },
                title:{
                ...base_style.title,
                color:colors.darkpink,
                }
        })




}