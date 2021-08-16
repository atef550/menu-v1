import React from 'react';
import { SafeAreaView,ImageBackground, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
//import {WelcomeTxt} from '../components/WelcomeText.component.js';
import 'react-native-gesture-handler';
//import {useSelector,useDispatch} from 'react-redux';
//import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const image = require( '../assets/Coffee-National-Coffee-Day-FT-Blog0919.jpg') ;

const shopScreen = () => {
  const navigation = useNavigation();

  return(
        
          <View style={styles.container1}>

              <View >
            <Text style={{fontWeight:'Bold',fontSize:25}}>What do you want to order Today?</Text>
            </View>

            <View style={styles.item}>
            <ImageBackground source={image}  style={styles.container2}>
            <Text style={{color:'rgb(255,255,255)',fontSize:22,backgroundColor: "#00000070",height:120}}>Beverages</Text>
            <Text style={{color:'rgb(255,255,255)',fontSize:22,backgroundColor: "#00000070",height:120}}>Coffe, Tea</Text>
         </ImageBackground>
              </View>
            

            <View style={styles.container}>
            <Text>nnnnnnnn</Text>
            </View>

            </View>
      
    )};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#007FFF',
    justifyContent: 'center',
    
        
  } 
  ,
    container1: {
     
     backgroundColor: 'rgb(228,233,247)',
     width:314
     ,height:68,
     marginHorizontal: 16
     
         
   } ,
   container2: {
    
    width:343
    ,height:120,
    
    marginHorizontal: 16,
    marginVertical: 24,
    borderTopLeftRadius:15 ,  borderTopRightRadius:15 
  ,  borderBottomLeftRadius:15 
  ,  borderBottomEndRadius:15,
  borderRadius:15


    
        
  } 
 , item: {
  
  borderTopLeftRadius:15 ,  borderTopRightRadius:15 
,  borderBottomLeftRadius:15 
,  borderBottomEndRadius:15

},
title: {
  fontSize: 32,

} 
});
export default shopScreen;