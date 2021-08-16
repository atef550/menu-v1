import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';



const AddToCart = (props)=> {

    return( 
<TouchableOpacity style={{borderRadius:5  ,  backgroundColor:'#007FFF',padding:8,width:148,margin:8,alignSelf:'center'}} onPress={props.onPress}> 
<Text style={{color:'white',alignSelf:'center'}} >Add to Cart</Text> 
</TouchableOpacity>
)}

export default AddToCart