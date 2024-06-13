import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cart:[]
}

const datas = createSlice({
    name:"datas",
    initialState,
    reducers:{
        addToCart(state,action){
            state.cart = [...state.cart, action.payload];
            console.log(state.cart);
        }
    }
})

export const {addToCart} = datas.actions;
export default datas.reducer;