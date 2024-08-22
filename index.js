const express = require('express');
const app = express();
require("dotenv").config();
require("./config/mongodb-connection");
const availableRoute = require("./routes/availableRoute");
const bookedRoute = require("./routes/bookedRoute");
const cors = require("cors");
const checkKey = require("./middleware/check");
const checkAvailable = require("./middleware/check");

app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded request bodies
app.use(cors());

app.use('/api/:key/availablebus',checkKey,checkAvailable, availableRoute);
app.use('/api/:key/bookedTicket',checkKey, bookedRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
