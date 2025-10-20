import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag, ShoppingCart } from 'lucide-react'

const Card = () => {
  return (
    <div className='max-w-sm rounded-lg pb-10 overflow-hidden shadow-lg bg-white transition-transform duration-900 hover:shadow-xl hover:border-1 hover:border-cyan-700'>
      
      <img src="/pic2.png" alt="Organic Honey Product" className='w-full h-64 object-cover'/>

      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2 text-gray-800'>Organic Honey</h2>
        <p className='text-gray-600 text-base'>
          Pure, raw, and unfiltered honey sourced from local wildflower fields.
        </p>
        <h2 className='font-semibold text-lg text-gray-900 mt-4'>
          Price: $30.00
        </h2>
      </div>

      <div className='flex justify-between px-6'>
        <Button variant="destructive" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1/12">
            <span>Buy</span>
            <ShoppingBag />
        </Button>
        <Button variant="outline" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1/12">
            <span>Add to Cart</span>
            <ShoppingCart />
        </Button>
      </div>
    </div> 
  )
}

export default Card