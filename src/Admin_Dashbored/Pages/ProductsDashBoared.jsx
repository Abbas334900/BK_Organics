import { Button } from '@/components/ui/button';
import React from 'react';

// 1. Varied product data
const products = [
  {
    "id": 1,
    "title": "Organic Raw Honey",
    "description": "Pure, unfiltered honey sourced from local wildflower fields. Rich in antioxidants and natural enzymes.",
    "price": 30.00,
    "category": "Honey Products",
    "pathImage": "public/pic1.png"
  },
  {
    "id": 2,
    "title": "Cold-Pressed Olive Oil",
    "description": "Extra virgin olive oil made from organically grown olives. Perfect for cooking and dressing.",
    "price": 25.99,
    "category": "Oils",
    "pathImage": "public/pic2.png"
  },
  {
    "id": 3,
    "title": "Organic Coconut Oil",
    "description": "Virgin coconut oil extracted from fresh organic coconuts. Ideal for cooking and skincare.",
    "price": 28.50,
    "category": "Oils",
    "pathImage": "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
  },
  {
    id: 101,
    title: 'Organic Coconut Oil',
    description: 'Pure, cold-pressed virgin coconut oil. Ideal for cooking and skincare.',
    price: 22.50,
    category: 'Oil',
    imageUrl: 'https://via.placeholder.com/80x80.png?text=Coconut+Oil', // Using placeholders
  },
  {
    id: 102,
    title: 'Natural Honey',
    description: 'Unprocessed wildflower honey, harvested locally. Rich in antioxidants.',
    price: 15.00,
    category: 'Sweetener',
    imageUrl: 'https://via.placeholder.com/80x80.png?text=Honey',
  },
  {
    id: 103,
    title: 'Artisanal Sourdough',
    description: 'Baked fresh daily with organic whole wheat flour. No preservatives.',
    price: 8.75,
    category: 'Bakery',
    imageUrl: 'https://via.placeholder.com/80x80.png?text=Bread',
  },
  {
    id: 104,
    title: 'Gourmet Coffee Beans',
    description: 'Single-origin Arabica beans, medium roast. Ethically sourced.',
    price: 18.20,
    category: 'Beverage',
    imageUrl: 'https://via.placeholder.com/80x80.png?text=Coffee',
  },
  {
    id: 105,
    title: 'Herbal Tea Selection',
    description: 'A curated box of 20 assorted organic herbal teas. Caffeine-free.',
    price: 12.00,
    category: 'Beverage',
    imageUrl: 'https://via.placeholder.com/80x80.png?text=Tea',
  },
];

const ProductsDashBoared = () => {
  return (
    // 2. Added Tailwind CSS for a beautiful design
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products Dashboard</h1>

      {/* Responsive table wrapper */}
      <div className="shadow-lg rounded-lg overflow-hidden">
        {/* Use overflow-x-auto for horizontal scrolling on small screens */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-800 text-gray-100 uppercase text-sm tracking-wider">
              <tr>
                <th className="p-4 font-semibold">ID</th>
                <th className="p-4 font-semibold">Image</th>
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Description</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold text-right">Price</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* 3. Mapping over the varied data */}
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-gray-700 text-sm align-middle">{product.id}</td>
                  <td className="p-4 align-middle">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="p-4 text-gray-900 text-sm font-medium align-middle">{product.title}</td>
                  <td className="p-4 text-gray-700 text-sm max-w-xs align-middle">{product.description}</td>
                  <td className="p-4 text-gray-700 text-sm align-middle">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-4 text-gray-900 text-sm font-medium text-right align-middle">
                    ${product.price.toFixed(2)} {/* Price formatting */}
                  </td>
                  <td className="p-4 flex items-center gap-2   text-sm align-middle">
                    <Button variant="blue">Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsDashBoared;