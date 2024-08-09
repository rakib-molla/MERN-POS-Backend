const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true , },
    verified: { type: Boolean, required: false },
}, { timestamps: true });

// Create the User model
const usersModel = mongoose.model('User', userSchema);

module.exports = usersModel;



