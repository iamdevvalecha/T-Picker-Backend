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
      required: true,
      maxlength: 32,
      trim: true
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    stock: {
      type: Number
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
    { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
