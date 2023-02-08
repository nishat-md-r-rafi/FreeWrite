const router = require('mongoose').Router();
const User = require('./../models/User');
const mongoose = require('mongoose');

// REGISTER
router.get('/register', async (req, res) => {
    try {
        const newUser = User(req.body);
        await newUser.save()
    } catch(err){
        console.log(err);
    }
})

// LOGIN