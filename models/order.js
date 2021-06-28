const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    transactionId: {},
    amount: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    updated: {
        type: Date,
        required:true,
    },
    user: {
        type: ObjectId,
        ref:"User",
        required:true,
    }
},
    { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);