import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import { Header, Icon, withBadge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_AMOUNT,  } from '../state/action';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Cart from '../components/shopingCart-component'
import InputSpinner from "react-native-input-spinner";
import Counter from "../components/counter";

function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}
function cartScreen() {
  //const notFiltered = useSelector(state => state)
  /*  const notFiltered = useSelector(state => state)
    
    const convert = (arr) => {
      const res = {};
      arr.forEach((obj) => {
         const key = obj.id;
         if (!res[key]) {
            res[key] = { ...obj, count: 0 };
         };
         res[key].count += 1;
      });
   return Object.values(res);
  };
  
  const cartItems=convert(notFiltered);
  */
  const cartItems = useSelector(state => state.cartItemsReducer)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })
  const removeItemFromCart = item => dispatch({ type: REMOVE_FROM_CART, payload: item })
  const decreaseAmount = item => dispatch({ type: DECREASE_AMOUNT, payload: item })
  return (
    <View
      style={{
        flex: 1
      }}>

      <Header backgroundColor={'white'}
        leftComponent={<Ionicons name="ios-chevron-back-sharp" size={24} color="black" onPress={navigation.goBack} />}
        centerComponent={{ text: 'Check out', style: { fontSize: 18, color: 'black' } }}

      />
      <View style={{ flex: 1 }}>

        <View style={{ alignItems: 'center' }}>
          {cartItems.length !== 0 ? (
            <FlatList
              data={cartItems}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => Separator()}
              renderItem={({ item }) => (
                <View style={styles.bookItemContainer}>
                  <Image source={{ uri :item.img }} style={styles.logo} />
                  <View style={styles.bookItemMetaContainer}>
                    <View>
                      <Text style={styles.textTitle} >
                        {item.txt}
                      </Text>
                      <Text style={styles.price} >
                        {item.price}
                      </Text>
                      <Text style={styles.price} >
                        {item.count} items
                      </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => removeItemFromCart(item)}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Remove -</Text>
                    </TouchableOpacity>

                  </View>

                  <View>
                  
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
                />

                    </View>
                </View>
              )}
            />
          ) : (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
            </View>
          )}
        </View>

      </View>

    </View>
  );
  console.log(cartItems)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10
  },
  logo: {
    //resizeMode: "contain",
    height: 100,
    width: 100,
    // borderRadius: 5, 
    // alignSelf:'center'
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '400'
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#ff333390',
    padding: 5,
    margin: 20,
    height: 20,
    width: 50
  },
  buttonText: {
    fontSize: 11,
    color: '#fff',
    alignSelf: 'center'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28
  }
})

export default cartScreen