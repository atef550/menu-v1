import * as Actions from './action'
export const addToCartActionCreator=()=>{
    return( {
        type:Actions.ADD_TO_CART, payload: item}
)}

export const adjustAmount =()=>{
    return{
        type:Actions.ADJUST_AMOUNT ,payload:item.count-1
     } 
}