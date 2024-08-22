const express = require("express");
const router = express.Router();
const availableModel = require("../models/availableBusModel");

function capitalizeWords(str) {
    return str
        .split('-') // Split the string by hyphens
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
        .join('-'); // Join the words back with hyphens
}

// GET route to fetch available buses based on way and date
router.get("/:details", async (req, res) => {
    try {
        const busWay = capitalizeWords(req.params.details.split(" ")[0]);
        const departureDate = req.params.details.split(" ")[1];
        console.log(busWay);
        console.log(departureDate);
        const data = await availableModel.find({
            busWay,
            departureDate
        });
        res.status(200).send(data);
    } catch (error) {
        console.error("Error fetching buses:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});
router.post("/", async (req, res) => {
    try {
        const {busName,busWay,departureDate,departureTime,timeRequired,ticketPrice} = req.body;
        await availableModel.create({
            busName,
            busWay,
            departureDate,
            departureTime,
            timeRequired,
            ticketPrice
        })
        res.status(200).json({ message: "Data received successfully" });
    } catch (error) {
        console.error("Error creating bus entry:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;
