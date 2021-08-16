import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet,  ImageBackground,Dimensions,FlatList,CheckBox,Button, Image,Modal,} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const data = [{ id: 1, txt: "       coffee",disc:'Coffe, Tea, Juice, etc...', img: require('../assets/Coffee.jpg') , isChecked: false },
  { id: 2, txt: 'coffee',disc:"            Sandwich, Burger, Pizza, etc..." ,img: require('../assets/Coffee.jpg'), isChecked: false },
  { id: 3, txt: 'coffee',img: require('../assets/Coffee.jpg'), isChecked: false },
];


const Sc2 = (props) => {
  const [products, setProducts] = useState(data);

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
      numColumns={2}
         data={renderData}
        renderItem={({ item }) => (
          <Card style={styles.outercard} onPress={() => {handleChange(item.id);}} >
            <View style={styles.card}>
              
              
               
                <Text style={styles.text}>{item.txt}</Text>
                <Image style={styles.logo} source={item.img} /> 
                
              </View>
            
          </Card>
          
        )}
      />
    );
  };
  //<Text style={styles.text}>Selected </Text>
 // <View style={{ flex: 1 }}>{renderFlatList(selected)}</View>  

  return (
    <View style={styles.container}>
              <View style={{ flex: 1 }}>{renderFlatList(products)}</View>
      
         </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


  card: { width:164,
    height:56,
    padding: 10,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outercard: { 
    
    margin: 7,
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:16
  },
  logo:{
    resizeMode: "contain",
            height: 40,
            width: 40
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default Sc2;