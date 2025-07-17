import { toast } from 'react-toastify';
import axios  from '../../api/axiosConfig';
import { deleteUser, loadUser } from '../reducers/UserSlice';

export const asynccurrentuser = () => async (dispatch,getState) => {
    try{
        //isko currentuser ko set krenge userSlice me and also uske liye is function ko app ke useEffect me call kiye hai taaki har refresh pr automatic check kre ki agar user loggedIn hai to userSlice me save krde nhi to kuchh nhi 
        const user = JSON.parse(localStorage.getItem("user"))

        if(user) {
            dispatch(loadUser(user))
        } //setting that user to the userSlice and so to cart
        else{ 
            console.log("User not Logged In");
        }
    }catch(error){
        console.log(error);

    }
}

export const asynclogoutuser = (user) => async (dispatch,getState) => {
    try{
        //logout pr normally localstorage se user hta denge
    localStorage.removeItem("user")
     dispatch(deleteUser())
     console.log("logout ho gawa");
     
    }catch(error){
        console.log(error);
    }
}

export const asyncloginuser = (user) => async (dispatch,getState) => {
    try{
        //if the details will be true we will get full user details otherwise empty array and then set it to localstorage
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        if(data[0]){
            localStorage.setItem("user",JSON.stringify(data[0]))
            toast.success("Login Successfully")  
           dispatch(asynccurrentuser())
       }else{
        toast.error("Login Failed, enter correct details")
       }
}catch(error){
        console.log(error);
    }
}


export const asyncregisteruser = (user) => async (dispatch,getState) => {
    try{
        console.log("running the register users");
        //register krne pr isko normally server ke through database me push kr denge "users" route pr
        const res = await axios.post("/users",user)
        // console.log(res);

    }catch(error){
        console.log(error);
    }
}