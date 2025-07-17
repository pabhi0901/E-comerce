import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Products from './../pages/Products';
 import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { asynclogoutuser } from '../store/actions/UserActions';


const NavBar = () => {
    let dispatch = useDispatch()
    let location = useLocation()
    let user = useSelector((state)=>state.userReducer.users) //it will be used to show weather the login is showed or the create product route
    
    return (
    <>
   
        <div
      className={`w-full h-[5vh] px-6 flex gap-5 justify-between items-center lg:justify-between lg:text-xl text-xs ${
        location.pathname === "/login" ? "bg-[#e2e2e2]" : ""} ${location.pathname==='/register' ? "bg-[#e2e2e2]" : ""}`}
    >
    
    <div className="logo font-black text-amber-400 ">
     <NavLink to="/">Shop Free</NavLink>
    </div>
    <div className="links flex gap-5">
        <NavLink to="/"
    className={({isActive})=>isActive ? "text-red-500 underline underline-offset-5":""}>Home</NavLink>
    
    <NavLink to="/Product"
     className={({isActive})=>isActive ? "text-red-500 underline underline-offset-5":""}>Products
     </NavLink>
    
    {user ? <>
      <NavLink to="/admin/create-product" 
     className={({isActive})=>isActive ? "text-red-500 underline underline-offset-5":""}>Create Product</NavLink>
     <button onClick={()=>{dispatch(asynclogoutuser())}}>Logout</button>
    </> : 
    <>
    <NavLink to="/login" 
     className={({isActive})=>isActive ? "text-red-500 underline underline-offset-5":""}>Login</NavLink>
    </>}

    
    </div>


    </div>
    </>
  )
}

export default NavBar
