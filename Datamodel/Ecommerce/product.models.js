import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        discription: {
            type: String,
             required: true,

        },
        name: {
            type: String,
            required: true,

        },
        productimage: {
            type: String,
            required: true,

        },
        price: {
            type: Number,
            required: true,
            default: 0,

        },
        stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,

        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    }, { timestamps: true })


export const Product = mongoose.model("product", productSchema)