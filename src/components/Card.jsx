import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Card = ({ product }) => {
  const navigate = useNavigate();

  const title = product?.title ?? 'Organic Honey'
  const description = product?.description ?? 'Pure, raw, and unfiltered product sourced from local fields.'
  const price = product?.price ?? '$30.00'
  const imgSrc = product?.pathImage ? product.pathImage.replace(/^public\//, '/') : '/pic2.png'

  return (
    <div className='w-100 h-130 relative rounded-lg pb-10 overflow-hidden shadow-lg bg-white transition-transform duration-900 hover:shadow-xl hover:border-1 hover:border-cyan-700'>
      
      <img src={imgSrc} alt={title} className='w-full h-64 object-cover'/>

      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2 text-gray-800'>{title}</h2>
        <p className='text-gray-600 text-base'>
          {description}
        </p>
        <h2 className='font-semibold text-lg text-gray-900 mt-4'>
          Price: {price}
        </h2>
      </div>

      <div className='absolute bottom-10 px-6'>
        <Button onClick={() => navigate('/buy', { state: { product } })} variant="destructive" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1/12">
            <span>Buy</span>
            <ShoppingBag />
        </Button>
      </div>
    </div> 
  )
}

export default Card