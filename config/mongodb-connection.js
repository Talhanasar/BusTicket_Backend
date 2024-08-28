const mongoose = require("mongoose");

const connection =async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection successful to DB");
        
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports = connection;