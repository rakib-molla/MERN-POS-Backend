const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
   name: { type: String, require: true},
   price: { type: Number, require: true},
   image: { type: String, require: true},
   category: { type: String, require: true},
   createdAt: { type: Date, default: Date.now}
})

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;