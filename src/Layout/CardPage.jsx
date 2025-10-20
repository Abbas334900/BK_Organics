import React from 'react'
import Card from '../components/Card'

const CardPage = () => {
  return (
    <div className='border-y pb-20'>
        <h1 className='gradient-title text-4xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight py-10'>Top Ranking</h1>
        <div className='flex flex-wrap gap-10 justify-between'>
        <Card />  
        <Card />  
        <Card />
        </div>
    </div>
  )
}

export default CardPage
