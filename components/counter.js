import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import ScalableText from 'react-native-text';


 const Counter=(props)=>{
        return(<View style={Styles.container}>
        <Button
          title=" - "
          onPress={props.onDecrease}
          
          
          
        />

     
<View style={Styles.count} >
          <Text style={Styles.countText} >
            {props.value}
          </Text>
        </View>


        <Button
          title=" + "
          onPress={props.onIncrease}
          
        />
      </View>)}

      
const Styles= StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
  
    countText: {
      fontSize: 16,
      paddingLeft: 15,
      paddingRight: 15,
      color: '#27AAE1',
    },
  
    count: {
      minWidth: 40,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  export default Counter;