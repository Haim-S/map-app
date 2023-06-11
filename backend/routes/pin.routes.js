const router = require("express").Router();
const Pin = require("../models/Pin");


router.post("/create", async(req, res)=> {
    const newPin = new Pin(req.body)
    try {
       const savedPin = await newPin.save();
       res.status(200).json(savedPin);
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get("/all", async(req, res)=>{
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
