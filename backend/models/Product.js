import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  // For the "Unique ID" you requested, like a SKU
  productId: { 
    type: String,
    required: [true, "Product ID is required"],
    unique: true, // Ensures every product ID is unique
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Product Name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Product Description is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"], // Add validation
  },
  // For the "Imgur" link
  imageUrl: { 
    type: String,
    required: [true, "Image URL is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// The first argument 'Product' is the singular name of the collection
// Mongoose automatically looks for the plural, lowercased version 'products'
const Product = mongoose.model("Product", ProductSchema);

export default Product;
