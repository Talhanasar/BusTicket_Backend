const express = require("express");
const router = express.Router();
const couponModel = require("../models/discountCouponModel");

router.route("/")
.get(async (req, res)=>{
    try {
        const data = await couponModel.find();
        res.json(data);
    } catch(err) {
        res.status(500).json({msg:err.message});
    }
})
.post(async (req,res)=>{
    const {
        code,
        discountPercentage,
        expirationDate,
        minPurchaseAmount,
        usageLimit,
        isActive,
        usedBy
    } = req.body;
    try {
        const get = await couponModel.findOne({code});
        if(get){
            res.status(400).json({msg:"Coupon already exists"});
        }
        await couponModel.create({
            code,
            discountPercentage,
            expirationDate,
            minPurchaseAmount,
            usageLimit,
            isActive,
            usedBy
        });
        res.status(201).json({msg:"Coupon created successfully"});
    } catch(err) {
        res.status(500).json({msg:err.message})
    }
})

module.exports = router;