const express = require('express');
const router = express.Router();
const billModel = require('../models/billModel');

router.post('/create', async (req, res)=>{
   try {
      const newBill = new billModel(req.body);
      await newBill.save();
      return res.send(200).json({message:"Bill Create Successfully", newBill})
   } catch (error) {
      console.log(error)
   }
})

module.exports = router;