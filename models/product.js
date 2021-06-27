const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        unique:true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        unique:true,
    },
    price: {
        type: Number,
        required:true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32,
        unique: true,
    },
    stock: {
        type: Number,
        required:true,
    },
    sold: {
        type: Number,
    },
    photo: {
        type:String,
        required: true,
    },
},
    { timestamps: true });

module.exports = mongoose.model("Product", productSchema);