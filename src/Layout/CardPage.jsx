import React from 'react'
import Card from '../components/Card'
import imageData from '../data/Image_data.json'

const CardPage = () => {

  const Products = imageData.map((item) => ({
    id: item.Id,
    pathImage: item.pathImage,
    title: item.title,
    description: item.description,
    price: item.price,
  }))

  return (
    <div className='border-y pb-20'>
        <h1 className='gradient-title text-4xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight py-10'>Top Ranking</h1>
        <div className='flex flex-wrap gap-10 justify-between'>
          {
            Products.map((p) => <Card key={p.id} product={p} />)
          }
        </div>
    </div>
  )
}

export default CardPage
