const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   customerName: {type: String, require: true},
   phoneNumber: {type: String, require: true},
   totalAmount: {type: Number, require: true},
   tax: {type: Number, require: true},
   subTotal: {type: Number, require: true},
   paymentMethod: {type: Number, require: true},
   cartItems: {type: Array, require: true},
}, {timestamps: true})

const billModel = mongoose.model('bills',billSchema);

module.exports = billModel;