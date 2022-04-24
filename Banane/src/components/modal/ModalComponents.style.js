import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../colors/colors';

export default StyleSheet.create({
    container:{
        backgroundColor:colors.lightpink,
        padding:10,
        borderRadius:8,
        height:Dimensions.get('window').height/3,
        justifyContent:'center'
        
    },
    inputcontainer:{
        flex:1
    },
    input:{
        backgroundColor:'white',
        borderRadius:8,
        paddingHorizontal:8,
        marginRight:10,
        marginTop:20,
        marginLeft:10
        
    },
    modal:{
        justifyContent:'flex-end'
    }
})