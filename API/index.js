const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()
const app = express();
const PORT = 5000 || process.env.PORT



mongoose.connect(process.env.URL)
                    .then(()=>{console.log("MongoDB is connected")})
                    .catch((err) => {console.log(err)})

app.listen(PORT, ()=>{
    console.log('listening on port', PORT);
})