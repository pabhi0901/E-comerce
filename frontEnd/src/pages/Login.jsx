import React from 'react'
import image1 from "../utils/login.jpg"
import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom'
import { BorderBeam } from './../components/magicui/Border-beam';
import { toast } from 'react-toastify';
import { asyncloginuser } from '../store/actions/UserActions';
import { useDispatch } from 'react-redux';
const Login = () => {
    
   let {register,reset,handleSubmit,formState:{errors}} = useForm()
    let dispatch = useDispatch()
    
    function SubmitHandler(data){
        dispatch(asyncloginuser(data))      
        reset()
    }
    

  return (
   
    <div style={{ backgroundImage: `url(${image1})`}}
    className= 'h-[95vh]  bg-cover  bg-no-repeat bg-[88%] lg:bg-bottom'>
     
      <form onSubmit={handleSubmit(SubmitHandler)}
      className='w-4/5  lg:w-[30%]   bg-white p-2 rounded-2xl relative lg:left-50 lg:top-30 top-20 left-10 flex flex-col items-center justify-baseline gap-4  shadow-2xl'>

        <h1 className='text-xl mt-5 text-black font-bold'>Good to see you again!</h1>
        <input type="email" 
        {...register("email",{required:"Email is required"})}
        placeholder='Enter the Email Address'
        className='w-[70%] mt-5 p-2 border-1 border-gray-500 rounded-xs outline-0 text-xs placeholder:text-xs'
        />
        {errors.email && <small className='w-[70%] text-left text-red-600 text-xs'>{errors.email.message}</small>}
        
        <input type="password" 
        {...register("password" ,{required:"Password is required"})}
        placeholder='Password'
        className='w-[70%]  p-2 border-1 border-gray-500 rounded-xs outline-0 text-xs placeholder:text-xs'
        />
        {errors.password && <small className='w-[70%] text-left text-red-600 text-xs'>{errors.password.message}</small>}

        <button className='px-4 py-2 text-xs bg-amber-400 rounded-xs active:scale-104 transform -translate-x-1/1 lg:-translate-x-0'>Login</button>

        <p className='p-2 text-xs mt-5'>Don't have an account? <NavLink to={"/register"} className="text-blue-600">Sign up</NavLink> now.</p>
         <BorderBeam  size={300}
              duration={10}
              colorFrom='#43e97b'
              colorTo='#38f9d7'
              borderWidth={3}/>
       </form>

    </div>
   
  )
}

export default Login
