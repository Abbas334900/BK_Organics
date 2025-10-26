import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import React, { useState } from 'react'
import { ShoppingBag, CheckCircle, ArrowLeft } from 'lucide-react'
// Re-added imports for useLocation and useNavigate
import { useLocation, useNavigate } from 'react-router-dom'

// The component no longer accepts 'product' or 'onClose' as props
const BuyLayout = () => {
    const [display, setDisplay] = useState(true)
    const [selectedQuantity, setSelectedQuantity] = React.useState(1);
    const [step, setStep] = useState('details'); // 'details', 'form', 'success'
    const [paymentMethod, setPaymentMethod] = useState('cod'); // Default 'Cash on Delivery'
    
    // Form state
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerContact, setCustomerContact] = useState('');

    // Loading and error state for submission
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const quantities = [1, 2, 3, 5, 10]; // Example quantities

    // Re-added useLocation and useNavigate hooks
    const location = useLocation();
    const navigate = useNavigate();
    // Product now comes from location.state
    const product = location.state?.product;

    // Main cancel/close function
    const handleCancel = (e) => {
        // Only close if clicking the backdrop
        if (e && e.target !== e.currentTarget) {
            return;
        }
        setDisplay(false);
        // Use navigate to go back to the products page
        navigate('/products');
    }

    // Handle the "Buy Now" button click to show the form
    const handleGoToForm = () => {
        setStep('form');
    }

    // Handle the "Back" button click from the form
    const handleBackToDetails = () => {
        setStep('details');
    }

    // Handle the final order submission
    const handleConfirmOrder = async (e) => {
        e.preventDefault(); // Stop form from reloading
        setLoading(true);
        setError(null);

        const orderData = {
            // Use product.id or product._id depending on your database
            productId: product?.id || product?._id, 
            productName: product?.title,
            quantity: selectedQuantity,
            price: product?.price,
            customerName,
            customerAddress,
            customerContact,
            paymentMethod,
        };

        try {
            // This URL comes from your app.js setup (api/orders + /place)
            const response = await fetch('http://localhost:3000/api/orders/place', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || 'Failed to place order.');
            }

            // If successful
            setLoading(false);
            setStep('success'); // Show success message

        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }
    
    // Render product details view
    const renderDetails = () => (
        <>
            {/* --- 3. Left Side (Image & Quantity) --- */}
            <div className="flex flex-col">
                {/* Image */}
                <div className="h-64 md:h-full w-full">
                    <img
                        src={product?.pathImage ? product.pathImage.replace(/^public\//, '/') : (product?.imageUrl || '/pic3.png')}
                        alt={product?.title ?? 'Product'}
                        className="w-full h-full object-cover"
                        // Added a placeholder in case the image fails
                        onError={(e) => { e.target.src = 'https://placehold.co/600x600/eee/ccc?text=Product'; }}
                    />
                </div>

                {/* Quantity Selector */}
                <div className="p-6 border-t md:border-t-0 md:border-r">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                        Select Quantity
                    </h2>
                    <Carousel className="w-full max-w-xs mx-auto" opts={{ align: "center" }}>
                        <CarouselContent className="-ml-2">
                            {quantities.map((quantity, index) => (
                                <CarouselItem key={index} className="pl-2 basis-1/4 md:basis-1/5">
                                    <div
                                        onClick={() => setSelectedQuantity(quantity)}
                                        className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-200 font-medium
                                        ${selectedQuantity === quantity
                                                ? 'bg-green-600 text-white shadow-lg scale-110'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }
                                    `}
                                    >
                                        {quantity}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            {/* --- 4. Right Side (Details & Buttons) --- */}
            <div className="p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    {product?.title ?? 'Product'}
                </h1>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    <span className="font-semibold text-gray-700">Description:</span> {product?.description ?? 'No description available.'}
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                    Price: <span className="text-green-600">${product?.price ? product.price.toFixed(2) : '0.00'}</span>
                </h3>

                {/* Payment Method */}
                <div className="mb-10">
                    <h1 className="text-2xl mb-3 text-gray-900 font-extrabold">Select Payment Method</h1>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="easypaisa" id="r1" />
                            <Label className="text-xl">Easy Paisa</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="jazzcash" id="r2" />
                            <Label className="text-xl">Jazz Cash</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="cod" id="r3" />
                            <Label className="text-xl">Cash on Delivery</Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Button Container */}
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button 
                        variant="destructive" 
                        className="flex-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg py-7 flex items-center justify-center gap-2"
                        onClick={handleGoToForm}
                    >
                        <ShoppingBag className="w-10 h-10" />
                        <span>Buy Now</span> 
                    </Button>
                </div>
            </div>
        </>
    );

    // Render the customer details form
    const renderForm = () => (
        <div className="p-8 flex flex-col justify-center col-span-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Confirm Your Details</h2>
            {error && <p className="mb-4 text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
            <form onSubmit={handleConfirmOrder} className="space-y-4">
                <div>
                    <Label htmlFor="customerName" className="text-lg font-medium">Full Name</Label>
                    <input
                        id="customerName"
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                 <div>
                    <Label htmlFor="customerContact" className="text-lg font-medium">Contact Number</Label>
                    <input
                        id="customerContact"
                        type="tel"
                        value={customerContact}
                        onChange={(e) => setCustomerContact(e.target.value)}
                        required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div>
                    <Label htmlFor="customerAddress" className="text-lg font-medium">Shipping Address</Label>
                    <textarea
                        id="customerAddress"
                        rows="3"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        required
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                {/* Button Container */}
                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                    <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1 text-lg py-6 flex items-center justify-center gap-2"
                        onClick={handleBackToDetails}
                    >
                        <ArrowLeft className="w-6 h-6" />
                        <span>Back</span>
                    </Button>
                    <Button 
                        type="submit"
                        variant="destructive" 
                        className="flex-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg py-6 flex items-center justify-center gap-2"
                        disabled={loading}
                    >
                        <ShoppingBag className="w-6 h-6" />
                        <span>{loading ? 'Placing Order...' : 'Confirm Order'}</span> 
                    </Button>
                </div>
            </form>
        </div>
    );

    // Render the success message
    const renderSuccess = () => (
        <div className="p-8 flex flex-col justify-center items-center col-span-full text-center">
             <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
             <p className="text-lg text-gray-600 mb-8">Thank you for your purchase. We will process your order shortly.</p>
             <Button 
                variant="destructive" 
                className="text-lg py-6 px-12"
                onClick={() => handleCancel(null)} // Pass null to bypass target check
            >
                Close
            </Button>
        </div>
    );

    // If no product is found (e.g., user navigates to /buy directly)
    if (!product) {
        return (
             <div className="fixed inset-0 z-20 bg-black/30 backdrop-blur-xl flex items-center justify-center p-4" onClick={handleCancel}>
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center" onClick={(e) => e.stopPropagation()}>
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
                    <p className="text-lg text-gray-700">No product data was found. Please select a product from the store.</p>
                     <Button 
                        variant="destructive" 
                        className="text-lg py-4 px-8 mt-6"
                        onClick={() => handleCancel(null)}
                    >
                        Close
                    </Button>
                </div>
             </div>
        )
    }

    return (
        <>
            {
                display && <div className="fixed inset-0 z-20 bg-black/30 backdrop-blur-xl flex items-center justify-center p-4" onClick={handleCancel}>

                    {/* --- 2. Centered Content Card --- */}
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {step === 'details' && renderDetails()}
                        {step === 'form' && renderForm()}
                        {step === 'success' && renderSuccess()}
                    </div>

                </div>
            }
        </>
    )
}

export default BuyLayout

