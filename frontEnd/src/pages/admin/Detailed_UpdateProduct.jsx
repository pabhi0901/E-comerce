import React, { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import image1 from "../../utils/createProducts.jpg"
import { asyncdeleteProducts, asyncupdateProducts } from '../../store/actions/ProductActions';


const Detailed_UpdateProduct = () => {
const dispatch =  useDispatch()
    const [selectedBoxId, setSelectedBoxId] = useState(null);
  const handleBoxClick = (id) => {
    setSelectedBoxId(id);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with 'smooth' behavior for a nice animation
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

    const {id} = useParams()
    //getting all prodcuts through database
    const Allproducts = useSelector((state)=>state.productReducer.products)
    const user = useSelector((state)=>state.userReducer.users)
    console.log(user);
    
    //filtering that one product of which detailed to be shown
    let product = Allproducts.filter((product)=>{return product.id===id})
    product = product[0]
    
    const navigate =  useNavigate()
    let {register,reset,handleSubmit,formState:{errors}} = useForm({
      defaultValues:{
        title:product?.title,
        image:product?.image,
        price:product?.price,
        category:product?.category,
        description:product?.description
      }
    })
    
    const UpdateProduct = (product)=>{
        dispatch(asyncupdateProducts(id,product))
        reset()
    }

     const DeleteProduct = ()=>{
        dispatch(asyncdeleteProducts(id))
        navigate("/product")
    }
    
    return (
      //!Parent for all the forms 
    <div className='flex flex-col w-screen min-h-screen mt-5'>
      
        <div className="titleBox w-full flex items-center justify-between lg:w-1/2 lg:items-end relative mx-4">
        <svg onClick={()=>{navigate(-1)}}
        className='w-[1.2rem] h-[2rem] active:scale-80 transition duration-200 ease-linear'
        fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 476.213 476.213" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg>
      </div>
      
        <div className="displayProduct h-screen w-screen p-2 flex flex-col lg:flex-row lg:w-4/5 m-auto">
            <img src={product.image} alt=""
            className='w-full h-[30vh] object-cover rounded-xs lg:w-[45%] lg:h-[85vh]'
            />

            <div className="details mt-2 p-2 flex flex-col gap-4 lg:px-8 lg:py-0 lg:gap-8">
                <h1 className='text-gray-900 font-bold text-3xl lg:text-5xl'>{product.title}</h1>
                <h1 className='text-gray-900 font-bold text-xl lg:text-2xl'>${product.price}</h1>
                <p className='text-gray-900 font-medium text-xs lg:text-lg'>({product.category})</p>
                <p className='text-gray-900 font-medium text-xs lg:text-lg'>{product.description}</p>
                <p className='text-gray-900 font-medium text-xs lg:text-lg'>Color</p>
                <div className="colorBox flex lg:mt-[-1rem] gap-2 w-1/4">
                  <div onClick={()=>{handleBoxClick(1)}}
                  className={1==selectedBoxId?" w-1/4 border-2 border-black red p-4 lg:p-6 bg-gray-800 rounded-full":" p-4 lg:p-6 bg-gray-800 rounded-full"}></div>

                  <div onClick={()=>{handleBoxClick(2)}}
                  className={2==selectedBoxId?" w-1/4 border-2 border-black red p-4 lg:p-6 bg-blue-600 rounded-full":"red p-4 lg:p-6 bg-blue-600 rounded-full"}></div>

                  <div onClick={()=>{handleBoxClick(3)}}
                  className={3==selectedBoxId?" w-1/4 border-2 border-black red p-4 lg:p-6 bg-purple-600 rounded-full":"red p-4 lg:p-6 bg-purple-600 rounded-full"}></div>

                  <div onClick={()=>{handleBoxClick(4)}}
                  className={4==selectedBoxId?" w-1/4 border-2 border-black red p-4 lg:p-6 bg-amber-600 rounded-full":"red p-4 lg:p-6 bg-amber-600 rounded-full"}></div>

                </div>

                <div className="addAndBuy w-full flex flex-row gap-3 mt-4">
                    <button className='w-[25%] p-1 bg-green-400 text-white text-lg active:scale-95'>Buy Now</button>
                    <button className='w-[30%] p-1 bg-sky-400 text-white text-lg active:scale-95'>Add to Cart</button>
                </div>
                {user?.isAdmin ?  <div className="adminOptions  w-full flex flex-row gap-3 mt-4 lg:mt-0">
                    <button className=' lg:w-[25%] px-4 py-0 lg:p-2 bg-yellow-400 text-white text-lg active:scale-95'><a href="#editForm"
                    onClick={(e)=>{
                        e.preventDefault();
                        scrollToSection('editForm'); 
                    }}  >Edit Product</a></button>
                    <button onClick={()=>{DeleteProduct()}} 
                    className=' lg:w-[30%]  px-4 py-1 lg:p-2 bg-red-600 text-white text-lg active:scale-95'>Delete Product</button>
                </div>  :<></>}
               
            </div>
        </div>

      {user?.isAdmin ?   <div
          id='editForm'
          className="min-h-screen  w-full flex justify-center items-center lg:items-center overflow-x-hidden"
        >
        
          <div className="parentBox w-4/5 mb-4 lg:w-[80%] lg:mt-10 rounded-xl bg-white lg:flex lg:flex-row ">
            
               <img src={image1}
            className="formImg hidden lg:block lg:w-[40%]  object-center rounded-l-xl"></img>
         
        
            <form onSubmit={handleSubmit(UpdateProduct)}
            className='flex flex-col gap-3 p-3 justify-center items-center  lg:p-5 lg:w-[60%] lg:h-auto'>
                
              <div className="titleBox w-full flex items-center justify-between">
                <svg 
                onClick={()=>{navigate("/home")}}
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
        </div>:<></>} 


    </div>
  )
}

export default Detailed_UpdateProduct
