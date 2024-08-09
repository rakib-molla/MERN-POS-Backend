const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');

// Route to create a new user
router.post('/create', async (req, res) => {
    try {
        const { name, userId, password, } = req.body;
        
        // Check if userId already exists
        const existingUser = await User.findOne({ userId });
        if (existingUser) {
            return res.status(400).json({ error: 'User ID already exists' });
        }

        // Create a new user
        const newUser = new User({
            name,
            userId,
            password,
            verified: false
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// User login route
router.post('/login', async (req, res) => {
   try {
       const { userId, password } = req.body;

       // Check if the user exists
       const user = await User.findOne({ userId, password });
         if(user){
             res.status(200).json({ message: 'Login successful',  });
         }
       // Send response with user data and token
   } catch (error) {
       res.status(500).json({ error: 'Server error', details: error.message });
   }
});

// Route to get a list of all users
router.get('/list', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Route to get a specific user by userId
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

module.exports = router;
