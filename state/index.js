import { combineReducers} from 'redux';
import {cartItemsReducer,setCategoriesReducer,setProductsReducer} from './reducer'

const reducer = combineReducers ({
    cartItemsReducer : cartItemsReducer,
    setCategoriesReducer:setCategoriesReducer,
    setProductsReducer : setProductsReducer
}
);

export  {reducer};