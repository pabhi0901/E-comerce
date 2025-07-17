import axios from "../../api/axiosConfig"
import { loadProduct } from "../reducers/ProducrSlice"


export const asyncloadProducts = ()=> async (dispatch,getState)=>{
    try{
        const {data} = await axios.get("/products")
        console.log("data",data);
        dispatch(loadProduct(data))
        
    }catch(error){
        console.log(error);
    }
}


export const asynccreateproducts = (product)=>async(dispatch,getState)=>{
    try{
         await axios.post("/products",product)
         console.log("product added in server");
         dispatch(asyncloadProducts())
    }
    catch(error){
        console.log(error);
    }

}