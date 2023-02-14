const router = require('mongoose').Router();
const User = require('./../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const generateAccessToken = (user) =>{
    return jwt.sign({id: user.id, isAdmin: user.isAdmin}, "mySecretKey", {expiresIn: "5s"});
}

const generateRefreshToken = (user) =>{
    return jwt.sign({id: user.id, isAdmin: user.isAdmin}, "RefreshToken")
}

// REGISTER
router.post('/register', async (req, res) => {
    // await User.insertOne(req.body)
    console.log(req.body)
})

// LOGIN
router.post('/login', async (req, res) => {
    const authHeader = req.headers.authorization
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        
        jwt.verify(token, "mySecretKey", (err, data)=>{
            if(err) {
                res.status(403).send("Token is not valid1")
            }

            else{
                req.user = data;
            }
        })
    } else {
        res.status(401).json("You are not authorized!!")
    }
})


// LOGOUT

// DELETE

module.exports = router;