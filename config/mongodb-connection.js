const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGODB_URI)
.then()
.catch(err=>{
    console.log(err.message);
})

module.exports = connection;