import { Button } from '@/components/ui/button';
import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const products = [
  {
    "id": 104,
    "title": "Gourmet Coffee Beans",
    "description": "Single-origin Arabica beans, medium roast. Ethically sourced.",
    "price": 18.20,
    "category": "Beverage",
  "imageUrl": "/pic7.png"
  },
  {
    "id": 105,
    "title": "Herbal Tea Selection",
    "description": "A curated box of 20 assorted organic herbal teas. Caffeine-free.",
    "price": 12.00,
    "category": "Beverage",
  "imageUrl": "/pic8.png"
  },
  {
    "id": 1,
    "title": "Organic Raw Honey",
    "description": "Pure, unfiltered honey sourced from local wildflower fields. Rich in antioxidants and natural enzymes.",
    "price": 30.00,
    "category": "Honey Products",
    "imageUrl": "/pic1.png"
  },
  {
    "id": 2,
    "title": "Cold-Pressed Olive Oil",
    "description": "Extra virgin olive oil made from organically grown olives. Perfect for cooking and dressing.",
    "price": 25.99,
    "category": "Oils",
    "imageUrl": "/pic2.png"
  },
  {
    "id": 3,
    "title": "Organic Coconut Oil",
    "description": "Virgin coconut oil extracted from fresh organic coconuts. Ideal for cooking and skincare.",
    "price": 28.50,
    "category": "Oils",
    "imageUrl": "/pic3.png"
  },
  {
    "id": 101,
    "title": "Organic Coconut Oil",
    "description": "Pure, cold-pressed virgin coconut oil. Ideal for cooking and skincare.",
    "price": 22.50,
    "category": "Oil",
    "imageUrl": "/pic4.png"
  },
  {
    "id": 102,
    "title": "Natural Honey",
    "description": "Unprocessed wildflower honey, harvested locally. Rich in antioxidants.",
    "price": 15.00,
    "category": "Sweetener",
    "imageUrl": "/pic5.png"
  },
  {
    "id": 103,
    "title": "Artisanal Sourdough",
    "description": "Baked fresh daily with organic whole wheat flour. No preservatives.",
    "price": 8.75,
    "category": "Bakery",
    "imageUrl": "/pic6.png"
  }
];

// Renamed component to match the content
const TopRanking_DashBoared = () => {
  return (
    // 1. Removed wrapper div. This component will be rendered in
    //    the <Outlet /> of your main Dashboard, which already has padding.
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Top Ranking Dashboard</h2>
      
      {/* 2. Container for shadow, rounded corners, and overflow handling */}
      <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            
            {/* 3. Cleaned-up Table Head */}
            <thead className="bg-gray-50">
              <tr>
                {/* 4. Re-ordered columns for better UX (Image first) */}
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>

            {/* 5. Cleaned-up Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {/* 6. Fixed map variable: (products) -> (product) */}
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  
                  {/* Image */}
                  <td className="px-6 py-4">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded-md" // Slightly smaller
                    />
                  </td>

                  {/* Title */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.title}
                  </td>

                  {/* ID */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.id}
                  </td>

                  {/* Category (with a badge for style) */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </td>
                  
                  {/* Price (right-aligned) */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                    ${product.price.toFixed(2)}
                  </td>

                  {/* Description (wrapping enabled) */}
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                    {product.description}
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* 7. Fixed spacing and button styles */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>

                      <Button
                        variant="destructive"
                        size="icon"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// Exporting with the corrected name
export default TopRanking_DashBoared;