import { createStore } from 'redux'
import {cartItemsReducer} from './reducer'
import {reducer}from './index'


const store = createStore(reducer)

export default store;


