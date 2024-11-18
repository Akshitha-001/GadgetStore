import { IndianRupee, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
//import React from 'react'

const ProductCard = () => {
  return (
<>
        <div className="relative flex w-[24%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-purple-300 to-purple-600">
                <img src={img} alt={name} className='h-full w-full object-cover' />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h5>
                <p className=" font-sans  leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center">
                    <IndianRupee className='h-5 w-6' /> {price}
                </p>
            </div>
            </div>
          </>  


  )
    
}

export default ProductCard