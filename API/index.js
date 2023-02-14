const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth = require('./routes/auth')

dotenv.config()
const app = express();
const PORT = 5000 || process.env.PORT



mongoose.connect(process.env.URL)
                    .then(()=>{console.log("MongoDB is connected")})
                    .catch((err) => {console.log(err)})


app.use('/api/auth', auth)
app.listen(PORT, ()=>{
    console.log('listening on port', PORT);
})