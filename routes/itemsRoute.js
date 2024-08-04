const express = require('express');
const itemModel = require('../models/itemsModel');
const router = express.Router();

router.get('/get-all-items', async(req, res)=>{
   
   try {
      const items = await itemModel.find();
      res.send(items);
   } catch (error) {
      res.status(400).json(error);
   }
})

module.exports = router;