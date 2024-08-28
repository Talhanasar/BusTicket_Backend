const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    discountPercentage: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    minPurchaseAmount: {
        type: Number,
        default: 0
    },
    usageLimit: {
        type: Number,
        default: 1
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    usedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    }]
});

module.exports = mongoose.model('Coupon', couponSchema);
