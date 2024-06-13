import {createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    loginName:"",
}

const datas = createSlice({
    name:"datas",
    initialState,
    reducers:{
        addToCart(state,action){
            state.cart = [...state.cart, action.payload];
            console.log(state.cart);
        },
        addSameItem(state,action){
           console.log(state.cart[0].quantity++)
        },
        removeFromTheCart(state,action){
          state.cart = state.cart.filter((item)=>item.__id !== action.payload)
           console.log('qwerty');
        },
        getCurrName(state,action){
           state.loginName = action.payload
        },
        removeCurrName(state,action){
           state.loginName = action.payload;
        }
    }
})

export const {addToCart,addSameItem,removeFromTheCart,getCurrName,removeCurrName} = datas.actions;
const Store = configureStore(datas);
export default Store;

