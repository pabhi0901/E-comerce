import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        loadCart:(state,action)=>{
            state.carts = action.payload
            //payload mtlb data jo aaya hai and also action ke andar payload rhta hai
        }
    }
})
export const {loadCart} = cartSlice.actions
export default cartSlice.reducer