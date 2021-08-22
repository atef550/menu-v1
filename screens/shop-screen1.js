import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, FlatList, CheckBox, Button, Image, Modal, } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Header, Icon, withBadge } from 'react-native-elements';
import Cart from '../components/shopingCart-component';
import { useSelector ,useDispatch} from 'react-redux';
import {SET_CATEGORIES, SET_PRODUCTS} from '../state/action';
import {getMainDataAC,getMainData} from '../state/action-creactor'
import { setCategoriesReducer, setProductsReducer } from '../state/reducer';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const screenOne = () => {

/*
  productData=[
    { "id": 1, "count": 0, "price": "10 EGP", "Category": "Beverages", "txt": "Coffee", "disc": "'Coffe, Tea, Juice, etc...'", "img": "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", "isChecked":false },
    { "id": 2, "count": 0, "txt": "Coffee", "Category": "Beverages", "price": "12 EGP", "disc": "            Sandwich, Burger, Pizza, etc...", "img":"https://post.healthline.com/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-732x549.jpg","isChecked":false  },
    { "id": 3, "count":0, "txt": "Coffee", "Category": "Beverages", "price": "14 EGP", "img": "https://foolproofliving.com/wp-content/uploads/2019/03/Turkish-Coffee-Recipe-Image-500x500.jpg",  "isChecked":false  }
  ,{ "id": 4,"count": 0, "Category": "Food", "price":" 50 EGP", "txt": " chicken", "disc": "Coffe, Tea, Juice, etc...", "isChecked":false  },
  { "id": 5,"count": 0, "txt": "beef", "Category": "Food", "price": " 40 EGP", "disc": "            Sandwich, Burger, Pizza, etc...",  "isChecked":false },
  { "id": 6,"count": 0, "txt": "fish", "Category": "Food", "price": " 80 EGP", "isChecked":false  },
  { "id": 7,"count": 0, "txt":"pizza", "Category": "Food", "price": " 90 EGP",  "isChecked":false }]
  
  
  const [Products, setProducts] = useState('');
  setProducts(productData)*/
  const cartItems = useSelector(state => state.cartItemsReducer)

  const navigation = useNavigation();
  const BadgedIcon = withBadge(1)(MaterialCommunityIcons);
  const dispatch = useDispatch()
  
  
  const setCategories = item => dispatch({ type: SET_CATEGORIES, payload: item })
  const categories = useSelector(state => state.setCategoriesReducer)
  useEffect( ()=>{
     fetch('http://10.1.50.130:3000/Categories')
    .then(res=>res.json())
     .then(data=>setCategories(data))},[]); 
     
  useEffect( ()=>{
     fetch('http://10.1.50.130:3000/Products')
    .then(res=>res.json())
    .then(data=>setProducts(data))},[]);     
  const setProducts = item => dispatch({ type: SET_PRODUCTS, payload: item })
  const Products = useSelector(state => state.setProductsReducer)


const coffeeData=Products.filter(item => item.Category == "Beverages")

const foodData=Products.filter(item => item.Category == "Food")


  const renderFlatList = (renderData) => {
    return (
      <FlatList
        style={{ alignSelf: 'center' }}
        numColumns={1}
        keyExtractor={item => item.id.toString()}
        data={renderData}
        renderItem={({ item }) => (
          <Card style={styles.outercard} onPress={() => {
          

            switch (item.id) {
              case 1:
                navigation.navigate('Inner store', { flatData: coffeeData });
                // code block
                break;
              case 2:
                navigation.navigate('Inner store', { flatData: foodData });
                // code block
                break;
              default:
              // code block
            }
          }} >

            <ImageBackground
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 10, backgroundColor: 'rgba(255,0,0,.6)' }}
              //src={require( item.img )}
              
             source={{ uri :item.img }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: 10

                }}
              >
                <Text style={styles.itemText}>{item.txt}</Text>
                <View><Text style={styles.text}>{item.disc}</Text></View></View>
                

            </ImageBackground>
            

          </Card>

        )}
      />
    );
  };
  //<Text style={styles.text}>Selected </Text>
  // <View style={{ flex: 1 }}>{renderFlatList(selected)}</View>  

  return (

    <View style={styles.container}>
      <Header

        centerComponent={{ text: 'Shop', style: { fontSize: 18, color: '#fff' } }}
        rightComponent={<Cart cartCount={cartItems.length} />}
      />
      <View >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 30, marginLeft: 10,
          color: "black"
        }}>What do you want to order Today?</Text>
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>{renderFlatList(categories)}</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',


  },

  backgroundImage: {

    flex: 1,
    height: 143,


  },
  itemText: {

    marginStart: -220,
    fontSize: 30,
    textAlign: 'left',
    color: "white"
  },
  card: {
    width: 343,
    height: 143,
  },
  outercard: {
    margin: 12,
    width: 343,
    justifyContent: 'space-between',
    height: 143
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 1,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  text: {

    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginStart: -150,
  },
  logo: {
    resizeMode: "contain",
    height: 40,
    width: 40
  },

});
export default screenOne;