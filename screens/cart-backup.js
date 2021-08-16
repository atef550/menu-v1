import React from 'react';
import { StyleSheet, Text, View ,Image,FlatList,Button,TouchableOpacity} from 'react-native';
import {Header,Icon, withBadge} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../state/action';
import Cart from '../components/shopingCart-component'
function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}


export default function cartScreen() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state)
const removeItemFromCart  = item => dispatch({ type: REMOVE_FROM_CART, payload: item })
const navigation = useNavigation();

  //let selected = products.filter((product) => product.isChecked);

  //<Text style={styles.text}>Selected </Text>
 // <View style={{ flex: 1 }}>{renderFlatList(selected)}</View>  

  return (
    <View style={styles.container}>
              <Header
              leftComponent={<Ionicons name="ios-chevron-back-sharp" size={24} color="white"  onPress={ navigation.goBack}/>}
    centerComponent={{ text: 'Check out', style: { fontSize: 18,color: '#fff' } }}
    rightComponent={<Cart cartCount= {cartItems.length}/>}
/>
              <FlatList
              style={{alignSelf:'center'}} 
         data={cartItems} renderItem={({ item }) => (
          <Card style={styles.outercard}  >
              <Image style={styles.logo} source={item.img} /> 
            <View >
              
              
               
                <Text style={styles.card} >{item.txt}</Text>
                <Text style={styles.card}>{item.price}</Text>
                <AddToCart onPress={() => removeItemFromCart(item)}/>
              </View>
            
          </Card>
          
        )}
      />
          
      
         </View>
  );
};


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
    alignSelf:'flex-start'
    
  },
  outercard: { 
    
    margin: 7,
    justifyContent: 'space-between',alignSelf:'center'
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    alignSelf:'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:16,
    alignSelf:'center'
  },
  logo:{
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






import React from 'react';
import { StyleSheet, Text, View ,Image,FlatList,Button,TouchableOpacity} from 'react-native';
import {Header,Icon, withBadge} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../state/action';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Cart from '../components/shopingCart-component'
function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}
function cartScreen() {
  const cartItems = useSelector(state => state)
  const dispatch = useDispatch()
 const navigation=useNavigation()
  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    })
  return (
    <View
      style={{
        flex: 1
      }}>

         <Header backgroundColor={'white'}
              leftComponent={<Ionicons name="ios-chevron-back-sharp" size={24} color="black"  onPress={ navigation.goBack}/>}
    centerComponent={{ text: 'Check out', style: { fontSize: 18,color: 'black' } }}
    
/>
<View style={{flex: 1}}>
    <ProgressSteps completedProgressBarColor='#007FFF'  completedStepIconColor ='#007FFF'activeStepIconBorderColor="#007FFF" labelFontSize= {20} activeStepNumColor= 'white'completedStepNumColor ='white'activeLabelColor ='black'activeStepIconColor="#007FFF">
        <ProgressStep label="Cart" >
            <View style={{ alignItems: 'center' }}>
            {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item }) => (
            <View style={styles.bookItemContainer}>
              <Image source={ item.img } style={styles.logo} />
              <View style={styles.bookItemMetaContainer}>
                <View>
                <Text style={styles.textTitle} >
                  {item.txt}
                </Text>
                <Text style={styles.price} >
                  {item.price}
                </Text>
                </View>
                
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                
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
        </ProgressStep>
        <ProgressStep label="Payment">
            <View style={{ alignItems: 'center' }}>
              
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>

    </View>
  )
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
  logo:{
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
    flexDirection:'row'
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '400'
  },
  price:{
    fontSize: 18,
    fontWeight:'bold'
  },

  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 10 ,
    backgroundColor: '#ff333390',
    padding: 5,
    margin:20,
    height:20,
    width:50
  },
  buttonText: {
    fontSize: 11,
    color: '#fff',
    alignSelf:'center'
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