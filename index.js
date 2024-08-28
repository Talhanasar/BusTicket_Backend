const express = require('express');
const app = express();
const path = require("path");
require("dotenv").config();
const connectdb = require("./config/mongodb-connection");
const availableRoute = require("./routes/availableRoute");
const customerRoute = require("./routes/customerRoute");
const cors = require("cors");
const checkKey = require("./middleware/check");
const checkAvailable = require("./middleware/check");
const couponRoute = require("./routes/couponRoute");
const errorMiddleware = require('./middleware/error-middleware');

app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded request bodies
app.use(cors());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use('/api/:key/availablebus',checkKey,checkAvailable, availableRoute);
app.use('/api/:key/bookedTicket',checkKey, customerRoute);
app.use('/api/:key/coupon',checkKey, couponRoute);

app.get("*",(req,res)=>{
    res.render("error");
});

app.use(errorMiddleware);

connectdb().then(()=>{
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
