const availableModel = require("../models/availableBusModel")
const checkKey = (req,res,next)=>{
    if(req.params.key !="talha346") {
        return res.status(500).json({
            error: "Invalid Key",
            message: "Access Denied"
        });
    }
    next();
}

module.exports = checkKey;

const checkAvailable = async (req,res,next)=>{
    let {busName,departureDate,departureTime} = req.body;
    const data = await availableModel.findOne({busName,departureDate,departureTime});
    if(data){
        return res.status(500).json({message:"Bus has scheduled before"});
    }
    next();
}
module.exports = checkAvailable;