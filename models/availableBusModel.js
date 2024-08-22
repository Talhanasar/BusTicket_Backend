const mongoose = require("mongoose");

const availableSchema = new mongoose.Schema({
    busName:{
        type: String,
        required: true
    },
    busWay:{
        type: String,
        required: true
    },
    departureDate:{
        type: String,
        required: true
    },
    timeRequired:{
        type: String,
    },
    departureTime:{
        type: String,
        required: true
    },
    ticketPrice:{
        type: Number,
        required: true
    },
    ticketID:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookedTicket"
    }]
})

module.exports = mongoose.model("availableBus",availableSchema);