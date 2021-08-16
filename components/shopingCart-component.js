import React from 'react';
import { withBadge} from 'react-native-elements';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';




const Cart=(props)=>{
    const navigation = useNavigation();
    const BadgedIcon = withBadge(props.cartCount)(MaterialCommunityIcons);
    return(
<View style={{marginRight:20}} ><BadgedIcon  name="cart-outline" size={24} color='white'  onPress={()=>{navigation.navigate('Cart')}} /></View>)}
export default Cart;