import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';

const Products = () => {

    const products = useSelector((state)=>state.productReducer.products)
    let productComponent = products.map((product)=>{
     return <ProductCard product = {product} />
    })
    console.log(productComponent);
    

  return (
    <div className='min-h-screen w-full flex flex-row gap-1 mt-8 flex-wrap items-center justify-between lg:justify-around lg:gap-0 '>
      {productComponent ? productComponent : <h1>Loading...</h1>}
    </div>
  )
}

export default Products
