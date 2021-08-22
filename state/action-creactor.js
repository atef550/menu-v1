import * as Actions from './action'
import * as Services from '../services/Shop-service'


export const addToCartActionCreator=(item)=>{
    return( {
        type:Actions.ADD_TO_CART, payload: item}
)}

export const adjustAmount =(item)=>{
    return{
        type:Actions.ADJUST_AMOUNT ,payload:item
     } 
}
/*
export const getMainDataAC =()=>{
    
    const mainData2=Services.fetchMainData2Service()
    const mainData=Services.fetchMainDataService()
    const mainData3=Services.fetchMainData3Service()
    const allData={mainData,mainData2,mainData3}
    return{
        type:Actions.GET_MAIN_DATA,payload:allData
    }
}
*/


const API_URL ='http://192.168.1.6:3000/data'

export const setMainData = ()=>{
    try{
        return async dispatch =>{
            const result =await fetch(API_URL,{
                method:'GET'
                });
                const json=await result.json();
                if(json){
                    dispatch({
                        type:Actions.SET_CATEGORIES,payload:json
                    })
                }
                else{
                        console.log('unanable to fetch')
                }
            }
    }catch(error){
        console.log(error)
    }
}