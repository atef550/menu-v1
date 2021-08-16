import {initialState} from './state'
import { Action } from 'redux'
import * as actions from './action'
import {ADD_TO_CART,REMOVE_FROM_CART,DECREASE_AMOUNT,ADJUST_AMOUNT} from "./action"
 
const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id)
       }
  return state
}

export default cartItemsReducer