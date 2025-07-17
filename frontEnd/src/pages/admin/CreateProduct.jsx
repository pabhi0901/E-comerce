import React from 'react'
import image1 from "../../utils/createProducts.jpg"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from 'react-router-dom'
import {nanoid} from "nanoid"
import { BorderBeam } from './../../components/magicui/Border-beam';

import { useDispatch } from 'react-redux'
import { asynccreateproducts } from '../../store/actions/ProductActions'


const CreateProduct = () => {
    
   let {register,reset,handleSubmit,formState:{errors}} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    function SubmitHandler(product){
        product.id = nanoid()
        dispatch(asynccreateproducts(product))
        reset()
    }
  
    

  return (
<div
  // style={{
  //   backgroundImage: 'linear-gradient(to bottom, #d5dbfd 80%, #fdf5d5 95%, #ffffff 100%)'
  // }}
  className="lg:min-h-screen w-full flex justify-center items-center lg:items-center overflow-x-hidden"
>

  <div className="parentBox w-4/5 mb-4 lg:w-[80%] lg:mt-10 rounded-xl bg-white lg:flex lg:flex-row">
    
       <img src={image1}
    className="formImg hidden lg:block lg:w-[40%]  object-center rounded-l-xl"></img>
 

    <form onSubmit={handleSubmit(SubmitHandler)}
    className='flex flex-col gap-3 p-3 justify-center items-center  lg:p-5 lg:w-[60%] lg:h-auto'>
        
      <div className="titleBox w-full flex items-center justify-between">
        <svg 
        onClick={()=>{navigate(-1)}}
        className='w-[1.2rem] h-[2rem] active:scale-80 transition duration-200 ease-linear'
        fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 476.213 476.213" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg>
      <h1 className='text-xl w-[70%]'>Create Product</h1>
      </div>


      <p className='w-[90%] font-bold text-gray-700 text-[1rem] mt-6 '>Product Name</p>
      <input type="text"
      {...register("title",{required:"Product name is required..."})}
      placeholder='Enter product name'
      className='w-[92%] bg-[#f0f2f5]  rounded-lg outline-0 p-3 placeholder:text-xs placeholder:text-gray-500 placeholder:font-light font-bold text-gray-800 text-xs' />
      {errors.title && <small className='w-[92%] text-red-600 font-bold'>{errors.title.message}</small>}

         <p className='w-[90%] font-bold text-gray-700 text-[1rem]'>Image URL</p>
      <input type="url"
      {...register("image",{required:"Image url is required..."})}
      placeholder='Paste image url'
      className='w-[92%] bg-[#f0f2f5]  rounded-lg outline-0 p-3 placeholder:text-xs placeholder:text-gray-500 placeholder:font-light font-bold text-gray-800 text-xs' />
      {errors.image && <small className='w-[92%] text-red-600 font-bold'>{errors.image.message}</small>}
       
        <p className='w-[90%] font-bold text-gray-700 text-[1rem]'>Price</p>
      <input type="number"
      {...register("price",{required:"Price is required..."})}
      placeholder='00.00'
      className='w-[92%] bg-[#f0f2f5]  rounded-lg outline-0 p-3 placeholder:text-xs placeholder:text-gray-500 placeholder:font-light font-bold text-gray-800 text-xs' />
      {errors.price && <small className='w-[92%] text-red-600 font-bold'>{errors.price.message}</small>}

      <p className='w-[90%] font-bold text-gray-700 text-[1rem] '>Category</p>
      <input type="text"
      {...register("category",{required:"Category is required..."})}
      placeholder='Enter product category'
      className='w-[92%] bg-[#f0f2f5]  rounded-lg outline-0 p-3 placeholder:text-xs placeholder:text-gray-500 placeholder:font-light font-bold text-gray-800 text-xs' />
      {errors.category && <small className='w-[92%] text-red-600 font-bold'>{errors.category.message}</small>}

       <p className='w-[90%] font-bold text-gray-700 text-[1rem]'>Product Description</p>
      <textarea
      {...register("description",{required:"Description is required..."})}
      placeholder='Enter description here'
      rows={10}
      className='w-[92%] bg-[#f0f2f5]  rounded-lg outline-0 p-3 placeholder:text-xs placeholder:text-gray-500 placeholder:font-light font-bold text-gray-800 text-xs' />
      {errors.description && <small className='w-[92%] text-red-600 font-bold'>{errors.description.message}</small>}

      <button className='px-4 py-2 text-xs w-[90%] bg-sky-500 rounded-xs active:scale-104  text-white font-black'>Create Product</button>



    </form>


  </div>
</div> 
  )
}

export default CreateProduct
