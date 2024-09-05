import mongoose from "mongoose";


const orderItmesSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,

    }
})

const orderSchema = new mongoose.Schema({

    orderprice: {
        type: Number,
        required: true


    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItmesSchema],


    },
    address: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING",

    }


}, {})




export const Order = mongoose.model('Order', orderSchema)