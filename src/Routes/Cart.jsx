import React from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow"
          >
            <img
              src={item.pathImage}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="font-semibold mt-2">{item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Total: ${cartTotal.toFixed(2)}
        </h2>
        <Button
          onClick={() => {
            // Add checkout functionality here
            alert('Checkout functionality coming soon!');
          }}
          className="bg-green-600 hover:bg-green-700"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;