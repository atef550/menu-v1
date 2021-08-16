import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, BackHandler, ImageBackground, Dimensions, FlatList, CheckBox, Button, Image, Modal, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
import { Header } from 'react-native-elements';
import Cart from '../components/shopingCart-component';
import AddToCart from '../components/addToCart-component';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_AMOUNT, ADJUST_AMOUNT } from '../state/action';
import { initialState } from '../state/state';
import { addToCartActionCreator } from '../state/action-creactor';
import Counter from "react-native-counters";
//import {CounterInput} from "react-native-counter-input";
//import NumericInput from 'react-native-numeric-input'
import InputSpinner from "react-native-input-spinner";
import { adjustAmount } from '../state/action-creactor'

const Sc2 = ({ route }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state)
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })
  const removeItemFromCart = item => dispatch({ type: REMOVE_FROM_CART, payload: item })
  const decreaseAmount = item => dispatch({ type: DECREASE_AMOUNT, payload: item })
  //const adjust = item =>dispatch({ type: ADJUST_AMOUNT, payload: item })

  const { flatData } = route.params;
  const navigation = useNavigation();

  const [products, setProducts] = useState(flatData);

  console.log(cartItems)
  //let selected = products.filter((product) => product.isChecked);

  //<Text style={styles.text}>Selected </Text>
  // <View style={{ flex: 1 }}>{renderFlatList(selected)}</View>  

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Ionicons name="ios-chevron-back-sharp" size={24} color="white" onPress={navigation.goBack} />}
        centerComponent={{ text: products[0].header, style: { fontSize: 18, color: '#fff' } }}
        rightComponent={<Cart cartCount={cartItems.length} />}
      />
      <FlatList
        style={{ alignSelf: 'center' }}
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <Card style={styles.outercard}  >
            <Image style={styles.logo} source={item.img} />
            <View >



              <Text style={styles.card} >{item.txt}</Text>
              <Text style={styles.card}>{item.price}</Text>

              <View style={{ alignSelf: 'center', height: 64 }}>
                <InputSpinner
                  max={10}
                  min={0}
                  step={1}
                  colorMax={"#f04048"}
                  colorMin={"#40c5f4"}
                  value={item.count}
                  //onChange={item.count}
                  onIncrease={() => addItemToCart(item)}
                  onDecrease={() => decreaseAmount(item)}
                />;



              </View>
            </View>

          </Card>

        )}
      />


    </View>
  );
};
// <Counter start={1}  onPress={() => addItemToCart(item)} /> 
//     <AddToCart onPress={() => addItemToCart(item)}/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',


  },


  card: {

    padding: 10,
    //margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start'

  },
  outercard: {

    margin: 7,
    justifyContent: 'space-between', alignSelf: 'center'

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center'
  },
  logo: {
    //resizeMode: "contain",
    height: 164,
    width: 164,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // alignSelf:'center'


  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default Sc2;