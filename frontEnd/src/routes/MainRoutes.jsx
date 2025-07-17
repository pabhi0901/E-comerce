import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from "../pages/Register"
import CreateProduct from '../pages/admin/CreateProduct'
import UpdateProduct from '../pages/admin/UpdateProduct'

const MainRoutes = () => {

    return (
    <div>
      <Routes>
        <Route  path='/' element= {<Home />}/>
        <Route  path='/product' element={<Products />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/register' element={<Register />}/>
        <Route  path='admin/create-product' element={<CreateProduct />} />
        <Route  path='admin/update-product/:id' element = {<UpdateProduct />}/> 
      </Routes>
    </div>
  
)
}

export default MainRoutes
