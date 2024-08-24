const express = require("express");
const router = express.Router();
const bookedModel = require("../models/bookedModel");
const availableModel = require("../models/availableBusModel");

router.get("/:busId",async (req,res)=>{
    try{
        const data = await bookedModel.find({busId:req.params.busId});
        res.json(data);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

router.get("/", async (req,res)=>{
    try{
        const data = await bookedModel.find();
        res.json(data);
    }catch(err){
        res.status(500).json({message:error.message})
    }
})
router.post("/",async (req,res)=>{
    try{
        let {busID,seatBooked,customerName,customerPhone} = req.body;
        const created = await bookedModel.create({
            busID,
            seatBooked,
            customerName,
            customerPhone,
        })
        await availableModel.findByIdAndUpdate(
            busID,
            {$push:{ticketID:created._id}},
        );
        res.status(201).json({message:"Booking done Successfully!"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports = router;