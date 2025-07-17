import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loadUser:(state,action)=>{
            state.users = action.payload
            //payload mtlb data jo aaya hai and also action ke andar payload rhta hai
        },
        deleteUser:(state,action)=>{
            state.users = null
            console.log("done");
            
        }
    }
})
export const {loadUser,deleteUser} = userSlice.actions
export default userSlice.reducer