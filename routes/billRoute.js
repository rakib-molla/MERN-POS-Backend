const express = require('express');
const router = express.Router();
const billModel = require('../models/billModel');

router.post('/create', async (req, res) => {
   try {
      // Create a new bill instance using the data from the request body
      const newBill = new billModel(req.body);
      
      // Save the new bill to the database
      await newBill.save();
      
      // Respond with the newly created bill and a 201 status code
      return res.status(201).json(newBill);
   } catch (error) {
      // If there's an error, respond with a 500 status code and the error message
      return res.status(500).json({ error: error.message });
   }
});


router.get('/read', async (req, res) => {
   try {
      const bill = await billModel.find().populate("userId");

      if (bill.length === 0) {
         return res.status(200).json({ message: 'No Bill Found' });
      }
      return res.status(200).json(bill);
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
});


module.exports = router;