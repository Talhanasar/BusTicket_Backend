const express = require("express");
const router = express.Router();
const customerModel = require("../models/customerModel");
const availableModel = require("../models/availableBusModel");
const couponModel = require("../models/discountCouponModel");
const validate = require("../middleware/validate-middleware");
const seatBookingSchema = require("../validator/customerValidator");

router.get("/:busId",async (req,res)=>{
    try{
        const data = await customerModel.find({busId:req.params.busId});
        res.json(data);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

router.get("/", async (req,res)=>{
    try{
        const data = await customerModel.find();
        res.json(data);
    }catch(err){
        res.status(500).json({message:error.message})
    }
})
router.post("/",validate(seatBookingSchema),async (req,res)=>{
    try{
        let { busId, seatBooked, name, phone, email = "", couponUsed = null, totalMoney } = req.body;
        const customerData = {
            busId,
            seatBooked,
            name,
            phone,
            email,
            totalMoney
        };

        if (couponUsed) {
            customerData.couponUsed = couponUsed;
        }

        const created = await customerModel.create(customerData);
        await availableModel.findByIdAndUpdate(
            busId,
            {
                $push: { ticketId: created._id },
                $inc: { seatsAvailable: -seatBooked.length }
            }
        );
        if(couponUsed){
            await couponModel.findByIdAndUpdate(
                couponUsed,
                {
                    $push:{usedBy: created._id},
                    $inc:{usageLimit: -1}
                }
            )
        }
        res.status(201).json({message:"Booking done Successfully!"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports = router;