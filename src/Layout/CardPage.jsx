import React, { useState, useEffect } from 'react' // 1. Import hooks
import Card from '../components/Card'
// 2. Remove the static JSON import
// import imageData from '../data/Image_data.json' 

const CardPage = () => {

  // 3. Add state for products, loading, and errors
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 4. Add useEffect to fetch data on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Call the new backend endpoint
        const response = await fetch('http://localhost:3000/api/products/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiProducts(data); // Store the raw API data
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty array means this runs once

  // 5. Use your existing transformation logic, but use the data from state (apiProducts)
  //    and the correct property names from your Mongoose Schema
  const Products = apiProducts.map((item) => ({
    id: item.productId,  // Use 'productId' from your schema
    pathImage: item.imageUrl, // Use 'imageUrl' from your schema
    title: item.name,      // Use 'name' from your schema
    description: item.description,
    price: item.price,
  }));

  // 6. Add loading and error handling
  if (loading) {
    return <div className="p-10 text-center text-lg">Loading products...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className='border-y pb-20'>
        <h1 className='gradient-title text-4xl font-extrabold sm:text-4xl lg:text-6xl tracking-tight py-10'>Top Ranking</h1>
        <div className='flex flex-wrap gap-10 justify-between'>
          {
            // 7. This part now works with the data from your database
            Products.map((p) => <Card key={p.id} product={p} />)
          }
        </div>
    </div>
  )
}

export default CardPage
