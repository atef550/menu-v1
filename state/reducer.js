import { initialState } from './state'
import { Action } from 'redux'
import * as actions from './action'
import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_AMOUNT, SET_PRODUCTS,SET_CATEGORIES } from "./action"

const cartItemsReducer = (state = initialState.selectedItems, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.filter(item => item.id == action.payload.id).length == 0) {
        //state.filter(item => item.id == action.payload.id)[0].count++;
        action.payload.count++;
        return [...state, action.payload]
      }
      else {
        console.log('then reached', state.filter(item => item.id == action.payload.id)[0].count)
        state.filter(item => item.id == action.payload.id)[0].count++;
        return [...state]
      }

        case REMOVE_FROM_CART:
      return state.filter(item => item.id != action.payload.id)

      
    case DECREASE_AMOUNT:
      if (state.filter(item => item.id == action.payload.id)[0].count > 1) {
        state.filter(item => item.id == action.payload.id)[0].count--;
        return [...state]
      }
      else if (state.filter(item => item.id == action.payload.id)[0].count == 1)
        return state.filter(item => item.id != action.payload.id)
  }
  return state
}


const setCategoriesReducer = (state = initialState.categoriesData, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      
        return  action.payload
      
      }
  return state
}

const setProductsReducer = (state = initialState.productsData, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      
        return  action.payload
      
      }
  return state
}

export{cartItemsReducer,setCategoriesReducer,setProductsReducer}