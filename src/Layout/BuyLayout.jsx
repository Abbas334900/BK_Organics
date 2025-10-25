import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel"
import React, { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const BuyLayout = () => {

    const [display, setDisplay] = useState(true)
    const [selectedQuantity, setSelectedQuantity] = React.useState(1);
    const quantities = [1, 2, 3, 5, 10]; // Example quantities

    const location = useLocation()
    const navigate = useNavigate()
    const product = location.state?.product

    const handleCancel = (e) => {
        if (e.target === e.currentTarget) {
            setDisplay(false)
            navigate('/products')
        }
    }



    return (
        <>
            {
                display && <div className="fixed inset-0 z-20 bg-black/30 backdrop-blur-xl flex items-center justify-center p-4" onClick={handleCancel}>

                    {/* --- 2. Centered Content Card --- */}
                    {/* This is the white card with the product info */}
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">

                        {/* --- 3. Left Side (Image & Quantity) --- */}
                        <div className="flex flex-col">
                            {/* Image */}
                            <div className="h-64 md:h-full w-full">
                                <img
                                    src={product?.pathImage ? product.pathImage.replace(/^public\//, '/') : '/pic3.png'}
                                    alt={product?.title ?? 'Product'}
                                    className="w-full h-full object-cover"
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
                                                {/* This is the clickable quantity "button" */}
                                                <div
                                                    onClick={() => setSelectedQuantity(quantity)}
                                                    className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-200 font-medium
                                                  ${selectedQuantity === quantity
                                                            ? 'bg-green-600 text-white shadow-lg scale-110' // Selected style
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Default style
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
                                Price: <span className="text-green-600">{product?.price ?? '$0.00'}</span>
                            </h3>

                            {/* Radio Button */}
                            <div className="mb-10">
                                <h1 className="text-2xl mb-3 text-gray-900 font-extrabold">Select Payment Method</h1>
                                <RadioGroup defaultValue="comfortable">
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="default" id="r1" />
                                        <Label className="text-xl">Easy Paisa</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        <Label className="text-xl">Jazz Cash</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem value="compact" id="r3" />
                                        <Label className="text-xl">Cash on Delivery</Label>
                                    </div>
                                </RadioGroup>
                            </div>




                            {/* Button Container */}
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <Button variant="destructive" className="flex-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg py-7 flex items-center justify-center gap-2">
                                    <ShoppingBag className="w-10 h-10" />
                                    <span>Buy Now</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default BuyLayout