import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet,  ImageBackground,Dimensions,FlatList,CheckBox,Button, Image,Modal,} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import {Header,Icon, withBadge} from 'react-native-elements';
import Cart from '../components/shopingCart-component';
import { useSelector } from 'react-redux';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const data = [{ id: 1, txt: "       Beverages",disc:'Coffe, Tea, Juice, etc...', img: require('../assets/Coffee.jpg') , isChecked: false },
  { id: 2, txt: 'Food',disc:"            Sandwich, Burger, Pizza, etc..." ,img: require('../assets/food.jpg'), isChecked: false },
  { id: 3, txt: 'Books',img: require('../assets/books.jpg'), isChecked: false },
];

const data2 = [
{ id: 1,count:0,price:'10 EGP', header:'Beverages',txt: "Coffee",disc:'Coffe, Tea, Juice, etc...', img: require('../assets/Coffee.jpg') , isChecked: false },
  { id: 2,count:0, txt: 'Coffee', header:'Beverages',price:'12 EGP',disc:"            Sandwich, Burger, Pizza, etc..." ,img: require('../assets/Coffee2.jpg'), isChecked: false },
  { id: 3, count:0,txt: 'Coffee', header:'Beverages',price:'14 EGP',img: require('../assets/Coffee3.jpg'), isChecked: false },
];


const data3 = [{ id: 1,header:'Food',price:'50 EGP', txt: " chicken",disc:'Coffe, Tea, Juice, etc...' , isChecked: false },
  { id: 2, txt: 'beef',header:'Food',price:'40 EGP',disc:"            Sandwich, Burger, Pizza, etc..." , isChecked: false },
  { id: 3, txt: 'fish',header:'Food',price:'60 EGP', isChecked: false },
  { id: 4, txt: 'pizza',header:'Food',price:'110 EGP', isChecked: false }
];
const screenOne = () => {
  
  const cartItems = useSelector(state => state)
  const [products, setProducts] = useState(data);
  const navigation = useNavigation();
  const BadgedIcon = withBadge(1)(MaterialCommunityIcons);
  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  let selected = products.filter((product) => product.isChecked);

  const renderFlatList = (renderData) => {
    return (
      <FlatList
      style={{alignSelf:'center'}}
      numColumns={1}
         data={renderData}
        renderItem={({ item }) => (
          <Card style={styles.outercard} onPress={() => {handleChange(item.id) 
            
            switch(item.id) {
              case 1:
                navigation.navigate('Inner store',{flatData:data2});
                // code block
                break;
              case 2:
                navigation.navigate('Inner store',{flatData:data3});
                // code block
                break;
              default:
                // code block
            } 
          }} >
              
              
               
                <ImageBackground
                     style={styles.backgroundImage}
                      imageStyle={{ borderRadius: 10, backgroundColor: 'rgba(255,0,0,.6)' }}
                      source={item.img}
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
      
    centerComponent={{ text: 'Shop', style: { fontSize: 18,color: '#fff' } }}
    rightComponent={<Cart cartCount={cartItems.length}/>}
/>
        <View >
            <Text style={{fontWeight: 'bold',
    fontSize: 30,marginLeft:10,
    color: "black"}}>What do you want to order Today?</Text>
            </View>
      <View style={{ flex: 1,marginLeft:10 }}>{renderFlatList(products)}</View>
      
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
      
      marginStart:-220,
    fontSize: 30,
    textAlign: 'left',
    color: "white"
  },
  card: { width:343,
    height:143,
  },
  outercard: { 
    margin:12,
    width: 343,
    justifyContent: 'space-between',
    height:143
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
    fontSize:16,
    color:'white',
    marginStart:-150,
  },
  logo:{
    resizeMode: "contain",
            height: 40,
            width: 40
  },
  
});
export default screenOne;