import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        discription:{
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        productImage: {
            
        }
    }, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)