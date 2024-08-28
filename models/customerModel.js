const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'availableBus', // Ensure this matches the model name registered above
        required: true
    },
    seatBooked: {
        type: [String],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    couponUsed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon"
    },
    totalMoney:{
        type: String,
        required:true
    },
    bookingDate: {
        type: String,
        default: () => new Date().toISOString().split('T')[0] // YYYY-MM-DD
    },
    bookingTime: {
        type: String,
        default: () => new Date().toISOString().split('T')[1].split('.')[0] // HH:MM:SS
    }
});

module.exports = mongoose.model("Customer", customerSchema);