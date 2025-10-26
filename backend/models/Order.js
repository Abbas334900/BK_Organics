import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, "Product ID is required"],
  },
  productName: {
    type: String,
    required: [true, "Product Name is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: 1,
  },
  price: {
    type: Number, // This should be the unit price at the time of purchase
    required: [true, "Price is required"],
  },
  customerName: {
    type: String,
    required: [true, "Customer Name is required"],
    trim: true,
  },
  customerAddress: {
    type: String,
    required: [true, "Customer Address is required"],
    trim: true,
  },
  customerContact: {
    type: String,
    required: [true, "Customer Contact is required"],
    trim: true,
  },
  paymentMethod: {
    type: String,
    required: [true, "Payment Method is required"],
    enum: ['easypaisa', 'jazzcash', 'cod'], // Ensures only valid methods are stored
  },
  orderStatus: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
});

// You could add a virtual for totalPrice
OrderSchema.virtual('totalPrice').get(function() {
  return this.price * this.quantity;
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
