const mongoose = require('mongoose');

const bookedBusSchema = new mongoose.Schema({
    busID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'availableBus',
        required: true
    },
    seatBooked:{
        type: Array,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true
    },
    bookingDate: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    bookingTime: {
        type: String,
        default: new Date().toLocaleTimeString()
    }
})

module.exports = mongoose.model("bookedTicket",bookedBusSchema);