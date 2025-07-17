import React from 'react'

const ProductCard = (props) => {
   let product = props.product
  return (
    <div key={product.id} 
    className='w-[48%] h-[28vh] mb-3 mx-0.5 pb-2 box-border bg-white flex flex-col shadow-2xl rounded-xl
    lg:w-[20vw] lg:h-[50vh] lg:pb-0 lg:mb-4'>
        <img 
        src={product.image} alt="" 
        className='w-full h-1/2 object-cover rounded-t-xl lg:h-4/6 '/>
        
        <div className="details w-full h-1/2 flex flex-col p-2 gap-1 justify-between items-start lg:h-2/6">

                <div className="flex flex-col gap-1">
            <h2 className='text-2xs font-bold text-gray-900 '>{product.title}</h2>
              <p className='text-xs text-gray-600'>{product.description.substring(0,30)}....</p>
                </div>

              <div className=" w-full p-1 mainDetail flex justify-between">
                <p className='text-blue-600 font-bold  text-2xs'>{product.price}</p>
                <button className='p-1 px-2 bg-blue-600 text-xs text-white rounded-xs active:scale-95'>Add to cart</button>
              </div>
        </div>
      

    </div>
  )
}

export default ProductCard
