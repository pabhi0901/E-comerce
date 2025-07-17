import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        loadProduct:(state,action)=>{
            state.products = action.payload
            //payload mtlb data jo aaya hai and also action ke andar payload rhta hai
        }
    }
})
export const {loadProduct} = productSlice.actions
export default productSlice.reducer