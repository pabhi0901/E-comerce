import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./reducers/UserSlice"
import productSlice from "./reducers/ProducrSlice"
import cartSlice from "./reducers/CartSlice"
export default configureStore({

    reducer: {
        userReducer:userSlice,
        productReducer:productSlice,
        cartReducer:cartSlice,
    }

})